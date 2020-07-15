import React from 'react';
import {Link,browserHistory,IndexRoute,BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Landing from './landing'
import Home from './Home'
import Project from './Projects'
function Routers(){
    return (
        <Router browserHistory>
            <Switch>
          <Route  exact path='/' component={Landing}/>
          <Route  exact path='/Home' component={Home}/>
          <Route  exact path='/Project' component={Project}/>
      </Switch>
        </Router>
    )
}

export default Routers;