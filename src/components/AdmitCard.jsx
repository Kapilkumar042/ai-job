import React from 'react';
import { Link } from 'react-router-dom';
import InfoCard from './InfoCard';

const AdmitCard = () => {
  const items = [
    { id: 1, title: 'Railway Group D Admit Card 2021' },
    { id: 2, title: 'Rajasthan Sanganak Admit Card 2021' },
    { id: 3, title: 'Rajasthan Gram Sevak Admit Card 2021' },
    { id: 4, title: 'CTET Dec 2021 – Jan 2022 Admit Card' },
    { id: 5, title: 'RSMSSB VDO Exam Admit Card 2021' },
    { id: 6, title: 'Bihar Police CSBC Admit Card 2021' },
  ];

  return (
    <InfoCard
      title="Admit Card"
      items={items.map(item => (
        <Link to={`/admit-card/${item.id}`} key={item.id} className="text-gray-700 hover:underline">
          {item.title}
        </Link>
      ))}
      buttonText={<Link to="/admit-card" className="text-white">Read More</Link>}
    />
  );
};

export default AdmitCard;
