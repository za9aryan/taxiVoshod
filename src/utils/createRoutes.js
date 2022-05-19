import { Route, Routes } from 'react-router-dom';
import {
    Start,
    SearchPart,
    Cars,
    CarDetails,
    DriverSearch,
    CooperationType,
    Equipment,
    SecondTerms,
    DamageDetails,
    Information,
} from '../pages/Pages'

const createRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/search' element={<SearchPart />} />
            <Route path='/damage' element={<Cars />} />
            <Route path='/damage-details' element={<DamageDetails />} />
            <Route path='/car-details' element={<CarDetails />} />
            <Route path='/equipment' element={<Equipment />} />
            <Route path='/driver-search' element={<DriverSearch />} />
            <Route path='/cooperation-type' element={<CooperationType />} />
            <Route path='/second-terms' element={<SecondTerms />} />
            <Route path='/information' element={<Information />} />
        </Routes>
    )
}

export default createRoutes