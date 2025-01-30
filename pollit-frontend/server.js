const express  		    =  		require('express'),
      app 				= 		express(),
	  cors				= 		require('cors'),
	  path				= 		require('path');
const port              =       process.env.PORT || 80
const crOptions  		=		{
									origin : 'https://www.pollitng.com',
									optionsSuccessStatus : 200
								}


app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));
app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
app.listen(port, ()=>{
							console.log("Pollit Frontend Microservice online.")
						})
