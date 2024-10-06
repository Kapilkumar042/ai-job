import React from 'react';
import { Facebook, Youtube, Send, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Who We Are Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Who We Are?</h3>
            <div className="bg-white border border-gray-300 inline-block px-2 py-1 mb-4">
              <span className="text-gray-800 font-bold">your</span>
              <span className="text-red-600 font-bold">logo</span>
              <span className="text-gray-800 font-bold">®</span>
            </div>
            <p className="text-gray-600 mb-4">
              I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="bg-blue-600 p-2 rounded"><Facebook size={20} className="text-white" /></a>
              <a href="#" className="bg-red-600 p-2 rounded"><Youtube size={20} className="text-white" /></a>
              <a href="#" className="bg-sky-500 p-2 rounded"><Send size={20} className="text-white" /></a>
              <a href="#" className="bg-gray-800 p-2 rounded"><Instagram size={20} className="text-white" /></a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Contact', 'Disclaimer', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
                <li key={link}><a href="#" className="text-gray-600 hover:text-gray-800">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Request For Post Section */}
          <div>
            <h3 className="text-lg font-semibold text-sky-500 bg-sky-100 px-4 py-2 rounded-full mb-4">Request For Post</h3>
            <form>
              <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-3 py-2 mb-3" />
              <textarea placeholder="Your Suggestion..." className="w-full border border-gray-300 rounded px-3 py-2 mb-3" rows="3"></textarea>
              <button type="submit" className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors">Request</button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-2 sm:mb-0">© 2022 ALL RIGHTS RESERVED</p>
          <p className="text-gray-500 text-sm">DESIGNED BY KAPIL SINGH</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;