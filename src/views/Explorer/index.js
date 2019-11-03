import React, { useState, useEffect } from "react";
import { Container, Card, CardHeader, Button } from "shards-react";
import { isMobile } from "react-device-detect";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function Explorer() {
  const [PostListOne, SetPostListOne] = useState();
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = event => {
    let scrollTop = event.srcElement.body.scrollTop;
    console.log(scrollTop);
  };

  return (
    <div
      style={{
        paddingTop: 10,
        paddingBottom: 20,
        display: isMobile ? "block" : "flex"
      }}
    >
      <div style={{ width: isMobile ? "100%" : "70%" }}>
        <Container fluid className="main-content-container px-14">
          <div>
            <div
              style={{
                borderColor: "#cfcfcf",
                borderStyle: "solid",
                borderWidth: 1,
                height: 210,
                width: "100%",
                borderRadius: 10,
                backgroundColor: "#eeeeee"
              }}
            >
              <div style={{ height: 90 }}></div>
              <div style={{ padding: 10 }}>
                <h5 style={{ color: "green", margin: 0, padding: 0 }}>
                  Antobolo Level up{" "}
                </h5>
                <p style={{ padding: 0, margin: 0 }}>
                  Get 2 points with every purchase you make{" "}
                </p>
              </div>
              <Button theme="success" outline pill size="sm" className="mb-2">
                <i className="material-icons mr-1">person_add</i>Level up now
              </Button>
            </div>

            <div style={{ marginTop: 20 }}>
              <div>
                <strong>
                  <h5 style={{ color: "green", margin: 0, padding: 0 }}>
                    Bestsellers
                  </h5>
                </strong>
                <p style={{ margin: 0, padding: 0 }}>This year's top sellers</p>
              </div>

              <div style={{ paddingTop: 6 }}>
                <Card small className="mb-4">
                  books
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div style={{ width: "28%" }}>
        <Card style={{ backgroundColor: "#ededed" }} small className="mb-12">
          <CardHeader className="border-bottom">
            <div style={{ display: "flex" }}>
              <i
                style={{ fontSize: 20, marginRight: 15, color: "green" }}
                className="material-icons"
              >
                assessment
              </i>
              <h6 className="m-0">Categories</h6>
            </div>
          </CardHeader>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Assignments</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Expansion Panel 2
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel disabled>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                Disabled Expansion Panel
              </Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
        </Card>
      </div>
    </div>
  );
}

export default Explorer;
