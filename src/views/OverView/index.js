import React, {useEffect} from "react";
import { Image } from "semantic-ui-react";
import { Container, Card, Button } from "shards-react";
import { connect } from "react-redux";

const ItemOverView = props => {

  return (
    <div style={{ paddingTop: 30, paddingLeft: 20, marginBottom: 40 }}>
      <div style={{ width: "100%", display: "flex" }}>
        <Card style={{ width: "25%" }}>
          <Image
            src={props.CardItem.data.img}
            size="huge"
          />
        </Card>
        <div style={{ width: "45%" }}>data</div>
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
