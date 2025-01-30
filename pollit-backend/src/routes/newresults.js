let express			 	=		require('express'),
	router			 	=		express.Router();
	const connect		=		require('../lib/connect');
	const polls_micros 	= 		process.env.POLLS_MICROS 


//candidate routes
//create and update candidate profile
router.get('/results/presidential/x06PR0112pl', (req, res)=>{
	connect(req._parsedUrl.pathname, res, polls_micros)
})

module.exports		=		router;