const React = require("react");

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./css/style.css" />
      </head>
      {children}
    </html>
  );
}

module.exports = Layout;
