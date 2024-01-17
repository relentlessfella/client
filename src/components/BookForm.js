import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import '../index.css';
import { ADD_BOOK } from '../GraphQL/Queries';

function BookForm({ collection_id, onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [AddBook] = useMutation(ADD_BOOK);
  const handleAddBook = async () => {
    try {
      console.log(title);
      const result = await AddBook({
        variables: {
          collection_id: collection_id,
          book: {
            title: title,
            description: description,
          },
        },
      });
      onCreate();
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

export default BookForm;
