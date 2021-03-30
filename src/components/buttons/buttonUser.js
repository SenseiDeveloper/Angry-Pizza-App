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
    const stateUser = useSelector(state => state.auth.user);
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    let authStatus = !token && !user;
    const activeUser = JSON.parse(user);
    const [coins, setCoins] = useState(0);

    useEffect(() => {
        authStatus = !token && !user;
        setCoins(activeUser?.coins)
    }, [stateAuth]);

    useEffect(()=>{
       if (!!stateUser){
           localStorage.setItem('user',JSON.stringify(stateUser));
           const newUser = localStorage.getItem('user');
           const activeUser = JSON.parse(newUser);
           setCoins(activeUser?.coins)
       }
    },[stateUser]);
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
                                <p>Coins: {coins && coins}</p>
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
                                <p>Coins:{coins && coins}</p>
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
