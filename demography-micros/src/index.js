var   express  		    =  		require('express'),
      app 	 		    =  		express(),
	  mongoose			=  		require('mongoose'),
	  cors				= 		require('cors'),
      bodyParser 		=  		require('body-parser'),
	  methodOverride	= 		require('method-override'),
	  officeRoute		=		require('./routes/offices'),
	  connectRabbit     = 		require('./lib/connectrabbit');
const helmet 			= 		require('helmet')
const url 				= 		process.env.DB
const port 				= 		process.env.PORT

app.use(cors());
//app.use(helmet());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));



//Connect to the application database

mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true, authSource:'admin'}).then(()=>{
	console.log("DB Connected");
}).catch(err=>{
	console.log("Error:", err.message);
});

//middlewares

//Routes
app.use(officeRoute);


function main(){
			return connectRabbit()
							.then(messageChannel =>{
													app.listen(port, ()=>{
														console.log(`Demography Microservice online on port ${port}.`)
														})
													app.locals.messageChannel = messageChannel
						}) 
				}

					
main()
    .then(() => console.log(`Demography Microservice online on port ${port}.`))
    .catch(err => {
        console.error("Demography Microservice failed to start.");
        console.error(err && err.stack || err);
    });   