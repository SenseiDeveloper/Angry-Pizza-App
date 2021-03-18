import React, {useState,useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';

import {FiUser} from 'react-icons/fi';
import {NavLink} from "react-router-dom";
import {BiUserCircle} from 'react-icons/bi';
import {FiUserPlus} from 'react-icons/fi';
import {ButtonLogout} from "./buttonLogout";
import {useSelector} from "react-redux";

export const ButtonUser = () => {
    const [showModal, setShowModal] = useState(false);
    const stateAuth = useSelector(state => state.auth.token);
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    let authStatus = !token && !user;
    const activeUser = JSON.parse(user);

    useEffect(() => {
        authStatus = !token && !user;
    }, [stateAuth]);

    return (
        <>
            <div className="userMobile" onClick={() => setShowModal(!showModal)}>
                <div className="icon">
                    <FiUser/>
                </div>
                {
                    !authStatus ?

                        <CSSTransition
                            in={showModal}
                            timeout={300}
                            classNames="menu"
                            unmountOnExit
                        >
                            <div className="modalUser">
                                <h5>{activeUser && activeUser.name}</h5>
                                <p>{activeUser && activeUser.phone}</p>
                                <p>Coins: {activeUser && activeUser.coins}</p>
                                <ButtonLogout/>
                            </div>
                        </CSSTransition>
                        :
                        <CSSTransition
                            in={showModal}
                            timeout={300}
                            classNames="menu"
                            unmountOnExit
                        >
                            <div className="modalUser">
                                <NavLink activeClassName="active-nav" to="/auth/login"><BiUserCircle/> Увійти</NavLink>
                                <NavLink activeClassName="active-nav"
                                         to="/auth/registration"><FiUserPlus/> Зареєструватись</NavLink>
                            </div>
                        </CSSTransition>
                }
            </div>
            <div className={`user ${!authStatus ? "activeUser" : "inActiveUser"}`}>
                <div className="icon">
                    <FiUser/>
                </div>
                {
                    !authStatus ?
                        <div className="userInfo userPosition ">
                            <div className="text">
                                <h5>{activeUser && activeUser.name}</h5>
                                <p>Coins:{activeUser && activeUser.coins}</p>
                            </div>
                            <ButtonLogout/>
                        </div>
                        :
                        <div className="userInfo">
                            <NavLink activeClassName="active-nav" to="/auth/login"> Увійти</NavLink>
                            <NavLink activeClassName="active-nav" to="/auth/registration"> Зареєструватись</NavLink>
                        </div>
                }
            </div>
        </>
    );
};
