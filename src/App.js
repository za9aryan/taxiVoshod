import React from 'react';
import Start from './pages/Start/Start'
import SearchPart from './pages/serachPart/SearchPart'
import Cars from './pages/Cars/Cars'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/search' element={<SearchPart />} />
      <Route path='/damage' element={<Cars />} />
    </Routes>
  );
}

export default App;
