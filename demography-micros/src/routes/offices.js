let express			=		require('express'),
	router			=		express.Router(),
	Houseofrep		= 		require('../models/houseofrep'),
	Localgovt		= 		require('../models/localgovt'),
	Senate          = 		require('../models/senate'),
	State			= 		require('../models/state'),
	Staterep    	= 		require('../models/staterep');
 
	



router.get('/constituent/sr/:localgovtid', (req, res)=>{
	Staterep.find({localGovtId: req.params.localgovtid}, 'name').exec((err, statereps)=>{
		if(err){
			console.log(err.message)
		}else{
			res.send(statereps)
		}
	})
})
router.get('/governorship/sr/:stateid', (req, res)=>{
	State.find({_id:req.params.stateid}, '-country').exec((err, states)=>{
	   if(err){
		   console.log(err.message)
	   }else{
		   res.send(states)
	   }
	})
})
router.get('/houseofrep/sr/:stateid', (req, res)=>{
	Houseofrep.find({stateId: req.params.stateid}, 'name').exec((err, houseofreps)=>{
	   if(err){
		   console.log(err.message)
	   }else{
		   res.send(houseofreps)
	   }
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
router.get('/senate/sr/:stateid', (req, res)=>{
	Senate.find({stateId: req.params.stateid}, 'name').exec((err, senates)=>{
	   if(err){
		   console.log(err.message)
	   }else{
		   res.send(senates)
	   }
	})
			   
			   
			   
})
router.get('/staterep/constituent/:id', (req, res)=>{
	Staterep.findById(req.params.id, '-name', (fsrerr, fsr)=>{
		if(fsrerr){
			res.sendStatus(404)
		}else{
			res.send(fsr)
		}
	})
})
router.get('/staterep/sr/:stateid', (req, res)=>{
	Staterep.find({stateId: req.params.stateid}, 'name').exec((err, senates)=>{
	   if(err){
		   console.log(err.message)
	   }else{
		   res.send(senates)
	   }
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

module.exports = router;