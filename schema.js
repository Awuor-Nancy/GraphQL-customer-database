//    include axios to enable get request
const axios = require("axios"); 

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
    
} = require("graphql"); 

   // Hardcoded data
// const customers = [
//     {id : "1", name: "Essy Okal",   email: "essy@gmail.com",  age: 20, address: "karen"},
//     {id : '2', name: "Jimmy Temmy", email: "jimmy@gmail.com", age: 33, address: "South c"},
//     {id : '3', name: "Khusa Jason", email: "khusa@gmail.com", age: 27, address: "Ngong"},
//     {id : '4', name: "Mimmy Mars",  email: "mimmy@gmail.com", age: 31, address: "Hurlingam"}
// ]

// Customer Type declaration
const CustomerType = new GraphQLObjectType({
    name : "Cutomer",
    fields: () => ({
        id : {type : GraphQLString},
        name: {type : GraphQLString},
        email : {type : GraphQLString},
        age : {type : GraphQLInt},
        address : {type : GraphQLString}
    })
})

// Root query and data fetching
const RootQuery = new GraphQLObjectType({
    name : "RootQueryType",
    fields: {
        customers : {
            type: CustomerType,
            // specify fetching customer by id
            args:{
                id:{type : GraphQLString}
            },
            resolve(parentValue, args){

                //loop through customers
                // for(let i = 0; i < customers.length; i++){
                //     if(customers[i].id == args.id){
                //         return customers [i];
                //     }
                // }

                return axios.get("http://localhost:/customers/" + args.id)
                .then(res => res.data)
                .then()
            }
        },
        // display all customers
        customers:{
            type: new GraphQLList(CustomerType),
            resolve(parentValue, args){
                return customers;
            }           
        }       
    }  
});

module.exports = new GraphQLSchema({
    query: RootQuery

});