var   express  		    =  		require('express'),
      app 	 		    =  		express(),
	  cors				= 		require('cors'),
      bodyParser 		=  		require('body-parser'),
	  methodOverride	= 		require('method-override'),
	  newBlogRoute		=		require('./routes/newblogs'),
	  newPartyRoute		=		require('./routes/newparty'),
	  newPollRoute		=		require('./routes/newpolls'),
	  newUserRoute		=		require('./routes/newusers'),
	  newCandidateRoute	=		require('./routes/newcandidates'),
	  newLandingRoute	=		require('./routes/newlanding'),
	  newOfficeRoute	=		require('./routes/newoffices'),
	  newResultRoute	=		require('./routes/newresults'),
	  connectRabbit     = 		require('./lib/connectrabbit');
const helmet 			= 		require('helmet')
const jwt 				= 		require('express-jwt')
const jwks 				= 		require('jwks-rsa')
const jwksUri    		= 		process.env.JWKSURI
const audience 			= 		process.env.AUDIENCE
const issuer			= 		process.env.ISSUER
const corsorigin		= 		process.env.CORSORIGIN
const port 				= 		process.env.PORT || 80
const jwtCheck 			= 		jwt({
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
var corOptions = {
	origin: corsorigin,
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	allowedHeaders: "Content-Type, Authorization",
	optionsSuccessStatus: 200
}
//middlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(newLandingRoute);
app.use(jwtCheck);

//Routes
app.use(newBlogRoute);
app.use(newCandidateRoute);
app.use(newOfficeRoute);
app.use(newPartyRoute);
app.use(newPollRoute);
app.use(newResultRoute);
app.use(newUserRoute);

function main(){
		return connectRabbit()
							.then(messageChannel =>{
													app.listen(port, ()=>{
														console.log(`Pollit_Backend Microservice online on ${port}.`)
														})
													app.locals.messageChannel = messageChannel
						}) 
				}

					
main()
    .then(() => console.log(`Pollit_Backend Microservice online on ${port}.`))
    .catch(err => {
        console.error(`Pollit_Backend Microservice failed to start on ${port}.`);
        console.error(err && err.stack || err);
    });   