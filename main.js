const fs = require('fs');
const express = require('express');
const app = express();
const AIMLInterpreter = require('aimlinterpreter');
const aimlInterpreter = new AIMLInterpreter({ name:'Nuggies', age:'18' });
const AIMLFiles = fs.readdirSync('./AIML');
aimlInterpreter.loadAIMLFilesIntoArray(AIMLFiles.map(file => `${__dirname}/AIML/${file}`));
const port = 3000;

app.set('json spaces', 1);
app.use('/public', express.static('public'));
app.get('/chat', (req, res) => {
	const message = req.query.message;

	if(!message) {
		res.status = 400;
		return res.send('message not provided.');
	}

	aimlInterpreter.findAnswerInLoadedAIMLFiles(message, async (answer, wildCardArray, input) => {

		answer = answer != null ? answer : '';
		res.send({
			reply: answer,
			wildcard: wildCardArray,
		});
	});
});
app.listen(port);
console.log(`server starting on port ${port}`);
