import * as USER_CONSTANTS from "../constants/userConstants";
import axios from "axios";
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_CONSTANTS.USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/users/login/`,
      {
        username: email,
        email,
        password,
      },
      config
    );

    dispatch({
      type: USER_CONSTANTS.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_CONSTANTS.USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_CONSTANTS.USER_LOGOUT,
  });
  dispatch({
    type: USER_CONSTANTS.USER_DETAILS_RESET,
  });
  dispatch({
    type: USER_CONSTANTS.USER_LIST_RESET,
  });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_CONSTANTS.USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/users/register`,
      {
        username: email,
        email,
        password,
        name,
      },
      config
    );

    dispatch({
      type: USER_CONSTANTS.USER_REGISTER_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_CONSTANTS.USER_REGISTER_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_CONSTANTS.USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: USER_CONSTANTS.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_CONSTANTS.USER_DETAILS_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_CONSTANTS.USER_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile/update`, user, config);

    dispatch({
      type: USER_CONSTANTS.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_CONSTANTS.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_CONSTANTS.USER_UPDATE_PROFILE_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    });
  }
};

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_CONSTANTS.USER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/`, config);

    dispatch({
      type: USER_CONSTANTS.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_CONSTANTS.USER_LIST_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_CONSTANTS.USER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/users/delete/${id}`, config);

    dispatch({
      type: USER_CONSTANTS.USER_DELETE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_CONSTANTS.USER_DELETE_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    });
  }
};

//  Update by Admin

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_CONSTANTS.USER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/users/update/${user._id}`,
      user,
      config
    );

    dispatch({
      type: USER_CONSTANTS.USER_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_CONSTANTS.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_CONSTANTS.USER_UPDATE_FAIL,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    });
  }
};
