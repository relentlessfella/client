import { gql } from '@apollo/client';

export const LOAD_COLLECTIONS = gql`
  query {
    bookCollections {
      id
      collection
      books {
        id
        description
        title
        collection_id
      }
      bookQuantity
    }
  }
`;

export const LOAD_BOOKS = gql`
  query LoadBooks($id: ID!) {
    bookCollection(id: $id) {
      id
      collection
      books {
        id
        description
        title
        collection_id
      }
      bookQuantity
    }
  }
`;
