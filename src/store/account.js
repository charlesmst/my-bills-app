import { createActions, createReducer } from "reduxsauce";
const INITIAL_STATE = {
  loading: true,
  data: [],
  error: null
};
const { Types, Creators } = createActions(
  {
    AccountLoadSuccess: ["data"],
    AccountLoadError: ["error"]
  },
  {}
); // options - the 2nd parameter is optional
export { Creators };
export const HANDLERS = {
  [Types.ACCOUNT_LOAD_SUCCESS]: (state = INITIAL_STATE, { data }) => ({
    ...state,
    data
  }),
  [Types.ACCOUNT_LOAD_ERROR]: (state = INITIAL_STATE, { error }) => ({
    ...state,
    error
  })
};

export default createReducer(INITIAL_STATE, HANDLERS);
