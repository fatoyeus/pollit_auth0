let 		express			=		require('express'),
			router			=		express.Router();
const  connect				=		require('../lib/connect');
const  demography_micros 	= 		process.env.DEMOGRAPHY_MICROS 


router.get('/constituent/sr/:localgovtid', (req, res)=>{
	connect(req._parsedUrl.pathname, res, demography_micros)
})
router.get('/governorship/sr/:stateid', (req, res)=>{
	connect(req._parsedUrl.pathname, res, demography_micros)
})
router.get('/houseofrep/sr/:stateid', (req, res)=>{
	connect(req._parsedUrl.pathname, res, demography_micros)
})
router.get('/localgovt/sr/:id', (req, res)=>{
	connect(req._parsedUrl.pathname, res, demography_micros)
})
router.get('/senate/sr/:stateid', (req, res)=>{
	connect(req._parsedUrl.pathname, res, demography_micros)
})
router.get('/staterep/sr/:stateid', (req, res)=>{
	connect(req._parsedUrl.pathname, res, demography_micros)
})
router.get('/states', (req, res)=>{
	connect(req._parsedUrl.pathname, res, demography_micros)
})
module.exports = router;