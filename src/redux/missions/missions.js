const FETCH_MISSIONS = 'SpaceX-Project/books/FETCH_MISSIONS';
const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

export const fetchAllMissions = () => async (dispatch) => {
  const response = await fetch(MISSIONS_URL);
  const data = await response.json();
  dispatch({
    type: FETCH_MISSIONS,
    data,
  });
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [action.data];
    default:
      return state;
  }
};

export default missionsReducer;
