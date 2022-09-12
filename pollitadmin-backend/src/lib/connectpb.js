let http = require("http");

function connectPollit(route, res, body){
        let arg = arguments.length
        let newParam = arg > 2 ? new URLSearchParams(body).toString() : ''
        console.log(`newparams ${body}`)
        let method = arg > 2 ? 'POST' : 'GET'
        let str;
        const options = {
                            method:     method,
                            headers:    {
                                            "Content-Type":"application/x-www-form-urlencoded"
                                        }
                        }
        const req = http.request(
                                    `http://pollit_backend:1237${route}`, options, (response) => {
                                    
                                    response.on('data', (chunk)=>{
                                    str = chunk
                                    console.log(`first str: ${str}`)
                                    })
                                    response.on('end', ()=>{
                                        res.send(str)
                                    })
                                });
        req.on("close", ()=>{
            console.log("closing session")
        });
        req.on("error", (err)=>{
            console.log(err.message)
        });
        req.write(newParam);
        req.end()
    
}

module.exports = connectPollit
