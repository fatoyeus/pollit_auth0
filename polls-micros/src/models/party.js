var mongoose 	=	require('mongoose');

var partySchema	=	new mongoose.Schema({
											name               	:   String,
											logo                :   String,
											abbv			 	:	String
										});


module.exports	=	mongoose.model('party', partySchema );