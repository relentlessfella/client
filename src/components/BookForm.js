import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import '../index.css';
import { ADD_BOOK } from '../GraphQL/Queries';
import { Form, Input, Button, Modal, Result } from 'antd';

function BookForm({ collection_id, onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [AddBook] = useMutation(ADD_BOOK);
  const [form] = Form.useForm();
  const { status, errors } = Form.Item.useStatus();
  const [isModalVisible, setIsModalVisible] = useState('');
  const showModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
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
      showModal();
    } catch (error) {
      console.error('Error adding book:', error.message);
    }
  };
  const onReset = () => {
    form.resetFields();
    console.log('Working: ', status);
  };

  return (
    <div>
      <Form form={form}>
        <Form.Item
          label="Set Book Title"
          style={{}}
          onChange={(e) => {
            setTitle(e.target.value);
            onReset();
          }}>
          <div style={{ display: 'flex' }}>
            <Input allowClear value={title} style={{ marginLeft: '45px' }} />
          </div>
        </Form.Item>
        <Form.Item
          label="Set Book Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}>
          <Input value={description} allowClear />
        </Form.Item>
        <Button htmlType="button" style={{ float: 'right' }} onClick={handleAddBook}>
          Send
        </Button>
      </Form>

      <Modal title="" open={isModalVisible} centered footer={null} onCancel={closeModal}>
        <Result
          status="success"
          title="Successfully Added Book!"
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

export default BookForm;
