let express					=		require('express'),
	router					=		express.Router();
const connect				=		require('../lib/connect');
const  accounts_micros 		= 		process.env.ACCOUNTS_MICROS;

//admin dashboard routes
router.get('/usercount', (req, res)=>{
	connect(req._parsedUrl.pathname, res, accounts_micros)
})
router.get('/user/list', (req, res)=>{
	connect(req._parsedUrl.pathname, res, accounts_micros)
}) 
router.get('/user/profile/:uid', (req, res)=>{
	connect(req._parsedUrl.pathname, res, accounts_micros)
})
router.get('/user/respondentcount', (req, res)=>{
	connect(req._parsedUrl.pathname, res, accounts_micros)
})
router.post('/user/respondent/approve', (req, res)=>{
	connect(req._parsedUrl.pathname, res, accounts_micros, req.body)
})
router.get('/user/respondent/list', (req, res)=>{
	connect(req._parsedUrl.pathname, res, accounts_micros)
})
router.post('/user/respondent/suspend', (req, res)=>{
	connect(req._parsedUrl.pathname, res, accounts_micros, req.body)
})

module.exports		=		router;