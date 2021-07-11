const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client')
const Constants = require('./constants.js');

const prisma = new PrismaClient();

const typeDefs = `
    type Query {
        info: String!
        drinkCount: Int!
        drinks: [Drink!]!
        drink(id: Int!): Drink
    }

    type Mutation {
        drink(
            id: ID!
            name: String!
            description: String!
            prepTime: Int!
            hasAlcohol: Boolean!
            image: String!
        ): Drink!
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
        info: () => "A GraphQL API running on Apollo server built by dan",
        drinks: async () => {
            return await prisma.drink.findMany();
        },
        drinkCount: async () => {
            const rawDrinkCount = await prisma.$queryRaw('SELECT COUNT(id) AS id FROM drinks');
            return rawDrinkCount[Constants.ARRAY_FIRST_ELEMENT].id;
        },
        drink: async (parent, args) => {
            return await prisma.drink.findUnique({
                where: {
                    id: args.id
                }
            });
        }
    },
    Mutation: {
        drink: async (parent, args) => {  
            const drink = {
                id: args.id,
                name: args.name,
                description: args.description,
                prepTime: args.prepTime,
                hasAlcohol: args.hasAlcohol,
                image: args.image
            };
            await prisma.drink.create({ 
                data: drink
            });
            return drink;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Your server is running on ${url}`)
});