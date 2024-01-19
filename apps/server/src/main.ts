import express from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to API!' });
});

app.get('/api/data', (req, res) => {
  res.send({ data: {  id: '12345', items: [{ id: '1', name: 'first' }, { id: '2', name: 'second' }] } });
});

app.get('/api/hello', (req, res) => {
  res.send('Hello from Express.js!');
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

module.exports = app;
