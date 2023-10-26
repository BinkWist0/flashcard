const React = require("react");
const Layout = require("./Layout");

function ThemesPage({ themes }) {
  return (
    <Layout>
      <h2>Выбери тему!</h2>
      <div className="div">
        {themes.map((el) => (
          <div key="one">
            <h3>{el.them}</h3>
            <a href={`/themes/${el.id}`}>
              <img
                src="https://russian.eurasianet.org/sites/default/files/styles/article/public/2023-02/tms21wrovnpjs5r9it7ucjokjqeuq7ys.jpg?itok=xedAYBgE"
                alt=""
              />
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}
module.exports = ThemesPage;
