// db.js
const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");

const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';
const dbName = 'bookExchangeDB';

let db;

async function connectDB() {
  try {
    let db = mongoose.connection;
  
    mongoose.connect(
      uri, {
      useNewUrlParser: true,
    }
    );

    var flag = 0;
    var timer;
    timer = setInterval(() => {
      if (flag == 0) {
        console.log("Re-Connecting to database");
        mongoose.connect(
          uri, {
          useNewUrlParser: true,
        }
        );
      }
    }, 6000);

    db.on("open", async function () {
      flag = 1;
      console.log("Database is connected ...");
      
      
    });

    db.on("error", function (err) {
        console.error(JSON.stringify(err))
      console.error("Database connection error ...");
    });
  } catch (err) {
      console.error(JSON.stringify(err))
  }


}
const getDB = () => {
  if (!db) {
    throw new Error('Database not initialized. Call connectDB first.');
  }
  return db;
};

module.exports = { connectDB, getDB };
