const mongoose = require('mongoose');
const databaseUrl =
  process.env.DATABASE_URL ||
  'mongodb+srv://piiquante:piiquante@cluster0.8u5rn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database successfully connected');
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
