const amqp 				= 		require("amqplib");
const RABBIT 			=	 	process.env.RABBIT;

function connectRabbit() {
    console.log(`Connecting to RabbitMQ server at ${RABBIT}.`);
    return amqp.connect(RABBIT) // Connect to the RabbitMQ server.
        .then(connection => {
            console.log("Connected to RabbitMQ.");
            return connection.createChannel() // Create a RabbitMQ messaging channel.
        });
}

module.exports = connectRabbit;