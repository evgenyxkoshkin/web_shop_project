'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Обновление типов данных
    await queryInterface.changeColumn('device_infos', 'title', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('device_infos', 'description', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    // В случае отката миграции вернем старые типы данных
    await queryInterface.changeColumn('device_infos', 'title', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
    await queryInterface.changeColumn('device_infos', 'description', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
  }
};