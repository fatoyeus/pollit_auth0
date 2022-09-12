const express  		    =  		require('express'),
	  mongoose			=  		require('mongoose'),
	  request			=  		require('request'),
	  cors				= 		require('cors'),
      bodyParser 		=  		require('body-parser'),
	  methodOverride	= 		require('method-override'),
	  mongodb			=		require('mongodb'),
	  fs 				=		require('fs'),
	  partyRoute		=		require('./routes/party'),
	  pollRoute			=		require('./routes/polls'),
	  adminRoute		=		require('./routes/admin'),
	  candidateRoute	=		require('./routes/candidates'),
	  officeRoute		=		require('./routes/offices'),
	  Report			=		require('./models/report'),
	  fileshare 		=		require('./routes/fileshare'),
	  connectRabbit     = 		require('./lib/connectrabbit'),
	  connectDb 		= 		require('./lib/connectdb'),
	  sendReportMessage = 		require('./lib/sendreportmessage'),
	  setupHandlers		=       require('./lib/setuphandlers');
//	  lgovtRoute		=		require('./routes/localgovt'),
//	  stateRoute		=		require('./routes/states')
//const PORT 				= 		process.env.PORT
const amqp 				= 		require("amqplib");
const dbhost			= 		process.env.DBHOST;
const dbname			=		process.env.DBNAME;
const RABBIT 			=	 	process.env.RABBIT;
const url 				= 		`${dbhost}/${dbname}`;
const crOptions  		=		{
									origin : 'http://localhost:1234',
									optionsSuccessStatus : 200
								}




//app.locals.csessions	=		[];




const FILE_STORAGE_HOST = process.env.FILE_STORAGE_HOST;
const FILE_STORAGE_PORT = parseInt(process.env.FILE_STORAGE_PORT);
//const DBHOST = process.env.DBHOST;
//const DBNAME = process.env.DBNAME;

if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

if (!process.env.FILE_STORAGE_HOST) {
    throw new Error("Please specify the host name for the video storage microservice in variable VIDEO_STORAGE_HOST.");
}

if (!process.env.FILE_STORAGE_PORT) {
    throw new Error("Please specify the port number for the video storage microservice in variable VIDEO_STORAGE_PORT.");
}

/*if (!process.env.DBHOST) {
    throw new Error("Please specify the databse host using environment variable DBHOST.");
}

if (!process.env.DBNAME) {
    throw new Error("Please specify the name of the database using environment variable DBNAME");
}*/

//
// Extracts environment variables to globals for convenience.
//




console.log(`Forwarding file requests to ${FILE_STORAGE_HOST}:${FILE_STORAGE_PORT}.`);

//Connect to the application database



//middlewares

//Routes

//app.use(lgovtRoute);

//app.use(stateRoute);
mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
	console.log(`db connected`)
})






const app = express()
app.use(cors(crOptions));
app.use(bodyParser.urlencoded({extended:true}));
app.use(setupHandlers);
app.use(candidateRoute);
app.use(fileshare);
app.use(officeRoute);
app.use(partyRoute);
app.use(pollRoute);
app.use(adminRoute);
app.use(methodOverride("_method"));
app.locals.title = "pollit";
const port = process.env.PORT && parseInt(process.env.PORT) || 3000;

	

function main(){
	return connectDb()
		.then((db) => {
			return connectRabbit()
				.then(messageChannel => {
					return messageChannel.assertExchange("report", "fanout")
					.then(() =>{
						app.listen(port, ()=>{
							console.log("Microservice online.")
							return  (app.locals.messageChannel = messageChannel)
												})
					
									});
					
											})
						}) 
					}

main()
    .then(() => console.log("PollitAdmin_Backend Microservice online."))
    .catch(err => {
        console.error("PollitAdmin_Backend Microservice failed to start.");
        console.error(err && err.stack || err);
    });  