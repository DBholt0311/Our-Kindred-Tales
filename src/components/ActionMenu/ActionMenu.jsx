import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

function ActionMenu() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const project = useSelector((store) => store.projects);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const displayProject = (projectDisplay) => {
  //   console.log(projectDisplay);
  //   dispatch({ type: 'SET_PROJECT_DETAILS', payload: projectDisplay });
  //   history.push('/details');
  // };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Send to client for review</MenuItem>
        <MenuItem onClick={handleClose}>Create printable PDF</MenuItem>
        <MenuItem onClick={handleClose}>
          <p onClick={() => dispatch({ type: "SUBMIT_ORDER" })}>
            Send to Publisher
          </p>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ActionMenu;