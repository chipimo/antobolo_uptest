import { CARDITEMS, OFFLOADITEMS } from "./types";

const CardItem = (
  state = {
    data: {
      id: "",
      title: "",
      img: "",
      price: 0,
      lastPrice: 0,
      reviews: [
        {
          id: "",
          name: "",
          profile: "",
          stars: 0,
          comment: "",
          replys: [],
          likes: 0
        }
      ],
      stars: 0,
      overview: "",
      author: "",
      date: "",
      Language: ""
    },

    isLoaded: false
  },
  action
) => {
  switch (action.type) {
    case CARDITEMS:
      state = {
        ...state,
        data: action.payload,
        isLoaded: true
      };
      break;
    case OFFLOADITEMS:
      state = {
        ...state,
        data: null,
        isLoaded: false
      };
      break;
    default:
      return state;
  }

  return state;
};

export default CardItem;
