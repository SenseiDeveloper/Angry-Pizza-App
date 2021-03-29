import React,{useEffect,useState} from 'react';
import {RiLoader3Line} from 'react-icons/ri';

export const PizzaDone = ({pizza}) => {
    const dateNow = new Date();
    const doneMinutes = new Date(pizza.time).getMinutes();
    const doneHours = new Date(pizza.time).getHours();
    const [statusOrder, setStatusOrder] = useState({
        status: false,
        mess:'Готується'
    });

    useEffect(()=>{
        const timer = (dateNow.getHours()+dateNow.getMinutes()) - (doneHours+doneMinutes);
        let timeOut = setInterval(()=>{
            if(timer > 0){
                setStatusOrder({
                    status:true,
                    mess:'Ваше замовлення готово'
                });
                    const pizzaBar = JSON.parse(localStorage.getItem('pizza-done'));
                    const newPizza = pizzaBar.filter(p => p.id !== pizza.id);
                    localStorage.setItem('pizza-done',JSON.stringify(newPizza));
            }else {
                setStatusOrder({
                    status: false,
                    mess:'Готується'
                });
            }
        },30000);
        return () => {
            clearInterval(timeOut);
        }
    },[statusOrder]);

    return (
        <div className="pizzaBar">
            <ul>
                <li><p><span>Замовлення:</span> {(pizza.pizza).join()}</p></li>
                <li>
                    <p><span>Процес:</span> {statusOrder.mess}
                        {
                            statusOrder.status? null:<RiLoader3Line className="fa-spin"/>
                        }
                    </p>
                </li>
                <li><p><span>Час приготування:</span> {doneHours}:{doneMinutes}</p></li>
            </ul>
        </div>
    );
};
