import React from 'react';

import useWindowSize from '../../../functions/useWindowSize';
import DesktopAboutPage from './DesktopAboutPage';
import MobileAboutPage from './MobileAboutPage';

const AboutPage = () => {
  const [windowWidth] = useWindowSize();
  const isMobile = windowWidth < 1200;
  return isMobile ? <MobileAboutPage /> : <DesktopAboutPage />;
};

export default AboutPage;
