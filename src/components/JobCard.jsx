// src/components/JobCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import InfoCard from './InfoCard';

const JobCard = () => {
  const items = [
    { id: 1, title: 'UPPSC Govt. Inter College 2022' },
    { id: 2, title: 'MPPSC State Forest Service Exam 2022' },
    { id: 3, title: 'MPPSC State Service Exam 2022' },
    { id: 4, title: 'SSC Combined Graduate Level 2022' },
    { id: 5, title: 'UPPSC Various Post Direct 2021' },
    { id: 6, title: 'Jharkhand SSC Graduate Online Form 2022' },
  ];

  return (
    <InfoCard
      title="Latest Job"
      items={items.map(item => (
        <Link to={`/job/${item.id}`} key={item.id} className="text-gray-700 hover:underline">
          {item.title}
        </Link>
      ))}
      buttonText={<Link to="/latest-job" className="text-white">Read More</Link>}
    />
  );
};

export default JobCard;
