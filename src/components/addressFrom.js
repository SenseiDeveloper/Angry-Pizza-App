import React from 'react';
import {useFormik} from "formik";
import {validate} from "../helpers/validationAddress";
import {isUserLogged} from "../helpers/auth";
import {useDispatch} from "react-redux";
import {fetchSaveUserAddress} from '../redux/action/userAction';

export const AddressForm = () => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));

    const formik = useFormik({
        initialValues: {
            street: user.address?.street || '',
            address: user.address?.address || ''
        },
        validate,
        onSubmit: values => {
            const userID = JSON.parse(localStorage.getItem('user')).id;
            dispatch(fetchSaveUserAddress({
                userID,
                values
            }));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label className={formik.touched.street && formik.errors.street ? 'labelError': ''}>
                {formik.touched.street && formik.errors.street ? <>{formik.errors.street}</> : "Вулиця"}
            </label>
            <input
                className={formik.touched.street && formik.errors.street ? 'inputError': ''}
                id="street"
                name="street"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.street}
                onBlur={formik.handleBlur}
                placeholder="Вулиця"
            />
            <label className={formik.touched.address && formik.errors.address ? 'labelError': ''}>
                {formik.touched.address && formik.errors.address ? <>{formik.errors.address}</> : "Номер кв/буд."}
            </label>
            <input
                className={formik.touched.address && formik.errors.address ? 'inputError': ''}
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
                onBlur={formik.handleBlur}
                placeholder="Номер кв/буд."
            />
            {
                isUserLogged() && Object.entries(formik.errors).length === 0 ?
                    <button className="btn-save" type="submit" >Зберегти адресу</button>
                    :null
            }
        </form>
    );
};
