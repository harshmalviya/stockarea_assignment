import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterCity,
  filterCluster,
  filterSpace,
  getWarehouseList
} from '../actions/warehouseActions';
import classes from './Filter.module.css';

const Filter = () => {
  const [city, setCity] = useState('');
  const [cluster, setCluster] = useState('');
  const [space, setSpace] = useState(1);

  const dispatch = useDispatch();

  return (
    <div className={classes.filters}>
      <div className={classes.filter}>
        <select
          name="city"
          id="city"
          defaultValue=""
          onChange={(e) => {
            dispatch(filterCity(e.target.value));
          }}
        >
          <option value="">Select City</option>
          <option value="Delhi">Delhi</option>
          <option value="Chennai">Chennai</option>
          <option value="Indore">Indore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Banglore">Banglore</option>
          <option value="Guwahati">Guwahati</option>
        </select>
      </div>
      <div className={classes.filter}>
        <select
          name=""
          id=""
          defaultValue=""
          onChange={(e) => dispatch(filterCluster(e.target.value))}
        >
          <option value="">Select Cluster</option>
          <option value="cluster-a-32">cluster-a-32</option>
          <option value="cluster-a-1">cluster-a-1</option>
          <option value="cluster-a-21">cluster-a-21</option>
          <option value="cluster-a-2">cluster-a-2</option>
          <option value="cluster-v-2">cluster-v-2</option>
        </select>
      </div>
      <div className={classes.filter}>
        <label>Space Available</label>
        <input
          type="range"
          min="1"
          max="1000000"
          id="myRange"
          onChange={(e) => dispatch(filterSpace(e.target.value))}
        ></input>
      </div>
    </div>
  );
};

export default Filter;
