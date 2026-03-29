import React from 'react'
import { slots } from '../data'
import Radiocomponents from './Radiocomponents'
import '../Css/TimeSchedule.css'

const TimeSchedule = () => {
  return (
    <div className='slot_container'>
      <h1 className='TS_heading'>Select a Schedule</h1>
      <div className='TS_main_contaner'>
        {slots.map((el,index)=>{
          return(
            <Radiocomponents text={el} key={index}/>
          )
        })}

      </div>
    </div>
  )
}

export default TimeSchedule
