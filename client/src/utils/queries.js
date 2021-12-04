import { gql } from '@apollo/client';

export const GET_ME = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;

