const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boxSchema= new Schema({
    color: String,
})

const boxModel = mongoose.model("Box", boxSchema);
module.exports = boxModel;