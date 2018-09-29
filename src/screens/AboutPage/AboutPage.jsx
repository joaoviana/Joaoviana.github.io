import React from 'react';
import Emoji from '../../components/Emoji/index';

const AboutPage = () => (
    <div className="flex-container">
        <div className = "about-container portfolio-container--item">
        <h1 className = "about-title"> About me</h1>
            <p className = "about-description"> 
                I develop web apps with <span className="text-deco">Javascript</span> and am passionate about <span className="text-deco">JS frameworks</span>. 
                <br/>
                Currently in an open relationship with <span className="text-deco">ReactJS</span> <span><Emoji symbol="🔮"/></span>.
                <br/>
                Tinkering & keeping up with the ever so dynamic world of software development drives me out of my bed everyday <span><Emoji symbol="❤️"/></span>. 
                <br/>
                <span className="text-deco">Minimalism</span> is my language & understanding what my user needs is my priority.
                <br/>
            </p>
        </div>

        <div className="highlights-container">
            <div className="container-text-deco__highlight box a">
            <h1>I admire</h1>
            <hr/>
            <p>Products that are solving world problems one line of code at a time. Impact is a solid motivator to keep up with this fast paced technology driven world. </p>
            </div>

            <div  className="container-text-deco__highlight box b">
            <h1>Pet Peeves</h1>
            <hr/>
            <p>Unscalable pieces of code & over engineered products that hamper the eventual growth of a tech product.</p>

            
            </div>

            <div  className="container-text-deco__highlight box c">
                <h1>Latest Crush</h1>
                <hr/>
                <p>Redux</p>
                <p>Node</p>
                <p>Firebase</p>
            </div>

            <div  className="container-text-deco__highlight box d">
           
            <h1>Educational background</h1>
            <hr/>
            <p> I study music computing and creative coding was how I put my foot between the door of this magical binary world.</p>    
            
            </div>
        </div>
        
    </div>

    
);

export default AboutPage;


            