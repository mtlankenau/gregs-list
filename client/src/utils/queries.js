import {gql} from '@apollo/client';

export const ME = gql`
    query me {
        _id
        username
        email
        firstName
        lastName
        phoneNumber
    }
`;

export const GET_POSTS = gql`
    query posts {
        _id
        postType
        postCategory
        postTitle
        postPrice
        postDescription
        createdAt
        username
        responses {
            _id
            responseText
            username
            createdAt
        }
    }
`

export const GET_SINGLE_POST = gql`
    post(_id: $_id) {
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

export const GET_USER = gql`
    users {
        _id
        username
        email
        firstName
        lastName
        phoneNumber
        posts {
            _id
            postType
            postCategory
            postTitle
            postPrice
            postDescription
            createdAt
            username
            responses {
                _id
                responseText
                username
                createdAt
            }
            responseCount
        }
        postCount
    }
`

export const GET_SINGLE_USER = gql`
    user(username: $username) {
        _id
        username
        posts {
            _id
            createdAt
            postType
            postCategory
            postTitle
            postPrice
            postDescription
        }
    }
`
