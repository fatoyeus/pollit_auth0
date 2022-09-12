const express  		    =  		require('express'),
      app 				= 		express(),
	  mongoose			=  		require('mongoose'),
	  cors				= 		require('cors'),
	  path				= 		require('path');
	  Report			=		require('./src/models/report'),
	  fileshare 		=		require('./src/routes/fileshare'),
	  connectRabbit     = 		require('./src/lib/connectrabbit'),
	  connectDb 		= 		require('./src/lib/connectdb'),
	  sendReportMessage = 		require('./src/lib/sendreportmessage'),
	  setupHandlers		=       require('./src/lib/setuphandlers');
const dbhost			= 		process.env.DBHOST;
const dbname			=		process.env.DBNAME;
const RABBIT 			=	 	process.env.RABBIT;
const url 				= 		`${dbhost}/${dbname}`;
const port              =       process.env.PORT
const crOptions  		=		{
									origin : 'http://localhost:1234',
									optionsSuccessStatus : 200
								}

app.locals.title = "pollit";

if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
	console.log("DB Connected");
}).catch(err=>{
	console.log("Error:", err.message);
});

app.use(setupHandlers);
app.use(fileshare);
app.use(cors(crOptions));
app.use(express.static(path.join(__dirname, "dist")));
app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
  });

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