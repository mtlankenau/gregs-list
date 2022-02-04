import {gql} from "@apollo/client";

export const ADD_USER = gql`
    mutation addUser(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber) {
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
`



export const ADD_RESPONSE = gql`
    mutation addResponse(postId: $postId, responseText: $responseText) {
        postTitle
        username
        responses {
            username
            responseText
            createdAt
        }
    }
`

export const LOGIN_USER = gql`
    mutation login(username: $username, password: $password) {
        token
        user {
            username
            email
            phoneNumber
        }
    }
`
export const ADD_POST = gql`
    mutation addPost(postType: $postType, postCategory: $postCategory, postTitle: $postTitle, postPrice: $postPrice, postDescription: postDescription) {
        _id
        postType
        postCategory
        postTitle
        postPrice
        postDescription
        createdAt
        username
    }

`
