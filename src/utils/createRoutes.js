import { Route, Routes } from 'react-router-dom';
import {
    Start,
    SearchPart,
    Cars,
    CarDetails,
    DriverSearch,
    Information
} from '../pages/Pages'

const createRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/search' element={<SearchPart />} />
            <Route path='/damage' element={<Cars />} />
            <Route path='/car-details' element={<CarDetails />} />
            <Route path='/driver-search' element={<DriverSearch />} />
            <Route path='/information' element={<Information />} />
        </Routes>
    )
}

export default createRoutes