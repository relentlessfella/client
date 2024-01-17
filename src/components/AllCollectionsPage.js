import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_COLLECTIONS } from '../GraphQL/Queries';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import CollectionForm from './CollectionForm';

function AllCollectionsPage() {
  const { error, loading, data, refetch } = useQuery(LOAD_COLLECTIONS);
  const navigate = useNavigate();

  if (loading) {
    return <>Loading</>;
  }

  if (error) {
    return <>Error: {JSON.stringify(error)}</>;
  }

  if (!data) {
    return <>No data</>;
  }

  return (
    <div className="content">
      <div className="book_block">
        <ul className="books">
          {data.getCollections.map((val, key) => (
            <li className="book_item" key={key} onClick={() => navigate(`/collection/${val.id}`)}>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  textTransform: 'uppercase',
                }}>{`${val.id}) ${val.title}, Number of books: ${val.bookQuantity}`}</Link>
            </li>
          ))}
        </ul>
        <CollectionForm onCreate={() => refetch()} />
      </div>
    </div>
  );
}

export default AllCollectionsPage;
