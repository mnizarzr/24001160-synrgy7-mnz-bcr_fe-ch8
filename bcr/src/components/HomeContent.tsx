export default function HomeContent() {
  return (
    <>
      <main className="container-fluid">
        {/* Best Car Rental */}
        <section
          id="adv"
          className="row row-cols-md-2 w-auto justify-content-center"
        >
          <img className="p-0" src="assets/images/img_service.png" alt="" />
          <div id="best-desc" style={{ maxWidth: 468, marginTop: 16 }}>
            <h2>Best Car Rental for any kind of trip in Malang</h2>
            <p>
              Sewa mobil di Malang bersama Binar Car Rental jaminan harga lebih
              murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
              pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
              meeting, dll.
            </p>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <i
                  style={{ color: "#0D28A6", marginRight: 8 }}
                  data-feather="check-circle"
                />{" "}
                Sewa Mobil Dengan Supir di Malang 12 Jam
              </li>
              <li>
                <i
                  style={{ color: "#0D28A6", marginRight: 8 }}
                  data-feather="check-circle"
                />{" "}
                Sewa Mobil Lepas Kunci di Malang 24 Jam
              </li>
              <li>
                <i
                  style={{ color: "#0D28A6", marginRight: 8 }}
                  data-feather="check-circle"
                />{" "}
                Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li>
                <i
                  style={{ color: "#0D28A6", marginRight: 8 }}
                  data-feather="check-circle"
                />{" "}
                Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li>
                <i
                  style={{ color: "#0D28A6", marginRight: 8 }}
                  data-feather="check-circle"
                />{" "}
                Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </div>
        </section>
        {/* Why us */}
        <section id="why" className="container">
          <h2 className="text-center text-md-start">Why Us?</h2>
          <h6 className="text-center text-md-start">
            Mengapa harus pilih Binar Car Rental?
          </h6>
          <div className="row gap-md-0 gap-2 justify-content-between">
            <div className="card col-md-3">
              <div className="card-body">
                <img
                  className="mt-2"
                  src="assets/icons/icon_complete.png"
                  alt=""
                />
                <h5 className="my-2 text-black fw-bold">Mobil Lengkap</h5>
                <p className="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat.
                </p>
              </div>
            </div>
            <div className="card col-md-3">
              <div className="card-body">
                <img
                  className="mt-2"
                  src="assets/icons/icon_price.png"
                  alt=""
                />
                <h5 className="my-2 text-black fw-bold">Harga Murah</h5>
                <p className="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain.
                </p>
              </div>
            </div>
            <div className="card col-md-3">
              <div className="card-body">
                <img
                  className="mt-2"
                  src="assets/icons/icon_24hrs.png"
                  alt=""
                />
                <h5 className="my-2 text-black fw-bold">Layanan 24 Jam</h5>
                <p className="card-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu.
                </p>
              </div>
            </div>
            <div className="card col-md-3">
              <div className="card-body">
                <img
                  className="mt-2"
                  src="assets/icons/icon_professional.png"
                  alt=""
                />
                <h5 className="my-2 text-black fw-bold">Sopir Profesional</h5>
                <p className="card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="testi"
          className="container-fluid d-flex flex-column align-items-center"
        >
          <h2>Testimonial</h2>
          <h6>Berbagai review positif dari para pelanggan kami</h6>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner" style={{ left: "0%", top: "25%" }}>
              <div className="carousel-item active">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src="assets/images/img_photo.png"
                    alt=""
                    width={50}
                    height={50}
                    style={{ marginRight: 40 }}
                  />
                  <div>
                    <img src="assets/icons/rating_stars.png" height="16px" />
                    <h4>
                      "Eiusmod laborum consequat non cillum Lorem. Tempor nulla
                      amet adipisicing consectetur do in sint et ipsum et duis
                      amet aliqua enim. Occaecat eu excepteur minim anim nulla
                      aliqua. Officia incididunt minim qui duis ipsum deserunt
                      magna sit."
                    </h4>
                    <h5 className="fw-bold">John Dee 32, Bromo</h5>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src="assets/images/img_photo-1.png"
                    alt=""
                    width={50}
                    height={50}
                    style={{ marginRight: 40 }}
                  />
                  <div>
                    <img src="assets/icons/rating_stars.png" height="16px" />
                    <h4>
                      "Eiusmod laborum consequat non cillum Lorem. Tempor nulla
                      amet adipisicing consectetur do in sint et ipsum et duis
                      amet aliqua enim. Occaecat eu excepteur minim anim nulla
                      aliqua. Officia incididunt minim qui duis ipsum deserunt
                      magna sit."
                    </h4>
                    <h5 className="fw-bold">John Dee 32, Bromo</h5>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev mx-0 px-0"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <svg
                width={57}
                height={68}
                viewBox="0 0 57 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.4836 51L21.2902 34L35.4836 17"
                  stroke="black"
                  strokeWidth={8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next mx-0 px-0"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <svg
                className=""
                width={57}
                height={68}
                viewBox="0 0 57 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5164 51L35.7098 34L21.5164 17"
                  stroke="black"
                  strokeWidth={8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <section
          id="rent-now"
          className="text-center d-flex justify-content-center"
        >
          <div
            style={{
              width: 1161,
              minHeight: 326,
              backgroundColor: "#0D28A6",
              borderRadius: 8,
              paddingTop: 64,
            }}
          >
            <h2 style={{ color: "white", fontWeight: 700, fontSize: 36 }}>
              Sewa Mobil di Malang Sekarang
            </h2>
            <p
              style={{
                color: "white",
                fontWeight: 300,
                fontSize: 14,
                marginBottom: 52,
              }}
            >
              Fugiat ipsum tempor consequat culpa deserunt sit anim tempor
              laboris Lorem reprehenderit.
              <br />
              Aute exercitation non labore cillum do sint veniam Lorem.
            </p>
            <button className="btn btn-success">Mulai Sewa Mobil</button>
          </div>
        </section>
        <section id="faq" className="row align-content-center">
          <div className="col-md-4">
            <h2>Frequently Asked Question</h2>
            <h6>Quis commodo dolor culpa magna culpa ut dolor fugiat ipsum.</h6>
          </div>
          <div className="accordion col-md-8" id="accordionFlushExample">
            <div className="acc-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>Jaminan KTP / SIM, Kartu Kredit, dan Deposit.</p>
                </div>
              </div>
            </div>
            <div className="acc-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>Minimal sewa mobil lepas kunci adalah 1 hari.</p>
                </div>
              </div>
            </div>
            <div className="acc-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Berapa hari sebelumnya sebaiknya booking sewa mobil?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>Sebaiknya booking sewa mobil minimal 1 hari sebelumnya.</p>
                </div>
              </div>
            </div>
            <div className="acc-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Ya, terdapat biaya antar-jemput yang dapat ditentukan
                    berdasarkan lokasi.
                  </p>
                </div>
              </div>
            </div>
            <div className="acc-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Bagaimana jika terjadi kecelakaan?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Jika terjadi kecelakaan, segera hubungi pihak penyewa dan
                    berikan laporan kepada pihak rental mobil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
