var mongoose 	=	require('mongoose');


var candidateSchema	=	new mongoose.Schema({
												uid                 :	{ type: String},
												firstName           :	{ type: String},
												lastName       		: 	{ type: String},
												partyName  			: 	{ type: String, default: null},
												partyAbbv  			: 	{ type: String, default: null},
												office 				:	{ type: String, default: null},
												officeId			:	{ type: String, default: null},
												officeScope			:	{ type: String, default: null},
												officeScopeId		:	{ type: String, default: null},
												state 				:	{ type: String, default: null},
												stateId 			:	{ type: String, default: null},
												localGovt			:	{ type: String, default: null},
												localGovtId			:	{ type: String, default: null},
												picture 			: 	{ type: String, default: null},
												profilecomplete     :	{ type: Boolean, default: true},
												verified			:	{ type: Boolean, default: false},
												endorsement 		:	{ type: Number,	default: 0},
												selfservice			:	{ type: Boolean},
												pollId				:   { type: String, default: null},
												inRace				:	{ type: Boolean, default: false},	
												votes		        :	{ type: Array, default:[]},
											});
											
candidateSchema.virtual('fullName').get(function () {
	return this.firstName + ' ' + this.lastName;	
	});
module.exports	=	mongoose.model('candidate', candidateSchema );