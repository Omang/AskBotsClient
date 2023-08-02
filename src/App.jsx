import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import IndexPage from './pages/IndexPage';
import Layout from './components/Layout'
import StudentPage from './pages/StudentPage';
import PublicPage from './pages/PublicPage';
import DeveloperPage from './pages/DeveloperPage';


axios.defaults.baseURL = 'http://localhost:3001';


const App = () =>{
 

  return (
    <Routes>
    <Route path='/' element={<Layout />}>

    <Route index element={<IndexPage />} />

    <Route path='/student' element={< StudentPage />} />
    <Route path='/public' element={< PublicPage />} />
    <Route path='/developer' element={< DeveloperPage />} />
    </Route>
    </Routes>
  )
}

export default App
