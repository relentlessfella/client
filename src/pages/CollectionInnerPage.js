import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../index.css';
import { LOAD_BOOKS } from '../GraphQL/Queries';
import BookForm from '../components/BookForm';
import { Button, Table } from 'antd';
import { BookSkeleton } from '../skeleton/Skeleton';

function CollectionInnerPage() {
  const id = useParams().id;
  const navigate = useNavigate();
  const { error, loading, data, refetch } = useQuery(LOAD_BOOKS, {
    variables: { id: id },
  });
  const [books, setBooks] = useState([]);
  const [collection, setCollections] = useState([]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 300,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      width: 300,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: 300,
    },
  ];

  useEffect(() => {
    if (data && data.bookCollection && data.books) {
      setCollections(data.bookCollection);
      setBooks(data.books);
      console.log('Data:', data.books);
    }
  }, [data]);
  if (loading)
    return (
      <div className="content" style={{ marginTop: '50px' }}>
        <BookSkeleton />
      </div>
    );
  if (error) return <p style={{ textAlign: 'center' }}>Error: {error.message}</p>;
  return (
    <div className="content">
      <div>
        <Button
          style={{ float: 'right', margin: '10px', marginRight: '0px' }}
          onClick={() => navigate('/')}>
          Back
        </Button>
        <Table style={{ borderRadius: '15px' }} columns={columns} dataSource={data.books} />
        <BookForm collection_id={id} onCreate={() => refetch()} />
      </div>
    </div>
  );
}

export default CollectionInnerPage;
