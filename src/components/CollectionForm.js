import React, { useState } from 'react';
import '../index.css';
import { useMutation } from '@apollo/client';
import { ADD_COLLECTION } from '../GraphQL/Queries';

function CollectionForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [addCollection] = useMutation(ADD_COLLECTION);
  const handleAddCollection = async () => {
    try {
      const result = await addCollection({
        variables: {
          collection: {
            title: title,
          },
        },
      });
      onCreate();
      console.log('Collection added:', result.data.addCollection);
      setTitle('');
    } catch (error) {
      console.error('Error adding collection:', error.message);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Collection Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        style={{ padding: '5px 10px' }}
        className="collection_button_back"
        onClick={handleAddCollection}>
        Send
      </button>
    </div>
  );
}

export default CollectionForm;
