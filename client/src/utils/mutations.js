import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!, $phoneNumber: String!) {
      addUser(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber) {
        token
        user {
            _id
            username
            email
            firstName
            lastName
            phoneNumber
        }
      }
    }
`;



export const ADD_RESPONSE = gql`
  mutation addResponse($postId: ID!, $responseText: String!) {
    addResponse(postId: $postId, responseText: $responseText) {
      postTitle
      username
      responses {
          username
          responseText
          createdAt
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
          username
          email
          phoneNumber
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postType: String!, $postCategory: String!, $postTitle: String!, $postPrice: String!, $postDescription: String!) {
    addPost(postType: $postType, postCategory: $postCategory, postTitle: $postTitle, postPrice: $postPrice, postDescription: $postDescription) {
        _id
        postType
        postCategory
        postTitle
        postPrice
        postDescription
        createdAt
        username
    }
  }

`;

export const DELETE_POST = gql`
  mutation deletePost($username: String!, $postId: ID!) {
    deletePost(username: $username, postId: $postId) {
      _id
    }
  }
`;
