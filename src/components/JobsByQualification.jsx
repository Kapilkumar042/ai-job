import React from 'react';
import { Hourglass } from 'lucide-react';

const JobsByQualification = () => {
  const qualifications = [
    { name: 'High School', icon: '👩‍🎓' },
    { name: 'Intermediate', icon: '📈' },
    { name: 'Diploma', icon: '🎓' },
    { name: 'ITI', icon: '🔧' },
    { name: 'Nursing', icon: '👩‍⚕️' },
    { name: 'B.Tech', icon: '👷‍♂️' },
    { name: 'MBA', icon: '👨‍💼' },
    { name: 'Graduation', icon: '🎉' },
    { name: 'Post Graduation', icon: '🏆' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-6">
        Jobs By Qualification
      </h2>
      <div className="flex justify-center mb-6">
        <Hourglass className="text-gray-500" size={24} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
        {qualifications.map((qual, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300 cursor-pointer"
          >
            <span className="text-3xl mb-2">{qual.icon}</span>
            <span className="text-sm text-center text-gray-600">{qual.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsByQualification;