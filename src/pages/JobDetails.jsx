import React from 'react';
import { Calendar, MapPin, Briefcase, FileText, Download } from 'lucide-react';

const JobDetails = ({ post }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block mb-4">
        {post.type}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <Briefcase className="mr-2 text-gray-600" />
          <span>{post.organization}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="mr-2 text-gray-600" />
          <span>Last Date: {post.lastDate}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="mr-2 text-gray-600" />
          <span>{post.location}</span>
        </div>
        <div className="flex items-center">
          <FileText className="mr-2 text-gray-600" />
          <span>Total Vacancies: {post.totalVacancies}</span>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{post.description}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Eligibility</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">type</th>
              <th className="border p-2 text-left">eligibility</th>
            </tr>
          </thead>
          <tbody>
            {post.eligibility.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.key}</td>
                <td className="border p-2">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Job details</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">type</th>
              <th className="border p-2 text-left">value</th>
            </tr>
          </thead>
          <tbody>
            {post.jobDetails.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.key}</td>
                <td className="border p-2">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Vacancies By Category</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Category</th>
              <th className="border p-2 text-left">Vacancies</th>
            </tr>
          </thead>
          <tbody>
            {post.vacanciesByCategory.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2">{item.vacancies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Application Fees by Category</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Category</th>
              <th className="border p-2 text-left">fees</th>
            </tr>
          </thead>
          <tbody>
            {post.applicationFees.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2">{item.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Application Process</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {post.applicationProcess.map((step, index) => (
            <li key={index}>{step.description}</li>
          ))}
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Important Dates</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Event</th>
              <th className="border p-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {post.importantDates.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.event}</td>
                <td className="border p-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Important Links</h2>
        <div className="flex flex-wrap gap-4">
          {post.importantLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              <Download className="mr-2" />
              {link.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
