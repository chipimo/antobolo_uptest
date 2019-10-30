import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import { Button } from "shards-react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import UserAuth from "../../../../views/Auth";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function UserActions(props) {
  const [visible, setVisible] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleUserActions = () => {
    setVisible(!visible);
  };

  if (isLogged) {
    return (
      <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/0.jpg")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block"> Sierra Brooks </span>{" "}
        </DropdownToggle>{" "}
        <Collapse tag={DropdownMenu} right small open={visible}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons"> & #xE7FD; </i> Profile{" "}
          </DropdownItem>{" "}
          <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons"> & #xE8B8; </i> Edit Profile{" "}
          </DropdownItem>{" "}
          <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons"> & #xE2C7; </i> Files{" "}
          </DropdownItem>{" "}
          <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons"> & #xE896; </i> Transactions{" "}
          </DropdownItem>{" "}
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/" className="text-danger">
            <i className="material-icons text-danger"> & #xE879; </i> Logout{" "}
          </DropdownItem>{" "}
        </Collapse>{" "}
      </NavItem>
    );
  } else {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: 10 }}>
          <Button
            onClick={() => handleClickOpen()}
            pill
            outline
            size="sm"
            className="mb-4"
          >
            Login
          </Button>
        </div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#1C1A31"
            }}
          >
            <div style={{ padding: 20, color: "#fff", fontSize: 22 }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer"
                }}
                onClick={handleClose}
              >
                <i className="material-icons">close</i>
              </button>
            </div>
            <div>
              <UserAuth />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default UserActions;
