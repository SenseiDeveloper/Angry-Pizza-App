import React from 'redux';

import {MdAttachMoney} from 'react-icons/md';

export const SummaryPizza = () => {
    return (
        <div className="summaryPizza">
            <h5>Загальна сумма: 30 <MdAttachMoney /></h5>
            <input type="text" placeholder="Назва піци"/>
            <button className="btn btn-secondary">Зберегти піцу</button>
            <button className="btn btn-primary">Добавити в корзину</button>
        </div>
    );
};
