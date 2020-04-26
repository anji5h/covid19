import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Covid19 from './covid19/covid19.component'
import World from './world/world.component'
import Symptoms from './symtoms/symtomps.component'
import Prevention from './prevention/prevention.component'
const Approute =()=>{
    return(
    <Router>
        <Switch>
         <Route exact path="/" component={Covid19}></Route>
         <Route exact path="/home" component={Covid19}></Route>
         <Route path='/world' component={World}></Route>
         <Route path='/symptoms' component={Symptoms}></Route>
         <Route path='/preventions' component={Prevention}></Route>
        </Switch>
    </Router>
    )
}
export default Approute
