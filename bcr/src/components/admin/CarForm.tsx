import React from 'react';
import { Form, Input, InputNumber, Button, DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const CarForm = ({ initialValues, onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const { rent_period, ...rest } = values;
    const start_rent = rent_period[0].format('YYYY-MM-DD');
    const finish_rent = rent_period[1].format('YYYY-MM-DD');
    onSubmit({ ...rest, start_rent, finish_rent });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        ...initialValues,
        rent_period: initialValues.start_rent ? [moment(initialValues.start_rent), moment(initialValues.finish_rent)] : [],
      }}
      onFinish={handleFinish}
    >
      <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the car name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please input the car price!' }]}>
        <InputNumber min={0} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name="picture" label="Picture URL">
        <Input />
      </Form.Item>
      <Form.Item
        name="rent_period"
        label="Rent Period"
        rules={[{ required: true, message: 'Please select the rent period!' }]}
      >
        <RangePicker />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CarForm;
