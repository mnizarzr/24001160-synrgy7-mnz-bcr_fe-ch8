import { useState } from "react";
import { Form, Input, InputNumber, Button, DatePicker, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import moment from "moment";
import { RcFile, UploadChangeParam, UploadFile } from "antd/es/upload";

const { RangePicker } = DatePicker;

type Car = {
  id: number;
  name: string;
  price: number;
  picture: string | null;
  start_rent: string;
  finish_rent: string;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
  created_by: number;
  updated_by: number | null;
  deleted_by: number | null;
};

const CarForm: React.FC<{
  car: Car | null;
  onSubmit: (formData: FormData) => Promise<void>;
}> = ({ car, onSubmit }) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState<RcFile | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFinish = (values: any) => {
    console.log(values)
    const { rent_period, ...rest } = values;
    const start_rent = rent_period[0].format("YYYY-MM-DD");
    const finish_rent = rent_period[1].format("YYYY-MM-DD");
    const formData = new FormData();
    formData.append("name", rest.name);
    formData.append("price", rest.price);
    formData.append("start_rent", start_rent);
    formData.append("finish_rent", finish_rent);
    if (file) {
      formData.append("image", file);
    }
    console.log(formData)
    onSubmit(formData);
  };

  const handleFileChange = (info: UploadChangeParam<UploadFile>) => {
    const fileList = info.fileList.slice(-1);
    console.log(fileList)
    setFile(fileList[0]?.originFileObj || null);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        ...car,
        rent_period: car?.start_rent
          ? [moment(car?.start_rent), moment(car?.finish_rent)]
          : [],
      }}
      onFinish={handleFinish}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please input the car name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: "Please input the car price!" }]}
      >
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item name="picture" label="Picture">
        <Upload
          listType="picture"
          beforeUpload={() => false}
          onChange={handleFileChange}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        name="rent_period"
        label="Rent Period"
        rules={[{ required: true, message: "Please select the rent period!" }]}
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
