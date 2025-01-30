var   express  		    =  		require('express'),
      app 	 		    =  		express(),
	  mongoose			=  		require('mongoose'),
	  cors				= 		require('cors'),
      bodyParser 		=  		require('body-parser'),
	  methodOverride	= 		require('method-override'),
	  userRoute			=		require('./routes/users'),
	  candidateRoute	=		require('./routes/candidates'),
	  connectRabbit     = 		require('./lib/connectrabbit');
const helmet 			= 		require('helmet')
const url 				= 		process.env.DB
const port 				= 		process.env.PORT


 
//app.set('view engine', 'jsx');
//Connect to the application database

mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true, authSource:'admin'}).then(()=>{
	console.log("DB Connected");
}).catch(err=>{
	console.log("Error:", err.message);
});

//middlewares
//app.use(helmet());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(cors());
app.use(candidateRoute);
app.use(userRoute);

function main(){
				return connectRabbit()
							.then(messageChannel =>{
													app.listen(port, ()=>{
														console.log("Accounts Microservice online.")
														})
													app.locals.messageChannel = messageChannel
						})  
				}

					
main()
    .then(() => console.log("Accounts Microservice online."))
    .catch(err => {
        console.error("Accounts Microservice failed to start.");
        console.error(err && err.stack || err);
    });  