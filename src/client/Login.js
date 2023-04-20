import "../App.css";
import { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  const [user, setUser] = useState({ Email: "", Password: "" });
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      Email: user.Email,
      Password: user.Password,
    };

    console.log(loginData);

    axios
      .post("http://localhost/adv103-project/php/login.php", loginData)
      .then((result) => {
        if (result.data.Status === "200") {
          window.localStorage.setItem("Email", result.data.Email);
          window.localStorage.setItem("Username", result.data.Username);
          navigate(`/`);
          setIsLogin(true);
        } else {
          //props.history.push('/Dashboard')
          //props.history.push('/Dashboard') Redirect

          alert("Invalid User");
        }
      });
  };

  return (
    <div className="register-form container text-center align-items-center">
      <h1 className="text-dark">Login</h1>
      <form onSubmit={handleSubmit} method="post" className="form-control">
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, Email: e.target.value })}
          value={user.Email}
          autoComplete="off"
          required
        />
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, Password: e.target.value })}
          value={user.Password}
          autoComplete="off"
          required
        />
        <button
          className="btn btn-secondary btn-lg m-3"
          type="submit"
          id="login"
        >
          Login
        </button>
        <p>
          Not a Member?
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default App;
