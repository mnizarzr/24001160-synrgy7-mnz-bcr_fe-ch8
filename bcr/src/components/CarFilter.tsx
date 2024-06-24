export default function CarFilter() {
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
                    id="with-driver"
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
                    id="filter-date"
                  />
                </div>
              </div>
              <div style={{ width: "25%" }}>
                <div className="form-group">
                  <label className="mb-2">Waktu Jemput / Ambil</label>
                  <select
                    className="form-select"
                    data-placeholder="Pilih Waktu"
                    id="available-at"
                  >
                    <option />
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
                  <input type="number" className="form-control" id="seats" />
                </div>
              </div>
            </div>
            <button
              className="btn btn-search btn-success rounded-0 mt-3"
              id="search-btn"
              disabled={true}
            >
              Cari Mobil
            </button>
          </div>
        </section>
        <section id="section-list-car" style={{ padding: "0 128px" }}>
          <div className="container">
            <div className="row" id="cars-container"></div>
          </div>
        </section>
      </main>
    </>
  );
}
