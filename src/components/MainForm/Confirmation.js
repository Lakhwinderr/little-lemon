import React, { useEffect } from 'react'
import './Confirmation.css'
export default function Confirmation({data}) {
  // useEffect(() => {
  //   alert(JSON.stringify(data))
  // },data)
  return (
    <div className='confirmation'>
      <div className="congrats">
      <h2>{`Congratulations ${data.firstName}! You have successfully booked your table with following details:`}</h2>
      
      <h3>{`Number of Diners: ${data.count}`}</h3>
      <br />
      <h3>{`Ocassion: ${data.ocassion}`}</h3>
      <br />
      <h3>{`Time: ${data.time}`}</h3>
      <br />
      <h3>{`Date: ${data.date}`}</h3>

      </div>
      
    </div>
  )
}
