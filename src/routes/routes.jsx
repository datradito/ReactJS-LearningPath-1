import {Homepage} from '../components/homepage';
import Counter from '../components/counterApp';
import GifApp from '../components/gifApp/gifApp';

import { Route, Routes } from "react-router-dom";

function PageRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Homepage  title={'Título proporcionado a través de props'} ></Homepage>}>
        </Route>

        <Route path="/Counter" element={<Counter></Counter>}>
        </Route>

        <Route path="/Gif" element={<GifApp/>}>
        </Route>
    </Routes>
    )
}
export default PageRoutes;
