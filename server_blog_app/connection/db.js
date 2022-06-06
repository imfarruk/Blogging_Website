import mongoose from "mongoose";

const Connection = async (username,password) => {
  try {
    const URL = `mongodb+srv://${username}:${password}@cluster0.dfmzj.mongodb.net/Blogging_Website?retryWrites=true&w=majority`;
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.log(`Not Connected ${err}`);
  }
};

export default Connection;
