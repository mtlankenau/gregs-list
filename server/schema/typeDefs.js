// import the graphQL template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
    phoneNumber: String
    posts: [Post]
    postCount: Int
  }

  type Post {
    _id: ID
    postType: String
    postCategory: String
    postTitle: String
    postPrice: String
    postDescription: String
    createdAt: String
    username: String
    responses: [Response]
  }

  type Response {
    _id: ID
    responseText: String
    username: String
    createdAt: String
    postTitle: Post.postTitle
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts: [Post]
    post(username: String!, _id: ID!): Post
    responses: [Response]
    response(username: String!, _id: ID!): Response
  }

  type Mutation {
    addUser(
      username: String!,
      email: String!,
      password: String!
      firstName: String!,
      lastName: String!,
      phoneNumber: String!
    ): User
  }
`;

// export the typeDefs
module.exports = typeDefs;