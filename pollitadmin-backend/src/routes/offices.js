let 		express			=		require('express'),
			router			=		express.Router();
const connectPollit         = 		require('../lib/connectpb');
	


router.get('/constituent/sr/:localgovtid', (req, res)=>{
	    connectPollit(req._parsedUrl.pathname, res)
})
router.get('/governorship/sr/:stateid', (req, res)=>{
	connectPollit(req._parsedUrl.pathname, res)
})
router.get('/houseofrep/sr/:stateid', (req, res)=>{
	connectPollit(req._parsedUrl.pathname, res)
})
router.get('/localgovt/sr/:id', (req, res)=>{
	connectPollit(req._parsedUrl.pathname, res)
})
router.get('/senate/sr/:stateid', (req, res)=>{
		connectPollit(req._parsedUrl.pathname, res)
})
router.get('/staterep/sr/:stateid', (req, res)=>{
		connectPollit(req._parsedUrl.pathname, res)
})
router.get('/states', (req, res)=>{
		connectPollit(req._parsedUrl.pathname, res)
})
module.exports = router;