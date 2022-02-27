import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWarehouseList } from '../actions/warehouseActions';
import Filter from '../components/Filter';
import Search from '../components/Search';
import classes from './HomeScreen.module.css';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const warehouseItems = useSelector((state) => state.warehouseList);

  const { error, loading, warehouses } = warehouseItems;
  useEffect(() => {
    dispatch(getWarehouseList());
  }, [dispatch]);
  return (
    <div>
      <div>
        <Search />
        <Filter />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <table className={classes.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>City</th>
            <th>Space Available</th>
            <th>Type</th>
            <th>Cluster</th>
            <th>Registered</th>
            <th>Live</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {warehouses.map((warehouse) => (
            <tr key={warehouse.id}>
              <td>{warehouse.id}</td>
              <td>{warehouse.name}</td>
              <td>{warehouse.code}</td>
              <td>{warehouse.city}</td>
              <td>{warehouse.space_available}</td>
              <td>{warehouse.type}</td>
              <td>{warehouse.cluster}</td>
              <td>
                {warehouse.is_registered ? (
                  <i
                    className="fa-solid fa-check"
                    style={{ color: 'green' }}
                  ></i>
                ) : (
                  <i className="fa-solid fa-xmark" style={{ color: 'red' }}></i>
                )}
              </td>
              <td>
                {warehouse.is_live ? (
                  <i
                    className="fa-solid fa-check"
                    style={{ color: 'green' }}
                  ></i>
                ) : (
                  <i className="fa-solid fa-xmark" style={{ color: 'red' }}></i>
                )}
              </td>
              <td className={classes.detailsBtn}>
                <Link to={`/${warehouse.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeScreen;
