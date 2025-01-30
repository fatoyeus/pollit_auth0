let   express		      =		require('express'),
	   router		      =		express.Router();
const connect			   =		require('../lib/connect');
const polls_micros 	   = 		process.env.POLLS_MICROS 
	



//poll routes 

router.get('/polls', (req, res)=>{	
   connect(`${req._parsedUrl.path}`, res, polls_micros)
}) 
//get candidates poll
router.get('/polls/mypoll/:pollid', (req, res)=>{
   connect(req._parsedUrl.pathname, res, polls_micros)
})
router.post('/polls/vote', (req, res)=>{
   connect(req._parsedUrl.pathname, res, polls_micros, req.body)	
})
router.post('/polls/withdrawvote', (req, res)=>{
   connect(req._parsedUrl.pathname, res, polls_micros, req.body)	
})
module.exports = router;

