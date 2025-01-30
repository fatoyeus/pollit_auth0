var mongoose 	=	require('mongoose');

var blogSchema	=	new mongoose.Schema({
											title               :   String,
											header				:	String,
											constituentId		:	String,
											userId				:	String,
											publisher			:	String,
											date                :   { type: Date, required: true, default: Date.now()},
											image			 	:	{ type: String, required: true},
											body				:	[],
											approved			:	{ 	type: Boolean, default: false},
											read				:	{	type: Number, default: 0}
										});


module.exports	=	mongoose.model('blog', blogSchema );