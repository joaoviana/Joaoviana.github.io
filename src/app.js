import React from 'react';
import scrollToComponent from 'react-scroll-to-component';

import LandingPage from './screens/LandingPage/index';
import AboutPage from './screens/AboutPage/index';
import PortfolioPage from './screens/PortfolioPage/index';
import ContactPage from './screens/ContactPage/index';

import Nav from './components/Nav/index';
import Footer from './components/Footer/index';

class App extends React.Component {

  render() {
    return (
      <div>

        <div>
          <Nav
          />
        </div>

        <div>
          <LandingPage/>
        </div>

        <div>
          <AboutPage/>
        </div>

        <div >
            <PortfolioPage/>
        </div>

        <div>
          <ContactPage/>
        </div>

        <div>
          <Footer/>
        </div>

      </div>  
    );
  }
}

export default App;