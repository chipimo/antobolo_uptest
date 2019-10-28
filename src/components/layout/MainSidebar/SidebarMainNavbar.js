import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "shards-react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Dispatcher, Constants } from "../../../flux";

class SidebarMainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }

  handleToggleSidebar() {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR
    });
  }

  render() {
    const { hideLogoText } = this.props;
    return (
      <div className="main-navbar">
        <Navbar
          className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
          type="light"
        >
          <NavbarBrand
            className="w-100 mr-0"
            href="#"
            style={{ lineHeight: "25px" }}
          >
            <div className="d-table m-auto">
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1"
                style={{ maxWidth: "25px" }}
                src={require("../../../images/antobolo.svg")}
                alt="Antobolo"
              />
              {!hideLogoText && (
                <span className="d-none d-md-inline ml-1">
                  Antobolo Explorer
                </span>
              )}
            </div>
          </NavbarBrand>
          {/* eslint-disable-next-line */}

          <IconButton
            className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
            onClick={this.handleToggleSidebar}
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Navbar>
      </div>
    );
  }
}

SidebarMainNavbar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

SidebarMainNavbar.defaultProps = {
  hideLogoText: false
};

export default SidebarMainNavbar;
