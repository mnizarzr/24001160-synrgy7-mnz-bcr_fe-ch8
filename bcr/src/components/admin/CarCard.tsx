import { Car, useCarsDispatch } from "@/contexts/CarContext";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Col, Popconfirm, PopconfirmProps, message } from "antd";
import axios from "@/utils/axios";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const CarCard: React.FC<{ car: Car }> = ({ car: { id, picture, name } }) => {
  const navigate = useNavigate();
  const dispatch = useCarsDispatch();

  const confirmDelete: PopconfirmProps["onConfirm"] = async () => {
    const { data } = await axios.delete(`/cars/${id}`);
    if (data.isDeleted) {
      dispatch({ type: "DELETE_CAR", id });
      message.success("Car Deleted");
    }
  };

  const confirmUpdate: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    navigate(`/admin/editCar/${id}`)
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
  };

  return (
    <>
      <Col className="gutter-row" span={5}>
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={picture!} />}
          actions={[
            <Popconfirm
              title="Delete the car"
              description="Are you sure to delete this car?"
              onConfirm={confirmDelete}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>
                <DeleteOutlined key="delete" />
              </Button>
            </Popconfirm>,
            <Popconfirm
              title="Update the car"
              description="Are you sure to update this car?"
              onConfirm={confirmUpdate}
              onCancel={cancel}
              okText="Proceed"
              cancelText="Cancel"
            >
              <Button type="primary">
                <EditOutlined key="edit" />
              </Button>
            </Popconfirm>,
          ]}
        >
          <Meta title={name} />
        </Card>
      </Col>
    </>
  );
};

export default CarCard;
