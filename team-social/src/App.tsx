import React from "react";
import { BrowserRouter as Router,Route, Switch, useHistory } from "react-router-dom";
import categories from "./categories";
import Game from "./Game"

export default function registerHandler(){
  function Content(){
    let history = useHistory();
    const clickHandler = () => history.push("./Game");

    return(
      <div>
        <h1>QUIZ GAME!</h1>
        <label htmlFor="nickname" className="my_labels">Nick name</label>
        <input type="text" name="nickname" className="name"/>
        <label htmlFor="password" className="data">Password</label>
        <input type="text" name="password" className="password"/>
        <br/>
        <button onClick = {clickHandler}>Register</button>
      </div>
    );
  }
  return(
    <>
    <Router>
      <Switch>
        <Route path="/Game" exact component={Game}/>
        <Route path="/" exact component = {Content}/>
      </Switch>
    </Router>
    </>
  );
}
