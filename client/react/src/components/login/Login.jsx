import { useNavigate } from 'react-router-dom';
import { POST } from '../../requester';
import useForm from '../../hooks/useForm';
import { authContext } from '../../context/authContext';
import { useContext, useState } from 'react';
import useFormValidation from '../../hooks/useFormValidation';

import './Login.css'

export default function Login() {

    const { formValue, onChangeValue } = useForm({ email: '', password: '' })
    const { setAuth } = useContext(authContext)
    const [formError, setFormError] = useState('')
    const [requestError, setRequestError] = useState('')

    const navigate = useNavigate()

    async function onLogin(e) {
        e.preventDefault()

        const validation = useFormValidation(formValue)
        setFormError(validation.error)

        if (validation.flag) { return }

        try {
            const response = await POST('login', formValue)

            setAuth(response)
            navigate('/')

        } catch (err) {
            setRequestError(err.message)
        }
    }
    return (
        <div className='containerLogin'>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={onLogin} method="post">
                    <div className="error-message" style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-15px' }}>{requestError}</div>

                    <input
                        onChange={onChangeValue}
                        type="text"
                        value={formValue.email}
                        name="email"
                        placeholder="Email"
                        required />

                    <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-10px' }} className="error-message">{formError?.email}</p>

                    <input
                        onChange={onChangeValue}
                        type="password"
                        value={formValue.password}
                        name="password"
                        placeholder="Password"
                        required />

                    <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-10px' }} className="error-message">{formError?.password}</p>

                    <button type="submit">Login</button>
                </form>
                <h5><a href="/register">REGISTER HERE</a></h5>
            </div>
        </div>
    );
}
