import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../index.css';
import { LOAD_BOOKS } from '../GraphQL/Queries';
import BookForm from '../components/BookForm';

function CollectionInnerPage() {
  const id = useParams().id;
  const navigate = useNavigate();
  const { error, loading, data, refetch } = useQuery(LOAD_BOOKS, {
    variables: { id: id },
  });
  const [books, setBooks] = useState([]);
  const [collection, setCollections] = useState([]);

  useEffect(() => {
    if (data && data.bookCollection && data.books) {
      setCollections(data.bookCollection);
      setBooks(data.books);
      console.log('Data:', data.books);
    }
  }, [data]);
  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (error) return <p style={{ textAlign: 'center' }}>Error: {error.message}</p>;
  return (
    <div className="content">
      <div className="book_block">
        <h3 style={{ textAlign: 'center' }}>{collection.title}</h3>
        <div className="parent_button">
          <p>Number of books: {collection.bookQuantity}</p>
          <button className="collection_button_back" onClick={() => navigate('/')}>
            BACK
          </button>
        </div>
        <ul style={{ padding: '0' }}>
          {books &&
            books.map((book, key) => {
              return (
                <li className="book_item" style={{ listStyleType: 'none' }} key={book.id}>
                  {`Book ID: ${book.id} `}
                  {`Title: ${book.title} Description: ${book.description}`}
                </li>
              );
            })}
        </ul>
        <BookForm collection_id={id} onCreate={() => refetch()} />
      </div>
    </div>
  );
}

export default CollectionInnerPage;
