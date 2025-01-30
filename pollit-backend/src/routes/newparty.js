let express			 	=		require('express'),
	router			 	=		express.Router();
	const connect		=		require('../lib/connect');
	const polls_micros 	= 		process.env.POLLS_MICROS 


//candidate routes
//create and update candidate profile
router.get('/parties/list', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros)
})

module.exports		=		router;