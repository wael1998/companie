import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInSide from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import DataTable from "./components/DataTable/DataTable";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/login" element={<SignInSide />} />
            <Route path="/register" element={<Register />} />
            <Route path="/todo" element={<DataTable />} />
          </Routes>
        </Fragment>
      </Router>
      <Footer />
    </>
  );
}

export default App;
