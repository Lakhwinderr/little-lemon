import React, { useEffect } from 'react'
import './ReserveTable.css'
import Button from './Button'
import DatePicker from './DatePicker';
import DinerCount from './DinerCount';
import IndoorOutdoor from './IndoorOutdoor';
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

export default function ReserveTable() {
    const date = new Date();
    useEffect(() => {
        console.log(fetchAPI(date))
    },[])
  return (
    <div className='reserveTable'>
      <h1>Creating reserve a table functionality.</h1>
      <Button />
      <DatePicker></DatePicker>
      <DinerCount/>
      <IndoorOutdoor></IndoorOutdoor>
    </div>
  )
}
