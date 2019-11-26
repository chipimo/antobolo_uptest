import React, { useEffect } from "react";
import { Image } from "semantic-ui-react";
import { Card, Button } from "shards-react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { isMobile } from "react-device-detect";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import PDFViewer from "pdf-viewer-reactjs";
import { Divider, Icon } from "semantic-ui-react";
import Rating from "@material-ui/lab/Rating";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ItemOverView = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [numPages, setnumPages] = React.useState(null);
  const [pageNumber, setpageNumber] = React.useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setnumPages({ numPages });
  };

  return (
    <div style={{ paddingTop: 30, paddingLeft: 20, marginBottom: 40 }}>
      <div style={{ width: "100%", display: isMobile ? "block" : "flex" }}>
        <div style={{ width: "95%", margin:"auto" }}>
          <div style={{ width: "100%", display: isMobile ? "block" : "flex" }}>
            <Card style={{ width: isMobile ? "90%" : "35%" }}>
              <Image src={props.CardItem.data.img} size="huge" />
            </Card>
            <div style={{ width: isMobile ? "90%" : "60%", marginLeft: 10 }}>
              <div>
                <Typography
                  variant="h6"
                  style={{ color: "green" }}
                  gutterBottom
                >
                  {props.CardItem.data.title}
                </Typography>
              </div>
              <div>
                <Typography variant="body2" gutterBottom>
                  By{" "}
                  <em style={{ color: "green" }}>
                    <strong>{props.CardItem.data.author}</strong>
                  </em>
                </Typography>
              </div>
              <div style={{ marginTop: 15 }}>
                <Rating value={props.CardItem.data.stars} readOnly />
              </div>
              <div style={{ paddingRight: 13 }}>
                <Divider />
              </div>
              <div style={{ marginTop: 20 }}>
                {
                   isMobile? <div
          style={{
            width: isMobile ? "90%" : "30%",
            borderColor: "transparent",
            borderLeftColor: isMobile ? "transparent" : "#DEDEDF",
            borderStyle: "solid",
            borderWidth: 1,
            padding: 10,
            paddingBottom:60,
          }}
        >
          <div>
            <Typography variant="button" display="block" gutterBottom>
              Selected
            </Typography>
            <Typography variant="body2" gutterBottom>
              Format: PDF file
            </Typography>
            <Typography variant="body2" gutterBottom>
              Downloads: 300
            </Typography>
          </div>
          <div style={{ marginTop: 20 }}>
            <Typography style={{ color: "red" }} variant="h4" gutterBottom>
              <strong style={{ fontSize: 20 }}>K</strong>{" "}
              <strong>{props.CardItem.data.price}.00</strong>
            </Typography>
          </div>
          <div>
            <Button theme="" onClick={handleClickOpen}>
              Preview pdf
            </Button>
          </div>
          <div>
            <Button theme="success">Buy now</Button>
          </div>
          <Divider />
          <div style={{ marginTop: 15, width: "100%", textAlign: "center" }}>
            <Typography variant="body2" gutterBottom>
              We support
            </Typography>
          </div>
          <div
            style={{
              marginTop: 15,
              width: "100%",
              justifyContent: "center",
              display: "flex"
            }}
          >
            <div style={{ color: "#6447BB" }}>
              <Icon size="big" name="stripe card" />
            </div>
            <div style={{ color: "#6447BB" }}>
              <Icon size="big" name="stripe card" />
            </div>
            <div style={{ color: "blue" }}>
              <Icon size="big" name="paypal" />
            </div>
            <div style={{ color: "#292D74" }}>
              <Icon size="big" name="cc visa" />
            </div>
          </div>
        </div>
      : null
                }
                <Typography variant="h5" gutterBottom>
                  {props.CardItem.data.type} Overview
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.CardItem.data.overview}
                </Typography>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 20, paddingLeft: 10 }}>
            <Paper
              square
              style={{
                width: "96%",
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "transparent",
                borderTopColor: "green",
                padding: 20
              }}
            >
              <Typography variant="h6" gutterBottom>
                Customer Reviews (3)
              </Typography>
              <div style={{ marginTop: 10 }}>
                {props.CardItem.data.reviews.map(element => (
                  <div key={element.id}>
                    <div style={{ display: "flex" }}>
                      <Avatar alt="Remy Sharp" src={element.profile} />
                      <Typography
                        style={{ marginTop: 5, marginLeft: 10 }}
                        variant="body2"
                      >
                        {element.name}
                      </Typography>
                    </div>
                    <div style={{margin:3, marginLeft:30}}>{element.comment}</div>
                  </div>
                ))}
              </div>
            </Paper>
          </div>
        </div>
        { isMobile? null
        :
        <div
          style={{
            width: isMobile ? "90%" : "30%",
            borderColor: "transparent",
            borderLeftColor: isMobile ? "transparent" : "#DEDEDF",
            borderStyle: "solid",
            borderWidth: 1,
            padding: 10
          }}
        >
          <div>
            <Typography variant="button" display="block" gutterBottom>
              Selected
            </Typography>
            <Typography variant="body2" gutterBottom>
              Format: PDF file
            </Typography>
            <Typography variant="body2" gutterBottom>
              Downloads: 300
            </Typography>
          </div>
          <div style={{ marginTop: 20 }}>
            <Typography style={{ color: "red" }} variant="h4" gutterBottom>
              <strong style={{ fontSize: 20 }}>K</strong>{" "}
              <strong>{props.CardItem.data.price}.00</strong>
            </Typography>
          </div>
          <div>
            <Button theme="" onClick={handleClickOpen}>
              Preview pdf
            </Button>
          </div>
          <div>
            <Button theme="success">Buy now</Button>
          </div>
          <Divider />
          <div style={{ marginTop: 15, width: "100%", textAlign: "center" }}>
            <Typography variant="body2" gutterBottom>
              We support
            </Typography>
          </div>
          <div
            style={{
              marginTop: 15,
              width: "100%",
              justifyContent: "center",
              display: "flex"
            }}
          >
            <div style={{ color: "#6447BB" }}>
              <Icon size="big" name="stripe card" />
            </div>
            <div style={{ color: "#6447BB" }}>
              <Icon size="big" name="stripe card" />
            </div>
            <div style={{ color: "blue" }}>
              <Icon size="big" name="paypal" />
            </div>
            <div style={{ color: "#292D74" }}>
              <Icon size="big" name="cc visa" />
            </div>
          </div>
        </div>
        }
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <div>

          <PDFViewer
            document={{
              url: "https://arxiv.org/pdf/quant-ph/0410100.pdf"
            }}
          />
        </div>

      </Dialog>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    CardItem: state.CardItem
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemOverView);
