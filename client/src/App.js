import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInSide from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/login" element={<SignInSide />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
