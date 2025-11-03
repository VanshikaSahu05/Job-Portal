import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import ApplyJob from './Pages/ApplyJob'
import Applications from './Pages/Applications'
import Recruiter from './Components/Recruiter'
import { useContext } from 'react'
import { AppContext } from './Context/AppContext'
import Dashboard from './Pages/Dashboard'
import AddJob from './Pages/AddJob'

import ViewApplication from './Pages/ViewApplication'
import ManageJob from './Pages/ManageJob'
import 'quill/dist/quill.snow.css'





function App() {

  const {showRecruiterLogin} = useContext(AppContext);

  return (
    <div>
      {showRecruiterLogin && <Recruiter />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/dashboard' element={<Dashboard />}>
        <Route path='add-job' element={<AddJob/>}/>
        <Route path='manage-jobs' element={<ManageJob/>}/>
        <Route path='view-applications' element={<ViewApplication/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
