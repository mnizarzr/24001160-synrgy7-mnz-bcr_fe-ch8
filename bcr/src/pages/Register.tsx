import axios from "@/utils/axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "bootstrap";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const toastRef = useRef<HTMLDivElement>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const { data } = await axios.post("/auth/register", {
        name,
        email,
        username: email,
        password,
      });
      if (data && data.user) {
        if (toastRef.current) {
          const toast = new Toast(toastRef.current);
          toast.show();
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setError("Error");
    }
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row min-vh-100 min-vw-100">
          <div className="col align-self-center p-5">
            <div
              className="mb-2"
              style={{ fontSize: 18, fontWeight: "bold", color: "navy" }}
            >
              Welcome
            </div>
            {error && <span className="text-danger">{error}</span>}
            <form onSubmit={handleRegister} className="w-50z">
              <label htmlFor="email">Email</label>
              <input
                className="form-control my-2"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Contoh: johndoe@gmail.com"
              />
              <label htmlFor="name">Name</label>
              <input
                className="form-control my-2"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Nama Lengkap"
              />
              <label htmlFor="password">Password</label>
              <input
                className="form-control my-2"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="6+ karakter"
              />
              <button type="submit" className="btn btn-primary my-2">
                {isLoading ? "Loading..." : "Register"}
              </button>
            </form>
            <p>
              Have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
          <div className="col" style={{ backgroundColor: "#0d28a6" }}>
            <span style={{ color: "#b6bee4" }}>Binar Car Rental</span>
          </div>
        </div>
        <div className="toast-container position-fixed bottom-0 start-0 p-3">
          <div
            ref={toastRef}
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">Registration Success</strong>
            </div>
            <div className="toast-body">Redirecting to sign in page...</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
