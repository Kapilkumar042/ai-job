// src/components/InfoCard.js

import React from 'react';
import { Megaphone } from 'lucide-react';

const InfoCard = ({ title, items, buttonText }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
    <h2 className="text-xl font-bold text-white bg-sky-500 rounded-full py-2 px-6 mb-4 inline-block">
      {title}
    </h2>
    <ul className="flex-grow">
      {items.map((item, index) => (
        <li key={index} className="flex items-start mb-3 pb-3 border-b last:border-b-0">
          <Megaphone className="text-gray-400 mr-2 flex-shrink-0 mt-1" size={18} />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
    <button className="mt-4 bg-sky-500 text-white py-2 px-4 rounded-full hover:bg-sky-600 transition-colors">
      {buttonText} »
    </button>
  </div>
);

export default InfoCard;
