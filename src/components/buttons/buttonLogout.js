import React from 'react';
import {useDispatch} from "react-redux";

import {logoutUser} from '../../redux/action/authAction';

export const ButtonLogout = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    };

  return (
      <button className="btn btn-secondary" onClick={logout}>Вийти</button>
  );
};
