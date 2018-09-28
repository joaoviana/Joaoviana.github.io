import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { toElement as scrollToElement } from '../../utils/scrollTo';
import '../../styles/styles.scss';

class  Nav extends React.Component{
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
          isSticky: false
        };
      }
      handleScroll() {
        if (window.pageYOffset > this.nav.offsetTop) {
          this.setState({
            isSticky: true
          });
        } else {
          this.setState({
            isSticky: false
          });
        }
      }

      scrollToPage(pageSelector) {
        const nextPage = document.querySelector(pageSelector);
        scrollToElement(nextPage);
      }
    

    render() {
        return (
            <div className="Nav">
                <button className= "Nav--item" onClick={(e) => this.scrollToPage('.about-container')}>About</button>
                <button className= "Nav--item" onClick={(e) => this.scrollToPage('.portfolio-page')}>Portfolio</button>
                <button className= "Nav--item" onClick={(e) => this.scrollToPage('.contact-container')}>Contact</button>
            </div>
        );
    }
};

export default Nav;
