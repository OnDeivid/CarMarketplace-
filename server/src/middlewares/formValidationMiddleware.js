
const validationRegister = (req, res, next) => {

    const { email, username, number, password, rePassword } = req.body
    const formData = { email, username, number, password, rePassword }

    for (const [key, value] of Object.entries(formData)) {

        if (!value || value.trim().length < 2) {
            return res.status(400).json({ error: `${key} is required and must be at least 2 characters long.` });
        }
    }
    if (password !== rePassword) {
        return res.status(400).json({ error: 'Passwords do not match.' });
    }
    next()
}

const validationLogin = (req, res, next) => {

    const { email, password } = req.body

    if (!email || email.trim().length < 2) {
        return res.status(400).json({ error: `Email is required and must be at least 2 characters long.` });
    }
    if (!password || password.trim().length < 2) {
        return res.status(400).json({ error: `Password is required and must be at least 2 characters long.` });
    }
    next()
}

const validationCreate = (req, res, next) => {
    const { year, fuel, price, mileage, model, brand, phoneNumber, description } = req.body;
    const formData = { year, fuel, price, mileage, model, brand, phoneNumber, description };

    for (const [key, value] of Object.entries(formData)) {
        if (typeof value === 'string') {
            const trimmedValue = value.trim();
            if (trimmedValue.length < 2) {
                return res.status(400).json({ error: `${key} must be at least 2 characters long.` });
            }
        } else if (typeof value === 'number') {
            if (value <= 0) {
                return res.status(400).json({ error: `${key} must be a positive number.` });
            }
        } else if (value === null || value === undefined || value === '') {
            return res.status(400).json({ error: `${key} is required.` });
        }
    }

    next();
};

module.exports = {
    validationRegister,
    validationLogin,
    validationCreate
}