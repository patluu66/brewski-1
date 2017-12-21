'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Beers', [{
        beername: 'Ripper',
        brewery: "Stone",
        abv: 4.8,
        shortDes: "A pretty solid beer",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        beername: 'Jamaican red ale',
        brewery: "Mad River",
        abv: 6,
        shortDes: "A red ale, interesting",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        beername: 'Sculpin',
        brewery: "Ballast Point",
        abv: 7,
        shortDes: "A FAR too expensive beer",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        beername: 'Coors',
        brewery: "shittttt",
        abv: 3.1,
        shortDes: "crap",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        beername: 'Falco',
        brewery: "Evil Twin",
        abv: 7.3,
        shortDes: "I wish there was more of these",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        beername: 'Eggnog IPA',
        brewery: "Evil Twin",
        abv: 8.1,
        shortDes: "Lol",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        beername: 'Lil Sumpin Sumpin',
        brewery: "Lagunitas",
        abv: 7.5,
        shortDes: "Hard to go wrong with this",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        beername: 'Russian Imperial Stout',
        brewery: "Stone",
        abv: 10.5,
        shortDes: "One of my favs",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        beername: 'Bud Light',
        brewery: "more shitttttt",
        abv: 3.9,
        shortDes: "stoppppp",
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Beers', null, {});
  }
};
