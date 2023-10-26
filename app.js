require("@babel/register");
const express = require("express");
const app = express();
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const MainPage = require("./components/MainPage");
const PORT = 3000;

app.get("/themes", (req,res) => {
    const reactElement = React.createElement(MainPage);
    const html = ReactDOMServer.renderToStaticMarkup(reactElement);
    res.send(`<!DOCTYPE html>${html}`);
})

app.listen(PORT, () => {
  console.log("Server ready");
});
