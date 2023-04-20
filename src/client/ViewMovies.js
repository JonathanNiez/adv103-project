import React, { Component } from "react";

class ViewMovies extends Component {
  state = {};

  login = {
    isLogin: false,
  };

  userIsLogin() {
    var username = localStorage.getItem("Username");

    if (!username) {
      console.log(username);
      console.log("'isLogin' is set to False");
    } else {
      this.setState({ isLogin: true });
      console.log(username);
      console.log("'isLogin' is set to True");
    }
  }

  headers = [
    { key: "MovieID", label: "ID" },
    { key: "Moviename", label: "Moviename" },
    { key: "MovieImage", label: "MovieImage" },
    { key: "Genre", label: "Genre" },
    { key: "Rating", label: "Rating" },
    { key: "DownloadLink", label: "DownloadLink" },
  ];

  componentDidMount() {
    var username = localStorage.getItem("Username");

    console.log(username);

    this.userIsLogin();

    fetch("http://localhost:80/adv103-project/php/viewmovies.php")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.setState({
          movies: result,
        });
      })
      .catch((error) => {
        console.log("Error Reading Data " + error);
      });
  }
  render() {
    const viewmovies = this.state.movies && this.state.movies.length;
    if (viewmovies) {
      return (
        <div className="container">
          <h1 className="text-dark text-center">Movies</h1>
          <div className="grid-container container">
            {this.state.movies.map(
              function (item, index) {
                return (
                  <>
                    <div className="movie-wrapper" key={index}>
                      <div className="movie-name text-center">
                        {" "}
                        <h2>{item.MovieName}</h2>
                      </div>
                      <div className="movie-image">
                        <img className="rounded" src={item.MovieImage} />
                      </div>
                      <div className="movie-info text-center">
                        <h3>Genre: {item.Genre}</h3>
                        <h3>Rating: ★{item.Rating}</h3>
                        {this.state.isLogin ? (
                          <a className="link-light" href={item.DownloadLink}>
                            <h4>Download</h4>
                          </a>
                        ) : (
                          <h4 className="text-warning text-center">
                            You must be Registered to Download a Movie
                          </h4>
                        )}
                      </div>
                    </div>
                  </>
                );
              }.bind(this)
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1 className="text-center">Movies Not Found</h1>
          <h2 className="text-center">Internet Required</h2>
        </div>
      );
    }
  }
}

export default ViewMovies;
