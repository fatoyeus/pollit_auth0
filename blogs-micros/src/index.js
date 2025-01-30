var   express  		    =  		require('express'),
      app 	 		    =  		express(),
	  mongoose			=  		require('mongoose'),
	  cors				= 		require('cors'),
      bodyParser 		=  		require('body-parser'),
	  methodOverride	= 		require('method-override'),
	  blogRoute			=		require('./routes/blogs'),
	  landingBlogRoutes =		require('./routes/landingblogs'),
	  connectRabbit     = 		require('./lib/connectrabbit');
const helmet 			= 		require('helmet')
const url 				= 		process.env.DB
const port 				= 		process.env.PORT


app.use(cors());
//app.use(helmet());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
//app.set('view engine', 'jsx');


//Connect to the application database

mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true, authSource:'admin'}).then(()=>{
	console.log("DB Connected");
}).catch(err=>{
	console.log("Error:", err.message);
});

//middlewares

//Routes
app.use(blogRoute);
app.use(landingBlogRoutes);

function main(){
					return connectRabbit()
							.then(messageChannel =>{
													app.listen(port, ()=>{
														console.log("Blogs-Micros Microservice online.")
														})
													app.locals.messageChannel = messageChannel
						}) 
					 
				}

					
main()
    .then(() => console.log("Blogs-Micros Microservice online."))
    .catch(err => {
        console.error("Blogs-Micros Microservice failed to start.");
        console.error(err && err.stack || err);
    });  