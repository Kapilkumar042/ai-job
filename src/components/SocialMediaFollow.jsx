import React from 'react';
import { Facebook, Send, MessageCircle, Youtube } from 'lucide-react';

const SocialMediaFollow = () => {
  const socialPlatforms = [
    { name: 'Facebook', icon: Facebook, color: 'bg-blue-600' },
    { name: 'Telegram', icon: Send, color: 'bg-sky-500' },
    { name: 'WhatsApp', icon: MessageCircle, color: 'bg-green-500' },
    { name: 'YouTube', icon: Youtube, color: 'bg-red-600' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-r from-white via-blue-50 to-white rounded-3xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-700 text-center mb-2">
        FOLLOW US ON SOCIAL MEDIA PLATFORMS
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Get The Latest Updates At Your Fingertips...
      </p>
      <div className="flex justify-center space-x-4 md:space-x-8">
        {socialPlatforms.map((platform) => (
          <a
            key={platform.name}
            href="#"
            className={`${platform.color} text-white p-3 rounded-full hover:opacity-80 transition-opacity`}
            aria-label={`Follow us on ${platform.name}`}
          >
            <platform.icon size={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaFollow;