const React = require('react');

module.exports = function MainPage() {
  return (
    <div>
      <h1>Welcome to SuperQuiz!</h1>
      <img src="https://t3.ftcdn.net/jpg/04/30/43/54/360_F_430435425_jcQk0X3xT1dkrVuMpDM1dKT1QVc5WiU6.jpg" />
      <form
        // className="js-add-form"
        action="/themes"
        method="GET"
        style={{
          display: 'flex',
          // flexDirection: 'column',
          gap: '100px',
        }}
      >
        <label>
          Введите имя:
          <input type="text" name="animal" />
        </label>
        <button type="submit">Начать квиз</button>
      </form>
    </div>
  );
};
