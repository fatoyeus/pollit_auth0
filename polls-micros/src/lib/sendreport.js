let http = require("http");

function sendReport(report){
    const options = {
        method: 'POST',
        headers:    {
            "Content-Type":"application/json"
        }
    }
    const requestBody = {
        report: report
    };
    const req = http.request(
        "http://pollitreporting/reports",
        options
    );
    req.on("close", ()=>{
        console.log("closing session")
    });
    req.on("error", (err)=>{
        console.log(err.message)
    });
    req.write(JSON.stringify(requestBody));
    req.end()
}

module.exports = sendReport