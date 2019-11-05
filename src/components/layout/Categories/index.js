import React from "react";
import { Card, CardHeader } from "shards-react";
import { makeStyles } from "@material-ui/core/styles";
import Scrollbar from "react-scrollbars-custom";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import categories from "./data";
import { Item } from "rc-menu";

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
  const { labelText, labelInfo, color, bgColor, ...other } = props;

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
  const { pathname } = useLocation();
  const [path, setPath] = React.useState(
    pathname === "/explorer-overview" ? false : true
  );
  const [expanded, setExpanded] = React.useState(
    pathname === "/explorer-overview" ? "assignments" : ""
  );
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
            defaultExpanded={[expanded]}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
          >
            {categories.map(item => {
              if (pathname === item.path) {
                setExpanded(item.id);
                return (
                  <StyledTreeItem
                    nodeId={item.id}
                    key={item.key}
                    labelText={item.key}
                  >
                    {item.courses.map(course => (
                      <StyledTreeItem
                        key={course.id}
                        nodeId={course.id}
                        labelText={course.labelText}
                        labelInfo={course.labelInfo}
                        color={course.color}
                        bgColor={course.bgColor}
                      />
                    ))}
                  </StyledTreeItem>
                );
              } else {
                return (
                  <StyledTreeItem
                    nodeId={item.id}
                    key={item.key}
                    labelText={path ? "" : item.key}
                  >
                    {path
                      ? null
                      : item.courses.map(course => (
                          <StyledTreeItem
                            key={course.id}
                            nodeId={course.id}
                            labelText={course.labelText}
                            labelInfo={course.labelInfo}
                            color={course.color}
                            bgColor={course.bgColor}
                          />
                        ))}
                  </StyledTreeItem>
                );
              }
            })}
          </TreeView>
        </Scrollbar>
      </Card>
    </div>
  );
}
