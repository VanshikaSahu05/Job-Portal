import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import ApplyJob from './Pages/ApplyJob'
import Applications from './Pages/Applications'
import Recruiter from './Components/Recruiter'
import { useContext } from 'react'
import { AppContext } from './Context/AppContext'


function App() {

  const {showRecruiterLogin} = useContext(AppContext);

  return (
    <div>
      {showRecruiterLogin && <Recruiter />}
      <Routes>
        <Route path='/' element={<Home />}/>
        
        <Route path='apply-job/:id' element={<ApplyJob />} >
        </Route>
        <Route path='/applications' element={<Applications />} >
        </Route>
      </Routes>
    </div>
  )
}

export default App
