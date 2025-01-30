let express			 			=		require('express'),
	router			 			=		express.Router();
	const connect				=		require('../lib/connect');
	const  polls_micros 		= 		process.env.POLLS_MICROS 

router.post('/party/create', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros, req.body)
})
router.post('/party/delete', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros, req.body)
})
router.get('/partycount', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros)
})
router.get('/parties/list', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros)
})


module.exports		=		router;