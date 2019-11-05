import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, Alert } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import UserAuth from "../views/Auth";
import Categories from "../components/layout/Categories";
import { isMobile } from "react-device-detect";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DefaultLayout = ({ children, noNavbar, noFooter }) => {
  const [showLogin, setLogin] = useState(true);
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

  const handleAlertClose = () => {
    setLogin(false);
  };

  return (
    <Container fluid>
      <Row>
        <MainSidebar />
        <Col
          className="main-content p-0"
          lg={{ size: 10, offset: 2 }}
          md={{ size: 9, offset: 3 }}
          sm="12"
          tag="main"
        >
          <div style={{ backgroundColor: "#fafafa" }}>
            {!noNavbar && <MainNavbar />}
            {/* {showLogin? 
        <Container fluid className="px-0">
                <Alert theme="success" className="mb-0">
                <p> <i className="fa fa-info mx-2"></i> How you doin'? Get the best experience by Login or register for free </p>
                <div>
                 <Button onClick={handleClickOpen} theme="light" pill size="sm" className="mb-2">
               <i className="material-icons mr-1">person_add</i> Login now
                 </Button>
                 <Button onClick={handleAlertClose} theme="light" outline pill size="sm" className="mb-2">
               <i className="material-icons mr-1">person_add</i>Try later
                 </Button>
                </div>
              </Alert>
           </Container>
           : null } */}

            <div
              style={{ display: isMobile ? "block" : "flex", width: "100%" }}
            >
              <div style={{ width: isMobile ? "100%" : "70%" }}>{children}</div>
              {isMobile ? null : (
                <div
                  style={{
                    width: "28%",
                    marginLeft:10,
                    height: "80vh",
                  }}
                >
                  {<Categories />}
                </div>
              )}
            </div>
            {!noFooter && <MainFooter />}
          </div>
        </Col>
      </Row>
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
    </Container>
  );
};

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
