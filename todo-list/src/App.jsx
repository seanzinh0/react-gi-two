import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout.jsx"
import TaskList from "./pages/TaskList.jsx";
import TaskDetails from "./pages/TaskDetails.jsx";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<TaskList/>}/>
            <Route path="/details/:id" element={<TaskDetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
