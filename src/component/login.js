import { useState,useRef} from 'react';
import React from 'react';
import { Link } from "react-router-dom"
function Login() {
  const [loginemail, updateEmail] = useState("");
  const [loginpassword, updatePassword] = useState("");
  const [btn, btnAdd] = useState("true")
  const [empList, updateEmpList] = useState([]);
  const focusPassword = useRef(null);

  const submit = () => {
    var getLoginStorage = JSON.parse(localStorage.getItem('user'));
    var userIndex = getLoginStorage.findIndex(getLoginStorage=> getLoginStorage.email === loginemail);
    var userDetail = getLoginStorage[userIndex]; 
    var passCheck = userDetail.password;
    if (passCheck === loginpassword) {
      var updateEmpList1 = empList;
            updateEmpList1.push({
                login: true,
                username:loginemail,
                password:loginpassword
            });
            console.log("--",updateEmpList1);
            updateEmpList(updateEmpList1);
            sessionStorage.setItem("userToken", JSON.stringify(updateEmpList1));
            window.location.href = "/#/log/" + userIndex;
          } else if (loginpassword === '') {
            alert("Please Enter Password And Continue..");
            focusPassword.current.focus();
        }else {
          alert("Password is Wrong..");
          //focusPassword.current.focus();
      }   

 

  }


  return (
    <div>
         <nav className="menu">
                <img   className='logo' src={require('./images/GReesh.png')} />


                    <ul className='menu-iteam'>
                    <li><Link to="/Lantingpage">Home</Link></li>
                        <li><Link to="/Registration">Registration</Link></li>
                        <li><Link to="/Login">Login</Link></li> 
                        <li><Link to="/log/Dashbord">Dashbord</Link></li>

                    </ul>
                </nav>
    <div className='container'>
        
      <div className='login-conatiner'>
                          <h1>Login Page</h1>
        <div className="row" style={{padding:'10px'}}>
          <div className="col-3">
            <label htmlFor="txtEmail" className="form-label">Email:</label>
          </div>
          <div className="col-9">
            <input type="email" required className="col-sm-6" name="logintxtEmail" id="loginEmail" style={{  height: '40px', border: 'solid 2px' }}  value={loginemail}
              onChange={e => updateEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row" style={{padding:'10px'}}>
          <div className="col-3">
            <label htmlFor="txtEmail" className="form-label">Password:</label>
          </div>
          <div className="col-9">
            <input type="email" required className="col-sm-6" name="logintxtEmail" id="loginEmail" style= {{ height: '40px', border: 'solid 2px' }}value={loginpassword}
              onChange={e => updatePassword(e.target.value)}
            />
          </div>
        </div>
        <button type="button" className='btn2' onClick={submit} >Login</button>

      </div>
    </div>
    </div>
  )
}
export default Login