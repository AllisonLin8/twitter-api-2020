'use strict'
const bcrypt = require('bcrypt-nodejs')
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'root@example.com',
        account: 'root',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10)),
        name: 'root',
        avatar: `https://loremflickr.com/320/240/people`,
        introduction: faker.lorem.sentence(),
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user1@example.com',
        account: 'user1',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10)),
        name: 'user1',
        avatar: `https://loremflickr.com/320/240/people`,
        introduction: faker.lorem.sentence(),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user2@example.com',
        account: 'user2',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10)),
        name: 'user2',
        avatar: `https://loremflickr.com/320/240/people`,
        introduction: faker.lorem.sentence(),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user3@example.com',
        account: 'user3',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10)),
        name: 'user3',
        avatar: `https://loremflickr.com/320/240/people`,
        introduction: faker.lorem.sentence(),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user4@example.com',
        account: 'user4',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10)),
        name: 'user4',
        avatar: `https://loremflickr.com/320/240/people`,
        introduction: faker.lorem.sentence(),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user5@example.com',
        account: 'user5',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10)),
        name: 'user5',
        avatar: `https://loremflickr.com/320/240/people`,
        introduction: faker.lorem.sentence(),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user6@example.com',
        account: 'user6',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10)),
        name: 'user6',
        avatar: `https://loremflickr.com/320/240/people`,
        introduction: faker.lorem.sentence(),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user7@example.com',
        account: 'user7',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10)),
        name: 'user7',
        avatar: `https://loremflickr.com/320/240/people`,
        introduction: faker.lorem.sentence(),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user8@example.com',
        account: 'user8',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10)),
        name: 'user8',
        avatar: `https://loremflickr.com/320/240/people`,
        introduction: faker.lorem.sentence(),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user9@example.com',
        account: 'user9',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10)),
        name: 'user9',
        avatar: `https://loremflickr.com/320/240/people`,
        introduction: faker.lorem.sentence(),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user10@example.com',
        account: 'user10',
        password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10)),
        name: 'user10',
        avatar: `https://loremflickr.com/320/240/people`,
        introduction: faker.lorem.sentence(),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
