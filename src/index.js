const { ApolloServer } = require('apollo-server');
const drinks = require('./drinks.js');

const typeDefs = `
    type Query {
        info: String!
        drinkCount: Int!
        drinks: [Drink!]!
        drink(id: Int!): Drink
    }

    type Drink {
        id: ID!
        name: String!
        description: String!
        prepTime: Int!
        hasAlcohol: Boolean!
        image: String!
    }
`;

const resolvers = {
    Query: {
        info: () => "An apollo-gql server built by dan",
        drinks: () => drinks.getAllDrinks(),
        drinkCount: () => drinks.getDrinkCount(),
        drink: (parent, args) => drinks.getDrinkById(args.id)
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Your server is running on ${url}`)
});