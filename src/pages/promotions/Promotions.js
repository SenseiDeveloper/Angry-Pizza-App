import React from 'react';
import './Promotions.scss';

import {GiReceiveMoney} from 'react-icons/gi';
import {FaPizzaSlice} from 'react-icons/fa';
import {RiTakeawayLine} from 'react-icons/ri';

export const Promotions = () => {
    return (
        <section className="promotions bgGrey">
            <div className="container">
                <h3>Акції</h3>
                <div className="promotionItem">
                    <div className="icon"><GiReceiveMoney /> </div>
                    <div className="text">
                        <h4>Кешбек</h4>
                        <p>При замовленні піци , Ви отримуєте бонусні бали, за які ви можете придбати будь-яку піцу. <span>Бонуси нараховуються тільки для зареєстрованих користувачів</span></p>
                    </div>
                </div>
                <div className="promotionItem">
                    <div className="icon"><FaPizzaSlice /></div>
                    <div className="text">
                        <h4>Акція 3+1</h4>
                        <p>При замовленні будь-яких чотирьох піц , Ви отримуєте 57 Angry Coins</p>
                    </div>
                </div>
                <div className="promotionItem">
                    <div className="icon"><RiTakeawayLine /></div>
                    <div className="text">
                        <h4>Самовиніс</h4>
                        <p>Знижка 20% на піцу при самовиносі</p>
                    </div>
                </div>
                <p>Акція не сумується з іншими акціями(В одному чеку можна скористатися тільки однією акцією)</p>
            </div>
        </section>
    );
};
