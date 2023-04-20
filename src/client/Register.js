import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.preventBlankSubmit = this.preventBlankSubmit.bind(this);

    this.state = {
      Firstname: "",
      Lastname: "",
      Username: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    };
  }

  onChangeFirstname(e) {
    this.setState({
      Firstname: e.target.value,
    });
  }
  onChangeFirstname(e) {
    this.setState({
      Firstname: e.target.value,
    });
  }
  onChangeFirstname(e) {
    this.setState({
      Firstname: e.target.value,
    });
  }
  onChangeLastname(e) {
    this.setState({
      Lastname: e.target.value,
    });
  }
  onChangeUsername(e) {
    this.setState({
      Username: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      Email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      Password: e.target.value,
    });
  }
  onChangeConfirmPassword(e) {
    this.setState({
      ConfirmPassword: e.target.value,
    });
  }

  handleChange = (e) => {
    e.preventDefault();
  };

  preventBlankSubmit(e) {
    e.preventDefault();
    if (
      this.state.Firstname === "" ||
      this.state.Lastname === "" ||
      this.state.Username === "" ||
      this.state.Email === "" ||
      this.state.Password === "" ||
      this.state.ConfirmPassword === ""
    ) {
      alert("Please Enter your Credentials");
    } else if (this.state.Password === this.state.ConfirmPassword) {
      const data = {
        Firstname: this.state.Firstname,
        Lastname: this.state.Lastname,
        Username: this.state.Username,
        Email: this.state.Email,
        Password: this.state.Password,
        ConfirmPassword: this.state.ConfirmPassword,
      };

      axios
        .post("http://localhost/adv103-project/php/register.php", data)
        .then((res) => console.log(res.data))
        .catch((error) => {
          console.log(error.response);
        });

      alert("Successfully Registered");
      this.setState({
        Firstname: "",
        Lastname: "",
        Username: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
      });
    } else {
      alert("Confirm Password did not Match");
      this.setState({
        Password: "",
        ConfirmPassword: "",
      });
    }
  }

  render() {
    return (
      <div className="register-form container text-center">
        <h1 className="text-dark">Register</h1>
        <form onSubmit={this.handleChange} className="form-control">
          <input
            className="form-control"
            type="text"
            name="firstname"
            placeholder="Firstname"
            id="firstname"
            onChange={this.onChangeFirstname}
            value={this.state.Firstname}
            required
          />
          <input
            className="form-control"
            type="text"
            name="lastname"
            placeholder="Lastname"
            id="lastname"
            onChange={this.onChangeLastname}
            value={this.state.Lastname}
            required
          />
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            onChange={this.onChangeUsername}
            value={this.state.Username}
            required
          />
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email Address"
            id="email"
            onChange={this.onChangeEmail}
            value={this.state.Email}
            autoComplete="off"
            required
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            onChange={this.onChangePassword}
            value={this.state.Password}
            required
          />
          <input
            className="form-control"
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            id="confirmpassword"
            onChange={this.onChangeConfirmPassword}
            value={this.state.ConfirmPassword}
            required
          />
          <button
            className="btn btn-secondary btn-lg m-3"
            type="submit"
            id="register"
            onClick={this.preventBlankSubmit}
            value="Register"
          >
            Register
          </button>
          <p className="text-dark">
            Already a Member?
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Register;
