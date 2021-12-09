import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(true);
  React.useEffect(() => {
    if (!localStorage.getItem("email")) {
      navigate("/");
      window.location.reload();
    }
  });
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuth(false);
    } else setAuth(true);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coliveri
          </Typography>
          {auth && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h6>
                {localStorage.getItem("email") &&
                  `hello, ${localStorage.getItem("email")}`}
              </h6>
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
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
