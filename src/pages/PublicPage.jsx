import React from 'react'
import MainLayout from '../components/MainLayout'

const PublicPage = () => {
  const student = 'Welcome CLient. Ask me anything about Botswana goverment.'
  return (
    <div>
      <MainLayout welcome={student} />
    </div>
  )
}

export default PublicPage
