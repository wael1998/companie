import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInSide from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import DataTable from "./components/DataTable/DataTable";
import DataTablePassager from "./components/DataTablePassager/DataTablePassager";
import DataTableEmployer from "./components/DataTableEmployer/DataTableEmployer";
import DataTableAvion from "./components/DataTableAvion/DataTableAvion";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<SignInSide />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/todo" element={<DataTable />} />
            <Route exact path="/passager" element={<DataTablePassager />} />
            <Route exact path="/Employer" element={<DataTableEmployer />} />
            <Route exact path="/Avion" element={<DataTableAvion />} />
          </Routes>
        </Fragment>
      </Router>
      <Footer />
    </>
  );
}

export default App;
