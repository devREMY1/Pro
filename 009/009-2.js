function printMessage(message) {
	console.log(message);
}
function sendMessage(message, callback) {
	callback(message);
}
sendMessage('Hello World', printMessage);
sendMessage(`JavaScript is not Fun!`, printMessage);
