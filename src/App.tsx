import './scss/App.scss';
import DownArrow from './assets/svgs/down-arrow.svg';

const LandingForTablet = () => (
  <div className="landing landing--tablet">
    <div className="landing__content">
      <h1
        className="landing__title"
        data-aos="fade-down"
        data-aos-delay="150"
        data-aos-easing="ease-out">
        an instock <br /> solution <br /> coming soon
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
);

const LandingForDesktop = () => (
  <div className="landing landing--desktop">
    <div className="landing__content">
      <h1
        className="landing__title"
        data-aos="fade-down"
        data-aos-delay="150"
        data-aos-easing="ease-out">
        instock program
      </h1>
      <div
        className="landing__subtitle landing__subtitle--desktop"
        data-aos="fade-up"
        data-aos-delay="450"
        data-aos-easing="ease-out">
        <strong>D</strong> series&nbsp;&nbsp;&nbsp;by <strong>Carl Gustav Magnusson</strong>
      </div>
      <button
        className="landing__call-to-action-button"
        data-aos="fade-right"
        data-aos-delay="750"
        data-aos-easing="ease-out">
        more
      </button>
    </div>
  </div>
);

const App = () => (
  <div className="app">
    <div className="navbar">
      <span className="navbar__logo">idesk</span>
      <div className="navbar__buttons-container">
        <ul className="navbar__burger-menu">
          <li className="navbar__burger-menu-button"></li>
          <li className="navbar__burger-menu-button"></li>
        </ul>
        <div className="navbar__arrow-container">
          <img className="navbar__arrow-icon" src={DownArrow} alt="down-arrow" />
        </div>
      </div>
    </div>
    <div className="main">
      <LandingForTablet />
      <LandingForDesktop />
    </div>
  </div>
);

export default App;
