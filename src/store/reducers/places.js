import * as actionTypes from '../actions/actionTypes';

const initialState = {
  placeList: [],
  // selectedPlace: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      return {
        ...state,
        placeList: state.placeList.concat({
          key: Math.random(), 
          name: action.payload,
          // image: placeImage,
          image: {
            uri: 'https://i.ytimg.com/vi/qE3lwX4g3uc/maxresdefault.jpg'
          }
        }),
      };
    case actionTypes.DELETE_PLACE:
      return {
        ...state,
        // newList = [...this.state.placeList]
        // newList.splice(index, 1)
        // this.setState({placeList: newList})
        placeList: state.placeList.filter((place) => place.key !== action.payload),
      };
    // case actionTypes.SELECT_PLACE:
    //   return {
    //     ...state,
    //     selectedPlace: state.placeList.find(place => place.key === action.payload)
    //   };
    // case actionTypes.DESELECT_PLACE:
    //   return {
    //     ...state,
    //     selectedPlace: null
    //   };
    default:
      return state;
  }
};

export default reducer;