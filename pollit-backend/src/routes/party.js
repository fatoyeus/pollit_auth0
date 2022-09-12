let express			 			=		require('express'),
	router			 			=		express.Router(),
	Candidate		 			= 		require('../models/candidate'), 
	User			 			=		require('../models/user'),
	actions 		 			=		require('../templates/reports/actions'),
	office 			 			= 		require('../templates/offices/office'),
	Report 			 			=		require('../models/report');
	const sendReport 			= 		require('../lib/sendreport');
	const sendReportMessage  	=		require('../lib/sendreportmessage');
	const connectPollitA         = 		require('../lib/connectpab');
	




//candidate routes
//create and update candidate profile
router.get('/parties/list', (req, res)=>{
	connectPollitA(req._parsedUrl.pathname, res)
})

module.exports		=		router;