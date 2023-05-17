var db = require('../db/db'); //import dbConfig.js

const Depression = { //declare a const to hold the functions to your api e.g. get /users/ => findAll function which has "select * from user;"
    //1)
    findAll: function (callback) {  //declare a name to function
        const findAllUsersQuery = "select * from depression;";  //the const that will send the msg to database as commands
        db.query(findAllUsersQuery, (error, results) => {  //sent, and to either get 'error' or 'results'
            if (error) {  //when error occured
                callback(error, null);
                return;
            };
            callback(null, results);  //no error, give results
        });
    },

    //2)
    insert: function (depresion, callback) {
        const insertUserQuery =
            `
        INSERT INTO user (scene, opt)
        VALUES (?, ?);
        `;
        db.query(
            insertUserQuery,
            [depresion.scene, depresion.opt],
            (error, results) => {
                if (error) {
                    callback(error, null);
                    return;
                };
                callback(null, results);
            });
    }
}
module.exports = Depression; //exports Depression (the const that holds the functions)