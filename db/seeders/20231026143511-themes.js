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
              quest: 'Из какого это фильма',
              answer: 'sdgdgs',
              img: 'https://ixbt.online/live/images/original/20/28/05/2023/01/20/5f88cf8bd0.png',
            },
          ],
        },

        {
          them: 'Сериалы',
          themImg:
            'https://img.championat.com/s/735x490/news/big/n/v/luchshie-sovremennye-serialy_16548641101241434129.jpg',
          Questions: [
            {
              quest: '11Из какогsvdxо это фильма',
              answer: 'sdgsdvdgs',
              img: 'https://informburo.kz/storage/photos/181/63a5839477a0e.jpg',
            },
          ],
        },
        {
          them: 'Книги',
          themImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbvnA_Pwb5sSrATGwbNW3eBKyeeNhML-8SQ&usqp=CAU',
          Questions: [
            {
              quest: '222Из какогdsvdvо это фильма',
              answer: 'sdgdsdvgs',
              img: 'https://ixbt.online/live/images/original/32/11/67/2023/08/28/24a2b3db74.png',
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
