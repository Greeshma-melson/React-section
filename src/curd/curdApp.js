// import logo from './logo.svg';
import './App.css';
import EmployeeDetails from './employeeDetails';
import EmployeeList from './EmployeeList';
import { useState } from "react";

function CurdApp(props) {
  console.log("props", props);
  const [empObjList, setEmpObjList] = useState([]);
  const [editEmpObj, setEditEmpObj] = useState({});
  const [empRemove3, empRemove2] = useState({});

  function updateEmpList(newList) {
    //console.log("***", newList);
    setEmpObjList(newList);
  }
  function onEmpEdit(editObj) {
    console.log("Emp object for edit", editObj);
    setEditEmpObj(editObj);
  }


  function empRemove1(i) {
    console.log("Emp object index", i);
    empRemove2(i);
    empObjList.splice(i, 1);
  }
  return (
    <div className='container-1'>
      <a href='#/home'>Home</a>
      <div className='row'>
        <div className='col-md-6'>
          <EmployeeDetails onEmployeeListChange={updateEmpList} editObj={editEmpObj} empDelete1={empRemove3} />
        </div>
        <div className='col-md-6'>
          <EmployeeList employees={empObjList} getEmpEdit={onEmpEdit} empRemove={empRemove1} />
        </div>
      </div>
    </div>

  );
}

export default CurdApp;
