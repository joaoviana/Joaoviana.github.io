import React from 'react'
import SocialButton from './SocialButton.jsx';

const SocialList = () => (
    <div className="social-list">
        <div>
            <SocialButton className="social-list--item"
                url='https://github.com/Joaoviana'
                image="https://image.ibb.co/cg8cGp/github_logo.png"
            />
        </div>

        <div>
            <SocialButton className="social-list--item"
                url='https://www.linkedin.com/in/joaopadraoviana/'
                image= "https://image.ibb.co/mSmWbp/linkedin_logo.png"
            />
        </div>

        <div>
            <SocialButton className="social-list--item"
                url='https://www.twitter.com/vianajsx'
                image="https://image.ibb.co/hipTNU/twitter_logo.png"
            />
        </div>
    </div>
);

export default SocialList;