import CarCard from "@/components/admin/CarCard";
import { useCars, useCarsDispatch } from "@/contexts/CarContext";
import axios from "@/utils/axios";
import { useEffect } from "react";

import { Row } from "antd";

const Dashboard: React.FC = () => {
  const cars = useCars();
  const dispatch = useCarsDispatch();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await axios.get("/cars");
        dispatch({ type: "GET_CAR", payload: data.cars });
      } catch (error) {
        console.error(error);
      }
    };
    fetchCars();
  }, [dispatch]);

  return (
    <>
      <Row gutter={[16, 24]}>
        {cars.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </Row>
    </>
  );
};

export default Dashboard;
