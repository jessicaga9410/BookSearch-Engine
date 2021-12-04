import { gql } from '@apollo/client';

export const GET_ME= gql`
query getSingleUser {
  getSingleUser{
      _id
      username
      savedBooks {
          bookId
          author
          description
          title
          image
      }
  }
}
`;

export const LOGIN_USER= gql`
    query login($email: String!, $password: String!) {
        login (email: $email, password: $password){
            token
            user {
                _id
            }
        }
    }
`;