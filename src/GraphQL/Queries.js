import { gql } from '@apollo/client';

export const LOAD_COLLECTIONS = gql`
  query {
    getCollections {
      id
      title
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
      title
      bookQuantity
    }
    books(id: $id) {
      id
      description
      title
      collection_id
    }
  }
`;
export const ADD_BOOK = gql`
  mutation AddBookToCollection($collection_id: ID!, $book: AddBookInput!) {
    addBookToCollection(collection_id: $collection_id, book: $book) {
      id
      title
      description
      collection_id
    }
  }
`;

export const ADD_COLLECTION = gql`
  mutation AddCollection($collection: AddCollectionInput!) {
    addCollection(collection: $collection) {
      id
      title
    }
  }
`;
