let express			 			=		require('express'),
	router			 			=		express.Router(),
	Party 			 			=		require('../models/party');
	




//candidate routes
//create and update candidate profile
router.post('/party/create', (req, res)=>{
	Party.create(req.body).then((newParty)=>{
		res.send(newParty)
	})
})
router.post('/party/delete', (req, res)=>{
	Party.findOneAndRemove(req.body.PartyId, (updPErr, updP)=>{
		if(updPErr){
			res.sendStatus(404)
		}
		if(updP){
			res.sendStatus(200)
		}
	})
})
router.get('/parties/list', (req, res)=>{
	Party.find({}, (fpartyerr, fparty)=>{
		res.send(fparty)
	})
})
router.get('/partycount', (req, res)=>{
	Party.find().estimatedDocumentCount((err, count)=>{
		res.send({partycount:count})
	})
})



module.exports		=		router;