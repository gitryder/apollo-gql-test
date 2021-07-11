const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const typeDefs = `
    type Query {
        info: String!
        userCount: Int!
        users(limit: Int): [User!]!
        user(id: String!): User!
        postCount: Int!
        posts(limit: Int): [Post!]!
        post(id: String!): Post!
    }

    type User {
        id: String!    
        name: String!    
        email: String!    
        profile_picture_url: String!    
        short_desc: String!    
        long_desc: String!    
        social_linked_in: String!   
        social_instagram: String!    
        social_twitter: String!
        comments: [Comment!]!
        likes: [Like!]!
      }

    type Post {
        id: String!
        title: String!
        body_text: String!
        body_html: String!
        created_by: String!
        created_on: String!
        comments: [Comment!]!
        likes: [Like!]!
    }

    type Comment {
        user_id: String 
        post: Post
        post_id: String
        title: String
        body: String
        timestamp: String
    }

    type Like {
        user_id: String!
        post_id: String!
        timestamp: String!
    }
`;

const resolvers = {
    Query: {
        info: () => "Thinkread Provisional API v0.2",
        userCount: async () => {
            const totalUserCount = await prisma.user.count({
                select: {
                    _all: true
                }
            });
            return totalUserCount._all;
        },
        users: async (parent, args) => {
            if (!args.limit) {
                return await prisma.user.findMany({
                    include: {
                        comments: true,
                        likes: true
                    }
                });
            } else {
                return await prisma.user.findMany({
                    take: args.limit,
                    include: {
                        comments: true,
                        likes: true
                    }
                });
            }
        },
        user: async (parent, args) => {
            return await prisma.user.findUnique({
                where: {
                    id: args.id
                },
                include: {
                    comments: true,
                    likes: true
                }
            });
        },
        postCount: async () => {
            const totalPostCount = await prisma.post.count({
                select: {
                    _all: true
                }
            });
            return totalPostCount._all;
        },
        posts: async (parent, args) => {
            if (!args.limit) {
                return await prisma.post.findMany({
                    include: {
                        comments: true,
                        likes: true
                    }
                });
            } else {
                return await prisma.post.findMany({
                    take: args.limit,
                    include: {
                        comments: true,
                        likes: true
                    }
                });
            }
        },
        post: async (parent, args) => {
            return await prisma.post.findUnique({
                where: {
                    id: args.id
                },
                include: {
                    comments: true,
                    likes: true
                }
            });
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