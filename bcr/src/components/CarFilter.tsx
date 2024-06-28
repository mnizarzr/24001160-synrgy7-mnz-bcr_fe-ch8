import { listCars } from "@/helpers/populate";
import React, { useState } from "react";
import CarCard from "./CarCard";
import { Car } from "@/types/car";

const CarFilter: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [withDriver, setWithDriver] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [availableAt, setAvailableAt] = useState<string>("");
  const [seats, setSeats] = useState<number | null>(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  const filterCars = (car: Car): boolean => {
    if (date !== "" && availableAt !== "") {
      const inputDate = new Date(`${date}T${availableAt}`);
      const carDate = new Date(car.availableAt);

      if (
        carDate.getTime() >= inputDate.getTime() &&
        (withDriver === "" || withDriver === car.withDriver?.toString())
      ) {
        if (seats !== null) {
          return car.capacity >= seats;
        }
        return true;
      }
    }
    return false;
  };

  const handleSearch = async () => {
    const carsList = await listCars(filterCars);
    setCars(carsList);
  };

  const handleInputChange = () => {
    const isEnabled = withDriver != "" && date != "" && availableAt != "";
    console.log({ withDriver, date, availableAt, isEnabled });
    setIsButtonEnabled(isEnabled);
  };

  return (
    <>
      <main>
        <section id="car-filter">
          <div className="container d-flex align-items-center justify-content-center">
            <div className="d-flex gap-3 flex-wrap" style={{ width: "100%" }}>
              <div style={{ maxWidth: "25%" }}>
                <div>
                  <label className="mb-2">Tipe Driver</label>
                  <select
                    className="form-select"
                    data-placeholder="Pilih Tipe Driver"
                    value={withDriver}
                    onChange={(e) => {
                      setWithDriver(e.target.value);
                      handleInputChange();
                    }}
                  >
                    <option value="" />
                    <option value="true">Dengan Sopir</option>
                    <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                  </select>
                </div>
              </div>
              <div style={{ maxWidth: "25%" }}>
                <div className="form-group">
                  <label className="mb-2">Tanggal</label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                      handleInputChange();
                    }}
                  />
                </div>
              </div>
              <div style={{ width: "25%" }}>
                <div className="form-group">
                  <label className="mb-2">Waktu Jemput / Ambil</label>
                  <select
                    className="form-select"
                    data-placeholder="Pilih Waktu"
                    value={availableAt}
                    onChange={(e) => {
                      setAvailableAt(e.target.value);
                      handleInputChange();
                    }}
                  >
                    <option value="" />
                    <option value="08:00:00">08.00</option>
                    <option value="09:00:00">09.00</option>
                    <option value="10:00:00">10.00</option>
                    <option value="11:00:00">11.00</option>
                  </select>
                </div>
              </div>
              <div style={{ width: "25%" }}>
                <div className="form-group">
                  <label className="mb-2">Jumlah Penumpang (Optional)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={seats || ""}
                    onChange={(e) =>
                      setSeats(e.target.value ? parseInt(e.target.value) : null)
                    }
                  />
                </div>
              </div>
            </div>
            <button
              className="btn btn-search btn-success rounded-0 mt-3"
              onClick={handleSearch}
              disabled={!isButtonEnabled}
            >
              Cari Mobil
            </button>
          </div>
        </section>
        <section id="section-list-car" style={{ padding: "0 128px" }}>
          <div className="container">
            <div className="row">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CarFilter;
