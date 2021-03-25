import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux";

import {CgClose} from 'react-icons/cg';

export const DefaultModal = ({ component: Component,handleChangeModalState, ...rest })=> {
    const TIME = 3000;
    const [modalState,setModalState] = useState(rest.open);
    const address = useSelector(state => state.auth.user);

    useEffect(() => {
        setModalState(rest.open);
    },[rest.open]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setModalState(false);
            handleChangeModalState(false);
        },TIME);

        return () => {
            clearTimeout(timer);
        }
    },[address?.address]);

    const changeStateModal = () => {
        setModalState(false);
        handleChangeModalState(false);
    };

    return (
        <>
            {
                modalState ?
                    <div className="modal">
                        <div className="innerModal">
                            <button id="close" onClick={ ()=> changeStateModal()}><CgClose /></button>
                            <h4>{rest.title}</h4>
                            <Component />
                        </div>
                    </div> :
                    null
            }
        </>
    );
};

