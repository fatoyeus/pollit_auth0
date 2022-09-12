var mongoose 	=	require('mongoose');


var candidateSchema	=	new mongoose.Schema({
												uid                 :	{ type: String, default: null},
												firstName           :	{ type: String, required: true},
												lastName       		: 	{ type: String, required: true},
												party 	  			: 	{ type: String, default: null},
												office 				:	{ type: String, default: null},
												state 				:	{ type: String, default: null},
												stateId 			:	{ type: String, default: null},
												localGovt			:	{ type: String, default: null},
												localGovtId			:	{ type: String, default: null},
												picture 			: 	{type: String, default:	null},
												profilecomplete     :	{ type: Boolean, default: true},
												verified			:	{ type: Boolean, default: false},
												endorsement 		:	{ type: Number,	default: 0},
												selfservice			:	{ type: Boolean, default: false}
											});

module.exports	=	mongoose.model('candidate', candidateSchema );