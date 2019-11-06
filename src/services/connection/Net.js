import React, { Component } from "react";
import { connect } from "react-redux";
import { Detector } from "react-detect-offline";

class Net extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isConn: true
    };
  }

  goOnline = () => {
    this.setState({ isConn: true });
    this.props.dispatchEvent({ type: "NETCONNECTION" });
  };
  goOffline = () => {
    this.setState({ isConn: false });
    this.props.dispatchEvent({ type: "NETDISCONNECTION" });
  };

  componentWillMount() {
    navigator.onLine ? this.goOnline : this.goOffline;
  }

  componentDidMount() {
    window.addEventListener("online", this.goOnline);
    window.addEventListener("offline", this.goOffline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.goOnline);
    window.removeEventListener("offline", this.goOffline);
  }

  render() {
    const { NetInfo } = this.props;
    return (
      <div>
        {NetInfo.connection ? <div>Connected</div> : <div>Disconnectrd</div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  NetInfo: state.NetInfo
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Net);
