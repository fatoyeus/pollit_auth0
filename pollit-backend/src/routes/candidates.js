let express			=		require('express'),
	router			=		express.Router(),
	Candidate		= 		require('../models/candidate'),
	office 			= 		require('../templates/offices/office'),
	Poll 			=		require('../models/poll'),
	Report 			=		require('../models/report'),
	User			=		require('../models/user');
	const{create}	=		require('xmlbuilder2');
	




//candidate routes
//create and update candidate profile
router.get('/candidate/:uid', (req, res)=>{
			Candidate.findOne({uid:req.params.uid}, '-poll -votes -inRace', (err2, cand)=>{
				if(err2){
					res.send(err.message)
				}else if(cand){
					res.send(cand)
				}
			})	
})
router.post('/candidate/create', (req, res)=>{
											if(!req.query.path){
														User.findById(req.body.uid, (error, returnedUser)=>{
																	if(error){
																		res.sendStatus(403)
																	}
																	if(returnedUser.candidate){
																		Candidate.findById(returnedUser.candidateId, (error2, fcandidate)=>{
																			if(error2){
																				res.send(error2.message)
																			}else{
																				res.send(fcandidate)
																			}
																		})
																	}else{
																			let newBody = req.body
																			newBody.firstName = returnedUser.firstName
																			newBody.lastName = returnedUser.lastName 
																			Candidate.create(newBody).then((newCandidate)=>{
																				returnedUser.candidate = true;
																				returnedUser.candidateId = newCandidate._id
																				returnedUser.save()											 
																				res.send(newCandidate)
																																})
																		}
																										})
										}else{
												Candidate.create(req.body).then((newCandidate)=>{	
																									res.send(newCandidate)
																							})
												}	
})
router.get('/candidates/list', (req, res)=>{
	Candidate.find({}, 'firstName lastName partyAbbv office state verified uid').exec((err, fcands)=>{
		if(err){
					res.send(err.message)
				}else{
						res.send(fcands)
					} 
		
	})
})
router.post('/candidate/verify', (req, res)=>{
	Candidate.findById(req.body.id, '-endorsement -selfservice', async (err, cand)=>{
								cand.verified = true
								cand.inRace = true
								let updcand = await cand.save()
								Poll.findOne({officeScopeId:cand.officeScopeId}, (err, fpoll)=>{
									if(!fpoll){
										let newPoll = new Object()
											newPoll.officeId		= updcand.officeId
											newPoll.office			= updcand.office
											newPoll.officeScopeId	= updcand.officeScopeId
											newPoll.officeScope 	= updcand.officeScope	 	
											Poll.create(newPoll).then((createdPoll)=>{
												createdPoll.candidates.push(updcand)
												createdPoll.save()
												cand.pollId = createdPoll._id
												cand.save()
												res.send({update: `verified ${updcand.firstName} ${updcand.lastName}`})
											})
									}else{
										fpoll.candidates.push(updcand)
										fpoll.save()
										cand.pollId = fpoll._id
										cand.save()
										res.send({update: `verified ${updcand.firstName} ${updcand.lastName}`})
									}
								})					
						})
					})
router.get('/test', (req, res)=>{
	Report.findOne({action:"verify"}, (err, fpoll)=>{
		if(!fpoll){
			res.send('not found')
		}
	})
})
module.exports		=		router;