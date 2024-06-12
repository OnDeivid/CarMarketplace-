export default function useFormValidation(initialValue) {
    const error = {}
    let flag = false

    const validateField = (fieldName, errorMessage) => {
        console.log(flag)
        if (initialValue[fieldName]?.trim().length < 2) {
            error[fieldName] = errorMessage
            flag = true
        }
    }

    validateField('password', 'Password is required');
    validateField('email', 'Email is required');
    validateField('username', 'Username is required');
    validateField('rePassword', 'rePassword is required');
    validateField('number', 'Number is required');

    if (initialValue.password !== initialValue.rePassword && initialValue.rePassword?.trim()) {
        error.rePassword = 'Password mismatch';
        flag = true;
    }

    return { error, flag }
}