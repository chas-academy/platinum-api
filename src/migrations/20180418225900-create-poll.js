/* eslint-disable no-unused-vars, no-sequences, no-unused-expressions */

'use strict',

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Polls', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'userId',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    questionnaireId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Questionnaires',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    link: {
      type: Sequelize.STRING,
      unique: true,
    },
    qrCode: {
      type: Sequelize.STRING,
      unique: true,
    },
    status: {
      type: Sequelize.ENUM('active', 'closed'),
    },
    maxNumOfVotes: {
      type: Sequelize.INTEGER,
    },
    duration: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    closedAt: {
      type: Sequelize.DATE,
    },
  })
    .then(() => {
      queryInterface.addIndex('Polls', { fields: ['link', 'qrCode', 'status', 'duration'] });
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Polls'),
};

/* eslint-enable no-unused-vars, no-sequences, no-unused-expressions */
