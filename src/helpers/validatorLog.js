export const validate = values => {
    const errors = {};

    if (!values.phone) {
        errors.phone = "Поле обов'язкове";
    }

    if (!values.password) {
        errors.password = "Поле обов'язкове";
    }

    return errors;
};
