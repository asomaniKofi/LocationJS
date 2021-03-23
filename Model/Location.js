const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
    Name:String,
    Areas: []
},{ collection : 'Locations'});

const Location = mongoose.model("Locations", locationSchema);
module.exports = Location;