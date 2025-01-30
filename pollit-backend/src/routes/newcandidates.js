let express				=		require('express'),
	router				=		express.Router();
const connect			=		require('../lib/connect');
const account_micros 	= 		process.env.ACCOUNTS_MICROS 
	


//candidate routes
//create and update candidate profile
router.get('/candidate/:uid', (req, res)=>{
	connect(req._parsedUrl.pathname, res, account_micros) 
})
router.post('/candidate/create', (req, res)=>{
	connect(req._parsedUrl.pathname, res, account_micros, req.body)										
})
router.get('/candidates/list', (req, res)=>{
	connect(req._parsedUrl.pathname, res, account_micros)
})
router.post('/candidate/verify', (req, res)=>{
	connect(req._parsedUrl.pathname, res, account_micros, req.body)	
})
router.get('/test', (req, res)=>{
	connect(req._parsedUrl.pathname, res, account_micros)
})
module.exports		=		router;