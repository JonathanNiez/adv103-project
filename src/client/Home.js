import "../App.css";
import FeaturedMovie from "./FeaturedMovie";
import ViewMovies from "./ViewMovies";

function App() {
  return (
    <>
      <h1 className="text-dark text-center">Home</h1>
      <div>
        <FeaturedMovie />
        <div className="container">
          <div className="grid-container" id="productContainer">
            <div className="col"></div>
          </div>
        </div>
        <div className="container">
          <ViewMovies />
        </div>
      </div>
    </>
  );
}

export default App;
