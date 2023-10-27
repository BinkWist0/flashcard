const React = require('react');

function newQuestion() {
  return (
    <form
      className="js-add-form"
      action ={`/themes/${question.id}`}
      method="POST"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div key={question.id}>{question.quest}</div>
      <img src={question.img} />
        <label>
          <input type="text" name="otvet" />
        </label>
        <button type="submit">Ответить</button>
    </form>
  );
}

module.exports = newQuestion;
