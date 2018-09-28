import React from 'react';

export const PortfolioToolIcon = ({ 
  url,
  image
}) => (
        <a className="portfolio-tool--icon" href={url}>
            <img className="portfolio-tool--icon__image" src={image}></img>
        </a>
);
