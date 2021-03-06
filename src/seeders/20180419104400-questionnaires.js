/* eslint-disable no-unused-vars, no-sequences, no-unused-expressions,
no-use-before-define, no-param-reassign, no-console, func-names */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Questionnaires', [
    questionnaire('My Awesome Questionnaire!', 'premium', 1, mockDateTime(20)),
    questionnaire('My Other Awesome Questionnaire!', 'premium', 1, mockDateTime(20)),
    questionnaire('I Have An Awesome Questionnaire To!', 'premium', 2, mockDateTime(20)),
    questionnaire('The QuestionQuestionnaire', 'premium', 3, mockDateTime(20)),
    questionnaire('The Questionnaire', 'premium', 4, mockDateTime(20)),
    questionnaire('Questionnaire', 'premium', 5, mockDateTime(20)),
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Questionnaire', null, {}),
};

const Moment = require('moment');

function questionnaire(title, type, userId, date) {
  const newDate = new Date(date);
  const data = {
    title,
    type,
    userId,
    createdAt: newDate,
    updatedAt: newDate,
  };

  console.log('[Questionnaire] ', data);

  return data;
}

function mockDateTime(days) {
  return Moment().subtract(rand(days, days + 3), 'days')
    .subtract(rand(), 'hours')
    .subtract(rand(), 'minutes')
    .subtract(rand(), 'seconds')
    .format('YYYY-MM-DD HH:mm:ss');
}

function rand(min = 0, max = 60) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}
