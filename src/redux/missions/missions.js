const FETCH_MISSIONS = 'SpaceX-Project/books/FETCH_MISSIONS';
const RESERVE_MISSIONS = 'SpaceX-Project/books/RESERVE_MISSIONS';
const CANCEL_MISSIONS = 'SpaceX-Project/books/RESERVE_MISSIONS';

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

export const reserveMission = (id) => ({
  type: RESERVE_MISSIONS,
  id,
});

export const cancelMission = (id) => ({
  type: CANCEL_MISSIONS,
  id,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.data;

    case RESERVE_MISSIONS: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    }

    case CANCEL_MISSIONS: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
      return newState;
    }

    default:
      return state;
  }
};

export default missionsReducer;
