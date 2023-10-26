const React = require("react");

function MainPage() {
  return (
    <div>
      <h2>Выбери тему!</h2>
      <div>
        <h3>Тема 1</h3>
        <img
          style={{ width: "200px" }}
          src="https://rg.ru/uploads/images/187/07/30/11.jpg"
          alt="Car"
        />
        <button>Выбрать</button>
      </div>
    </div>
  );
}
module.exports = MainPage;
