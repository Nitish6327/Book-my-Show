import React, { useContext } from 'react'
import {seats} from '../data'
import SeatInput from './SeatInput'
import '../Css/selectSeats.css'
import BsContext from '../Context/BScontext'

const SelectSeat = () => {
  const context=useContext(BsContext)
  const{noOfSeat,changeNoOfSeats}=context
  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seats :</h1>
      <div className='SS_main_container'>
        {seats.map((el,index)=>{
          return(
            <SeatInput key={index} text={el} noOfSeat={noOfSeat} changeNoOfSeats={changeNoOfSeats}/>
          )
        })}
      </div>
      
    </div>
  )
}

export default SelectSeat
