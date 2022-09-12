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
									origin : 'http://localhost:1236', 
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
app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});
function main(){
	return connectDb()
		.then((db) => {
			return connectRabbit()
				.then(messageChannel => {
					return messageChannel.assertExchange("report", "fanout")
					.then(() =>{
						app.listen(port, ()=>{
							console.log("Pollit Frontend Microservice online.")
							return  (app.locals.messageChannel = messageChannel)
												})
					
									});
					
											})
						}) 
					}
main()
    .then(() => console.log("Pollit_Frontend Microservice online."))
    .catch(err => {
        console.error("Pollit_Frontend Microservice failed to start.");
        console.error(err && err.stack || err);
    }); 