const express = require('express');

const PORT = 8080;
const HOST = 'localhost';

const app = express();

app.get('/', (req , res) => {
  res.send('hi!');
});

app.get('*', (req , res) => {
  res.send('404');
});

app.listen(PORT, () => {
	console.log('server had been started...')
	console.log(`Running on http://${HOST}:${PORT}`);
});
