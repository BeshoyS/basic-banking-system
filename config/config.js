const mongoose = require("mongoose");

const dbConn = () => {
  mongoose
    .connect(process.env.MONGO_CONNECTION_DEPLOY)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

module.exports = dbConn;
