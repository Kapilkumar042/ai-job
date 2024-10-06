import React from 'react'
import DetailedPostPage from '../components/DetailedPostPage'
import InfoCards from '../components/InfoCards'
import JobsByQualification from '../components/JobsByQualification'
import RajasthanSanganakAdmitCard from '../components/RajasthanSanganakAdmitCard'
import ResultsPlatform from '../components/ResultsPlatform'
import SocialMediaFollow from '../components/SocialMediaFollow'

const Home = () => {
  return (
    <div>
        <ResultsPlatform/>
      <JobsByQualification/>
      <InfoCards/>
      <SocialMediaFollow/>
    </div>
  )
}

export default Home