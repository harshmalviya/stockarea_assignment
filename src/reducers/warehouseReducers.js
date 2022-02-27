import {
  WAREHOUSE_DETAILS_FAIL,
  WAREHOUSE_DETAILS_REQUEST,
  WAREHOUSE_DETAILS_SUCCESS,
  WAREHOUSE_LIST_FAIL,
  WAREHOUSE_LIST_REQUEST,
  WAREHOUSE_LIST_SUCCESS
} from '../constants/warehouseConstants';

export const warehouseReducer = (state = { warehouses: [] }, action) => {
  switch (action.type) {
    case WAREHOUSE_LIST_REQUEST:
      return { loading: true, warehouses: [] };
    case WAREHOUSE_LIST_SUCCESS:
      return { loading: false, warehouses: action.payload.warehouses };
    case WAREHOUSE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const warehouseDetailsReducer = (state = { warehouse: {} }, action) => {
  switch (action.type) {
    case WAREHOUSE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case WAREHOUSE_DETAILS_SUCCESS:
      return { loading: false, warehouse: action.payload };
    case WAREHOUSE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
