import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Covid19 from './covid19/covid19.component'
import World from './world/world.component'
const Approute =()=>{
    return(
    <Router>
        <Switch>
         <Route exact path="/" component={Covid19}></Route>
         <Route exact path="/home" component={Covid19}></Route>
         <Route path='/world' component={World}></Route>
        </Switch>
    </Router>
    )
}
export default Approute
