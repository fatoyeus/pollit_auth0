let express			 			=		require('express'),
	router			 			=		express.Router();
	const connect				=		require('../lib/connect');
	const  polls_micros 		= 		process.env.POLLS_MICROS 


router.post('/polls/addcandidate', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros, req.body)
})
router.post('/polls/create', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros, req.body)
})
router.post('/polls/create/wocand', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros, req.body)
})
router.get('/polls/list', (req, res)=>{
	console.log('polllist was called')
	connect(req._parsedUrl.pathname, res, polls_micros)
})
router.get('/polls/pollcount', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros)
})
router.get('/polls/view/:pollId', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros)
})

module.exports		=		router;