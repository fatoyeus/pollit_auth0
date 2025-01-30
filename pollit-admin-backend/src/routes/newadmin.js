let express					=		require('express'),
	router					=		express.Router();
const connect				=		require('../lib/connect');
const  accounts_micros 		= 		process.env.ACCOUNTS_MICROS 
const  demography_micros 	= 		process.env.DEMOGRAPHY_MICROS 
const  polls_micros 		= 		process.env.POLLS_MICROS 

//admin dashboard routes
router.get('/verifiedcandcount', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros)
}) 

module.exports		=		router;