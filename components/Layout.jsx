const React = require("react");
const Header=require('./Header')
const Footer=require('./Footer')


function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./css/style.css" />
      </head>
      <Header/>
      {children}
      <Footer/>
    </html>
  );
}

module.exports = Layout;
