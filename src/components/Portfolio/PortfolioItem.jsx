import React from 'react';

export const PortfolioItem = ({ 
  index,
  title, 
  subtitle
}) => (
    <div>
        <p className="portfolio-item--index">{index}</p>
        <h2>{title}</h2>
        <hr/>
        <p>{subtitle}</p>
    </div>
);