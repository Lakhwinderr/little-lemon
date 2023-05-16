import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./Homepage";
import { Routes, Route} from "react-router-dom";
// import Form from "./components/Form/Form"
import ReserveTable from "./components/ReservaTable/ReserveTable";
function App() {
  return (
    <>
      <Header></Header>
      {/* <Homepage></Homepage> */}
      <Routes>
            <Route path='/' element = {<Homepage/>}></Route>
            <Route path = '/reservations' element = {<ReserveTable />}></Route>
        </Routes>
    </>
  );
}

export default App;
