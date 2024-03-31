import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home'
import { Error } from '../pages/Error'
import { Cart } from '../pages/Cart'


export const Rout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="*" element={<Error/>} />

            </Routes>
        </BrowserRouter>
    )
}

