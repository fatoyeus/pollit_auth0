var mongoose 	=	require('mongoose')

var countrySchema	=	new mongoose.Schema({
												name: 		{	type: String, require: true},
												states:		[
																{
																	type: mongoose.Schema.Types.ObjectId,
																	ref:'state'
																}
															]
												
											});

module.exports	=	mongoose.model('country', countrySchema );