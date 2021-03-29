import React,{useEffect,useState} from 'react';
import {RiLoader3Line} from 'react-icons/ri';
import { useHistory } from "react-router-dom";

export const Payment = () => {
    const [process, setProcess] = useState(true);
    const history = useHistory();
    const TIME = 5000;
    const data = new Date();

    useEffect(()=>{
        const timer = setTimeout(()=>{
            const pizzas = JSON.parse(localStorage.getItem('pizzas'));
            const pizzaName = pizzas.map(p => p.name);
            const done = new Date(data.getTime() + 180000);
            const checkStorage = localStorage.getItem('pizza-done');
            if(checkStorage){
                const newStorage = [...JSON.parse(checkStorage),{
                    id: new Date(),
                    pizza: pizzaName,
                    time: done
                }];
                localStorage.setItem('pizza-done',JSON.stringify(newStorage));
                localStorage.removeItem('pizzas');
            }else {
               localStorage.setItem('pizza-done',JSON.stringify([{
                   id: new Date(),
                    pizza: pizzaName,
                    time: done
                }]));
               localStorage.removeItem('pizzas');
            }
            setProcess(false);
            history.push('/pizza/shop');
        },TIME);
        return () => {
            clearTimeout(timer);
        }
    },[]);
    return (
        <>
            {
                process ?
                    <p><RiLoader3Line className="fa-spin"/> Перевіряєм оплату...</p>:
                    <p className="successText">Успішна оплата</p>
            }
        </>
    );
};
