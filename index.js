const express = require('express');
const app = express();
const users = require('./routes/user');
const posts = require('./routes/posts');
const middlewares = require('./middlewares');

app.use(express.json());

app.use('/user', users);

app.use('/posts', posts)

app.post('/login', middlewares.login);

app.get('/btc/price', middlewares.auth, middlewares.btcPrice);

app.use(middlewares.error);

app.listen(3000, () => {
  console.log(`Serviço rodando na porta 3000`);
})
