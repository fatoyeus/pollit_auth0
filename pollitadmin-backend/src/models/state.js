var mongoose 	=	require('mongoose')

var stateSchema	=	new mongoose.Schema({
												name: 		{	type: String, require: true},
												country:	{
																type: mongoose.Schema.Types.ObjectId,
																ref	: 'country'
															}
										});

module.exports	=	mongoose.model('state', stateSchema );