import React from 'react';

const SocialButton = ({ 
  url,
  image
}) => (
    <div className= "social-list--item">
        <a className="social-list--item" href={url}>
            <img className="social-list--item__image" src={image}></img>
        </a>
    </div>
);

export default SocialButton;
