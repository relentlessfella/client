import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_GAME = gql`
  mutation AddGame($game: AddGameInput!) {
    addGame(game: $game) {
      id
      title
      platform
      reviews {
        rating
        content
      }
    }
  }
`;

function Form() {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');

  const [addGame] = useMutation(ADD_GAME);

  const handleAddGame = async () => {
    try {
      const result = await addGame({
        variables: {
          game: {
            title,
            platform: [platform],
            reviews: [{ rating: parseInt(rating), content: review }],
          },
        },
      });

      // Handle the result if needed
      console.log('Game added:', result.data.addGame);

      // Reset form values
      setTitle('');
      setPlatform('');
      setReview('');
      setRating('');
    } catch (error) {
      console.error('Error adding game:', error.message);
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
        placeholder="Platform"
        value={platform}
        onChange={(e) => {
          setPlatform(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Review"
        value={review}
        onChange={(e) => {
          setReview(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Rating"
        value={rating}
        onChange={(e) => {
          setRating(e.target.value);
        }}
      />
      <button onClick={handleAddGame}>Send</button>
    </div>
  );
}

export default Form;
