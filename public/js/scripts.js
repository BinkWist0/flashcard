const forms = document.querySelectorAll('.js-add-form');
const container = document.querySelector('.js-facts-container');

for (let i = 0; i < forms.length; i++) {
  if (forms[i]) {
    console.log(forms[i]);
    forms[i].addEventListener('submit', async (event) => {
      // предотвращаю дефолтное поведение
      event.preventDefault();
  
      // 1 шаг забрать данные из инпутов
      const { otvet } = event.target;
  
      const quest = event.target.closest('.idquest');
      const theme = event.target.closest('.questionContainer');
      console.log(quest.dataset.questionid);
  
      // 2 шаг отправить запрос на сервер
      const response = await fetch(
        `/themes/${theme.dataset.themeid}/questions/${quest.dataset.questionid}`,
        {
          method: 'POST',
          body: JSON.stringify({
            answer: otvet.value,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      // fetch оптравляет большой объект по типу response
  
      // парсим этот  объект в формате json, чтобы забрать тело ответа сервера
      const data = await response.json();
      console.log(data.success, '0000000000000');
  
      if (data.success === true) {
        container.insertAdjacentHTML('afterend', 'верно');
      } else {
        container.insertAdjacentHTML('afterend', 'упс!');
      }
        
      
    });
  }
}

// if (form) {
//   form.addEventListener('submit', async (event) => {
//     // предотвращаю дефолтное поведение
//     event.preventDefault();

//     // 1 шаг забрать данные из инпутов
//     const { otvet } = event.target;

//     const quest = event.target.closest('.idquest');
//     const theme = event.target.closest('.questionContainer');
//     console.log(quest.dataset.questionid);

//     // 2 шаг отправить запрос на сервер
//     const response = await fetch(
//       `/themes/${theme.dataset.themeid}/questions/${quest.dataset.questionid}`,
//       {
//         method: 'POST',
//         body: JSON.stringify({
//           answer: otvet.value,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     // fetch оптравляет большой объект по типу response

//     // парсим этот  объект в формате json, чтобы забрать тело ответа сервера
//     const data = await response.json();
//     console.log(data);

//     // понять, куда вставлять
//     const container = document.querySelector('.js-facts-container');
//     // что вставлять
//     container.insertAdjacentHTML('beforebegin', 'верно');
//   });
// }
