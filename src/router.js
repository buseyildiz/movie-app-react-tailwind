import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Favorite from "./Favorite";
import Home from "./Home";
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<Home/>} />
        <Route path='/favorite' element={<Favorite/>} />
    </>
))


export default router