import React from 'react';
import Home from './Home.jsx';
import Employee from './Employee.jsx';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App = () =>(
           <BrowserRouter> 
            <div>
               <h2>Welcome to React World </h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Employee'}>Employee</Link></li>
               </ul>

               <Switch>
                   <Route exact path='/' component={Home} />
                   <Route exact path='/Employee' component={Employee} />
               </Switch> 
            </div>  
            </BrowserRouter>
        );
   
export default App;