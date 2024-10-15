import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './Home'
import { NotFound } from './NotFound'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { Feed } from './Feed'

export const Pages = ()=>(
    <Router>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/feed' element={<Feed/>} />
      
      </Routes>
    </Router>

)
  
  
    

  
  
  
  

