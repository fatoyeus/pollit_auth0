let express			=		require('express'),
	router			=		express.Router(),
	Candidate		= 		require('../models/candidate'),
	User			= 		require('../models/user'),
	Country 		=		require('../models/country'),
	Localgovt		=		require('../models/localgovt'),
	Party 			= 		require('../models/party'),
	Poll			=		require('../models/poll'),
	Staterep    	= 		require('../models/staterep'),
	State		 	=		require('../models/state');
	

	



//user routes
//create user
//GET COUNT 
router.get('/usercount', (req, res)=>{
	User.find().estimatedDocumentCount((err,count)=>{
		res.send({count})
	})
})
router.get('/candcount', (req, res)=>{
	Candidate.find().estimatedDocumentCount((err, count)=>{
		res.send({count})
	})
})
router.get('/localgovt/sr/:id', (req, res)=>{
	Localgovt.find({stateId:req.params.id},'name').exec((err, localgovts)=>{
		if(err){
				console.log(err.message)
		}else{
				res.send(localgovts)
		}
	})
})
router.get('/partycount', (req, res)=>{
	Party.find().estimatedDocumentCount((err, count)=>{
		res.send({count})
	})
})
router.get('/states', (req, res)=>{
	res.set({
		'Cache-Control'		:	'no-cache'
	});	
	State.find({country:'6291edc9c03d37a0fc81e034'}, (err, states)=>{
	if(err){
		console.log(err.mes)
	}else{
		res.send(states)
	}
	})
})

router.get('/verifiedcandcount', (req, res)=>{
	Poll.find().estimatedDocumentCount((err, count)=>{
		res.send({count})
	})
}) 





module.exports		=		router;