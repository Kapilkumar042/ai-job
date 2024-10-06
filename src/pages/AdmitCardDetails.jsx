import React from 'react';

const SocialButton = ({ text, color }) => (
  <button className={`${color} text-white px-4 py-2 rounded-md mr-2 mb-2`}>
    {text}
  </button>
);

const SocialIcon = ({ text, color }) => (
  <a href="#" className={`${color} p-2 rounded-full mr-2 text-white text-xs`}>
    {text}
  </a>
);

const TableRow = ({ label, value, isLink = false }) => (
  <tr className="border-b">
    <td className="py-2 px-4 font-semibold">{label}</td>
    <td className="py-2 px-4">
      {isLink ? (
        <a href="#" className="text-blue-600 hover:underline">{value}</a>
      ) : (
        value
      )}
    </td>
  </tr>
);

const AdmitCardDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold mb-4">Rajasthan Sanganak Admit Card 2021</h1>
      
      <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
        <span className="mr-4">ANAND</span>
        <span className="mr-4">June 13, 2024</span>
        <span className="mr-4">7:02 am</span>
        <span>No Comments</span>
      </div>

      <div className="flex flex-wrap mb-4">
        <SocialButton color="bg-blue-600" text="Facebook" />
        <SocialButton color="bg-green-500" text="WhatsApp" />
        <SocialButton color="bg-blue-400" text="Telegram" />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 pr-4">
          <p className="mb-4">
            Rajasthan Sanganak Admit Card 2021 राजस्थान संगणक एडमिट कार्ड: Rajasthan Sanganak Exam date 2021, Rajasthan Computor Admit Card 2021, RSMSSB Sanganak Admit Card 2021, RSMSSB Computor Exam date 19 December 2021 राजस्थान संगणक भर्ती 2021 के लिए परीक्षा का आयोजन 19 दिसंबर 2021 को किया जाएगा. जबकि राजस्थान संगणक भर्ती 2021 के लिए एडमिट कार्ड 13 दिसंबर 2021 को जारी किए जाएंगे. आवेदक 13 दिसंबर 2021 से अपना प्रवेश पत्र आधिकारिक वेबसाइट के माध्यम से डाउनलोड कर सकते हैं.
          </p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Rajasthan Sanganak Admit Card Details</h2>
            <table className="w-full border-collapse border">
              <tbody>
                <TableRow label="Exam Date" value="19 December 2021" />
                <TableRow label="Admit card issue date" value="13 December 2021" />
                <TableRow 
                  label="Rajasthan Sanganak Admit Card Name Wise Download" 
                  value="Click Here"
                  isLink={true}
                />
                <TableRow 
                  label="Download Rajasthan Sanganak Admit Card" 
                  value="Click Here"
                  isLink={true}
                />
                <TableRow 
                  label="Official Website" 
                  value="Click Here"
                  isLink={true}
                />
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-200 p-4 rounded-lg mb-4">
            <h2 className="text-2xl font-bold mb-2">Rajasthan Sanganak Admit Card 2021</h2>
            {/* Add more content here */}
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <img src="/api/placeholder/300/300" alt="Profile" className="w-full rounded-lg mb-4" />
            <div className="flex justify-center space-x-2 mb-4">
              <SocialIcon text="FB" color="bg-blue-600" />
              <SocialIcon text="IG" color="bg-pink-600" />
              <SocialIcon text="TG" color="bg-blue-400" />
              <SocialIcon text="YT" color="bg-red-600" />
              <SocialIcon text="WA" color="bg-green-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Youtube Channel Name</h3>
            <p className="text-center mb-4">For Video content, Subscribe Us us on Youtube</p>
            <button className="w-full bg-red-600 text-white py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmitCardDetails;