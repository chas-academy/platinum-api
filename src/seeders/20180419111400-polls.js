'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Polls', [
      poll(1, 1, 'https://localhost:7771/polls/1', 'https://localhost:7771/polls/1','closed', 10, mockDateTime(20)),
      poll(1, 1, 'https://localhost:7771/polls/2', 'https://localhost:7771/polls/2','closed', 60, mockDateTime(20)),
      poll(2, 3, 'https://localhost:7771/polls/3', 'https://localhost:7771/polls/3','closed', 120, mockDateTime(20)),
      poll(1, 2, 'https://localhost:7771/polls/4', 'https://localhost:7771/polls/4','closed', 5, mockDateTime(20)),
      poll(3, 4, 'https://localhost:7771/polls/5', 'https://localhost:7771/polls/5','closed', 15, mockDateTime(20)),
      poll(4, 5, 'https://localhost:7771/polls/6', 'https://localhost:7771/polls/6','closed', 240, mockDateTime(20))
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Polls', null, {})
  }
}

const Moment = require('moment')

function poll(user, questionnaire, link, qr_code, status, duration, date,) {
  const newDate = new Date()
  const closedDate = new Date(date)
  let maxVotes;

  const data = {
    user,
    questionnaire,
    link,
    qr_code,
    status,
    max_num_of_votes: maxVotes,
    duration,
    createdAt: newDate,
    updatedAt: newDate,
    closedAt: closedDate,
  }

  console.log('[Poll] ', data)

  return data
}

function mockDateTime(days) {
  return Moment().subtract(rand(days, days + 3), 'days')
                 .subtract(rand(), 'hours')
                 .subtract(rand(), 'minutes')
                 .subtract(rand(), 'seconds')
                 .format('YYYY-MM-DD HH:mm:ss')
}

function rand(min=0, max=60) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}