import React,{useEffect} from 'react';
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import {validate} from "../../../helpers/validatorLog";
import {useDispatch, useSelector} from "react-redux";

import {fetchLoginUser} from '../../../redux/action/authAction';
import { useHistory } from "react-router-dom";

export const Login = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const history = useHistory();

    useEffect(()=> {
        if(isAuthenticated){
            history.push("/pizza");
        }
    }, [isAuthenticated]);

    const formik = useFormik({
        initialValues: {
            phone: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            dispatch(fetchLoginUser(values));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label className={formik.touched.phone && formik.errors.phone ? 'labelError': ''}>
                {formik.touched.phone && formik.errors.phone ? <>{formik.errors.phone}</> : "Номер телефону"}
            </label>
            <input
                className={formik.touched.phone && formik.errors.phone ? 'inputError': ''}
                id="phone"
                name="phone"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                placeholder="Телефон"
            />
            <label className={formik.touched.password && formik.errors.password ? 'labelError': ''}>
                {formik.touched.password && formik.errors.password ? <>{formik.errors.password}</> : "Пароль"}
            </label>
            <input
                className={formik.touched.password && formik.errors.password ? 'inputError': ''}
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                placeholder="Пароль"
            />
            <p>У вас немає аккаунту? <Link to="/auth/registration">Зареєструватись</Link></p>
            <button className={ Object.entries(formik.errors).length !== 0 ? "btn-disable" : "btn-auth"} type="submit" >Увійти</button>
        </form>
    );
};
