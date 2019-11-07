import React, { useEffect } from "react";
import { Image } from "semantic-ui-react";
import { Card, Button } from "shards-react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { isMobile } from "react-device-detect";

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Document, Page } from 'react-pdf';
import file from "./3200induction.pdf";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const ItemOverView = props => {
const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [numPages, setnumPages] = React.useState(null)
  const [pageNumber, setpageNumber] = React.useState(1)
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const onDocumentLoadSuccess = ({ numPages }) => {
    setnumPages({ numPages });
  }
  
  return (
    <div style={{ paddingTop: 30, paddingLeft: 20, marginBottom: 40 }}>
      <div style={{ width: "100%", display: isMobile ? "block" : "flex" }}>
        <Card style={{ width: isMobile ?"90%" : "25%" }}>
          <Image src={props.CardItem.data.img} size="huge" />
        </Card>
        <div style={{ width: isMobile ?"90%" : "45%", marginLeft: 10 }}>
          <div>
            <Typography variant="h6" style={{ color: "green" }} gutterBottom>
              {props.CardItem.data.title}
            </Typography>
          </div>
          <div>
            <Typography variant="body2" gutterBottom>
              {props.CardItem.data.overview}
            </Typography>
          </div>
        </div>
        <div style={{ width:isMobile ?"90%" : "30%" }}> 
        <Button onClick={handleClickOpen}>Preview pdf</Button>
        </div>
      </div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
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
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
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
