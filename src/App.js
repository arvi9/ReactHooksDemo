import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import useStateExmple1 from "./HooksExamples/useStateHookExmples/useStateExmple1";
import useStateWithObjects from "./HooksExamples/useStateHookExmples/useStateWithObjects";
import useEffectExample1 from "./HooksExamples/useEffectExamples/useEffectExample1";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/useStateExmple1" exact component={useStateExmple1} />
        <Route
          path="/useStateWithObjects"
          component={useStateWithObjects}
        />{" "}
        useEffectExample1
        <Route path="/useEffectExample1" component={useEffectExample1} />
        {/* <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
