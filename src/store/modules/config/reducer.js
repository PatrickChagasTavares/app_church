import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function config(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@config/SAVE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@config/SAVE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@config/SAVE_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
