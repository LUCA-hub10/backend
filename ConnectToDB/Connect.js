const mongoose = require("mongoose");

const connect = async () => {
    try {
      await mongoose.connect(process.env.DB_URI);
      console.log("connected to data base successfully");
    } catch (error) {
      console.error(error);
    }
  };

  module.exports = connect;