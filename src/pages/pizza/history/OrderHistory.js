import React,{useEffect} from 'react';
import {loadUserHistory} from "../../../redux/action/userAction";
import {useDispatch, useSelector} from "react-redux"
import {HistoryItem} from './historyItem';

export const OrderHistory = () => {
    const dispatch = useDispatch();
    const history = useSelector(state => state.pizza);
    const id = JSON.parse(localStorage.getItem('user')).id;

    useEffect(()=>{
        dispatch(loadUserHistory(id));
    },[]);

    return (
        <div className="orderHistory">
            <h3>Історія покупок:</h3>
            {
                history && history.loadingHistory ?
                    <>
                        {
                            history.pizzaHistory.map( h => <HistoryItem key={h.id} history={h}/>)
                        }
                    </>
                    :
                    <p>У вас немає історії покупок</p>
            }
        </div>
    );
};
