// Import MySQL connection.
const connection = require('./connection.js');

// orm object is a set of functions that make SQL queries 
const orm = {
  // method to query all columns from a table
  selectAll: function(){
    const queryString = 'SELECT * FROM burgers'

    // Creates a new promise to represent an async value. 
    // --starts in pending status  
    return new Promise((resolve, reject) => {
      connection.query(queryString, 'burgers', function(err, result){
        //--reject if failed 
        if(err) {
          return reject(err)
        }
        //--resolve if succeded
        console.log(result)
        return resolve(result)
      })
    })

  },
  // method to insert a value into a table and column 
  insertOne: function(burgerName){
    const queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES (?,?)';

    // Creates a new promise to represent an async value. 
    // --starts in pending status  
    return new Promise((resolve, reject) => {
      connection.query(queryString, [burgerName, false], function(err, result){
        //--reject if failed 
        if(err) {
          return reject(err)
        }
        //--resolve if succeded
        console.log(result)
        return resolve(result)
      })
    })

  },
  // method to update a table and column based on a new value where the id exists
  updateOne: function(burgerBool, itemId){
    const queryString = 'UPDATE burgers SET devoured = (?) WHERE id = (?)';

    // Creates a new promise to represent an async value. 
    // --starts in pending status 
    return new Promise((resolve, reject) => {
      connection.query(queryString, [burgerBool, itemId], function(err, result){
        //--reject if failed 
        if(err) {
          return reject(err)
        }
        //--resolve if succeded 
        console.log(result)
        return resolve(result)
      })
    })

  }
}

module.exports = orm;