import React, { useContext } from 'react'
import { slots } from '../data'
import Radiocomponents from './Radiocomponents'
import '../Css/TimeSchedule.css'
import BsContext from '../Context/BScontext'

const TimeSchedule = () => {
  const context=useContext(BsContext)
  const{time,changeTime}=context
  const handleChangeItem=(val)=>{
    changeTime(val)
    window.localStorage.setItem("slots",val) 
  }
  return (
    <div className='slot_container'>
      <h1 className='TS_heading'>Select a Schedule</h1>
      <div className='TS_main_contaner'>
        {slots.map((el,index)=>{
          return(
            <Radiocomponents text={el} key={index} data={time} changeSelection={handleChangeItem }/>
          )
        })}

      </div>
    </div>
  )
}

export default TimeSchedule
