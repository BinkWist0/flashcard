require("@babel/register");
const express = require("express");
const app = express();
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const ThemesPage = require("./components/ThemesPage");
const MainPage = require("./components/MainPage");
const PORT = 3000;

const { Theme } = require("./db/models");
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/themes", async (req, res) => {
  const themes = await Theme.findAll()
  const reactElement = React.createElement(ThemesPage, {themes});
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  res.send(`<!DOCTYPE html>${html}`);
});



app.get("/", (req,res) => {
    const reactElement = React.createElement(MainPage);
    const html = ReactDOMServer.renderToStaticMarkup(reactElement);
    res.send(`<!DOCTYPE html>${html}`);
})


app.post('/themes',(req,res)=>{
    
})



app.listen(PORT, () => {
  console.log("Server ready");
});
