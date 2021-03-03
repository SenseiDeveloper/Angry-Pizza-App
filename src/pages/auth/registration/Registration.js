import React from 'react';
import { useFormik } from 'formik';
import {Link} from "react-router-dom"
import {validateRegistration} from "../../../helpers/validators";

export const Registration = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            password: '',
            confirmData: false
        },
        validateRegistration,
        onSubmit: values => {
            //console.log(values);
            console.log(formik.errors);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label className={formik.touched.name && formik.errors.name ? 'labelError': ''}>
                {formik.touched.name && formik.errors.name ? <>{formik.errors.name}</> : "Iм'я"}
            </label>
            <input
                className={formik.touched.name && formik.errors.name ? 'inputError': ''}
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
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
    );
};

