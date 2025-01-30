function sendReportMessage(messageChannel, reportPath){
	const msg = {reportPath: reportPath};
	const jsonMsg = JSON.stringify(msg);
	messageChannel.publish("", "report", Buffer.from(jsonMsg));
}

module.exports = sendReportMessage;