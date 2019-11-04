import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "shards-react";
import { isMobile } from "react-device-detect";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Background from "../../images/banner/level-up.png";

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
  const [PostListOne, SetPostListOne] = useState(false);
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
        paddingBottom: 20
      }}
    >
      <div>
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
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${Background})`,
                paddingLeft: 30
              }}
            >
              <div style={{ padding: 10, paddingTop: 30 }}>
                <h5 style={{ color: "green", margin: 0, padding: 0 }}>
                  Antobolo Level up{" "}
                </h5>
                <p style={{ padding: 0, margin: 0 }}>
                  Get 2 points with every purchase you make{" "}
                </p>
              </div>
              <Button theme="secondary" pill size="sm" className="mb-2">
                <i className="material-icons mr-1">person_add</i>Level up now
              </Button>
            </div>

            <div style={{ marginTop: 20 }}>
              <div>
                <strong>
                  <Typography
                    variant="h6"
                    style={{ color: "green", margin: 0, padding: 0 }}
                  >
                    Bestsellers
                  </Typography>
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
    </div>
  );
}

export default Explorer;
