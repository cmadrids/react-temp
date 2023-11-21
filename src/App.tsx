import React from 'react';
import './App.css';
import { Sidebar } from './components/navigation';
import Topbar from './components/navigation/topbar/Topbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './shared/router/routes';
import RequireAuth from './guards/RequireAuth';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='app__container'>
          <Sidebar />
          <div className='router-outlet__container'>
            <div className='app__top'>
              <Topbar />
            </div>
            <div className='app__router-outlet'>
              <Routes>
                {ROUTES.map(({ path, requiresAuth, component }, routeIndex: number) => {
                  return <Route
                    key={routeIndex}
                    path={path}
                    element={
                      (requiresAuth
                        ? (<RequireAuth>{component as JSX.Element}</RequireAuth> || null)
                        : (component as JSX.Element)
                      )
                    }
                  />
                })}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
