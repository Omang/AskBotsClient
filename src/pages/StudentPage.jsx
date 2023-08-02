import React from 'react'
import MainLayout from '../components/MainLayout'

const StudentPage = () => {
  const student = 'Welcome Student. Ask me anything educational'
  return (
    <div>
       <MainLayout welcome={student}  />
    </div>
  )
}

export default StudentPage
