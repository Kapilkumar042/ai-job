import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', link: '/' },
    { name: 'RESULTS', link: '/results' },
    { name: 'ADMIT CARD', link: '/admit-card' },
    { name: 'LATEST JOB', link: '/latest-job' },
    { name: 'ANSWER KEY', link: '/answer-key' },
    { name: 'ADMISSION', link: '/admission' },
    { name: 'SYLLABUS', link: '/syllabus' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-gray-800">your</span>
                <span className="text-red-600">logo</span>
                <span className="text-gray-800">®</span>
              </span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={`${
                  item.name === 'HOME' ? 'text-blue-500' : 'text-gray-700'
                } hover:text-gray-900 px-3 py-2 text-sm font-medium`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center">
            <button className="p-2">
              <Search className="h-6 w-6 text-gray-600" />
            </button>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
            onClick={()=>setIsMenuOpen(false)}
              key={item.name}
              to={item.link}
              className={`${
                item.name === 'HOME'
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;