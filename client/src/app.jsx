import Registration from "./components/registration";
import Login from "./components/login";
import ShowNote from "./components/shownotes";
import AddNote from "./components/addnotes";
import DataId from "./components/particulardata";
import {BrowserRouter, Route, Routes} from "react-router-dom"
const App = ()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/registration" element={<Registration/>}></Route>
                <Route path="/shownotes" element={<ShowNote/>}></Route>
                <Route path="/addnotes" element={<AddNote/>}></Route>
                <Route path="/addnotes/:id" element={<DataId/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;