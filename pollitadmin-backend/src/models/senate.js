var mongoose 	=	require('mongoose')

var senateSchema	=	new mongoose.Schema({
												name: 	{	type: String, require: true }
												
											});

module.exports	=	mongoose.model('senate', senateSchema );