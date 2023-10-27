const React = require('react');

function Header() {
  return (
    <header>
      <ul className="headStyle">
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="/rating">Рейтинг игроков</a>
        </li>
        <li>
          <a href="/team">Наша команда</a>
        </li>
      </ul>
    </header>
  );
}

module.exports = Header;
