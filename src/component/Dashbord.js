import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
function Dashbord() {
    const [empName, updateEmpName] = useState("");
    const [empEmail, updateEmpEmail] = useState("");
    const [empPhone, updateEmpPhone] = useState("");
    const [empUserName, updateUserName] = useState("");
    const [empPassword, updatePassword] = useState("");

    const routeParams = useParams();
    useEffect(() => {
        var getLoginStorage = JSON.parse(localStorage.getItem("user"));
        var getSessionStore = JSON.parse(sessionStorage.getItem("userToken"));
        if (getSessionStore !== null) {
            var getSessionStore1 = getSessionStore[0].username;
        }
        if (getLoginStorage !== null) {
            var userDetails = '';
            var userIndex = getLoginStorage.findIndex(getLoginStorage => getLoginStorage.username === getSessionStore1);
            routeParams.id !== undefined ? userDetails = getLoginStorage[routeParams.id] : userDetails = getLoginStorage[userIndex];
            if (userDetails !== undefined && userDetails !== null) {
                updateEmpName(userDetails.name);
                updateEmpEmail(userDetails.email);
                updateEmpPhone(userDetails.phone);
                updateUserName(userDetails.username);
                updatePassword(userDetails.password);
            } else {
                // window.location.href = "#/Dashbord";
                console.log("1");
            }
        } else {
            // window.location.href = "#/Dashbord";
            console.log("1");
        }
    }, [routeParams.id]);

    function removeToken() {
        sessionStorage.removeItem("userToken");
        window.location.href = "/log/login";
    }

    return (
        <div>
            <nav className="menu">
                <img className='logo' src={require('./images/GReesh.png')} />


                <ul className='menu-iteam'>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/log/Registration">Registration</Link></li>
                    <li><Link to="/log/Login">Login</Link></li>
                    <li><Link to="/log/Dashbord">Dashbord</Link></li>


                </ul>
            </nav>
            <div className='container appbord'>

                <p></p>
                <div className='row'>
                    <div className='col-md-12' style={{ textAlign: 'center', color: 'blue' }}><b>User Details</b></div>
                </div>
                <hr style={{ border: '1px solid black' }} />
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-3'><b>Name</b></div>
                    <div className='col-md-7'>{empName}</div>
                </div>
                <p></p>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-3'><b>Email</b></div>
                    <div className='col-md-7'>{empEmail}</div>
                </div>
                <p></p>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-3'><b>Phone No.</b></div>
                    <div className='col-md-7'>{empPhone}</div>
                </div>
                <p></p>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-3'><b>UserName</b></div>
                    <div className='col-md-7'>{empUserName}</div>
                </div>
                <p></p>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-3'><b>Password</b></div>
                    <div className='col-md-7'>{empPassword}</div>
                </div>
                <p></p>
                <div className='row'>
                    <div className='col-md-5'></div>
                    <div className='col-md-2'>
                        <button type="button" className='btn btn-danger' onClick={removeToken} >LogOut</button>
                    </div>
                </div>
                <p style={{ paddingBottom: '20px' }}></p>
            </div>

        </div>
    )
}
export default Dashbord;