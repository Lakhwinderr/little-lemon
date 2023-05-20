import React, { useState } from 'react'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Form from '../Form/Form'
import Form2 from '../Form2/Form2'
import "./MainForm.css"
import Confirmation from './Confirmation'
import ReserveTable from '../ReservaTable/ReserveTable'
export default function MainForm() {
    const [data, setData] = useState({})
    const [progress, setProgress]  = useState(0);
    const updateProgress =(value) =>{
        setProgress(value)
    }

    const updateData = (val) => {
        setData({...data, ...val});
    }
    const currentProgress = () => {
        switch(progress){
            case 0:
                return <ReserveTable  updateProgress = {updateProgress} updateData = {updateData}/>
            case 1:
                return <Form updateProgress = {updateProgress} updateData = {updateData}/>
            case 2:
                return <Form2 updateProgress = {updateProgress} updateData = {updateData}/>
            case 3:
                return <Confirmation data = {data}/>
        }
    }
  return ( 
    <div>
        <div className={`${progress < 3 && progress > 0? "slider": "hide"}`}>
            <div className="one complete"></div>
            <div className={`two ${progress > 1 ? "complete" : null}`}></div>
        </div>
      {currentProgress()}
      <About/>
         <Footer/> 
    </div>
  )
}
