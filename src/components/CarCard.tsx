import { Car } from "@/types/car";
import { formatRupiah } from "../utils/number";

type CarCardProps = Car

const CarCard: React.FC<{ car: CarCardProps }> = ({ car }) => {
  return (
    <>
      <div className="col card" style={{ minHeight: 480, marginBottom: 16 }}>
        <img
          className="card-img-top"
          src={car.image}
          alt={car.model}
          style={{ width: "100%", height: 250 }}
        />
        <div className="card-body">
          <p className="card-text">{`${car.manufacture} ${car.model}`}</p>
          <p className="card-text">
            <b>{`${formatRupiah(car.rentPerDay)}/hari`}</b>
          </p>
          <p className="card-text">{car.description}</p>
          <p className="card-text">
            <i className="fa-solid fa-users" /> {car.capacity}
            Orang
          </p>
          <p className="card-text">
            <i className="fa-solid fa-gear" /> {car.transmission}
          </p>
          <p className="card-text">
            <i className="fa-regular fa-calendar" />
            Tahun {car.year}
          </p>
          <button className="btn btn-primary rounded-0 w-100">
            Pilih Mobil
          </button>
        </div>
      </div>
    </>
  );
};

export default CarCard;
