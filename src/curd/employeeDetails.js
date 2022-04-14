import { useState, useEffect } from "react";


function EmployeeDetails(props) {
    const [empList, updateEmpList1] = useState([]);
    const [name, updateName] = useState("");
    const [email, updateEmail] = useState("");
    const [address, updateAddress] = useState("");
    const [city, updateCity] = useState("");
    const [accType, updateAccType] = useState("");

    function addEmployee() {
        //console.log("add employee", name,email,address);
        var updateEmpList = [...empList];
        updateEmpList.push({
            name: name,
            email: email,
            address: address,
            city: city,
            accType: accType
        });
        updateEmpList1(updateEmpList);
        resetForm()

        props.onEmployeeListChange(updateEmpList);
    }

    useEffect(() => {
        updateName(props.editObj.name);
    }, [props.editObj.name]);
    useEffect(() => {
        updateAddress(props.editObj.address);
    }, [props.editObj.address]);
    useEffect(() => {
        updateCity(props.editObj.city);
    }, [props.editObj.city]);
    useEffect(() => {
        updateAccType(props.editObj.accType);
    }, [props.editObj.accType]);



    function updateEmpName(event) {
        updateName(event.target.value)
    }

    function onAccTypeSavingsChange(event) {
        if (event.target.value) {
            updateAccType("savings");
        }


    }


    function resetForm() {
        updateName("");
        updateEmail("");
        updateAddress("");
        updateCity("");
        updateAccType("savings");
    }

    return (

        <div>
            <nav className="menu">
            </nav>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="txtName" className="form-label">Name</label>
                </div>
                <div className="col-9">
                    <input type="text" required className="form-control" name="txtName" id="txtName" value={name}
                        onChange={updateEmpName}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="txtEmail" className="form-label">Email</label>
                </div>
                <div className="col-9">
                    <input type="email" required className="form-control" name="txtEmail" id="txtEmail" value={email}
                        onChange={e => updateEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="txtAddress" className="form-label">Address: </label>
                </div>
                <div className="col-9">
                    <textarea className="form-control" name="txtAddress" id="txtAddress" value={address}
                        onChange={e => updateAddress(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="ddlCity">City:</label>
                </div>
                <div className="col-9">
                    <select name="ddlCity" id="ddlCity" className="form-select" value={city}
                        onChange={e => updateCity(e.target.value)}
                    >
                        <option value=""></option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="chkAcctype">Account Type:</label>
                </div>
                <div className="col-9">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="accType" value="savings" id="aacTypeSavings"
                            checked={accType === 'savings'}
                            onChange={onAccTypeSavingsChange}
                        />
                        <label className="form-check-label" htmlFor="aacTypeSavings">Savings</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="accType" value="current" id="accTypeCurrent"
                            checked={accType === 'current'}
                            onChange={e => e.target.checked && updateAccType("current")}
                        />
                        <label className="form-check-label" htmlFor="accTypeCurrent">Current</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-3"></div>
                <div className="col-9">

                    <button type="button" className="btn btn-primary" onClick={addEmployee}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails;