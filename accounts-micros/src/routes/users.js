let express			=		require('express'),
	router			=		express.Router(),
	User			= 		require('../models/user');


//user routes 
//create user
router.get('/usercount', (req, res)=>{
	User.find().estimatedDocumentCount((err,count)=>{
		res.send({count})	
	})
})
router.post('/user/create', (req, res)=>{
	User.findOne({
					uid : req.body.uid
					},	(error, returnedUser)=>{
													if(!returnedUser){
														User.create(req.body).then((newUser)=>{
																						if(newUser){
																									res.send(newUser)
																									}
																								})
														}else{
																if(!returnedUser.verifiedEmail && req.body.verifiedEmail){
																	returnedUser.verifiedEmail = req.body.verifiedEmail
																	returnedUser.save()
																	res.send(returnedUser)
																}else{
																	res.send(returnedUser)
																}
															}
													})
})
router.get('/user/list', (req, res)=>{
	User.find({}, '_id firstName lastName nickname email profilecomplete respondent', (userErr, userList)=>{
		if(userList){
			res.send(userList)
		}
		if(userErr){
			res.sendStatus(404)
		}
	})
})
router.get('/user/profile/:uid', (req, res)=>{
	User.findById(req.params.uid, (userErr, user)=>{
		if(userErr){
			res.sendStatus(404)
		}else{
			res.send(user)
		}
	})
})
router.get('/user/respondentcount', (req, res)=>{
	User.countDocuments({respondent:"approved"}, (err, count)=>{
		res.send({count})
	})
})
router.post('/user/respondent/approve', (req, res)=>{
	User.findByIdAndUpdate(req.body.userid, {respondent:"approved"}, {new: true, runValidators:true}, (approveErr, updatedUser)=>{
		if(approveErr){
			res.sendStatus(403)
		}
		if(updatedUser){
			res.sendStatus(200)
		}
	})
})
router.get('/user/respondent/jobs/:uid', (req, res)=>{
	res.send([])
})
router.get('/user/respondent/list', (req, res)=>{
	User.find({respondent:"approved"}, '_id firstName lastName nickname email profilecomplete', (userErr, userList)=>{
		if(userList){
			res.send(userList)
		}
		if(userErr){
			res.sendStatus(404)
		}
	})
})
router.post('/user/respondent/suspend', (req, res)=>{
	User.findByIdAndUpdate(req.body.userid, {respondent:"suspended"}, {new: true, runValidators:true}, (suspendErr, updatedUser)=>{
		if(suspendErr){
			res.sendStatus(403)
		}
		if(updatedUser){
			res.sendStatus(200)
		}
	})
})
//update user
router.post('/user/update', (req, res)=>{
		User.findById(req.body._id).then((user)=>{
		if(!user.profilecomplete || (req.body.socialprofile && !user.socialprofile)){
			let updatefields  = {
									firstName: req.body.firstName,
									lastName: req.body.lastName,
									country: req.body.country,
									state: req.body.state,
									stateId: req.body.stateId,
									localGovt: req.body.localGovt,
									localGovtId: req.body.localGovtId,
									constituent: req.body.constituent,
									constituentId: req.body.constituentId,
									nin: req.body.nin,
									voteId: req.body.voteId,
									respondent: req.body.socialprofile ? 'requested': null,
									age: req.body.age,
									sex: req.body.sex,
									phone: req.body.phone,
									bank: req.body.bank,
									account: req.body.account,
									socialprofile: req.body.socialprofile,
									videolink: req.body.videolink,
									profilecomplete: true
								}
			User.findByIdAndUpdate(req.body._id, updatefields, { new: true, runValidators: true }, (error, updatedUser) => {
										if(updatedUser){
											res.send(updatedUser)
										}else if(error){
											res.send(404)
										}
									})
		}else{
			res.send(user)
		}
	})
})
router.post('/user/updatebank', (req, res)=>{
	console.log(req.body)
	let bankdetails = {
							bank: req.body.bank,
							account: req.body.account,
							respondentcomplete: true
						}
	User.findByIdAndUpdate(req.body._id, bankdetails, {new: true, runValidators: true}, (bankDErr, updatedUser) => {
							if(updatedUser){
								res.send(updatedUser)
							}else if(error){
								res.send(404)
							}
		})
})
router.post('/user/vote', (req, res)=>{
	User.findOne({uid:req.body.userId}, 'votedOffices').then(async (upduser) => {
		upduser.votedOffices[req.body.office] = req.body.candidateId
		upduser.markModified('votedOffices')
		let checkSave_2 = await upduser.save()
		upduser.unmarkModified('votedOffices')
		if(checkSave_2){
		  res.status(200).send({ status: 'OK'})
		}
	})
})
router.post('/user/withdrawvote', (req, res)=>{
	User.findOneAndUpdate({uid:req.body.userId},  {votedOffices: {
		presidential: null,
		senate: null,
		houseOfRep: null,
		governorship: null,
		stateRep: null,
		localGovt: null
	 }})
	.then(() => {
		res.status(200).send({ status: 'OK'});
		})
})
//get user
router.get('/user/:id', (req, res)=>{
	User.findOne({
						uid : req.params.id
				  }, (error, returnedUser)=>{
												if(returnedUser && returnedUser.uid){
														 res.send(returnedUser)
																 
												}else{			
															res.send({})
												}
					 })
	
});
module.exports		=		router;