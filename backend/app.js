const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT;
connectDB();
const app = express();
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true,
}))
app.listen(port, console.log(`Server Running on Port :${port}`));


