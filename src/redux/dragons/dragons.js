const RESERVE_TICKET_DRAGON = 'space-travelers-hub/rockets/RESERVE_TICKET_DRANGON';
const CANCEL_TICKET_DRAGON = 'space-travelers-hub/rockets/CANCEL_TICKET_DRAGON';
const LOAD_DRAGON = 'space-travelers-hub/rockets/LOAD_ROCKET_DRAGON';

const initialState = [];

const reserveTicketDragon = (payload) => ({
  type: RESERVE_TICKET_DRAGON,
  payload,
});

const cancelTicketDragon = (payload) => ({
  type: CANCEL_TICKET_DRAGON,
  payload,
});

const loadDragons = (payload) => (
  {
    type: LOAD_DRAGON,
    payload,

  }
);

const fetchDragonsDataApi = async () => {
  const resp = await fetch('https://api.spacexdata.com/v3/dragons');
  const data = await resp.json();

  const dragonData = await data.map((dragon) => (
    {
      id: dragon.id,
      name: dragon.name,
      flickr_images: dragon.flickr_images,
      description: dragon.description,
    }

  ));
  return dragonData;
};

const loadDragonsData = () => async (dispatch) => {
  const dragons = await fetchDragonsDataApi();
  if (dragons) {
    dispatch(loadDragons(dragons));
  }
};

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DRAGON:
      return {
        ...state,
        dragons: action.payload,
      };

    case RESERVE_TICKET_DRAGON:
      return {
        ...state,
        dragons: state.dragons.map((dragon) => (
          (dragon.id !== action.payload)
            ? {
              ...dragon,
            } : {
              ...dragon, reserved: true,
            }
        )),
      };
    case CANCEL_TICKET_DRAGON:
      return {
        ...state,
        dragons: state.dragons.map((dragon) => (
          (dragon.id !== action.payload)
            ? {
              ...dragon,
            } : {
              ...dragon, reserved: false,
            }
        )),
      };
    default:
      return state;
  }
};

export {
  dragonsReducer, loadDragonsData, cancelTicketDragon, reserveTicketDragon,
};
