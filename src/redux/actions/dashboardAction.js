import * as types from '../types';
import {services, endpoints, getFullUrlPM} from '../../utils';

export const getDashboard = data => {
  return dispatch => {
    dispatch({
      type: types.DASHBOARD_DATA_START,
      payload: null,
    });
    services.getWithoutKey(getFullUrlPM(endpoints.login), data).then(res => {
      if (res?.status?.toUpperCase() === 'SUCCESS' && res.data) {
        dispatch({
          type: types.DASHBOARD_DATA_SUCCESS,
          payload: res,
        });
      } else {
        dispatch({
          type: types.DASHBOARD_DATA_FAIL,
          payload: res,
        });
      }
    });
  };
};
