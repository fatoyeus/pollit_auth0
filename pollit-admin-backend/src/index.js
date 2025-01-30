const express  		    =  		require('express'),
	  cors				= 		require('cors'),
      bodyParser 		=  		require('body-parser'),
	  methodOverride	= 		require('method-override'),
	  newAdminRoute		=		require('./routes/newadmin'),
	  newBlogRoute		=		require('./routes/newblog'),
	  newCandidateRoute	=		require('./routes/newcandidates'),
	  newOfficeRoute	=		require('./routes/newoffices'),
	  newPartyRoute		=		require('./routes/newparty'),
	  newPollRoute		=		require('./routes/newpolls'),
	  newUserRoute		=		require('./routes/newusers'),
	  connectRabbit     = 		require('./lib/connectrabbit'),
	  setupHandlers		=       require('./lib/setuphandlers');
const jwt 				= 		require('express-jwt');
const jwks 				= 		require('jwks-rsa');
const jwksUri  			=		process.env.JWKSURI;
const audience			=		process.env.AUDIENCE;
const issuer			=		process.env.ISSUER;
const corsorigin		=		process.env.CORSORIGIN;
const port 				= 		process.env.PORT && parseInt(process.env.PORT) || 80;

var jwtCheck = jwt({
						secret: jwks.expressJwtSecret({
							cache: true,
							rateLimit: true,
							jwksRequestsPerMinute: 5,
							jwksUri
						}),
						audience,
						issuer,
						algorithms: ['RS256']
					});


if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

// Extracts environment variables to globals for convenience.
//Connect to the application database
const app = express()
var corOptions = {
	origin: corsorigin,
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	allowedHeaders: "Content-Type, Authorization",
	optionsSuccessStatus: 200
}

//middlewares
app.use(methodOverride("_method"))
app.use(cors(corOptions))
app.use(jwtCheck)

app.use(bodyParser.urlencoded({extended:true}));
app.use(setupHandlers); 
//Routes
app.use(newAdminRoute);
app.use(newBlogRoute);
app.use(newCandidateRoute);
app.use(newOfficeRoute);
app.use(newPartyRoute);
app.use(newPollRoute);
app.use(newUserRoute);



	

function main(){
		return connectRabbit()
				.then(messageChannel => {
					return messageChannel.assertExchange("report", "fanout")
					.then(() =>{
						app.listen(port, ()=>{
							console.log(`PollitAdmin_Backend Microservice online on ${port}.`)
							return  (app.locals.messageChannel = messageChannel)
												})
					
									});
					
											})
					
					}

main()
    .then(() => console.log(`PollitAdmin_Backend Microservice online on ${port}.`))
    .catch(err => {
        console.error(`PollitAdmin_Backend Microservice failed to start on ${port}.`);
        console.error(err && err.stack || err);
    });  