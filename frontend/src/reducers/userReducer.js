import * as USER_CONSTANTS from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONSTANTS.USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_CONSTANTS.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_CONSTANTS.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_CONSTANTS.USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userRegisterReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_CONSTANTS.USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_CONSTANTS.USER_LOGIN_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_CONSTANTS.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_CONSTANTS.USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_CONSTANTS.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_CONSTANTS.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_CONSTANTS.USER_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONSTANTS.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_CONSTANTS.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_CONSTANTS.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case USER_CONSTANTS.USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const useListReducer = (state = [], action) => {
  switch (action.type) {
    case USER_CONSTANTS.USER_LIST_REQUEST:
      return { loading: true };
    case USER_CONSTANTS.USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_CONSTANTS.USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_CONSTANTS.USER_LIST_RESET:
      return [];
    default:
      return state;
  }
};

export const useDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONSTANTS.USER_DELETE_REQUEST:
      return { loading: true };
    case USER_CONSTANTS.USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case USER_CONSTANTS.USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_CONSTANTS.USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_CONSTANTS.USER_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case USER_CONSTANTS.USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_CONSTANTS.USER_UPDATE_RESET:
      return { user: {} };
    default:
      return state;
  }
};
