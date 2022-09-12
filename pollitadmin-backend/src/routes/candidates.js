let express			 			=		require('express'),
	router			 			=		express.Router(),
	Candidate		 			= 		require('../models/candidate'),
	Poll 			 			=		require('../models/poll'),
	User			 			=		require('../models/user'),
	actions 		 			=		require('../templates/reports/actions'),
	office 			 			= 		require('../templates/offices/office'),
	Report 			 			=		require('../models/report');	
	const{create}	 			=		require('xmlbuilder2');
	const sendReport 			= 		require('../lib/sendreport');
	const sendReportMessage  	=		require('../lib/sendreportmessage');
	const connectPollit         = 		require('../lib/connectpb');
	




//candidate routes
//create and update candidate profile
router.post('/candidate/create', (req, res)=>{
			connectPollit(`${req._parsedUrl.pathname}?path=true`, res, req.body);						
})
router.get('/candidates/list', (req, res)=>{
	connectPollit(req._parsedUrl.pathname, res);
})
router.post('/candidate/verify', (req, res)=>{
	let vpack = req.body
				vpack.action = actions['10001'].type
				sendReportMessage(req.app.locals.messageChannel, vpack)
				connectPollit(req._parsedUrl.pathname, res, {id:req.body.verifyId})
				let upack = vpack
					upack.action = actions['20001'].type
				sendReportMessage(req.app.locals.messageChannel, upack)	
})

module.exports		=		router;