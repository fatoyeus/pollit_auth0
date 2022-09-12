const express = require("express");
const router  =	express.Router();
const http = require("http");
const mongodb = require("mongodb");
const sendReportMessage = require("../lib/sendreportmessage");

//
// Throws an error if the any required environment variables are missing.
//

const FILE_STORAGE_HOST = process.env.FILE_STORAGE_HOST;
const FILE_STORAGE_PORT = parseInt(process.env.FILE_STORAGE_PORT);

router.get("/logo", (req, res) => {
    const forwardRequest = http.request( // Forward the request to the video storage microservice.
        {
            host: FILE_STORAGE_HOST,
            port: FILE_STORAGE_PORT,
            path: '/logo?path=pollit_logo.png', // Video path is hard-coded for the moment.
            method: 'GET',
            headers: req.headers
        }, 
        forwardResponse => {
            res.writeHeader(forwardResponse.statusCode, forwardResponse.headers);
            forwardResponse.pipe(res);
        }
    );
    
    req.pipe(forwardRequest);
    
});
module.exports = router