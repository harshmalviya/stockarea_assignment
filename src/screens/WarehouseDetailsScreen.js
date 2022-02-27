import React, { useEffect } from 'react';
import classes from './WarehouseDetailsScreen.module.css';
import { getWarehouseDetails } from '../actions/warehouseActions';
import { useSelector, useDispatch } from 'react-redux';
const WarehouseDetailsScreen = ({ match }) => {
  const warehouseId = match.params.id;
  const warehouseDetails = useSelector((state) => state.warehouseDetails);

  const { error, loading, warehouse } = warehouseDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWarehouseDetails(warehouseId));
  }, [dispatch, warehouseId]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={classes.warehouseDetails}>
          <div className={classes.warehouseHeading}>
            <h1>
              <i className="fa-solid fa-boxes-stacked"></i>&nbsp;
              <span>{warehouse.code} - </span>
              {warehouse.name}
              &nbsp;<i className="fa-solid fa-boxes-stacked"></i>
            </h1>
          </div>
          <div className={classes.image}></div>
          <div className={classes.warehouseInfo}>
            <p>
              <strong>City:</strong> {warehouse.city}
            </p>
            <p>
              <strong>Type:</strong> {warehouse.type}
            </p>
            <p>
              <strong>Cluster: </strong>
              {warehouse.cluster}
            </p>
            <p>
              <strong>Space Available:</strong> {warehouse.space_available}
            </p>
            <p>
              The warehouse is&nbsp;
              {warehouse.is_registered ? 'Registered' : 'Not Registered'}
              &nbsp;and the warehouse is&nbsp;
              {warehouse.is_live ? 'Live.' : 'not Live.'}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WarehouseDetailsScreen;
