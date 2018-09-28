import React from 'react';
import Emoji from '../../components/Emoji/index';

const AboutPage = () => (
    <div className="flex-container">
        <div className = "about-container portfolio-container--item">
            <h1 className = "about-title"> About me</h1>
            <p className = "about-description"> 
           
            I like to develop apps with <span className="text-deco">JavaScript</span>.
            <br/>

            <span className="text-deco"> And everything web   </span><span><Emoji symbol="🔮"/></span>
            <br/>

            Keeping up with this fast-paced community is definitely one of my greatest passions  <span><Emoji symbol="❤️"/></span>
            <br/>
            I built this portfolio website with React and no other fancy framework. Not that I mind working with fancy frameworks. I do love them.
            <br/>
            <span className="text-deco">React, Redux, Node and Firebase</span> have been the main frameworks/tools that I have been working with lately.
            <br/>
            I do like making the web <span className="text-deco">simple and minimalistic</span>. 
            <br/>
            Oh, also on my spare time I am a music computer, working with Max and augmenting acoustic instruments. 
            </p>
        </div>
    </div>
);

export default AboutPage;