
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


module.exports = {
    validationRegister
}