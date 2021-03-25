export const validate = values => {
    const errors = {};

    if (!values.street) {
        errors.street = "Поле обов'язкове";
    }

    if (!values.address) {
        errors.address = "Поле обов'язкове";
    }

    return errors;
};
