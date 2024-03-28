import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home'
import { Confirmation } from '../pages/Confirmation'
import { Error } from '../pages/Error'
import { Cart } from '../pages/Cart'


export const Rout = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/error" element={<Error/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/confirmation" element={<Confirmation/>} />

            </Routes>
        </BrowserRouter>
    )
}

