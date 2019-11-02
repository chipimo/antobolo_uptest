import React from "react";
import { Nav } from "shards-react";
import MobileSearchBar from "./SearchFunction";
import Notifications from "./Notifications";
import UserActions from "./UserActions";

export default () => (
  <Nav navbar className="border-left flex-row">
    <Notifications />
  </Nav>
);
