require("../config/dbConnection");
const boxModel  = require("../models/Box")
const boxes = [
    {color: "#A8E4CA"},
    {color: "#A8E4CA"},
    {color: "#A8E4CA"},
    {color: "#A8E4CA"},
    {color: "#A8E4CA"},
    {color: "#A8E4CA"},
    {color: "#A8E4CA"},
    {color: "#A8E4CA"},
    {color: "#A8E4CA"},
    {color: "#A8E4CA"},
    {color: "#A8E4CA"},
    {color: "#DBDF9E"},
    {color: "#DBDF9E"},
    {color: "#DBDF9E"},
    {color: "#DBDF9E"},
    {color: "#DBDF9E"},
    {color: "#DBDF9E"},
    {color: "#DBDF9E"},
    {color: "#DBDF9E"},
    {color: "#DBDF9E"},
    {color: "#DBDF9E"},
    {color: "#908BD2"},
    {color: "#908BD2"},
    {color: "#908BD2"},
    {color: "#908BD2"},
    {color: "#908BD2"},
    {color: "#908BD2"},
    {color: "#908BD2"},
    {color: "#908BD2"},
    {color: "#908BD2"},
    {color: "#908BD2"},
    {color: "#3B6096"},
    {color: "#3B6096"},
    {color: "#3B6096"},
    {color: "#3B6096"},
    {color: "#3B6096"},
];

boxModel.insertMany(boxes).then(() => console.log("inserted")).catch(err => console.log(err))