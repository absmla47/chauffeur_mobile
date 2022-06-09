import {GET_ALL_MISSIONS, GET_ALL_MISSIONS_SUCCESS} from '../actionTypes';
const missionInitState = {
  loading: false,
  list: [],
};

const missionReducer = (state = missionInitState, action) => {
  let {type, payload} = action;
  switch (type) {
    case GET_ALL_MISSIONS:
      return {...state, loading: true};
    case GET_ALL_MISSIONS_SUCCESS:
      return {...state, loading: true, list: payload};

    default:
      return state;
  }
};

export default missionReducer;
