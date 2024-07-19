export default function useFormValidation(initialValue) {
    const error = {}
    let flag = false

    const validateField = (fieldName, errorMessage) => {
        if (typeof initialValue[fieldName] === 'number') {
            return
        }
        if (initialValue[fieldName]?.trim().length < 2) {
            error[fieldName] = errorMessage
            flag = true
        }
    }

    //      !!!Login/Register From!!!
    validateField('password', 'Password is required');
    validateField('email', 'Email is required');
    validateField('username', 'Username is required');
    validateField('rePassword', 'rePassword is required');
    validateField('number', 'Number is required');


    //          !!!create From!!!
    validateField('year', 'year is required');
    validateField('mileage', 'mileage is required');
    validateField('fuel', 'fuel is required');
    validateField('model', 'model is required');
    validateField('brand', 'brand is required');
    validateField('price', 'price is required');
    validateField('description', 'description is required');
    validateField('phoneNumber', 'phoneNumber is required');
    validateField('currency', 'currency is required');

    if (initialValue.password !== initialValue.rePassword && initialValue.rePassword?.trim()) {
        error.rePassword = 'Password mismatch';
        flag = true;
    }



    return { error, flag }
}