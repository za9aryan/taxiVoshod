import { Route, Routes } from 'react-router-dom';
import {
    Start,
    SearchPart,
    Cars,
    CarDetails
} from '../pages/Pages'

const createRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/search' element={<SearchPart />} />
            <Route path='/damage' element={<Cars />} />
            <Route path='/car-details' element={<CarDetails />} />
        </Routes>
    )
}

export default createRoutes