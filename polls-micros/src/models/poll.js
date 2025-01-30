var mongoose 	=	require('mongoose')


var pollSchema	=	new mongoose.Schema({
											officeId			:	{ type: String, required: true},
											office				:	{ type: String, required: true},
											officeScopeId		:	{ type: String, required: true},
											officeScope			:	{ type: String, required: true},
											candidates			:	[{
																		firstName: String,
																		lastName: String,
																		partyName: String,
																		partyAbbv: String,
																		office: String,
																		officeId: String,
																		officeScope: String,
																		officeScopeId: String,
																		pollId: {
																					type: mongoose.Schema.Types.ObjectId,
																					ref : 'poll'
																   				},
																		poll: {type: Number, default:0},
																		votes:	{type: Array, default:[]}
																		}],
											Active              :   { type: Boolean, default: true}
										});


module.exports	=	mongoose.model('poll', pollSchema );