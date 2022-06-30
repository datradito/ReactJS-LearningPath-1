import {Homepage} from '../components/homepage';
import GifApp from '../components/Gif_App/GifApp';

import { Route, Routes } from "react-router-dom";

function PageRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Homepage  title={'Esto es un texto proporcionado a través de props'} ></Homepage>}>
        </Route>

        <Route path="/Gif" element={<GifApp/>}>
        </Route>
    </Routes>
    )
}
export default PageRoutes;
