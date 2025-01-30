const express  		    =  		require('express'),
      app 				= 		express(),
	  cors				= 		require('cors'),
	  path				= 		require('path');
const port              =       process.env.PORT
const crOptions  		=		{
									origin : 'https://admin.pollitng.com',
									optionsSuccessStatus : 200
								}


if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}


app.use(cors(crOptions));
app.use(express.static(path.join(__dirname, "dist")));
app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
  });

  app.listen(port, ()=>{
							console.log(`Microservice online on port ${port}.`)
						})  

 