require("@babel/register");
const express = require("express");
const app = express();
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const ThemesPage = require("./components/ThemesPage");
const MainPage = require("./components/MainPage");
const PORT = 3000;
const { Theme } = require('./db/models');

app.get("/themes",  async (req,res) => {
const thems=await Theme

    const reactElement = React.createElement(ThemesPage);
    const html = ReactDOMServer.renderToStaticMarkup(reactElement);
    res.send(`<!DOCTYPE html>${html}`);
})


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
