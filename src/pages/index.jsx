import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import { Home } from './Home'
import { NotFound } from './NotFound'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { Feed } from './Feed'
import PropTypes from 'prop-types'


const PublicRoute = ({children})=>{
if(localStorage.getItem('access-token')){
  return <Navigate to={'/feed'}/>
}
return children

}

const PrivateRoute = ({children})=>{
  if(!localStorage.getItem('access-token')){
    return <Navigate to={'/sign-in'}/>
  }
  return children
  
}

PublicRoute.propTypes ={
  children: PropTypes.node
}

PrivateRoute.propTypes ={
  children: PropTypes.node
}


export const Pages = ()=>(
    <Router>
      
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/sign-in' element={<PublicRoute><SignIn/></PublicRoute> } />
        <Route path='/sign-up' element={<PublicRoute><SignUp/></PublicRoute>} />
        <Route path='/feed' element={ <PrivateRoute> <Feed/></PrivateRoute>} />
      
      </Routes>
    </Router>

)
  
  
    

  
  
  
  

