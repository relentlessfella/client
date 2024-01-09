import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_COLLECTIONS } from '../GraphQL/Queries';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_COLLECTIONS);
  const [collection, setCollections] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (data && data.bookCollections) {
      setCollections(data.bookCollections);
      console.log(data.bookCollections);
    }
  }, [data]);
  // let a = games.map((val, key) => console.log(val.reviews[0]));
  return (
    <div className="content">
      <div className="book_block">
        <ul className="books">
          {collection.map((val, key) => (
            <li className="book_item" key={key} onClick={() => navigate(`/collection/${val.id}`)}>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  textTransform: 'uppercase',
                }}>{`${val.id}) ${val.collection}`}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GetUsers;
