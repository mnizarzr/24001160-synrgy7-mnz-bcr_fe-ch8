import React, { useEffect, useState } from "react";
import CarForm from "@/components/admin/CarForm";
import axios from "@/utils/axios";
import { useParams } from "react-router-dom";
import { useCarsDispatch } from "@/contexts/CarContext";

const UpdateCar = () => {
  const [initialValues, setInitialValues] = useState(null);
  const params = useParams();
  const dispatch = useCarsDispatch();

  useEffect(() => {
    const fetchCar = async () => {
      const { data } = await axios.get(`/cars/${params.id}`);

      setInitialValues(data.car);
    };

    fetchCar();
  }, [params.id]);

  const handleUpdateCar = async (formData: FormData) => {
    const { data } = await axios.put(`/cars/${params.id}`, formData);
    if (data.car) {
      dispatch({type: "UPDATE_CAR", payload: data.car})
    }
  };

  if (!initialValues) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Car</h2>
      <CarForm car={initialValues} onSubmit={handleUpdateCar} />
    </div>
  );
};

export default UpdateCar;
