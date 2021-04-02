import './scss/App.scss';
import DownArrow from './assets/svgs/down-arrow.svg';

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
      <div className="landing">
        <div className="landing__content">
          <div
            className="landing__title"
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-easing="ease-out">
            <div className="landing__title-top">coming soon</div>
            <div className="landing__title-bottom">instock solution</div>
          </div>
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
