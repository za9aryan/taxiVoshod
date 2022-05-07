import React from 'react';
import createRoutes from './utils/createRoutes'

function App() {
  const routes = createRoutes()
  return (
    <>
      {routes}
    </>
  );
}

export default App;
