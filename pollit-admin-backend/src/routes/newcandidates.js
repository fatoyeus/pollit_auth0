let express			 			=		require('express'),
	router			 			=		express.Router();
	const connect				=		require('../lib/connect');
	const accounts_micros 		= 		process.env.ACCOUNTS_MICROS 
	

//candidate routes
//create and update candidate profile
router.post('/candidate/create', (req, res)=>{
	connect(`${req._parsedUrl.pathname}?path=true`, res, accounts_micros, req.body);						
})
router.get('/candidates/candcount', (req, res)=>{
	console.log('candcount was called')
	connect(req._parsedUrl.pathname, res, accounts_micros)
})
router.get('/candidates/list', (req, res)=>{
	connect(req._parsedUrl.pathname, res, accounts_micros);
})
router.post('/candidate/verify', (req, res)=>{
	connect(req._parsedUrl.pathname, res, accounts_micros, req.body);	
})

module.exports		=		router;