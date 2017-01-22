import reducer, {
  LOADING, SUCCESS, initialState,
  loadAll
} from './alarms';

describe('alarms feature', () => {
  describe('reducer', () => {
    it('returns initial state by default', () => {
      expect(reducer(undefined, {})).toBe(initialState);
    });

    context('on loading', () => {
      it('sets "loading" to true', () => {
        const action = { type: LOADING };
        const state = reducer(undefined, action);
        expect(state.loading).toBe(true);
      });
    });

    context('on success', () => {
      it('sets "loading" to false', () => {
        const action = { type: SUCCESS };
        const state = reducer(undefined, action);
        expect(state.loading).toBe(false);
      });

      it('sets "items"', () => {
        const items = ['some items'];
        const action = { type: SUCCESS, items };
        const state = reducer(undefined, action);
        expect(state.items).toBe(items);
      });
    });
  });

  describe('actions', () => {
    describe('loadAll()', () => {
      let dispatch, items, alarmService;

      beforeEach(() => {
        dispatch = jest.fn();
        items = ['some items'];
        alarmService = { loadAll: jest.fn(() => items) };
      });
      it('dipatches LOADING', async () => {
        loadAll()(dispatch, undefined, { alarmService });
        expect(dispatch).toHaveBeenCalledWith({ type: LOADING });
      });

      it('dispatches SUCCESS with the retreived items', async () => {
        await loadAll()(dispatch, undefined, { alarmService });
        expect(dispatch).toHaveBeenCalledWith({ type: SUCCESS, items });
      });

      it('returns the items', async () => {
        const result = await loadAll()(dispatch, undefined, { alarmService });
        expect(result).toBe(items);
      });
    });
  });
});