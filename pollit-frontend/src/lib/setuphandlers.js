const sendReportMessage = require('./sendreportmessage');
const FILE_STORAGE_HOST = process.env.FILE_STORAGE_HOST;
const FILE_STORAGE_PORT = parseInt(process.env.FILE_STORAGE_PORT);

function setupHandlers(req, res, next) {
    if(req._parsedUrl.pathname === '/logo'){ // Route for getting file;
        const filePath = `${FILE_STORAGE_HOST}:${FILE_STORAGE_PORT}/pollit_logo.png`;
        sendReportMessage(req.app.locals.messageChannel, filePath); // Send message to "history" microservice that this video has been "viewed".
        next()
    }else{
        next()
    }
}

module.exports = setupHandlers;