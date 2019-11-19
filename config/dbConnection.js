const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/ajax-reinf', {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to DB, DB name as ajax-reinf")
});