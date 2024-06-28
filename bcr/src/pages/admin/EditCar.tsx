import React, { useEffect, useState } from "react";
import CarForm from "@/components/admin/CarForm";
import axios from "@/utils/axios";
import { useParams } from "react-router-dom";

const UpdateCar = () => {
  const [initialValues, setInitialValues] = useState(null);
  const params = useParams();

  useEffect(() => {
    // Fetch car data by ID (match.params.id) from API or state
    // Replace with actual data fetching logic
    const fetchCar = async () => {
      const { data } = await axios.get(`/cars/${params.id}`);

      setInitialValues(data.car);
    };

    fetchCar();
  }, [params.id]);

  const handleUpdateCar = async (car) => {
    const { data } = await axios.put(`/cars/${car.id}`, car);
  };

  if (!initialValues) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Car</h2>
      <CarForm initialValues={initialValues} onSubmit={handleUpdateCar} />
    </div>
  );
};

export default UpdateCar;
