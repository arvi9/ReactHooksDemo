import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import useStateExmple1 from "./HooksExamples/useStateHookExmples/useStateExmple1";
import useStateWithObjects from "./HooksExamples/useStateHookExmples/useStateWithObjects";
import useEffectExample1 from "./HooksExamples/useEffectExamples/useEffectExample1";
import useEffectExample2 from "./HooksExamples/useEffectExamples/useEffectExample2";
import useEffectExample3 from "./HooksExamples/useEffectExamples/useEffectExample3";
import useMemoExample1 from "./HooksExamples/useMemoExample/useMemoExample1";
import useRefExample1 from "./HooksExamples/useRefExamples/useRefExample1";
import useRefExample2 from "./HooksExamples/useRefExamples/useRefExample2";
import useRefExample3 from "./HooksExamples/useRefExamples/useRefExample3";
import useContextExample1 from "./HooksExamples/useContextExamples/useContextExample1";
import useContextExampleDefinationRender from "./HooksExamples/useContextExamples/useContextExampleDefinationRender";
import displayExample2 from "./HooksExamples/useContextExamples/useContextExample2Display";
import useCallBackExample1 from "./HooksExamples/useCallBackExamples/useCallBackExample1";
import useReducerExample1 from "./HooksExamples/useReducerExample/useReducerExample1";
import useReducerExample2 from "./HooksExamples/useReducerExample/useReducerExample2";
import CustomHookExample1 from "./HooksExamples/CustomHooks/CustomHookExample1";
import AppLoginLogout from "./HooksExamples/useContextExamples/useContextExampleLoginLogout/AppLoginLogout";
import useEffectExample4 from "./HooksExamples/useEffectExamples/useEffectExample4";
import useRefExample4Callback_ref from "./HooksExamples/useRefExamples/useRefExample4Callback_ref";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/useStateExmple1" exact component={useStateExmple1} />
        <Route
          path="/useStateWithObjects"
          component={useStateWithObjects}
        />{" "}
        <Route path="/useEffectExample1" component={useEffectExample1} />
        <Route path="/useEffectExample2" component={useEffectExample2} />
        <Route path="/useEffectExample3" component={useEffectExample3} />
        <Route path="/useMemoExample1" component={useMemoExample1} />
        <Route path="/useRefExample1" component={useRefExample1} />
        <Route path="/useRefExample2" component={useRefExample2} />
        <Route path="/useRefExample3" component={useRefExample3} />
        <Route path="/useContextExample1" component={useContextExample1} />
        <Route path="/useCallBackExample1" component={useCallBackExample1} />
        <Route path="/useReducerExample1" component={useReducerExample1} />
        <Route path="/useReducerExample2" component={useReducerExample2} />
        <Route path="/CustomHookExample1" component={CustomHookExample1} />
        <Route path="/useEffectExample4" component={useEffectExample4} />
        <Route
          path="/useContextExampleDefinationRender"
          component={useContextExampleDefinationRender}
        />
        <Route path="/useContextExample2" component={displayExample2} />
        <Route path="/AppLoginLogout" component={AppLoginLogout} />
        <Route
          path="/useRefExample4Callback_ref"
          component={useRefExample4Callback_ref}
        />
      </Switch>
    </div>
  );
}

export default App;
