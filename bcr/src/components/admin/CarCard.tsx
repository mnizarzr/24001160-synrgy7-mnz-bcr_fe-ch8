import { Car, useCarsDispatch } from "@/contexts/CarContext";
import {
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Card, Col } from "antd";

const { Meta } = Card;

const CarCard: React.FC<{ car: Car }> = ({ car: { id, picture, name } }) => {
  const dispatch = useCarsDispatch();

  return (
    <>
      <Col className="gutter-row" span={5}>
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={picture!} />}
          actions={[
            <Button
              onClick={() => {
                dispatch({ type: "DELETE_CAR", id });
              }}
            >
              <DeleteOutlined key="delete" />
            </Button>,
            <EditOutlined key="edit" />,
          ]}
        >
          <Meta title={name} />
        </Card>
      </Col>
    </>
  );
};

export default CarCard;
