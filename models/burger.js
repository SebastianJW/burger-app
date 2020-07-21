const orm = require('../config/orm');

const burger = {
  selectAll: async() => {
    const response = await orm.selectAll('burgers');
    return response;
  },
  // The variables cols and vals are arrays.
  insertOne: async(burgerName) => {
    const response = await orm.insertOne('burgers', burgerName);
    return response;
  },
  updateOne: async(itemId) => {
    const response = await orm.updateOne('burgers', itemId);
    return response;
  }
}

module.exports = burger