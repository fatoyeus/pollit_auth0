let express			 			=		require('express'),
	router			 			=		express.Router(),
	Candidate		 			= 		require('../models/candidate'),
	Party 			 			=		require('../models/party'),
	User			 			=		require('../models/user'),
	actions 		 			=		require('../templates/reports/actions'),
	office 			 			= 		require('../templates/offices/office'),
	Report 			 			=		require('../models/report');
	const sendReport 			= 		require('../lib/sendreport');
	const sendReportMessage  	=		require('../lib/sendreportmessage');
	const connectPollit         = 		require('../lib/connectpb');
	




//candidate routes
//create and update candidate profile
router.post('/party/create', (req, res)=>{
	Party.create(req.body).then((newParty)=>{
		console.log(newParty)
		res.send(newParty)
	})
})
router.get('/parties/list', (req, res)=>{
	Party.find({}, (fpartyerr, fparty)=>{
		res.send(fparty)
	})
})

module.exports		=		router;