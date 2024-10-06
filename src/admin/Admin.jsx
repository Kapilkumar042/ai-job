import React from 'react'
import JobPostingForm from './JobPostingForm'

const Admin = ({ user }) => {
  if (!user.isAdmin) {
    return <div>Error: You are not eligible to access this page.</div>;
  }
  return (
    <div>
      <JobPostingForm/>
    </div>
  )
};

export default Admin