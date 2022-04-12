import { useState,useRef} from 'react';
import React from 'react';
function Login() {
  const [loginemail, updateEmail] = useState("");
  const [loginpassword, updatePassword] = useState("");
  const [btn, btnAdd] = useState("true")
  const [empList, updateEmpList] = useState([]);
  const focusPassword = useRef(null);
  const submit = () => {
    var getLoginStorage = JSON.parse(localStorage.getItem('user'));
    var userIndex = getLoginStorage.findIndex(getLoginStorage=> getLoginStorage.username === loginemail);
    var userDetail = getLoginStorage[userIndex]; 
    var passCheck = userDetail.password;
    if (passCheck === loginpassword) {
      var updateEmpList1 = empList;
            updateEmpList1.push({
                login: true,
                username:loginemail,
                password:loginpassword
            });
            updateEmpList(updateEmpList1);
            console.log("aj",updateEmpList1);
            sessionStorage.setItem("userToken", JSON.stringify(updateEmpList1));
           
          } else if (loginpassword === '') {
            alert("Please Enter Password And Continue..");
            focusPassword.current.focus();
        }else {
          alert("Password is Wrong..");
          focusPassword.current.focus();
      }   

 

  }


  return (
    <div>
      <div>

        <div className="row">
          <div className="col-3">
            <label htmlFor="txtEmail" className="form-label">Email</label>
          </div>
          <div className="col-9">
            <input type="email" required className="form-control" name="txtEmail" id="txtEmail" value={loginemail}
              onChange={e => updateEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label htmlFor="txtEmail" className="form-label">Password</label>
          </div>
          <div className="col-9">
            <input type="email" required className="form-control" name="txtEmail" id="txtEmail" value={loginpassword}
              onChange={e => updatePassword(e.target.value)}
            />
          </div>
        </div>
        <button type="button" className='btn' onClick={submit} disabled={btnAdd}>Login</button>

      </div>
    </div>
  )
}
export default Login