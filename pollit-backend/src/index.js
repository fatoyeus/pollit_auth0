var   express  		    =  		require('express'),
      app 	 		    =  		express(),
	  mongoose			=  		require('mongoose'),
	  request			=  		require('request'),
	  cors				= 		require('cors'),
      bodyParser 		=  		require('body-parser'),
	  methodOverride	= 		require('method-override'),
	  partyRoute		=		require('./routes/party'),
	  pollRoute			=		require('./routes/polls'),
	  userRoute			=		require('./routes/users'),
	  candidateRoute	=		require('./routes/candidates'),
	  officeRoute		=		require('./routes/offices'),
	  Report			=		require('./models/report'),
	  fileshare 		=		require('./routes/fileshare'),
	  connectRabbit     = 		require('./lib/connectrabbit'),
	  connectDb 		= 		require('./lib/connectdb');
	 /* jwt 				= 		require('express-jwt'),
	  jwks 				=	 	require('jwks-rsa');
const jwtCheck 			= 		jwt({
											secret: jwks.expressJwtSecret({
											cache: true,
											rateLimit: true,
											jwksRequestsPerMinute: 5,
											jwksUri: 'https://dev-xu6xg5to.us.auth0.com/.well-known/jwks.json'
									}),
											audience: 'https://pollitng/api',
											issuer: 'https://dev-xu6xg5to.us.auth0.com/',
											algorithms: ['RS256']
										});*/
const dbhost			= 		process.env.DBHOST;
const dbname			=		process.env.DBNAME;
const RABBIT 			=	 	process.env.RABBIT;
const url 				= 		`${dbhost}/${dbname}`;
const port 				= 		process.env.PORT

const crOptions  		=		{
									origin : 'http://localhost:1236',
									optionsSuccessStatus : 200
								}
app.use(cors(crOptions));


app.locals.title	    =		"pollit";
app.locals.csessions	=		[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set('view engine', 'jsx');


//Connect to the application database

mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
	console.log("DB Connected");
}).catch(err=>{
	console.log("Error:", err.message);
});

//middlewares

//Routes
//app.use(jwtCheck);
app.use(candidateRoute);
app.use(officeRoute);
app.use(partyRoute);
app.use(pollRoute);
app.use(userRoute);


function main(){
	return connectDb()
		.then((db) => {
						return connectRabbit()
							.then(messageChannel =>{
													app.listen(port, ()=>{
														console.log("Microservice online.")
														})
													app.locals.messageChannel = messageChannel
						}) 
					}) 
				}

					
main()
    .then(() => console.log("Pollit_Backend Microservice online."))
    .catch(err => {
        console.error("Pollit_Backend Microservice failed to start.");
        console.error(err && err.stack || err);
    });  