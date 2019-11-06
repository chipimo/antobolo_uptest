import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
// reducers
import NetInfo from "./netInfo";
import UserInfo from "./userInfo";
import CardItem from "./CardItem";

const createReducer = asyncReducers => {
  const config = {
    key: "root",
    storage,
    blacklist: ["NetInfo", "CardItem", ]
  };

  return persistCombineReducers(config, {
    NetInfo: NetInfo,
    user: UserInfo,
    CardItem: CardItem,
  });
};

export default createReducer;
