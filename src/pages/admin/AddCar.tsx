import CarForm from "@/components/admin/CarForm";
import { useCarsDispatch } from "@/contexts/CarContext";
import axios from "@/utils/axios";

const AddCar = () => {
  const dispatch = useCarsDispatch();

  const handleAddCar = async (formData: FormData) => {
    console.log(formData)
    const resp = await axios.post("/cars", formData);
    if (resp.status === 201) {
      if (resp.data.car) {
        dispatch({ type: "ADD_CAR", payload: resp.data.car });
      }
    }
  };

  return (
    <div>
      <h2>Add Car</h2>
      <CarForm car={null} onSubmit={handleAddCar} />
    </div>
  );
};

export default AddCar;
