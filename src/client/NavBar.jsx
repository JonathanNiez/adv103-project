import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    var username = localStorage.getItem("Username");

    if (username === null) {
      setIsLogin(false);
      console.log(username);
    } else {
      setUser(username);
      setIsLogin(true);
    }
  });

  const logOut = () => {
    localStorage.removeItem("Email");
    localStorage.clear();
    navigate(`/login`);

    console.log("Logged Out");
  };

  return (
    <div className="navbar">
      <ul>
        <li>
          {" "}
          <Link to="/">
            <button className="btn btn-secondary">Home</button>
          </Link>
        </li>
        <li>
          {!isLogin && (
            <Link to="/login">
              <button className="btn btn-success">Login</button>
            </Link>
          )}
        </li>
        <li>
          {isLogin && (
            <Link to="/dashboard">
              <button className="btn btn-success">Dashboard</button>
            </Link>
          )}
        </li>
        <li>
          <Link to="/about">
            <button className="btn btn-warning">About</button>
          </Link>
        </li>
      </ul>
      {isLogin && (
        <span className="badge-danger">
          <h2>{user}</h2> |{" "}
          <Link className="link-danger" to="/login" onClick={logOut}>
            Logout
          </Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;
