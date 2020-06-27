var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cols, vals, cb) {
        orm.selectAll("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    insertOne: function(objColVals, condition, cb) {
        orm.insertOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
};

module.exports = burger;