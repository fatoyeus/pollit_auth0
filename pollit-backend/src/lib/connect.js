
let http = require("http");

function connect(route, res, server, body){
        let arg = arguments.length
        let newParam = arg > 3 ? new URLSearchParams(body).toString() : ''
        let method = arg > 3 ? 'POST' : 'GET'
        let str;
        const options = {
                            method:     method,
                            headers:    {
                                            "Content-Type":"application/x-www-form-urlencoded"
                                        }
                        }
        const req = http.request(
                                    `${server}${route}`, options, (response) => {
                                    
                                    response.on('data', (chunk)=>{
                                    str = chunk
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

module.exports = connect
