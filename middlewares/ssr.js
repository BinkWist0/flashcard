const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderComponent(component, props) {
  const reactElement = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  return `<!DOCTYPE html>${html}`;
}

function ssr(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

module.exports = ssr;