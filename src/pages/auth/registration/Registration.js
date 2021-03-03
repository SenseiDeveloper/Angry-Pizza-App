import React from 'react';
import {Link} from "react-router-dom"

export const Registration = () => {
    return (
        <form>
            <label>Номер телефону</label>
            <input
                id="phone"
                name="phone"
                type="number"
                value=""
                placeholder="Телефон"
            />
            <label>Пароль</label>
            <input
                id="password"
                name="password"
                type="password"
                value=""
                placeholder="Пароль"
            />
            <label>Підтвердіть пароль</label>
            <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value=""
                placeholder="Підтвердіть пароль"
            />
            <label>
                <input type="checkbox" id="confirmData" name="confirmData" />
                Згода на оброку персональних данних
            </label>
            <p>У вас уже є аккаунт? <Link to="/auth/login">Увійти</Link></p>
            <button className="btn-auth" type="submit">Зареєструватись</button>
        </form>
    );
};

