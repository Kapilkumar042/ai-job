// src/InfoCards.js

import React from 'react';
import ResultCard from '../components/ResultCard';
import AdmitCard from '../components/AdmitCard';
import JobCard from '../components/JobCard';

const InfoCards = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ResultCard />
        <AdmitCard />
        <JobCard />
      </div>
    </div>
  );
};

export default InfoCards;
