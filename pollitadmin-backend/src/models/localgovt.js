var mongoose 	=	require('mongoose')

var localGovtSchema	=	new mongoose.Schema({
												name: 		{	type: String, require: true },
												stateId:	{
																type: mongoose.Schema.Types.ObjectId,
																ref	: 'state'
															}
											});

module.exports	=	mongoose.model('localgovt', localGovtSchema );