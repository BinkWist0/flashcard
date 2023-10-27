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
      <div className='questionContainer' data-themeid={question[0].theme_id}>
        {question.map((el) => (
          <div className='idquest' data-questionid={el.id}>
            <div >{el.quest}</div>
            <img src={el.img} />
            <form
              className="js-add-form"
              action={`/themes/${el.theme_id}/questions/${el.id}`}
              method="POST"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                width: '200px',
              }}
            >
              <input type="text" name="otvet" />
              <button type="submit">ответ</button>
              <div  className='js-facts-container'></div>
            </form>
           
          </div>
        ))}
      </div>
    </Layout>
  );
}
module.exports = QuestionPage;
