import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import {Link} from "react-router-dom"
import {validate} from "../../../helpers/validatorReg";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";


import {fetchRegisterUser} from '../../../redux/action/authAction';

export const Registration = () => {
    const dispatch = useDispatch();
    const isRegistered = useSelector(state => state.auth.isRegistered);
    const history = useHistory();

    useEffect(()=> {
        if(isRegistered){
            history.push("/auth/login");
        }
    }, [isRegistered]);

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            password: '',
            confirmData: false
        },
        validate,
        onSubmit: values => {
            const {name,phone,password} = values;
            dispatch(fetchRegisterUser({name,phone,password}));
        },
    });
    return (
        <>
            <form onSubmit={formik.touched.name && formik.handleSubmit}>
                <label className={ formik.errors.name ? 'labelError': ''}>
                    {formik.touched.name && formik.errors.name ? <>{formik.errors.name}</> : "Iм'я"}
                </label>
                <input
                    className={formik.touched.name && formik.errors.name ? 'inputError': ''}
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    placeholder="Iм'я"
                />
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
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Пароль"
                />
                <label className={formik.touched.confirmData &&formik.errors.confirmData ? 'inputError': ''}>
                    <input
                        type="checkbox"
                        id="confirmData"
                        name="confirmData"
                        onChange={formik.handleChange}
                        checked={formik.values.confirmData}
                    />
                    Згода на оброку персональних данних
                </label>
                <p>У вас уже є аккаунт? <Link to="/auth/login">Увійти</Link></p>
                <button className={ Object.entries(formik.errors).length !== 0 ? "btn-disable" : "btn-auth"}  type="submit">Зареєструватись</button>
            </form>
        </>
    );
};

