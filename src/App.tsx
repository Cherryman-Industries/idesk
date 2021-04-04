import { useState } from 'react';
import { useMedia } from 'react-media';
import TallTableImg from './assets/images/table-tall.jpg';
import WideTableImg from './assets/images/table-wide.jpg';

import './scss/App.scss';

interface LandingSectionProps {
  setIsLoading: (prop: boolean) => void;
  isLoading: boolean;
}

const LandingSection = ({ setIsLoading }: LandingSectionProps) => {
  const isWideScreen = useMedia({ query: '(min-width: 1366.1px)' });
  const bgImg = isWideScreen ? WideTableImg : TallTableImg;

  return (
    <div className="landing" data-aos="fade-in" data-aos-duration="1000">
      <img
        src={bgImg}
        alt="table"
        className="landing__img"
        onLoad={() => setIsLoading(false)}
        onError={() => console.log('Could not load landing page image')}
      />
      <div className="landing__content">
        <div
          className="landing__title"
          data-aos="fade-down"
          data-aos-delay="1150"
          data-aos-easing="ease-out">
          <div className="landing__title-top">coming soon</div>
          <div
            className="landing__title-bottom"
            data-aos="fade-up"
            data-aos-delay="1300"
            data-aos-easing="ease-out">
            instock solution
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app">
      <div className="navbar">
        <span className="navbar__logo">idesk</span>
        <div className="navbar__right"></div>
      </div>
      <div className="main">
        {isLoading && <div className="loader"></div>}
        <LandingSection setIsLoading={setIsLoading} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default App;
