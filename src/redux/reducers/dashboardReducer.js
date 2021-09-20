import * as types from '../types';

const init_state = {
  dashboardData: {
    data: null,
    loading: false,
    error: {
      status: false,
      message: '',
    },
  },
};

const dashboardReducer = (state = init_state, action) => {
  switch (action.type) {
    case types.DASHBOARD_DATA_START: {
      return {
        ...state,
        dashboardData: {
          ...state.dashboardData,
          loading: true,
        },
      };
    }

    case types.DASHBOARD_DATA_SUCCESS: {
      return {
        ...state,
        dashboardData: {
          data: action.payload.data,
          error: {
            status: false,
            message: '',
          },
          loading: false,
        },
      };
    }

    case types.DASHBOARD_DATA_FAIL: {
      return {
        ...state,
        ddashboardData: {
          data: action.payload.data,
          count: null,
          loading: false,
          error: {
            status: true,
            message: '',
          },
        },
      };
    }
  }
  return state;
};

export default dashboardReducer;
