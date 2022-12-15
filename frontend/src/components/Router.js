import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
function Router() {
    const RouteWithRole = ({ Element }) => {
      //Check of Authentication
    return (
      <>
        <Element />
      </>
    );
  }

  return (
        <div>
      <Routes>
        <Route exact path={'/'} element={<RouteWithRole Element={Dashboard} />}></Route>
      </Routes>
    </div>
  )
}

export default Router