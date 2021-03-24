import './scss/App.scss';

const App = () => (
  <div className="app">
    <div className="navbar">
      <span className="navbar__logo">idesk</span>
    </div>
    <div className="main">
      <div className="landing">
        <div className="landing__text">
          <h1
            className="landing__title"
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-easing="ease-out">
            an instock solution coming soon
          </h1>
          <div
            className="landing__subtitle"
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-easing="ease-out">
            new website is under construction
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
