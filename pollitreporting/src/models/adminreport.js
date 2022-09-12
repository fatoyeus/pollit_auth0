var mongoose 	=	require('mongoose');


var reportSchema	=	new mongoose.Schema({
												time				:   { type: Date, required: true, default: Date.now()},
												actionId           	:	{ type: String, required: true},
												actionFname    		: 	{ type: String, required: true},
												actionLname			:	{ type: String, required: true},
												action  			: 	{ type: String, required: true},
												object 				:	{ type: String, required: true}
										});

	reportSchema.virtual('fullName').get(function () {
	  return this.actionFname + ' ' + this.actionLname;	
	});
module.exports	=	mongoose.model('report', reportSchema );