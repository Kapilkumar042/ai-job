import React, { useState } from 'react';
import { ChevronDown, Calendar, Link, Plus, Minus } from 'lucide-react';

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    title: "UPPSC RO/ARO Recruitment 2024",
    type: "Latest Job",
    organization: "Uttar Pradesh Public Service Commission",
    lastDate: "2024-05-15",
    location: "Uttar Pradesh",
    totalVacancies: 235,
    description: "UPPSC has announced openings for Review Officer (RO) and Assistant Review Officer (ARO) positions...",
    applicationProcess: [
      { step: 1, description: "Visit the official UPPSC website" },
      { step: 2, description: "Click on 'Apply Online'" },
      { step: 3, description: "Fill out the application form" },
      { step: 4, description: "Upload required documents" },
      { step: 5, description: "Pay the application fee" },
      { step: 6, description: "Submit the form and take a printout" }
    ],
    importantDates: [
      { event: "Online Application Start", date: "2024-04-01" },
      { event: "Online Application End", date: "2024-05-15" },
      { event: "Last Date for Fee Payment", date: "2024-05-17" },
      { event: "Exam Date", date: "To be announced" }
    ],
    importantLinks: [
      { name: "Official Notification", url: "#" },
      { name: "Apply Online", url: "#" },
      { name: "Syllabus", url: "#" }
    ],
    applicationFees: [
      { category: "General", fee: "₹200" },
      { category: "OBC", fee: "₹150" },
      { category: "SC", fee: "₹100" },
      { category: "ST", fee: "₹100" },
      { category: "PWD", fee: "₹50" }
    ],
    vacanciesByCategory: [
      { category: "General", vacancies: 120 },
      { category: "OBC", vacancies: 60 },
      { category: "SC", vacancies: 40 },
      { category: "ST", vacancies: 15 }
    ],
    jobDetails: [
      { key: "Job Title", value: "Review Officer (RO) / Assistant Review Officer (ARO)" },
      { key: "Total Vacancies", value: "235" },
      { key: "Job Location", value: "Uttar Pradesh" },
      { key: "Salary", value: "Rs. 9,300 - Rs. 34,800 + Grade Pay" },
      { key: "Work Type", value: "Full-time, Permanent" }
    ],
    eligibility: [
      { key: "Age Limit", value: "21 to 40 years as on 01/07/2024" },
      { key: "Educational Qualification", value: "Bachelor's Degree in any stream from a recognized university" },
      { key: "Nationality", value: "Indian" },
      { key: "Experience", value: "No prior experience required, but knowledge of Hindi and English is preferred" }
    ]
  });

  const handleInputChange = (e, index, field) => {
    const { name, value } = e.target;
    if (field) {
      setFormData(prevData => ({
        ...prevData,
        [field]: prevData[field].map((item, i) => 
          i === index ? { ...item, [name]: value } : item
        )
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleArrayItemAdd = (field) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: [...prevData[field], {}]
    }));
  };

  const handleArrayItemRemove = (field, index) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: prevData[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-4xl sm:mx-auto w-full px-4 sm:px-0">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold mb-8 text-center text-indigo-600">Comprehensive Job Posting Form</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Job Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Job Type</label>
                <div className="mt-1 relative">
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="block appearance-none w-full bg-white border border-gray-300 rounded-md py-2 px-3 pr-8 leading-tight focus:outline-none focus:ring focus:border-indigo-300"
                  >
                    <option>Latest Job</option>
                    <option>Internship</option>
                    <option>Part-time</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="lastDate" className="block text-sm font-medium text-gray-700">Last Date to Apply</label>
                <input
                  type="date"
                  id="lastDate"
                  name="lastDate"
                  value={formData.lastDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="totalVacancies" className="block text-sm font-medium text-gray-700">Total Vacancies</label>
                <input
                  type="number"
                  id="totalVacancies"
                  name="totalVacancies"
                  value={formData.totalVacancies}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              ></textarea>
            </div>

            {/* Application Process */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Application Process</h2>
              {formData.applicationProcess.map((step, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="number"
                    name="step"
                    value={step.step}
                    onChange={(e) => handleInputChange(e, index, 'applicationProcess')}
                    className="w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Step"
                  />
                  <input
                    type="text"
                    name="description"
                    value={step.description}
                    onChange={(e) => handleInputChange(e, index, 'applicationProcess')}
                    className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Description"
                  />
                  <button type="button" onClick={() => handleArrayItemRemove('applicationProcess', index)} className="text-red-500">
                    <Minus size={20} />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => handleArrayItemAdd('applicationProcess')} className="mt-2 text-indigo-600">
                <Plus size={20} /> Add Step
              </button>
            </div>

            {/* Important Dates */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Important Dates</h2>
              {formData.importantDates.map((date, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    name="event"
                    value={date.event}
                    onChange={(e) => handleInputChange(e, index, 'importantDates')}
                    className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Event"
                  />
                  <input
                    type="date"
                    name="date"
                    value={date.date}
                    onChange={(e) => handleInputChange(e, index, 'importantDates')}
                    className="w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <button type="button" onClick={() => handleArrayItemRemove('importantDates', index)} className="text-red-500">
                    <Minus size={20} />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => handleArrayItemAdd('importantDates')} className="mt-2 text-indigo-600">
                <Plus size={20} /> Add Date
              </button>
            </div>

            {/* Important Links */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Important Links</h2>
              {formData.importantLinks.map((link, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    name="name"
                    value={link.name}
                    onChange={(e) => handleInputChange(e, index, 'importantLinks')}
                    className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Link Name"
                  />
                  <input
                    type="url"
                    name="url"
                    value={link.url}
                    onChange={(e) => handleInputChange(e, index, 'importantLinks')}
                    className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="URL"
                  />
                  <button type="button" onClick={() => handleArrayItemRemove('importantLinks', index)} className="text-red-500">
                    <Minus size={20} />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => handleArrayItemAdd('importantLinks')} className="mt-2 text-indigo-600">
                <Plus size={20} /> Add Link
              </button>
            </div>

            {/* Application Fees */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Application Fees</h2>
              {formData.applicationFees.map((fee, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    name="category"
                    value={fee.category}
                    onChange={(e) => handleInputChange(e, index, 'applicationFees')}
                    className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Category"
                  />
                  <input
                    type="text"
                    name="fee"
                    value={fee.fee}
                        onChange={(e) => handleInputChange(e, index, 'applicationFees')}
                    className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Fee"
                  />
                  <button type="button" onClick={() => handleArrayItemRemove('applicationFees', index)} className="text-red-500">
                    <Minus size={20} />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => handleArrayItemAdd('applicationFees')} className="mt-2 text-indigo-600">
                <Plus size={20} /> Add Fee
              </button>
            </div>

            {/* Vacancies by Category */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Vacancies by Category</h2>
              {formData.vacanciesByCategory.map((vacancy, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    name="category"
                    value={vacancy.category}
                    onChange={(e) => handleInputChange(e, index, 'vacanciesByCategory')}
                    className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Category"
                  />
                  <input
                    type="number"
                    name="vacancies"
                    value={vacancy.vacancies}
                    onChange={(e) => handleInputChange(e, index, 'vacanciesByCategory')}
                    className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Vacancies"
                  />
                  <button type="button" onClick={() => handleArrayItemRemove('vacanciesByCategory', index)} className="text-red-500">
                    <Minus size={20} />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => handleArrayItemAdd('vacanciesByCategory')} className="mt-2 text-indigo-600">
                <Plus size={20} /> Add Category
              </button>
            </div>

            {/* Job Details */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Job Details</h2>
              {formData.jobDetails.map((detail, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    name="key"
                    value={detail.key}
                    onChange={(e) => handleInputChange(e, index, 'jobDetails')}
                    className="w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Key"
                  />
                  <input
                    type="text"
                    name="value"
                    value={detail.value}
                    onChange={(e) => handleInputChange(e, index, 'jobDetails')}
                    className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Value"
                  />
                  <button type="button" onClick={() => handleArrayItemRemove('jobDetails', index)} className="text-red-500">
                    <Minus size={20} />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => handleArrayItemAdd('jobDetails')} className="mt-2 text-indigo-600">
                <Plus size={20} /> Add Detail
              </button>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Eligibility</h2>
              {formData.eligibility.map((criterion, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    name="key"
                    value={criterion.key}
                    onChange={(e) => handleInputChange(e, index, 'eligibility')}
                    className="w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Criterion"
                  />
                  <input
                    type="text"
                    name="value"
                    value={criterion.value}
                    onChange={(e) => handleInputChange(e, index, 'eligibility')}
                    className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Requirement"
                  />
                  <button type="button" onClick={() => handleArrayItemRemove('eligibility', index)} className="text-red-500">
                    <Minus size={20} />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => handleArrayItemAdd('eligibility')} className="mt-2 text-indigo-600">
                <Plus size={20} /> Add Criterion
              </button>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-6">
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Job Posting
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobPostingForm;