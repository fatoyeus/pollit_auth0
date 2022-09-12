var mongoose 	=	require('mongoose')

var staterepSchema	=	new mongoose.Schema({
												name: 			{	type: String, require: true},
												stateId:			{
																	type: mongoose.Schema.Types.ObjectId,
																	ref	: 'state'
																},
												localGovtId:	{
																	type: mongoose.Schema.Types.ObjectId,
																	ref	: 'localgovt'
																},
												houseOfRepId:	{
																	type: mongoose.Schema.Types.ObjectId,
																	ref	: 'houseofrep'
																},
												senate:			{
																	type: mongoose.Schema.Types.ObjectId,
																	ref	: 'senate'
																}
											});

module.exports	=	mongoose.model('staterep', staterepSchema );