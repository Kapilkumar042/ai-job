import React from 'react'
import InfoCards from '../components/InfoCards'
import JobsByQualification from '../components/JobsByQualification'
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