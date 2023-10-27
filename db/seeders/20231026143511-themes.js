'use strict';
const { Theme, Question } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Theme.bulkCreate(
      [
        {
          them: 'Фильмы',
          themImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVSdGPsBh1FkjBtIXffoPAqTEV-RivSbLltQ&usqp=CAU',
          Questions: [
            {
              quest: 'Назовите фильм',
              answer: 'форрест гамп',
              img: 'https://cdn.iportal.ru/news/2015/99/preview/5fc2443cbe46216e265d54b8765e31a4069982ba_1200_675_c.jpg.webp-portal',
            },
            {
              quest: 'Что за актер',
              answer: 'хоакин феникс',
              img: 'https://static.beautyinsider.ru/2021/07/phoenix_joker_2019-1024x683.jpg',
            },
            {
              quest: 'Что за фильм',
              answer: 'властелин колец',
              img: 'https://cdn.iportal.ru/news/2015/99/preview/303f3f0e80e1565d76b49177e778613e0bc880d9_1200_675_c.jpg.webp-portal',
            },
          ],
        },

        {
          them: 'Сериалы',
          themImg:
            'https://img.championat.com/s/735x490/news/big/n/v/luchshie-sovremennye-serialy_16548641101241434129.jpg',
          Questions: [
            {
              quest: 'Что за сериал?',
              answer: 'проповедник',
              img: 'https://cdn.kanobu.ru/serials/images/410/eb5a513b-141c-4255-9bdb-2d7bc0e46285.jpg',
            },
            {
              quest: 'Что за сериал?',
              answer: 'во все тяжкие',
              img: 'https://memepedia.ru/wp-content/uploads/2017/08/%D0%BD%D0%B5%D0%B3%D1%80-%D0%BB%D0%B5%D0%B6%D0%B8%D1%82-%D0%BD%D0%B0-%D0%B4%D0%B5%D0%BD%D1%8C%D0%B3%D0%B0%D1%85-7.png',
            },
            {
              quest: 'Что за сериал?',
              answer: 'острые козырки',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEFR5rK954re-pqv7_8VZuJZOpTHb-HmUqw&usqp=CAU',
            },
          ],
        },
        {
          them: 'Книги',
          themImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbvnA_Pwb5sSrATGwbNW3eBKyeeNhML-8SQ&usqp=CAU',
          Questions: [
            {
              quest: 'Что за книга?',
              answer: 'Старик и море',
              img: 'https://wl-adme.cf.tsp.li/resize/728x/webp/8b3/f9c/e545625cab8a853a48c282b727.jpg.webp',
            },
            {
              quest: 'Что за книга?',
              answer: 'повелитель мух',
              img: 'https://wl-adme.cf.tsp.li/resize/728x/webp/493/0be/da2d5753a696593039953dbaf2.jpg.webp',
            },
            {
              quest: 'Что за книга?',
              answer: 'мертвые души',
              img: 'https://wl-adme.cf.tsp.li/resize/728x/webp/72b/d7d/9e68d55ea0b27fc206f9d8fdf8.jpg.webp',
            },
          ],
        },
      ],
      { include: [Question] }
    );
  },

  async down(queryInterface, Sequelize) {
    await Theme.destroy();
  },
};
