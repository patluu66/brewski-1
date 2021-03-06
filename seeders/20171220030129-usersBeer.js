"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("usersBeers", [{
        BeerId: 1,
        UserId: 2,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        BeerId: 2,
        UserId: 2,
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("usersBeers", null, {});
  }
};