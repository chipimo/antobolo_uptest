import React from "react";
import { Card, CardHeader } from "shards-react";
import { makeStyles } from "@material-ui/core/styles";
import Scrollbar from "react-scrollbars-custom";
import PropTypes from "prop-types";

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import Book from "@material-ui/icons/Book";
import Assignment from "@material-ui/icons/Assignment";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import InfoIcon from "@material-ui/icons/Info";
import ForumIcon from "@material-ui/icons/Forum";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useTreeItemStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.secondary,
    "&:focus > $content": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: "var(--tree-view-color)"
    }
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "$expanded > &": {
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  group: {
    marginLeft: 0,
    "& $content": {
      paddingLeft: theme.spacing(2)
    }
  },
  expanded: {},
  label: {
    fontWeight: "inherit",
    color: "inherit"
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0)
  },
  labelIcon: {
    marginRight: theme.spacing(1)
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1
  }
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired
};

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400
  }
});

export default function Categories() {
  const [open, setOpen] = React.useState(true);

  const classes = useStyles();

  return (
    <div
      style={{
        marginTop: 15,
        position: "fixed",
        width: 260,
        height: "80%",
        padding: 7
      }}
    >
      <Card
        style={{ backgroundColor: "#F3F3F3", height: "98%" }}
        small
        className="mb-12"
      >
        <CardHeader className="border-bottom">
          <div style={{ display: "flex" }}>
            <i
              style={{ fontSize: 20, marginRight: 15, color: "green" }}
              className="material-icons"
            >
              school
            </i>
            <h6 className="m-0">Categories</h6>
          </div>
        </CardHeader>
        <Scrollbar style={{ height: "90%", width: "100%", paddingBottom: 10 }}>
          <TreeView
            className={classes.root}
            defaultExpanded={["1"]}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
          >
            {/* Assignments ==== */}
            <StyledTreeItem
              nodeId="1"
              labelText="Assignments"
              labelIcon={"assignment"}
            >
              <StyledTreeItem
                nodeId="5"
                labelText="Agricultural Sciences"
                labelIcon={SupervisorAccountIcon}
                labelInfo="90"
                color="#1a73e8"
                bgColor="#e8f0fe"
              />
              <StyledTreeItem
                nodeId="6"
                labelText="Education"
                labelIcon={InfoIcon}
                labelInfo="2,294"
                color="#e3742f"
                bgColor="#fcefe3"
              />
              <StyledTreeItem
                nodeId="7"
                labelText="Engineering"
                labelIcon={ForumIcon}
                labelInfo="3,566"
                color="#a250f5"
                bgColor="#f3e8fd"
              />
              <StyledTreeItem
                nodeId="8"
                labelText="Health Sciences"
                labelIcon={LocalOfferIcon}
                labelInfo="733"
                color="#3c8039"
                bgColor="#e6f4ea"
              />
              <StyledTreeItem
                nodeId="9"
                labelText="Business & Management"
                labelIcon={ForumIcon}
                labelInfo="3,566"
                color="#a250f5"
                bgColor="#f3e8fd"
              />
              <StyledTreeItem
                nodeId="10"
                labelText="Computer Science"
                labelIcon={LocalOfferIcon}
                labelInfo="733"
                color="#3c8039"
                bgColor="#e6f4ea"
              />
              <StyledTreeItem
                nodeId="11"
                labelText="Medicine & Health"
                labelIcon={LocalOfferIcon}
                labelInfo="733"
                color="#3c8039"
                bgColor="#e6f4ea"
              />
            </StyledTreeItem>

            {/* Past papers ==== */}

            <StyledTreeItem
              nodeId="2"
              labelText="Past Papers"
              labelIcon={InsertDriveFile}
            >
              <StyledTreeItem
                nodeId="5"
                labelText="Arts, Design"
                labelIcon={SupervisorAccountIcon}
                labelInfo="90"
                color="#1a73e8"
                bgColor="#e8f0fe"
              />
              <StyledTreeItem
                nodeId="6"
                labelText="Education & Training"
                labelIcon={InfoIcon}
                labelInfo="2,294"
                color="#e3742f"
                bgColor="#fcefe3"
              />
              <StyledTreeItem
                nodeId="7"
                labelText="Journalism & Media"
                labelIcon={ForumIcon}
                labelInfo="3,566"
                color="#a250f5"
                bgColor="#f3e8fd"
              />
              <StyledTreeItem
                nodeId="8"
                labelText="Law"
                labelIcon={LocalOfferIcon}
                labelInfo="733"
                color="#3c8039"
                bgColor="#e6f4ea"
              />
            </StyledTreeItem>

            {/* Books ==== */}

            <StyledTreeItem nodeId="2" labelText="Books" labelIcon={Book}>
              <StyledTreeItem
                nodeId="5"
                labelText="Arts, Design"
                labelIcon={SupervisorAccountIcon}
                labelInfo="90"
                color="#1a73e8"
                bgColor="#e8f0fe"
              />
              <StyledTreeItem
                nodeId="6"
                labelText="Education & Training"
                labelIcon={InfoIcon}
                labelInfo="2,294"
                color="#e3742f"
                bgColor="#fcefe3"
              />
              <StyledTreeItem
                nodeId="7"
                labelText="Journalism & Media"
                labelIcon={ForumIcon}
                labelInfo="3,566"
                color="#a250f5"
                bgColor="#f3e8fd"
              />
              <StyledTreeItem
                nodeId="8"
                labelText="Law"
                labelIcon={LocalOfferIcon}
                labelInfo="733"
                color="#3c8039"
                bgColor="#e6f4ea"
              />
            </StyledTreeItem>
          </TreeView>
        </Scrollbar>
      </Card>
    </div>
  );
}
