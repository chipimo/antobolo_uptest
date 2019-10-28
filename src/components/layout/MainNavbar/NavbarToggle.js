import React from "react";

import { Dispatcher, Constants } from "../../../flux";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class NavbarToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR
    });
  }

  render() {
    return (
      <nav className="nav">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}

        <IconButton
          onClick={this.handleClick}
          className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center"
          edge="start"
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
      </nav>
    );
  }
}

export default NavbarToggle;
