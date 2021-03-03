export const validateRegistration = values => {
    const errors = {};
    if (!values.name) {
        errors.name = "Поле обов'язкове";
    } else if(values.name.length > 15) {
        errors.name = "Ім'я має бути не більше 15 символів";
    }

    if (!values.phone) {
        errors.phone = "Поле обов'язкове";
    } else if(values.phone.length > 10) {
        errors.phone = 'Невірний номер';
    }

    if (!values.password) {
        errors.password = "Поле обов'язкове";
    } else if(values.password.length > 12) {
        errors.password = 'Довжина паролю має до 12 символів';
    }

    if(!values.confirmData){
        errors.confirmData = 'Ви не надали згоду'
    }

    return errors;
};

export const validateLogin = values => {
    const errors = {};

    if (!values.phone) {
        errors.phone = "Поле обов'язкове";
    }

    if (!values.password) {
        errors.password = "Поле обов'язкове";
    }

    return errors;
};
