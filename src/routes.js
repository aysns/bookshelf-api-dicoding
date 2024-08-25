const { addBooksHandler, getAllBooksHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },

  {
    method: 'GET',
    path: '/notes',
    handler: getAllBooksHandler,
  },
];

module.exports = routes;