var mongoose 	=	require('mongoose')

var houseofrepSchema	=	new mongoose.Schema({
													name: 	{	type: String, require: true}
												});

module.exports	=	mongoose.model('houseofrep', houseofrepSchema );