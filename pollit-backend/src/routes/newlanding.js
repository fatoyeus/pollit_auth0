let   express		   =		require('express'),
	   router		   =		express.Router();
const connect	      =		require('../lib/connect')
const polls_micros 	= 		process.env.POLLS_MICROS 
const blogs_micros 	= 		process.env.BLOGS_MICROS



//poll routes 
router.get('/landingblog/list/:uid', (req, res)=>{ 
   connect(req._parsedUrl.pathname, res, blogs_micros)
})
router.get('/landingblog/view/:blogid', (req, res)=>{
   connect(req._parsedUrl.pathname, res, blogs_micros)
})
router.get('/landingblogs', (req, res)=>{	
   connect(req._parsedUrl.pathname, res, blogs_micros)
}) 
router.get('/landingpolls', (req, res)=>{
   connect(req._parsedUrl.pathname, res, polls_micros)
})
router.get('/landingpolls/governorshipcount', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros)
})
router.get('/landingpolls/houseofrepcount', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros)
})
router.get('/landingpolls/localgovtcount', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros)
})
router.get('/landingpolls/pollcount', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros)
})
router.get('/landingpolls/senatecount', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros)
})
router.get('/landingpolls/staterepcount', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros)
})
router.get('/landingreports/polls/partydist', (req, res)=>{
   connect(req._parsedUrl.pathname, res, polls_micros)
})

module.exports = router;

