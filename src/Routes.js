import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Loading } from "./components/";

const RegisterLazy = lazy(() =>
  import("./pages/RegisterAttendance/RegisterAttendance")
);
const CheckLazy = lazy(() => import("./pages/CheckAttendance/CheckAttendance"));
const CheckRegisterLazy = lazy(() =>
  import("./pages/CheckRegister/CheckRegister")
);

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={RegisterLazy} />
          <Route exact path="/check" component={CheckLazy} />
          <Route exact path="/checkregister" component={CheckRegisterLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
