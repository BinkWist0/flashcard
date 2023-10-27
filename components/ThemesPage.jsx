const React = require('react');
const Layout = require('./Layout');

function ThemesPage({ themes, namePlayer }) {
  return (
    <Layout>
      <h2>{namePlayer},выбери тему</h2>
      <div className="div">
        {themes.map((el) => (
          <div key="one">
            <h3>{el.them}</h3>
            <a href={`/themes/${el.id}`}>
              <img src={el.themImg} alt={el.Img} />
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}
module.exports = ThemesPage;
