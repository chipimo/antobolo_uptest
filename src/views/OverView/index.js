import React, { useEffect } from "react";
import { Image } from "semantic-ui-react";
import { Card, Button } from "shards-react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

const ItemOverView = props => {
  return (
    <div style={{ paddingTop: 30, paddingLeft: 20, marginBottom: 40 }}>
      <div style={{ width: "100%", display: "flex" }}>
        <Card style={{ width: "25%" }}>
          <Image src={props.CardItem.data.img} size="huge" />
        </Card>
        <div style={{ width: "45%", marginLeft: 10 }}>
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
        <div style={{ width: "30%" }}>pric tag</div>
      </div>
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
