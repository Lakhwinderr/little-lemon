import React, { useEffect } from 'react'
import './Confirmation.css'
export default function Confirmation({data}) {
  useEffect(() => {
    alert(JSON.stringify(data))
  },data)
  return (
    <div className='confirmation'>
      <div className="congrats">
      <h2>Congratulations name! You have successfully booked your table with following details:</h2>
      </div>
      
    </div>
  )
}
