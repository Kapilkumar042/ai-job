// src/components/ResultCard.js

import React from 'react';
import InfoCard from './InfoCard';

const ResultCard = () => {
  const items = [
    'Rajasthan PTET College Allotment Result 2021',
    'Rajasthan Patwari Result 2021 RSMSSB',
    'RSCIT Result 28 November 2021',
    'Rajasthan University BA 1st Year Result 2021',
    'UPSC IES / ISS Recruitment 2021 Final Result',
  ];
  return <InfoCard title="Result" items={items} buttonText="Read More" />;
};

export default ResultCard;
