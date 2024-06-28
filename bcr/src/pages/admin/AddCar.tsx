import CarForm from "@/components/admin/CarForm";
import axios from "@/utils/axios";

const AddCar = () => {
  const handleAddCar = async (car) => {
    const { data } = await axios.post("/cars", car);
  };

  return (
    <div>
      <h2>Add Car</h2>
      <CarForm initialValues={{}} onSubmit={handleAddCar} />
    </div>
  );
};

export default AddCar;
