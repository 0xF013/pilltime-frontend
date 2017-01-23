export const LOADING = 'pilltime/alarms/loading';
export const SUCCESS = 'pilltime/alarms/success';

export const initialState = {
  loading: false,
  items: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.items
      };
    default:
      return state;
  }
}

export function loadAll() {
  return async (dispatch, getState, { alarmService }) => {
    dispatch({ type: LOADING });
    const items = await alarmService.loadAll();
    dispatch({ type: SUCCESS, items });
    return items;
  };
}

export function create(payload) {
  const _loadAll = loadAll;
  return async (dispatch, getState, { alarmService, refresh=loadAll }) => {
    dispatch({ type: LOADING });
    await alarmService.create(payload);
    return dispatch(refresh());
  };
}