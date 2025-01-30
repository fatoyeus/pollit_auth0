let express			=		require('express'),
	router			=		express.Router();
const connect			=		require('../lib/connect');
const account_micros 	= 		process.env.ACCOUNTS_MICROS 

//user routes
//create user

router.get('/user/country', (req, res)=>{
	connect(req._parsedUrl.pathname, res, account_micros) 
})
router.get('/user/:id', (req, res)=>{
	connect(req._parsedUrl.pathname, res, account_micros)
});
router.get('/user/sr/:id', (req, res)=>{
	connect(req._parsedUrl.pathname, res, account_micros)
})
router.post('/user/create', (req, res)=>{
	connect(req._parsedUrl.pathname, res, account_micros, req.body)	
})
router.get('/user/respondent/jobs/:uid', (req, res)=>{
	connect(req._parsedUrl.pathname, res, account_micros)
})
//update user
router.post('/user/update', (req, res)=>{
	connect(req._parsedUrl.pathname, res, account_micros, req.body)	
})
router.post('/user/updatebank', (req, res)=>{
	connect(req._parsedUrl.pathname, res, account_micros, req.body)	
})

module.exports		=		router;