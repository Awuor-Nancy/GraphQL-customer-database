const express= require ("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema = require("./schema.js"); 

// initialize our server and create an app variable
const app = express()
// enable graphql to be used

app.use("/graphql", expressGraphQL({
    schema: schema,
    graphiql: true

}))

// run our server
app.listen( 5000, () => {
    console.log("server is running at port 5000....");

})


