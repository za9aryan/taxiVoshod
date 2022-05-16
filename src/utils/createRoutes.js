import { Route, Routes } from 'react-router-dom';
import {
    Start,
    SearchPart,
    Cars,
    CarDetails,
    DriverSearch,
    CooperationType
} from '../pages/Pages'

const createRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/search' element={<SearchPart />} />
            <Route path='/damage' element={<Cars />} />
            <Route path='/car-details' element={<CarDetails />} />
            <Route path='/driver-search' element={<DriverSearch />} />
            <Route path='/cooperation-type' element={<CooperationType />} />
        </Routes>
    )
}

export default createRoutes