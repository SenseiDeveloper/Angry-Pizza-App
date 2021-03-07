import React,{useEffect} from 'react';
import './toast.scss';
import {useDispatch, useSelector} from "react-redux";
import successIcon from '../../assets/toast_icon/success.svg';
import dangerIcon from '../../assets/toast_icon/danger.svg';
import infoIcon from '../../assets/toast_icon/info.svg';
import warningIcon from '../../assets/toast_icon/warning.svg';
import {clearMessage} from "../../redux/action/messageAction";

const Toast = () => {
    const message = useSelector( state => state.message);
    const dispatch = useDispatch();

    const icon = message.status === 'success' ? successIcon:
        message.status === 'danger' ? dangerIcon:
            message.status === 'info' ? infoIcon : warningIcon;

    useEffect( () => {
        let inteval;
        if (message.message.length !== 0){
             inteval = setInterval( () => {
                dispatch(clearMessage());
            },5000);
        }

        return () => {
            clearInterval(inteval);
        }
    },[message]);

    return (
        <>
            {
                message && message.show ?
                    <div className="notification-container top-right">
                        <div className={`notification toast ${message.status}`}>
                            <button onClick={() => dispatch(clearMessage())}>
                                X
                            </button>
                            <div className="notification-image">
                                <img src={icon} alt="" />
                            </div>
                            <div>
                                <p className="notification-title">Повідомлення</p>
                                <p className="notification-message">{message.message}</p>
                            </div>
                        </div>
                    </div> : null
            }
        </>
    );
};

export default Toast;
