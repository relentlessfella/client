import React, { useState } from 'react';
import '../index.css';
import { gql, useMutation } from '@apollo/client';

function CollectionForm() {
  const ADD_COLLECTION = gql`
    mutation AddCollection($collection: AddCollectionInput!) {
      addCollection(collection: $collection) {
        id
        collection
      }
    }
  `;
  const [title, setTitle] = useState('');
  const [addCollection] = useMutation(ADD_COLLECTION);
  const handleAddCollection = async () => {
    console.log(typeof title, title);
    try {
      const result = await addCollection({
        variables: {
          collection: {
            collection: title,
          },
        },
      });
      console.log('dsad' + result);
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
