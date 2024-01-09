import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import '../index.css';

const ADD_BOOK = gql`
  mutation AddBookToCollection($collectionId: ID!, $book: AddBookInput!) {
    addBookToCollection(collectionId: $collectionId, book: $book) {
      id
      title
      description
      collection_id
    }
  }
`;

function Form({ collection_id }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [AddBook] = useMutation(ADD_BOOK);

  const handleAddBook = async () => {
    try {
      const result = await AddBook({
        variables: {
          collectionId: collection_id,
          book: {
            title,
            description,
          },
        },
      });
      console.log('book added:', result.data.AddBook);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding book:', error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        style={{ padding: '5px 10px' }}
        className="collection_button_back"
        onClick={handleAddBook}>
        Send
      </button>
    </div>
  );
}

export default Form;
