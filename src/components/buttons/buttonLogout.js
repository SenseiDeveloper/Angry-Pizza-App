import React from 'react';
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";


import {logoutUser} from '../../redux/action/authAction';

export const ButtonLogout = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutUser());
        history.push('/pizza');
    };

  return (
      <button onClick={logout}>Вийти</button>
  );
};
