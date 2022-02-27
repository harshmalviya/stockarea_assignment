import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWarehouseList } from '../actions/warehouseActions';
import classes from './Search.module.css';
const Search = () => {
  const dispatch = useDispatch();
  const debounce = (search, d) => {
    let timer;
    return function (...args) {
      let context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        search.apply(context, args);
      }, d);
    };
  };

  function search(word) {
    dispatch(getWarehouseList(word));
    console.log(word);
  }

  const executeSearch = debounce(search, 300);

  return (
    <div className={classes.search}>
      <span className={classes.searchIcon}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        type="text"
        className={classes.searchInput}
        onChange={(e) => executeSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
