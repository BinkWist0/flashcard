'use strict';

const { Question } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Question.bulkCreate([
      {
        quest: 'qwer',
        answer: 'fgdf',
        img: 'https://ixbt.online/live/images/original/20/28/05/2023/01/20/5f88cf8bd0.png',
        theme_id: 1,
      },
      {
        quest: 'dsfsdg',
        answer: 'dsgsdg',
        img: 'https://informburo.kz/storage/photos/181/63a5839477a0e.jpg',
        theme_id: 2,
      },
      {
        quest: 'sdgsdgs',
        answer: 'sdgdfh',
        img: 'https://ixbt.online/live/images/original/32/11/67/2023/08/28/24a2b3db74.png',
        theme_id: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Question.destroy();
  },
};
