import { useAuth, useAuthDispatch } from "@/contexts/AuthContext";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const auth = useAuth();
  const dispatch = useAuthDispatch();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user_token");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <header className="w-100" style={{ backgroundColor: "#F1F3FF" }}>
        <nav
          id="nav"
          className="navbar navbar-expand-md justify-content-between"
        >
          <div className="container-fluid">
            <Link to="/">
              <div
                className="navbar-brand"
                style={{ width: 150, height: 40, backgroundColor: "blue" }}
              >
                <span>Brand</span>
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="offcanvas offcanvas-end w-50"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  BCR
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body justify-content-end">
                <ul className="nav list-unstyled">
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#">
                      Our Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#">
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#">
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    {auth?.name ? (
                      <>
                        <span className="btn btn-success">{auth.name}</span>
                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                      </>
                    ) : (
                      <>
                        <button className="btn btn-success">
                          <Link
                            className="text-white text-decoration-none"
                            to="/login"
                          >
                            Login
                          </Link>
                        </button>
                        <button className="btn btn-success">
                          <Link
                            className="text-white text-decoration-none"
                            to="/register"
                          >
                            Register
                          </Link>
                        </button>
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="row my-5 m-0 justify-content-between">
          <div id="htagline" className="col-md-6">
            <h1 className="fw-bold">
              Sewa &amp; Rental Mobil Terbaik di kawasan Malang
            </h1>
            <h6 className="mb-4">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </h6>
            {location.pathname === "/" && (
              <button className="btn btn-success" style={{ marginBottom: 16 }}>
                <Link className="text-white text-decoration-none" to={"/cars"}>
                  Mulai Sewa Mobil
                </Link>
              </button>
            )}
          </div>
          <img
            className="col-md-6 position-relative bottom-0 end-0 p-0"
            src="assets/images/img_car.png"
            alt="Car"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
