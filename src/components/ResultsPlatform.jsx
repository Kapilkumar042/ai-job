import React from 'react';
import { Facebook, Twitter, Send } from 'lucide-react';

const ResultsPlatform = () => {
  
  const results = [
    { title: 'Railway Group D Admit Card 2021', color: 'from-slate-600 to-slate-800' },
    { title: 'Rajasthan Patwari Result 2021 RSMSSB', color: 'from-cyan-500 to-blue-500' },
    { title: 'Rajasthan Patwari Result 2021 RSMSSB', color: 'from-red-500 to-yellow-500' },
    { title: 'Rajasthan Patwari Result 2021 RSMSSB', color: 'from-green-400 to-pink-500' },
    { title: 'UPPSC Govt. Inter College 2022', color: 'from-yellow-500 to-orange-500' },
    { title: 'NTA CSIR UGC NET / JRF Exam June 2024 Exam Answer Key', color: 'from-purple-500 to-pink-500' },
    { title: 'NTA CSIR UGC NET / JRF Exam June 2024 Exam Answer Key', color: 'from-teal-500 to-blue-500' },
    { title: 'UPPSC Govt. Inter College 2022', color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <div className="bg-sky-600 min-h-[40vh] p-4 sm:p-8">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
        No #1 Platform For Sarkari Jobs & Result Updates
      </h1>
      
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((result, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 text-white font-semibold text-center cursor-pointer transition-transform hover:scale-105 bg-gradient-to-r ${result.color}`}
            >
              {result.title}
            </div>
          ))}
        </div>
      </div>

      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-r-lg shadow-lg">
        <div className="flex flex-col space-y-4 p-2">
          <Facebook className="text-blue-600 w-6 h-6 cursor-pointer" />
          {/* <WhatsApp className="text-green-500 w-6 h-6 cursor-pointer" /> */}
          <Send className="text-sky-500 w-6 h-6 cursor-pointer" />
          <Twitter className="text-blue-400 w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ResultsPlatform;