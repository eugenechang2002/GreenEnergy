import React from 'react'
import '../../styles/Buttons.css'
import AddDevice from './AddDevice'
import Table from 'react-bootstrap/Table';
//import "./PagesApp.css";
import '../../styles/deviceMgmt.css'
import { useState } from "react";
import Axios from "axios";

export const Meter = () => {
  const [electricMeterId, setelectricMeterId] = useState("");
  const [electricMeterName, setelectricMeterName] = useState("");
  const [location, setlocation] = useState("");
  const [manufacturer, setmanufacturer] = useState("");
  const [model, setmodel] = useState("");
  const [electricCapacity, setelectricCapacity] = useState("");
  const [installationMethod, setinstallationMethod] = useState("");
  const [meausurementAccuracy, setmeausurementAccuracy] = useState("");
  const [dimensions, setdimensions] = useState("");
  const [deploymentDate, setdeploymentDate] = useState("");
  const [installationDate, setinstallationDate] = useState("");
  const [power, setPower] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  const [newelectricMeterId, setnewelectricMeterId] = useState("");
  const [newelectricMeterName, setnewelectricMeterName] = useState("");
  const [newlocation, setnewlocation] = useState("");
  const [newmanufacturer, setnewmanufacturer] = useState("");
  const [newmodel, setnewmodel] = useState("");
  const [newelectricCapacity, setnewelectricCapacity] = useState("");
  const [newinstallationMethod, setnewinstallationMethod] = useState("");
  const [newmeausurementAccuracy, setnewmeausurementAccuracy] = useState("");
  const [newdimensions, setnewdimensions] = useState("");
  const [newdeploymentDate, setnewdeploymentDate] = useState("");
  const [newinstallationDate, setnewinstallationDate] = useState("");
  const [newpower, setnewPower] = useState("");
  const [newemployeeList, setnewEmployeeList] = useState([]);


  

  const addEmployee = () => {
    Axios.post("http://localhost:3001/api/fan/addMeterdetails", {
      electricMeterId : electricMeterId,
      electricMeterName : electricMeterName,
      location: location,
      manufacturer : manufacturer,
      model: model,
      electricCapacity : electricCapacity,
      installationMethod : installationMethod,
      meausurementAccuracy : meausurementAccuracy,
      dimensions : dimensions,
      deploymentDate : deploymentDate,
      installationDate : installationDate,
      power : power,
    })
  };

  const getEmployees = () => {
    // Axios.get("http://localhost:3001/employees").then((response) => {
    //   setEmployeeList(response.data);

    setEmployeeList([{
      "electricMeterId":"sdasdas",
      "electricMeterName":"sss",
      "location":"sss",
      "manufacturer":"sss",
      "model":"sss",
      "electricCapacity":"23",
      "installationMethod":"222",
      "meausurementAccuracy":"66",
      "dimensions":"2019",
      "deploymentDate":"2019",
      "installationDate":"2020",
      "power":"222"
  } ,
  {
    "electricMeterId":"sdasdas",
    "electricMeterName":"sss",
    "location":"sss",
    "manufacturer":"sss",
    "model":"sss",
    "electricCapacity":"23",
    "installationMethod":"222",
    "meausurementAccuracy":"66",
    "dimensions":"2019",
    "deploymentDate":"2019",
    "installationDate":"2020",
    "power":"222"
}
  ]);



    };

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/api/fan/updateMeter/${id}", 
    { electricMeterName: newelectricMeterName}
    )
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/api/fan/deleteMeter/${id}`)
  };

  return (
    
    <div className="App">
      <div className="information">
        <br></br>
        <br></br>

     
        <div className="add-device">

          <div> <div className='bleh'> <label>Device Name:</label> <input type="text" onChange={(event) => { setelectricMeterName(event.target.value); }} /> </div> 
          <div className='bleh'> <label>Device ID:</label> <input type="text" onChange={(event) => { electricMeterId(event.target.value); }} /> </div>
          <div className='bleh'> <label>Manufacturer:</label> <input type="text" onChange={(event) => { setmanufacturer(event.target.value); }} /> </div>
          <div className='bleh'> <label>Location:</label> <input type="text" onChange={(event) => { setlocation(event.target.value); }} /> </div>
          </div>
          <div> <div className='bleh'> <label>Model:</label> <input type="text" onChange={(event) => { setmodel(event.target.value); }} /> </div> 
          <div className='bleh'> <label>Amperage Capacity:</label> <input type="text" onChange={(event) => { setelectricCapacity(event.target.value); }} /> </div>
          <div className='bleh'> <label>Installation Method:</label> <input type="text" onChange={(event) => { setinstallationMethod(event.target.value); }} /> </div>
          <div className='bleh'> <label>Measurement Accuracy:</label> <input type="text" onChange={(event) => { setmeausurementAccuracy(event.target.value); }} /> </div>
          </div>
          <div> <div className='bleh'> <label>Installation Date:</label> <input type="text" onChange={(event) => { setinstallationDate(event.target.value); }} /> </div> 
          <div className='bleh'> <label>Dimensions:</label> <input type="text" onChange={(event) => { setdimensions(event.target.value); }} /> </div>
          <div className='bleh'> <label>Deployment Date:</label> <input type="text" onChange={(event) => { setdeploymentDate(event.target.value); }} /> </div>
          <div className='bleh'> <label>Power:</label> <input type="text" onChange={(event) => { setPower(event.target.value); }} /> </div>
          </div>
          
          
        </div>
      

        <button onClick={addEmployee}>Add Device</button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Show Device</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.electricMeterName}</h3>
                <h3>ID: {val.electricMeterId}</h3>

              </div>
              <div>
              <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setnewelectricMeterName(event.target.value);
                  }}
                />

                <button 
                  onClick={() => {
                   
                    updateEmployeeWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button 
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


