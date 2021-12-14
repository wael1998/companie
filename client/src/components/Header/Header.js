import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

import {
 
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));


const Header = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(true);
  const classes = useStyles();
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  useEffect(() => {
    if (!auth) {
      navigate("/");
      window.location.reload();
    }
  });
  const handleLogin = () => {
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    } else setAuth(false);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <CssBaseline />
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Tunisaire
          </Typography>
              <div className={classes.navlinks}>
                <Link to="/todo" className={classes.link}>
                 Reserver
                </Link>
                <Link to="/passager" className={classes.link}>
                  Passager
                </Link>
                <Link to="/employer" className={classes.link}>
                  Employer
                </Link>
                <Link to="/vol" className={classes.link}>
                  vol
                </Link>
                <Link to="/avion" className={classes.link}>
                  avion
                </Link><Link to="/pilote" className={classes.link}>
                  pilote
                </Link>
                <Link to="/ddd" className={classes.link}>
                    
                </Link>
                </div>

          
          {auth ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              Hi, {localStorage.getItem("email")}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleLogout}
              >
                <Logout />
              </IconButton>
            </div>
          ) : (
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleLogin}
            >
              Login
              <Login />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
