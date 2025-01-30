const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const amqp = require("amqplib");
const Adminreport = require('./models/adminreport');


const DBHOST = process.env.DB;
const DBNAME = process.env.DBNAME;
const RABBIT = process.env.RABBIT;

//
// Connect to the database.
//
function connectDb() {
    return mongodb.MongoClient.connect(DBHOST)   
        .then(client => {
            console.log("DB Connected")
            return client.db(DBNAME);
        });
}

//
// Connect to the RabbitMQ server.
//
function connectRabbit() {
    console.log(`Connecting to RabbitMQ server at ${RABBIT}.`);
    return amqp.connect(RABBIT) // Connect to the RabbitMQ server.
        .then(messagingConnection => {
            console.log("Connected to RabbitMQ.");
            return messagingConnection.createChannel(); // Create a RabbitMQ messaging channel.
        });
}

//
// Setup event handlers.
//
function setupHandlers(app, db, messageChannel) {

    const reportsCollection = db.collection("report");

    // ... YOU CAN PUT HTTP ROUTES AND OTHER MESSAGE HANDLERS HERE ...

    function consumeViewedMessage(msg) { // Handler for coming messages.
        console.log("Received a 'report' message");
        const parsedMsg = JSON.parse(msg.content.toString()); // Parse the JSON message.
        
        return reportsCollection.insertOne({ reportPath: parsedMsg.reportPath }) // Record the "view" in the database.
            .then(() => {
                console.log("Acknowledging message was handled.");
                
                messageChannel.ack(msg); // If there is no error, acknowledge the message.
            });
    };

    return messageChannel.assertExchange("report", "fanout") // Assert that we have a "report" queue.
        .then(() => {
            console.log("Asserted that the 'report' exchange exists.");

            return messageChannel.assertQueue("", {exclusive: true}); // Start receiving messages from the "report" queue.
        })
        .then(response => {
            const queueName = response.queue;
            return messageChannel
                .bindQueue(queueName, "report", "")
                    .then(() => {
                        return messageChannel
                        .consume(queueName, consumeViewedMessage)
                    })
        })
}

//
// Start the HTTP server.
//
function startHttpServer(db, messageChannel) {
    return new Promise(resolve => { // Wrap in a promise so we can be notified when the server has started.
        const app = express();
        app.use(bodyParser.json()); // Enable JSON body for HTTP requests.
        setupHandlers(app, db, messageChannel);

        const port = process.env.PORT && parseInt(process.env.PORT) || 3000;
        app.listen(port, () => {
            resolve(); // HTTP server is listening, resolve the promise.
        });
    });
}

//
// Application entry point.
//
function main() {
    console.log("Hello world!");

    return connectDb()                                          // Connect to the database...
        .then(db => {                                           // then...
            return connectRabbit()                              // connect to RabbitMQ...
                .then(messageChannel => {                       // then...
                    return startHttpServer(db, messageChannel); // start the HTTP server.
                });
        });
}

main()
    .then(() => console.log("Microservice online."))
    .catch(err => {
        console.error("Microservice failed to start.");
        console.error(err && err.stack || err);
    });    