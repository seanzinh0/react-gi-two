import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import Results from './pages/Results.jsx'
import Layout from './pages/Layout.jsx'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="results" element={<Results/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
)
}

export default App
