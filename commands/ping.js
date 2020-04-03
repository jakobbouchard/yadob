module.exports = (message) => { // Function with 'message' parameter
	message.reply("Pong!").catch(e => console.log(e));
}