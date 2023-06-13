import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./Homepage";
import { Routes, Route} from "react-router-dom";
// import Form from "./components/Form/Form"
import ReserveTable from "./components/ReservaTable/ReserveTable";
import MainForm from "./components/MainForm/MainForm";
function App() {
  return (
    <>
      <Header></Header>
      {/* <Homepage></Homepage> */}
      <Routes>
            <Route path='/little-lemon' element = {<Homepage/>}></Route>
            <Route path = '/little-lemon/reservations' element = {<MainForm />}></Route>
            
        </Routes>
    </>
  );
}

export default App;
