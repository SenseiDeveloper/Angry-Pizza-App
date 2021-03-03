import React from 'react';
import {Link} from "react-router-dom";

export const Login = () => {
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
            <p>У вас немає аккаунту? <Link to="/auth/registration">Зареєструватись</Link></p>
            <button type="submit" className="btn-auth">Увійти</button>
        </form>
    );
};
