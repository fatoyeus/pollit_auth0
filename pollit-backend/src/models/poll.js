var mongoose 	=	require('mongoose')


var pollSchema	=	new mongoose.Schema({
											officeId			:	{ type: String, required: true},
											office				:	{ type: String, required: true},
											officeScopeId		:	{ type: String, required: true},
											officeScope			:	{ type: String, required: true},
											candidates			:	[],
											Active              :   { type: Boolean, default: true}
										});


module.exports	=	mongoose.model('poll', pollSchema );