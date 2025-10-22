import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import ApplyJob from './Pages/ApplyJob'
import Applications from './Pages/Applications'


function App() {

  return (
    <div>
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
