import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import ResultsPlatform from './components/ResultsPlatform'
import AdmitCard from './components/AdmitCard'
import JobCard from './components/JobCard'
import ResultCard from './components/ResultCard'
import JobDetails from './pages/JobDetails'
import AdmitCardDetails from './pages/AdmitCardDetails'
import Admission from './components/Admission'
import Admin from './admin/Admin'


function App() {

  // const post = {
  //   title: "UPPSC RO/ARO Recruitment 2024",
  //   type: "Latest Job",
  //   organization: "Uttar Pradesh Public Service Commission",
  //   lastDate: "2024-05-15",
  //   location: "Uttar Pradesh",
  //   totalVacancies: 235,
  //   description: "UPPSC has announced openings for Review Officer (RO) and Assistant Review Officer (ARO) positions...",
  //   applicationProcess: "1. Visit the official UPPSC website\n2. Click on 'Apply Online'\n3. Fill out the application form\n4. Upload required documents\n5. Pay the application fee\n6. Submit the form and take a printout",
  //   importantDates: [
  //     { event: "Online Application Start", date: "2024-04-01" },
  //     { event: "Online Application End", date: "2024-05-15" },
  //     { event: "Last Date for Fee Payment", date: "2024-05-17" },
  //     { event: "Exam Date", date: "To be announced" },
  //   ],
  //   importantLinks: [
  //     { name: "Official Notification", url: "#" },
  //     { name: "Apply Online", url: "#" },
  //     { name: "Syllabus", url: "#" },
  //   ],
  // };

  const post = {
    title: "UPPSC RO/ARO Recruitment 2024",
    type: "Latest Job",
    organization: "Uttar Pradesh Public Service Commission",
    lastDate: "2024-05-15",
    location: "Uttar Pradesh",
    totalVacancies: 235,
    description: "UPPSC has announced openings for Review Officer (RO) and Assistant Review Officer (ARO) positions...",
    
    // Application process as an array of objects
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
  
    // Application Fees by Category
    applicationFees: [
      { category: "General", fee: "₹200" },
      { category: "OBC", fee: "₹150" },
      { category: "SC", fee: "₹100" },
      { category: "ST", fee: "₹100" },
      { category: "PWD", fee: "₹50" },
    ],
    
    // Vacancy distribution by category
    vacanciesByCategory: [
      { category: "General", vacancies: 120 },
      { category: "OBC", vacancies: 60 },
      { category: "SC", vacancies: 40 },
      { category: "ST", vacancies: 15 },
    ],
    
    // Job details
    jobDetails: [
      { key: "Job Title", value: "Review Officer (RO) / Assistant Review Officer (ARO)" },
      { key: "Total Vacancies", value: "235" },
      { key: "Job Location", value: "Uttar Pradesh" },
      { key: "Salary", value: "Rs. 9,300 - Rs. 34,800 + Grade Pay" },
      { key: "Work Type", value: "Full-time, Permanent" }
    ],
  
    // Eligibility criteria
    eligibility: [
      { key: "Age Limit", value: "21 to 40 years as on 01/07/2024" },
      { key: "Educational Qualification", value: "Bachelor’s Degree in any stream from a recognized university" },
      { key: "Nationality", value: "Indian" },
      { key: "Experience", value: "No prior experience required, but knowledge of Hindi and English is preferred" }
    ]
  };
  const user = { isAdmin: true };
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/results' element={<ResultCard/>}/>
        <Route path='/admit-card' element={<AdmitCard/>}/>
        <Route path='/latest-job' element={<JobCard/>}/>
        <Route path="/job/:jobId" element={<JobDetails post={post}/>} />
        <Route path="/admit-card/:admitCardId" element={<AdmitCardDetails />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/admin" element={<Admin user={user}/>} />

      </Routes>
      <Footer/>

      {/* <ResultsPlatform/>
      <JobsByQualification/>
      <InfoCards/>
      <InfoCards/>
      <SocialMediaFollow/>
      <DetailedPostPage post={post}/>
      <RajasthanSanganakAdmitCard/>
      <Footer/> */}
    </div>
  )
}

export default App
