let express			 			=		require('express'),
	router			 			=		express.Router(),
	Result 			 			=		require('../models/result');
	




//candidate routes
//create and update candidate profile
router.get('/resultcount', (req, res)=>{
	Result.find().estimatedDocumentCount((err, count)=>{
		res.send({resultcount:count})
	})
})
router.get('/results/presidential/x06PR0112pl', (req, res)=>{
	Result.find({officeId: 'x06PR0112pl'}, '_id', (err, id)=>{
		res.send(id)
	})
})



module.exports		=		router;