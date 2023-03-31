import MoviesSlider from "./MoviesSlider";

const HomeMain = (props) => (
  <main className="container-fluid px-5 text-bg-dark">
    <MoviesSlider title="Harry Plotter" searchString="harry%20potter" />
    <MoviesSlider title="Marvel" searchString="Marvel" />
    <MoviesSlider title="Lord of the rings" searchString="lord%20of%20the%20rings" />
  </main>
);

export default HomeMain;
