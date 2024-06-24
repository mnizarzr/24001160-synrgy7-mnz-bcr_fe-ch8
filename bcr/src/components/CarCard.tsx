import { formatRupiah } from "../utils/number";

interface CarCardProps {
  id: string;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  available: string;
  type: string;
  year: string;
  options: string[];
  specs: string[];
  availableAt: string;
}

export default function CarCard(props: CarCardProps) {
  return (
    <>
      <div className="card" style={{ minHeight: 480, marginBottom: 16 }}>
        <img
          className="card-img-top"
          src={props.image}
          alt={props.model}
          style={{ width: "100%", height: 250 }}
        />
        <div className="card-body">
          <p className="card-text">{`${props.manufacture} ${props.model}`}</p>
          <p className="card-text">
            <b>{`${formatRupiah(props.rentPerDay)}/hari`}</b>
          </p>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <i className="fa-solid fa-users" /> {props.capacity}
            Orang
          </p>
          <p className="card-text">
            <i className="fa-solid fa-gear" /> {props.transmission}
          </p>
          <p className="card-text">
            <i className="fa-regular fa-calendar" />
            Tahun {props.year}
          </p>
          <button className="btn btn-primary rounded-0 w-100">
            Pilih Mobil
          </button>
        </div>
      </div>
    </>
  );
}
