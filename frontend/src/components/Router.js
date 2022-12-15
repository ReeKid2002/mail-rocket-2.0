import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import CreateMail from './CreateMail/index';
import Mail from './MailContent/Mail';
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
      <Routes>
        <Route exact path={'/createMail'} element={<RouteWithRole Element={CreateMail} />}></Route>
      </Routes>
      <Routes>
        <Route exact path={'/mail'} element={<RouteWithRole Element={Mail} />}></Route>
      </Routes>
    </div>
  )
}

export default Router