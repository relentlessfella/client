import React, { useState } from 'react';
import '../index.css';
import { useMutation } from '@apollo/client';
import { ADD_COLLECTION } from '../GraphQL/Queries';
import { Button, Result, Form, Input, Radio, Modal } from 'antd';

function CollectionForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [addCollection] = useMutation(ADD_COLLECTION);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
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
      showModal();
    } catch (error) {
      console.error('Error adding collection:', error.message);
    }
  };
  return (
    <div>
      {/* <input
        type="text"
        placeholder="Collection Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      /> */}
      {/* <button
        style={{ padding: '5px 10px' }}
        className="collection_button_back"
        onClick={handleAddCollection}>
        Send
      </button> */}
      <Form.Item
        label="Set Collection Title"
        style={{ margin: '15px 0 15px 0 ' }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}>
        <div style={{ display: 'flex' }}>
          <Input value={title} />
          <Button onClick={handleAddCollection}>Send</Button>
        </div>
      </Form.Item>
      <Modal title="" open={isModalVisible} centered footer={null} onCancel={closeModal}>
        <Result
          status="success"
          title="Successfully Added Collection!"
          subTitle={title}
          extra={[
            <Button type="primary" key="console" onClick={closeModal}>
              OK
            </Button>,
          ]}
        />
      </Modal>
    </div>
  );
}

export default CollectionForm;
