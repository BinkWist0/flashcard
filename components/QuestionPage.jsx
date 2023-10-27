// const React = require('react');
// const Layout = require('./Layout');

// function QuestionPage({ question }) {
//   return (
//     <Layout>
//       <h2>Вопросы</h2>
//       <div className="div">
//         {question.map((el) => (
//           <div key="one">
//             <img src="https://cs12.pikabu.ru/post_img/big/2020/08/26/7/159843628311224129.jpg" />
//             <div>{el.quest}</div>
//           </div>
//           //   <form
//           //   action="/themes"
//           //   method="GET"
//           // >
//           //   <label>
//           //     <input type="text" />
//           //   </label>
//           //   <button type="submit">Дать ответ</button>
//           // </form>
//         ))}
//       </div>
//     </Layout>
//   );
// }
// module.exports = QuestionPage;

// const React = require("react");
// const Layout = require("./Layout");

// function QuestionPage({ question }) {
//   return (
//     <div>
//       Вопросы
//       {question.map((el) => (
//         <div>
//           {el.quest}
//         </div>
//       ))}
//       Дать ответ
//     </div>
//   );
// }
// module.exports = QuestionPage;
const React = require('react');
const Layout = require('./Layout');

function QuestionPage({ question }) {
  return (
    <Layout>
      Вопросы
      <div key={question.id}>{question.quest}</div>
      <img src={question.img} />
      <form>
        <label>
          <input type="text" name="namePlayer" />
        </label>
        <button type="submit">Ответить</button>
      </form>
    </Layout>
  );
}
module.exports = QuestionPage;
