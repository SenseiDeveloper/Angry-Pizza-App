import React,{useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {loadUserData} from '../../../redux/action/userAction';
import {FaUserCircle} from 'react-icons/fa';
import {DefaultModal} from '../../../components/modal/defaultModal';
import {AddressForm} from '../../../components/addressFrom';

export const Profile = () => {
    const dispatch = useDispatch();
    const id = JSON.parse(localStorage.getItem('user')).id;
    const user = useSelector(state => state.auth.user);
    const [modalState,setModalState] = useState(false);

    useEffect(()=>{
        dispatch(loadUserData(id))
    },[]);

    const handleChangeModalState = (state) => {
        setModalState(state);
    };

    return(
        <div className="profile">
            <DefaultModal
                component={AddressForm}
                title={'Змінити адресу'}
                open={modalState}
                handleChangeModalState={handleChangeModalState}
            />
            <div className="innerProfile">
                <div className="icon">
                    <FaUserCircle />
                </div>
                <div className="text">
                    <ul>
                        <li><p>Ім'я: {user?.name}</p></li>
                        <li><p>Номер телефону: {user?.phone}</p></li>
                        <li><p>Angry coins: {user?.coins}</p></li>
                        { !user?.address ?
                            null:
                            <>
                                    <li><p>Вулиця: {user?.address.street}</p></li>
                                    <li><p>Квартира/будинок: {user?.address.address}</p></li>
                            </>
                        }
                    </ul>
                    {
                        !user?.address ?
                            null:
                        <button onClick={()=> setModalState(!modalState)}>Змінити адресу</button>
                    }
                </div>
            </div>
        </div>
    );
};
