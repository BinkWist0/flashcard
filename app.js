require('@babel/register');
const express = require('express');

// чтобы работать с реактом
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const RegistPage = require('./components/MainPage');
const app = express();

app.get('/', async (req, res) => {
  // query - это данные из адресной строки после воппросительного знака. например: https://localhost:4000/?type=predator
//   const { type } = req.query; // {type: predator}

  // 1. Отправить запрос к бд
//   const facts = await Fact.findAll();

  // 2. Отрисовать компонент на основе данных из бд ?
  // создает react-element(по сути это сложный js объект)
  const reactElement = React.createElement(RegistPage);

  // на основе этого объекта генерируется html-строка
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);

  // отправляем текстовые данные с сервера на клиент
  res.send(`<!DOCTYPE html>${html}`);
});

const PORT = 4000;
// 3. Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запустился на ${PORT}`);
});
