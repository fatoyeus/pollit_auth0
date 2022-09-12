var mongoose 	=	require('mongoose');

var pollSchema	=	new mongoose.Schema({
											uid  				:	{
																		type: mongoose.Schema.Types.ObjectId,
																		ref	: 'user'
																	},
											party               :   String,
											verified			:	Boolean,
											poll 				:	{ type: Number, default: 0},
											inRace				:	{ type: String, default : true},
											office				:	 String,
											officeId			:	 String,
											state 				:	 String,
											endorsement 		:    Number,
											stateId 			:	{
																		type: mongoose.Schema.Types.ObjectId,
																		ref	: 'state'
																	},
											localGovt			:	String,
											localGovtId			:	{
																		type: mongoose.Schema.Types.ObjectId,
																		ref	: 'localgovt'
																	},
											profilecomplete 	:	Boolean,
											votes		        :	{ type: Array, default:[]},
											picture				:	String
										});


module.exports	=	mongoose.model('poll', pollSchema );