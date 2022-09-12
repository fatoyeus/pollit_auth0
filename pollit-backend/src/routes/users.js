let express			=		require('express'),
	router			=		express.Router(),
	Candidate		= 		require('../models/candidate'),
	User			= 		require('../models/user'),
	Country 		=		require('../models/country'),
	Localgovt		=		require('../models/localgovt'),
	Staterep    	= 		require('../models/staterep'),
	State		 	=		require('../models/state');

	



//user routes
//create user

router.get('/user/country', (req, res)=>{
	Country.find().populate(['states']).exec((err, foundcountry)=>{
		if(err){
			console.log(err)
		}else{
			Country.populate(foundcountry, [{path: 'states', model:'state'}], (eerr, popCountry)=>{
				res.send(popCountry)
			})
		}
	})
})
router.get('/user/:id', (req, res)=>{
	console.log(req.params.id)
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
router.get('/user/sr/:id', (req, res)=>{
	Staterep.find({stateId:req.params.id},'localGovtId').populate(['localGovtId']).exec((err, statereps)=>{
		if(err){
			console.log(err.message)
		}else{
			Staterep.populate(statereps, [{path: 'localGovtId', model:'localgovt'}], (serr, popstaterep)=>{
				res.send(popstaterep)
			})
		}
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
																res.send(returnedUser)
															}
													})
						})
//update user
router.post('/user/update', (req, res)=>{
		User.findById(req.body._id).then((user)=>{
		if(!user.profilecomplete){
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
//get user




module.exports		=		router;