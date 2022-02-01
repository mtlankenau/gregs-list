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
    responseCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Response {
    _id: ID
    responseText: String
    username: String
    createdAt: String
    postTitle: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts: [Post]
    post(_id: ID!): Post
    responses: [Response]
    response(_id: ID!): Response
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(
      username: String!,
      email: String!,
      password: String!
      firstName: String!,
      lastName: String!,
      phoneNumber: String!
    ): Auth
    addPost(
      postType: String!,
      postCategory: String!,
      postTitle: String!,
      postPrice: String!,
      postDescription: String!
    ) : Post
    addResponse(postId: ID!, responseText: String): Post
  }
`;

// export the typeDefs
module.exports = typeDefs;