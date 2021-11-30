import { gql } from '@apollo/client';

export const LOGIN_USER= gql`
  mutation loginUser() {
    loginUser() {
      _id
    
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($_id: String!) {
    addUser(_id: $_id) {
      _id
    
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($_id: String!) {
    saveBoook(_id: $_id) {
      _id
    
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($_id: String!) {
   removeBook(_id: $_id) {
      _id
     
    }
  }
`;

