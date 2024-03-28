import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home'


export const Rout = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/error" element={<Home/>} />
                <Route path="/cart" element={<Home/>} />

            </Routes>
        </BrowserRouter>
    )
}

