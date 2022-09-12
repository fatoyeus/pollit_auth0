var mongoose 	=	require('mongoose');


var userSchema	=	new mongoose.Schema({
												uid					:   { type: String, required: true, unique: true},
												firstName           :	{ type: String, default: null},
												lastName       		: 	{ type: String, default: null},
												email 				:	{ type: String, required: true},
												nickname			:	{ type: String, required: true},
												country  			: 	{ type: String, default: null},
												state	 			:	{ type: String, default: null},
												stateId  			:	{ type: String, default : null },
												localGovt			:	{ type: String, default: null},
												localGovtId  		:   { type: String, default : null },
												constituent 		:	{ type: String, default: null},
												constituentId 		:	{ type: String, default: null},
												nin     			:	{ type: String, default : null },
												voteId				:	{ type: String, default : null },
												candidate           :	{ type: Boolean, default : false },
												candidateId			:	{ type: String, default : null },																				
												profilecomplete     :	{ type: Boolean, default : false },
												verifiedEmail		:	{ type: Boolean, default : false },
												verifiedNin 		: 	{ type: Boolean, default : false },
												verifiedVoteId 		:	{ type: Boolean, default : false },
												votedOffices 		:	{
																			presidential: { type: String, default: null},
																			senate 		: { type: String, default: null},
																			houseOfRep 	: { type: String, default: null},
																			governorship: { type: String, default: null},
													 					 	stateRep  	: { type: String, default: null},
																			localGovt 	: { type: String, default: null}
																		}
	
	});

	userSchema.virtual('fullName').get(function () {
	  return this.fname + ' ' + this.lname;	
	});
module.exports	=	mongoose.model('user', userSchema );