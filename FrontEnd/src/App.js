import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

import ListDepartmentComponent from './components/ListDepartmentComponent';
import CreateDepartmentComponent from './components/CreateDepartmentComponent';
import UpdateDepartmentComponent from './components/UpdateDepartmentComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent} ></Route>
            <Route path="/employees" component={ListEmployeeComponent} ></Route>
            <Route path='/add-employee' component={CreateEmployeeComponent} ></Route>
            <Route path="/update-employee/:id" component={UpdateEmployeeComponent} ></Route>
            <Route path='/view-employee/:id' component={ViewEmployeeComponent} ></Route>

            <Route path="/departments" component={ListDepartmentComponent} ></Route>
            <Route path='/add-department' component={CreateDepartmentComponent} ></Route>
            <Route path="/update-department/:id" component={UpdateDepartmentComponent} ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div >
  );
}

export default App;
