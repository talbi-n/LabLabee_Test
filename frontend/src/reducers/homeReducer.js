import React from 'react';
//use reducer for complex state
//the reducer is the function how update the state when dispatsh trriggered
export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      //this line willl keeped the previous state and apdate only loading variable
      return { ...state, loading: true }; //loading = true to show sppiner
    case 'FETCH_SUCCES':
      //keep previous state + get data  --> payload contain all data
      return { ...state, loading: false, labs: action.payload };
    default:
      return { ...state };
  }
};
