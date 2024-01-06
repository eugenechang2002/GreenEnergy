import React from 'react'
import '../../styles/Buttons.css'
import { useState } from 'react'
//import { MonitorTracking }from './MonitorTracking'
import { MonitorMeter } from './MonitorMeter'
import { IoT } from './IoT'
import { MonitorIOT } from './MonitorIOT'

export const MonitorTrackingOptions = () => {
  const [meter, setMeter] = useState('');
  return (

    <div className="table-wrapper">
      <br></br>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <button className='light-grey curved-corners selection-button' onClick={(e) => setMeter('iot')} >
          IOT
        </button>
        <button className='light-grey curved-corners selection-button' onClick={(e) => setMeter('meter')}>
          Meter
        </button>
      </div>
      {meter === 'meter' && <MonitorMeter />}
      {meter === 'iot' && <MonitorIOT />}

    </div>
  )
}
