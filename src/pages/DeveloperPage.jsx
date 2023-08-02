import React from 'react'
import MainLayout from '../components/MainLayout'

const DeveloperPage = () => {
  const student = 'Welcome Application developer. Ask me anything related to Coding'
  return (
    <div>
      <MainLayout welcome={student} />
    </div>
  )
}

export default DeveloperPage
