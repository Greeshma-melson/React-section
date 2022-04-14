
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
function AddEmployee(props) {

    const [empList, updateEmpList] = useState([]);
    const [name, updateName] = useState("");
    const [username, updateUsername] = useState("");
    const [phone, updatePhone] = useState("");
    const [password, updatePassword] = useState("");

    const [btnAdd, btn1add] = useState();

    useEffect(() => {
        var getUserStore = JSON.parse(localStorage.getItem("user"));
        getUserStore !== null && updateEmpList(getUserStore);
    }, []);

    const [email, updateEmail] = useState("");
    const addEmployee = () => {
        var updateEmpList1 = JSON.parse(JSON.stringify(empList));
        updateEmpList1.push({
            name: name,
            password: password,
            email: email
        });
        updateEmpList(updateEmpList1);
        localStorage.setItem("user", JSON.stringify(updateEmpList1));
        window.location.href = "#/log/login";

    }

    return (
        <div className="regi">
        <div className="container" >
            
                 <nav className="menu">
                <img   className='logo' src={require('./images/GReesh.png')} />


                    <ul className='menu-iteam'>
                     <li><Link to="/home">Home</Link></li>
                     <li><Link to="/log/Registration">Registration</Link></li>
                        <li><Link to="/log/Login">Login</Link></li> 
                        <li><Link to="/log/Dashbord">Dashbord</Link></li>

                    </ul>
                </nav>
            <div className="registartion ">
                <h1>Registration Page</h1>
<form>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="txtName" className="form-label" id="formName" >Name:</label>
                    </div>
                    <div className="col-sm-9">
                        <input type="text" required className="col-sm-6" name="txtName" id="txtName" style={{ height: '40px', border: 'solid 2px' }} value={name}
                            onChange={e => updateName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row" style={{ padding: '10px' }}>
                    <div className="col-3">
                        <label htmlFor="txtName" className="form-label" id="formName" >Phone:</label>
                    </div>
                    <div className="col-9">
                        <input type="phonenumber" required className="col-sm-6" name="txtName" id="txtName" style={{ height: '40px' }} value={phone}
                            onChange={e => updatePhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row" style={{ padding: '10px' }}>
                    <div className="col-3">
                        <label htmlFor="txtEmail" className="form-label" id="formName" >User Name:</label>
                    </div>
                    <div className="col-9">
                        <input type="text" required className="col-sm-6" name="txtEmail" id="txtName" style={{ height: '40px' }} value={username}
                            onChange={e => updateUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row" style={{ padding: '10px' }}>
                    <div className="col-3">
                        <label htmlFor="txtEmail" className="form-label" id="formName" >Email:</label>
                    </div>
                    <div className="col-9">
                        <input type="email" required className="col-sm-6" name="txtName" id="txtName" style={{ height: '40px' }} value={email}
                            onChange={e => updateEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row" style={{ padding: '10px' }}>
                    <div className="col-3">
                        <label htmlFor="txtEmail" className="form-label" id="formName" >Password:</label>
                    </div>
                    <div className="col-9">
                        <input type="email" required className="col-sm-6" name="txtEmail" id="txtName" style={{ height: '40px' }} value={password}
                            onChange={e => updatePassword(e.target.value)}
                        />
                    </div>
                </div>
                </form>
                <button type="button" className='btn1 ' onClick={addEmployee} disabled={btnAdd}>Registration</button>
                 <Link to="/Login" className="link-toanathor">Alraedy ACcount?</Link>

            </div>
        </div>
        </div>
    )
}
export default AddEmployee;