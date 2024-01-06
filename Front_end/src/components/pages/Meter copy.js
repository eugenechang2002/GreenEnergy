import React from 'react'
import '../../styles/Buttons.css'
import AddDevice from './AddDevice'
import Table from 'react-bootstrap/Table';



function Meter() {
  return (
    <div>
      <h3> Electricity Meter device List</h3>
      <AddDevice/>
      <h3>Device Information</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className='grey'>Device name</th>
            <th>Electricity</th>
            <th className='grey'>Model</th>       
            <th>EKM-25XDSE</th>     
            <th className='grey'>Installation date</th>
            <th>mm/dd/yyyy</th>
          </tr>
          <tr>
            <th className='grey'>Device ID</th>
            <th>00000</th>
            <th className='grey'>Amperage Capacity</th>       
            <th>100 Amps</th>     
            <th className='grey'>Dimensions</th>
            <th>3.94 x 3.44 x 2.55 inches</th>
          </tr>
          <tr>
            <th className='grey'>Location</th>
            <th>SJSU KING</th>
            <th className='grey'>Installation Method</th>       
            <th>Din Rail mounted</th>     
            <th className='grey'>Deployment Date</th>
            <th> mm/dd/yyyy</th>
          </tr>
          <tr>
            <th className='grey'>Manufacturer date</th>
            <th>EKM Metering inc.</th>
            <th className='grey'>Measument Accuracy</th>       
            <th>12 watts</th>     
            <th className='grey'> Power</th>
            <th>AC</th>
          </tr>
        </thead>
      </Table>
    </div>
  )
}

export default Meter
