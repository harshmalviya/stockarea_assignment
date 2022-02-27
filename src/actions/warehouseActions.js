import {
  WAREHOUSE_DETAILS_FAIL,
  WAREHOUSE_DETAILS_REQUEST,
  WAREHOUSE_DETAILS_SUCCESS,
  WAREHOUSE_LIST_FAIL,
  WAREHOUSE_LIST_REQUEST,
  WAREHOUSE_LIST_SUCCESS
} from '../constants/warehouseConstants';
import data from '../warehouse.json';

export const getWarehouseList =
  (keyword = '', filters) =>
  async (dispatch) => {
    try {
      dispatch({ type: WAREHOUSE_LIST_REQUEST });

      if (keyword.trim() === '') {
        dispatch({
          type: WAREHOUSE_LIST_SUCCESS,
          payload: { warehouses: data }
        });
      } else {
        dispatch({
          type: WAREHOUSE_LIST_SUCCESS,
          payload: {
            warehouses: data.filter((e) => e.name.includes(keyword))
          }
        });
      }
    } catch (error) {
      dispatch({ type: WAREHOUSE_LIST_FAIL, error: 'Failed to fetch data' });
    }
  };

export const getWarehouseDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: WAREHOUSE_DETAILS_REQUEST });

    const {
      warehouseList: { warehouses }
    } = getState();

    const selectedWarehouse = warehouses.find(
      (warehouse) => warehouse.id === Number(id)
    );

    dispatch({
      type: WAREHOUSE_DETAILS_SUCCESS,
      payload: selectedWarehouse
    });
  } catch (error) {
    dispatch({ type: WAREHOUSE_DETAILS_FAIL, error: 'Failed to fetch data' });
  }
};

export const filterCity = (city) => async (dispatch) => {
  try {
    dispatch({ type: WAREHOUSE_LIST_REQUEST });

    const filteredData = data.filter((item) => item.city === city);

    dispatch({
      type: WAREHOUSE_LIST_SUCCESS,
      payload: { warehouses: city ? filteredData : data }
    });
  } catch (error) {
    dispatch({ type: WAREHOUSE_LIST_FAIL, error: 'Failed to fetch data' });
  }
};
export const filterCluster = (cluster) => async (dispatch) => {
  try {
    dispatch({ type: WAREHOUSE_LIST_REQUEST });

    const filteredData = data.filter((item) => item.cluster === cluster);

    dispatch({
      type: WAREHOUSE_LIST_SUCCESS,
      payload: { warehouses: cluster ? filteredData : data }
    });
  } catch (error) {
    dispatch({ type: WAREHOUSE_LIST_FAIL, error: 'Failed to fetch data' });
  }
};
export const filterSpace = (space) => async (dispatch) => {
  try {
    dispatch({ type: WAREHOUSE_LIST_REQUEST });

    const filteredData = data.filter((item) => item.space_available <= space);

    dispatch({
      type: WAREHOUSE_LIST_SUCCESS,
      payload: { warehouses: space ? filteredData : data }
    });
  } catch (error) {
    dispatch({ type: WAREHOUSE_LIST_FAIL, error: 'Failed to fetch data' });
  }
};
