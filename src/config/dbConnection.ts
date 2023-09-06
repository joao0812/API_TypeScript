import mongoose from "mongoose";

const mongoDB_connection =
  process.env.mongoDB_API ||
  "mongodb+srv://logbookSenai:senha123@logbookcluster.hiablpo.mongodb.net/logBook";

mongoose.connect(mongoDB_connection);

let logBookDB = mongoose.connection

export default logBookDB
