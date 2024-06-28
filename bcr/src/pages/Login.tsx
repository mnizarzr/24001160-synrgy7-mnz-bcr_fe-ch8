import { useAuth } from "@/contexts/AuthContext";
import axios from "@/utils/axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type LoginProps = {
  admin?: boolean;
};

const Login: React.FC<LoginProps> = ({ admin = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const auth = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    if (userToken) navigate("/");
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const { data } = await axios.post("/auth/login", {
        username: email,
        password,
      });
      if (data && data.token) {
        localStorage.setItem("user_token", data.token);
        if (location.pathname.includes("admin/login")) {
          navigate("/admin");
        } else navigate("/");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setError("Error");
    }
    setIsLoading(false);
  };

  const renderLoginForm = () => (
    <div className="col align-self-center p-5">
      <div
        className="mb-2"
        style={{ fontSize: 18, fontWeight: "bold", color: "navy" }}
      >
        {admin ? "Welcome Admin" : "Welcome Back"}
      </div>
      {error && <span className="text-danger">{error}</span>}
      <form onSubmit={handleLogin} className="w-50">
        <label htmlFor="email">Email</label>
        <input
          className="form-control my-2"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="Contoh: johndoe@gmail.com"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          className="form-control my-2"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="6+ karakter"
        ></input>
        <button type="submit" className="btn btn-primary my-2">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      {!admin && (
        <p>
          Don't have an account? <Link to="/register">Sign Up for free</Link>
        </p>
      )}
    </div>
  );

  const renderInfoPanel = () => (
    <div
      className="col d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#0d28a6" }}
    >
      <span style={{ color: "#b6bee4" }}>Binar Car Rental</span>
    </div>
  );

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="row min-vh-100 min-vw-100">
        {admin ? (
          <>
            {renderInfoPanel()}
            {renderLoginForm()}
          </>
        ) : (
          <>
            {renderLoginForm()}
            {renderInfoPanel()}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
