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
    query post($_id: ID!) {
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
    }
`

export const GET_USER = gql`
    query users {
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
    query user($username: String!) {
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
    }
`
export const GET_POST_BY_CATEGORY = gql`
    query postByCat($postCategory: String!) {
        postByCat(postCategory: $postCategory) {
            postType
            postTitle
            postPrice
            postDescription
            _id
            username
            responseCount
            createdAt
            postCategory
        }
    }
`
