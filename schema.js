const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
    
} = require('graphql'); 

const customers = [
    {id : '1', name: 'Essy Okal', email: 'essy@gmail.com', age: 20, address: 'karen'},
    {id : '2', name: 'Jimmy Temmy', email: 'jimmy@gmail.com', age: 33, address: 'South c'},
    {id : '3', name: 'Khusa Jason', email: 'khusa@gmail.com', age: 27, address: 'Ngong'},
    {id : '4', name: 'Mimmy Mars', email: 'mimmy@gmail.com', age: 31, address: 'Hurlingam'}
]

// Customer Type declaration
const CustomerType = new GraphQLObjectType({
    name : 'Cutomer',
    fields: () => ({
        id : {type : GraphQLString},
        name: {type : GraphQLString},
        email : {type : GraphQLString},
        id : {type : GraphQLInt}
    })
})

// Root query
const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields: {
        customer : {
            type: CustomerType,
            // specify fetching customer by id
            args:{
                id:{type : GraphQLString}
            },
            resolve(parentValue, args){
                //loop through customers
                for(let i = 0; i < customers.length; i++){
                    if(customers[i].id == args.id){
                        return customers [i];
                    }
                }
    
            }
        }

    }  
});

module.exports = new GraphQLSchema({

});