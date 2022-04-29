import React from 'react'
import Dashboard from './dashboard';
import Setting from './Setting';
import {  Route, Routes ,Link} from 'react-router-dom';
import Login from './Login';
import Registor from './Registor';
import Home from './Home';


export default function MyRouter() {
 // console.log(window.location.href);
  return (
    <div>
       {/* <div className='header'>
        <Link to='registor'>Registor</Link>
        <Link to='login'>Login</Link>
        <Link to='dashboard'>Dashboard</Link>
        <Link to='setting'>Setting</Link>
        </div> */}
        <Routes>
      
         <Route path='Login' element={<Login/>}/>
         <Route path='Registor' element={<Registor/>}/>
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='Setting' element={<Setting />} />
          <Route path='/' element={<Home />} />
        </Routes>
    </div>
  )
}
