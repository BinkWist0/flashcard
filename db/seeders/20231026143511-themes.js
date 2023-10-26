'use strict';
const { Theme } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Theme.bulkCreate([
      { them: 'Фильмы' },
      { them: 'Сериалы' },
      { them: 'Книги' },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Theme.destroy();
  },
};
