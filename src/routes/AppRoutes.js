import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Project = lazy(() => import("./Project/Project"));
const Portfolio = lazy(() => import("./Portfolio/Portfolio"));
const History = lazy(() => import("./History/History"));
const Home = lazy(() => import("./Home/Home"));
const FourOhFour = lazy(() => import("./FourOhFour/FourOhFour"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/portfolio/:id" exact component={Project} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/history" exact component={History} />
        <Route path="/" exact component={Home} />
        <Route component={FourOhFour} />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
