import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import path from 'path';
import App from './App';
import template from './template';

const app = express();

app.use(express.static(path.resolve(__dirname, './dist/public')));

app.get('/', (req, res) => {
  const body = ReactDOM.renderToString(<App />);
  const html = template(body);
  res.send(html);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
