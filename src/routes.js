const { addBooksHandler, getBookByIdHandler } = require('./handler');

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

  {
    method: 'GET',
    path: '/books/{bookid}',
    handler: getBookByIdHandler,
  }
];

module.exports = routes;