const mongoose = require("mongoose");
console.log(mongoose);
module.exports = () => {
    return mongoose.connect("mongodb://localhost:27017/unit4c4");
};