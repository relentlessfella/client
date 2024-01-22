import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_COLLECTIONS } from '../GraphQL/Queries';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import CollectionForm from './CollectionForm';
import { Button, List, Result } from 'antd';
import { CollectionSkeleton } from '../skeleton/Skeleton';

function AllCollectionsPage() {
  const { error, loading, data, refetch } = useQuery(LOAD_COLLECTIONS);
  const navigate = useNavigate();
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
  ];

  if (loading) {
    return (
      <div style={{ marginTop: '4px' }} className="collections_content">
        <CollectionSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button onClick={() => navigate('/')} type="primary">
            Back Home
          </Button>
        }
      />
    );
  }

  if (!data) {
    return <>No data</>;
  }

  return (
    <div className="collections_content">
      <div>
        <List
          pagination={{
            position: 'bottom',
            align: 'end',
          }}
          columns={columns}
          dataSource={data.getCollections}
          style={{ width: '1000px' }}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                title={<a>{item.title}</a>}
                onClick={() => navigate(`/collection/${item.id}`)}
                description=""
              />
            </List.Item>
          )}
        />
        <CollectionForm onCreate={() => refetch()} />
      </div>
    </div>
  );
}

export default AllCollectionsPage;
