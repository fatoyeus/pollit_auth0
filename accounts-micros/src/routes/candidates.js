let express					=		require('express'),
	router					=		express.Router(),
	actions 		 		=		require('../templates/reports/actions'),
	Candidate				= 		require('../models/candidate'),
	User					=		require('../models/user');
const sendReportMessage  	=		require('../lib/sendreportmessage');
const connectms				=		require('../lib/connectms');
const polls_micros          =		process.env.POLLS_MICROS 



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
router.get('/candidates/candcount', (req, res)=>{
	Candidate.find().estimatedDocumentCount((err, count)=>{
		res.send({candidatecount:count})
	})
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
	let vpack = req.body 
				vpack.action = actions['10001'].type
				sendReportMessage(req.app.locals.messageChannel, vpack)
	Candidate.findById(req.body.verifyId, '-endorsement -selfservice -votes', async (err, cand)=>{
								cand.verified = true
								cand.inRace = true
								let updcand = await cand.save()
								let candPoll                =  new Object()
									candPoll.officeId		=  updcand.officeId
									candPoll.office			=  updcand.office
									candPoll.officeScopeId	=  updcand.officeScopeId
									candPoll.officeScope 	=  updcand.officeScope
									candPoll.partyName 		=  updcand.partyName
									candPoll.partyAbbv		=	updcand.partyAbbv
									candPoll.pollId 		= 	updcand.pollId
									candPoll._id 			=	updcand._id
									candPoll.firstName 		= 	updcand.firstName
									candPoll.lastName		= 	updcand.lastName 
				 connectms('/polls/create', polls_micros, candPoll, function(data){
							cand.pollId = data
							cand.save()
							let upack = vpack
							upack.action = actions['20001'].type
							sendReportMessage(req.app.locals.messageChannel, upack)
							res.send({update: `verified ${updcand.firstName} ${updcand.lastName}`})
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