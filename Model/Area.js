const mongoose = require("mongoose");
const areaSchema = new mongoose.Schema({
    Name: String,
    BinOne: {
        BinName: String,
        BinType: String,
        BinDescription: String,
        BinOccurrence: Number,
        BinNextDate: String,
        BinCollectionWeekStart: String,
        BinCollectionWeekEnd: String,
        BinContents: []
    },
    BinTwo: {
        BinName: String,
        BinType: String,
        BinDescription: String,
        BinOccurrence: Number,
        BinNextDate: String,
        BinCollectionWeekStart: String,
        BinCollectionWeekEnd: String,
        BinContents: []
    },
    BinThree: {
        BinName: String,
        BinType: String,
        BinDescription: String,
        BinOccurrence: Number,
        BinNextDate: String,
        BinCollectionWeekStart: String,
        BinCollectionWeekEnd: String,
        BinContents: []
    },
    BinFour: {
        BinName: String,
        BinType: String,
        BinDescription: String,
        BinOccurrence: Number,
        BinNextDate: String,
        BinCollectionWeekStart: String,
        BinCollectionWeekEnd: String,
        BinContents: []
    },
    BinFive: {
        BinName: String,
        BinType: String,
        BinDescription: String,
        BinOccurrence: Number,
        BinNextDate: String,
        BinCollectionWeekStart: String,
        BinCollectionWeekEnd: String,
        BinContents: []
    },
    BinSix: {
        BinName: String,
        BinType: String,
        BinDescription: String,
        BinOccurrence: Number,
        BinNextDate: String,
        BinCollectionWeekStart: String,
        BinCollectionWeekEnd: String,
        BinContents: []
    },
    BinSeven: {
        BinName: String,
        BinType: String,
        BinDescription: String,
        BinOccurrence: Number,
        BinNextDate: String,
        BinCollectionWeekStart: String,
        BinCollectionWeekEnd: String,
        BinContents: []
    },
    BinEight: {
        BinName: String,
        BinType: String,
        BinDescription: String,
        BinOccurrence: Number,
        BinNextDate: String,
        BinCollectionWeekStart: String,
        BinCollectionWeekEnd: String,
        BinContents: []
    },

},{ collection : 'Areas'});

const Area = mongoose.model("Areas", areaSchema);
module.exports = Area;