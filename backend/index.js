const express = require("express");
require('dotenv').config()
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const bodyParser = require("body-parser");
const { v1: uuid } = require("uuid");

const app = express();
console.log(process.env.PORT)
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("i am Home page");
});

const events = [];

const hobbies = [];
const registrationData = [];
app.use(
  "/graphql",
  graphqlHTTP({
    schema: buildSchema(`
    type Event{
        _id:ID!
        title:String!
        description:String!
        price:Float!
        date:String!

    }
    input EventInput{
      title:String!
      description:String!
      price:Float!
      date:String!
  }



    type Hobby{
      _id:ID!
      category:String!
      description:String!
      hobby:String!
    }
    input HobbyInput{
      category:String!
      description:String!
      hobby:String!
    }
  
    type Register{
      _id:ID!
      name:String!
      gender:String!
      study:String!
      dob:String!
      

  }
  input RegisterInput{
      name:String!
      gender:String!
      study:String!
      dob:String!
}






   
    type RootQuery{
        events:[Event!]
        hobbies:[Hobby!]
        registrationData:[Register!]
    }

    type RootMutation{
        createEvent(eventInput:EventInput):Event 
        createHobby(hobbyInput:HobbyInput):Hobby
        updateHobby(hobbyInput:HobbyInput):Hobby
        createRegister(registerInput:RegisterInput):Register 
        
    }

    schema{
        query:RootQuery,
        mutation:RootMutation
    }
    `),
    rootValue: {
      events: () => {
        console.log(events);
        return events;
      },

      hobbies: () => {
        console.log(hobbies);
        return hobbies;
      },
      registrationData: () => {
        console.log("its registration function ");
        console.log(registrationData);
        return registrationData;
      },
    
      createHobby: (args) => {
        const hobby = {
          _id: uuid(),
          category: args.hobbyInput.category,
          description: args.hobbyInput.description,
          hobby: args.hobbyInput.hobby,
        };

        hobbies.push(hobby);
        return hobby;
      },

    



      createRegister: (args) => {

        console.log("i am register:=",args);
        const register = {
          _id: uuid(),
          name: args.registerInput.name,
          gender: args.registerInput.gender,
          study: args.registerInput.study,
          dob: args.registerInput.dob,
        };

        registrationData.push(register);
        return register;
      },


    

      createEvent: (args) => {
        console.log(args);
        const event = {
          _id: uuid(),
          title: args.eventInput.title,
          description: args.eventInput.description,
          price: +args.eventInput.price,
          date: args.eventInput.date,
        };

        events.push(event);
        return event;
      },
    },
    graphiql: true,
  })
);

app.listen(8000);
