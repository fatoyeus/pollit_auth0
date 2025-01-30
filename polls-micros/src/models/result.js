var mongoose 	=	require('mongoose')


var resultSchema	=	new mongoose.Schema({
											officeId			:	{ type: String, required: true},
											office				:	{ type: String, required: true},
											officeScopeId		:	{ type: String, required: true},
											officeScope			:	{ type: String, required: true},
											poll				:	{ candidates:	[{
																								firstName: String,
																								lastName: String,
																								partyName: String,
																								partyAbbv: String,
																								pollId: {
																											type: mongoose.Schema.Types.ObjectId,
																											ref : 'poll'
																										},
																								poll: {type: Number, default:0}
																					}]
																	},
											stateId				:	{
																		type: mongoose.Schema.Types.ObjectId,
																		ref	: 'state'
																	},
											localGovtId			:	{
																		type: mongoose.Schema.Types.ObjectId,
																		ref	: 'localgovt'
																	},
											wardId				:	{
																		type: mongoose.Schema.Types.ObjectId,
																		ref	: 'ward'
																	},
											puId				:	{
																		type: mongoose.Schema.Types.ObjectId,
																		ref	: 'pollingunit'
																	}
										});

module.exports	=	mongoose.model('result', resultSchema );