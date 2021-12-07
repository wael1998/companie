import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/todo" component={Todo} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
