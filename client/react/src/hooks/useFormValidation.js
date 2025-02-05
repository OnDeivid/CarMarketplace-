export default function useFormValidation(initialValue) {
    const error = {}
    let flag = false

    const regexPatterns = {
        phoneNumber: /^\d{9}$/,
        number: /^\d{9}$/,
        year: /^(19[0-9]{2}|20[0-9]{2})$/,
        mileage: /^\d{1,7}(?:,\d{3})?\s?(?:km|mi)?$/,
        price: /^(?:[$€£]?[\d]{1,3}(?:,\d{3})*|\d+)(?:\.\d{1,2})?\s?(?:USD|EUR|GBP|BGN|JPY)?$/,
        currency: /^(USD|EUR|BGN|)$/
    };
    const errorMessageNumbers = {
        phoneNumber: "Invalid Bulgarian phone number",
        number: "Invalid Bulgarian phone number",
        year: "Invalid year. Must be between 1900 and 2099.",
        mileage: "Invalid mileage. Example: '12000'",
        price: "Invalid price.",
        currency: "Invalid currency."
    }

    const optionsOfTypeNumber = ['number', 'phoneNumber', 'currency', 'price', 'mileage', 'year']
    const validateField = (fieldName, errorMessage) => {

        if (optionsOfTypeNumber.includes(fieldName)) {
            if (!regexPatterns[fieldName]?.test(initialValue[fieldName])) {
                error[fieldName] = errorMessageNumbers[fieldName]
                flag = true

            }
        }
        if (!optionsOfTypeNumber.includes(fieldName) && initialValue[fieldName]?.trim().length < 2) {
            error[fieldName] = errorMessage
            flag = true
        }
    }

    for (const key in initialValue) {
        if (key != 'profileIcon') {
            validateField(key, 'Field must contain at least 2 characters.')
        }
    }

    if (initialValue.password !== initialValue.rePassword && initialValue.rePassword?.trim()) {
        error.rePassword = 'Password mismatch';
        flag = true;
    }

    return { error, flag }
}