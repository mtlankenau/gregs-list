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

export const GET_POSTS = gql `
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