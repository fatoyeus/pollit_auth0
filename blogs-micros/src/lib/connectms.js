
let http = require("http");
function connectms(route, server, body, callback){
        let arg = arguments.length
        let newParam = body ? new URLSearchParams(body).toString() : ''
        let method = body ? 'POST' : 'GET'
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
                                     callback(JSON.parse(str))
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

module.exports = connectms
