require('@babel/register');
const express = require('express');
const app = express();

// настройки для сервера, чтобы при отправке формы появлялось req.body
app.use(express.urlencoded({ extended: true }));
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ssr = require('./middlewares/ssr');
const ThemesPage = require('./components/ThemesPage');
const MainPage = require('./components/MainPage');
const RatingPage = require('./components/RatingPage');
const QuestionPage = require('./components/QuestionPage');
const OurTeam = require('./components/OurTeam');
const PORT = 3000;

const { Theme } = require('./db/models');
const { Question } = require('./db/models');
const { Player } = require('./db/models');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(ssr);

// app.get('/themes', async (req, res) => {
//   const question = await Question.findOne({ where: { id: 1 } });
//   // console.log(question);
//   const themes = await Theme.findAll();
//   const reactElement = React.createElement(ThemesPage, { themes });
//   const html = ReactDOMServer.renderToStaticMarkup(reactElement);
//   res.send(`<!DOCTYPE html>${html}`);
// });

app.get(`/themes/:questionid/`, async (req, res) => {
  const { themid, questionid } = req.params;

  const question = await Question.findAll({ where: { theme_id: questionid } });
  console.log(question);
  const html = res.renderComponent(QuestionPage, { question });
  res.send(html);
});

// app.get(`/themes/:themesId/questions/:qId`, async (req, res) => {});

app.post(`/themes/:themesId/questions/:qId`, async (req, res) => {
  // console.log(req.params);
  const { themesId, qId } = req.params;
  const { answer } = req.body;
  try {
    const question = await Question.findOne({ where: { id: qId } });
    const trueAnswer = question.dataValues.answer;
    console.log(answer, '--------------');
    if (answer === trueAnswer) {
      console.log(123);
      return res.json({ success: true });
    } else {
      return res.json({
        success: false,
      });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

app.get('/', (req, res) => {
  const html = res.renderComponent(MainPage);
  res.send(html);

  // const reactElement = React.createElement(MainPage);
  // const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  // res.send(`<!DOCTYPE html>${html}`);
});

app.get('/team', async (req, res) => {
  const html = res.renderComponent(OurTeam);
  res.send(html);
});

app.get('/rating', async (req, res) => {
  const report = await Player.findAll();
  const html = res.renderComponent(RatingPage, { report });
  res.send(html);

  // const reactElement = React.createElement(RatingPage);
  // const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  // res.send(`<!DOCTYPE html>${html}`);
});

app.post('/themes', async (req, res) => {
  let { namePlayer } = req.body;
  // console.log(namePlayer, '>>>>>>>>>>>');
  if (req.body.namePlayer === '') {
    namePlayer = 'безымянный игрок';
  }
  await Player.create({ name: namePlayer });
  const themes = await Theme.findAll();
  // console.log(themes, '>>>>><<<>');

  const html = res.renderComponent(ThemesPage, { themes, namePlayer });
  res.send(html);

  // const reactElement = React.createElement(ThemesPage, { themes, namePlayer });
  // const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  // res.send(`<!DOCTYPE html>${html}`);
});

app.listen(PORT, () => {
  console.log('Server ready');
});
