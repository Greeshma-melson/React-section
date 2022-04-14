import Home from "./Home";
//import Registration from "./component/Registration"
//import Login from"./component/login";
import './component/login.css';
import { Router, Link, Routes, Route, Outlet } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
import React from "react"
import Lantingpage from "./component/Lantingpage";
import './App.css';
import RxjsApp from "./context/rxjsApp";
import CurdApp from "./curd/curdApp";

const Login = React.lazy(() => import("./component/login"));
const Registration = React.lazy(() => import("./component/Registration"));
const Dashboard = React.lazy(() => import("./component/Dashbord"));

function App() {
  const menuItems = [
    { id: 1, key: "home", displayName: "Home" }
  ];
  return (
    <div>
      <div className="login" >
        <HashRouter>
          <Routes>
            {/* <Route path='registration' element={<Registration />} /> */}
            <Route path='/' element={<React.Suspense fallback={<h2>Loading...</h2>}>
              <Home />
            </React.Suspense>} />

            <Route path='log' element={
              <React.Suspense fallback={<h2>Loading...</h2>}>
                <Outlet />
              </React.Suspense>
            }>
              <Route path='Registration' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                <Registration />
              </React.Suspense>} />
              <Route path='login' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                <Login />
              </React.Suspense>} />
              <Route path='dashboard' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                <Dashboard />
              </React.Suspense>} />
              <Route path=':id' element={<Dashboard />} />
            </Route>

            <Route path='/home' element={<React.Suspense fallback={<h2>Loading...</h2>}>
              <Home />
            </React.Suspense>} />

            <Route path='rxjs' element={
              <React.Suspense fallback={<h2>Loading...</h2>}>
                <Outlet />
              </React.Suspense>
            }>
              <Route path='rxjsApp' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                <RxjsApp />
              </React.Suspense>} />
            </Route>

            <Route path='curd' element={
              <React.Suspense fallback={<h2>Loading...</h2>}>
                <Outlet />
              </React.Suspense>
            }>
              <Route path='curdApp' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                <CurdApp />
              </React.Suspense>} />
            </Route>

          </Routes>
        </HashRouter>
      </div>



    </div >


  )
}
export default App;