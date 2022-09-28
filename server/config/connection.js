import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/siteseers", {
  //change name
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export default mongoose.connection;
