var mongoose 	=	require('mongoose')

var senateSchema	=	new mongoose.Schema({
												name: 	{	type: String, require: true },
											 stateId: 	{
															type: mongoose.Schema.Types.ObjectId,
															ref	: 'state'
														}
												
											});

module.exports	=	mongoose.model('senate', senateSchema );