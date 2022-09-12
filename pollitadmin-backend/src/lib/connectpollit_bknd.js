let http = require("http");

function connectPollit(dataObj, route, method, res){
    let str;
    const options = {
        method: method,
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
    req.write(new URLSearchParams(dataObj).toString());
    req.end()
    
    
}

module.exports = connectPollit