import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { POST } from '../../requester'

import useFormValidation from '../../hooks/useFormValidation'
import useForm from '../../hooks/useForm'

import './Register.css'

export default function Register() {

    const navigate = useNavigate()
    const [formError, setFormError] = useState('')
    const [requestError, setRequestError] = useState('')
    const { formValue, onChangeValue } = useForm({ email: '', username: '', number: '', password: '', rePassword: '', profileIcon: '' })

    async function onRegister(e) {
        e.preventDefault()

        const validation = useFormValidation(formValue)
        setFormError(validation)

        if (validation.flag) { return }

        try {
            await POST('/users/register', formValue)
            navigate('/login')

        } catch (err) {
            setRequestError(err.message)
        }

    }
    return (
        <div className='containerregister'>
            <div className="register-container">
                <h2>Register</h2>
                <form onSubmit={onRegister} method="post">
                    <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-10px' }}>{requestError}</p>

                    <input
                        onChange={onChangeValue}
                        type="username"
                        value={formValue.email}
                        name="email"
                        placeholder="Email"
                         />
                    <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-10px' }}>{formError?.error?.email}</p>

                    <input
                        onChange={onChangeValue}
                        type="profileIcon"
                        value={formValue.profileIcon}
                        name="profileIcon"
                        placeholder="http://.....png"
                    />


                    <input
                        onChange={onChangeValue}
                        type="username"
                        value={formValue.username}
                        name="username"
                        placeholder="Username"
                         />
                    <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-10px' }}>{formError?.error?.username}</p>

                    <input
                        onChange={onChangeValue}
                        type="number"
                        value={formValue.number}
                        name="number"
                        placeholder="897171023"
                         />
                    <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-10px' }}>{formError?.error?.number}</p>

                    <input
                        onChange={onChangeValue}
                        type="password"
                        value={formValue.password}
                        name="password"
                        placeholder="Password"
                         />
                    <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-10px' }}>{formError?.error?.password}</p>

                    <input
                        onChange={onChangeValue}
                        type="password"
                        value={formValue.rePassword}
                        name="rePassword"
                        placeholder="rePassword"
                         />
                    <p style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '-10px' }}>{formError?.error?.rePassword}</p>

                    <button type="submit">Register</button>
                </form>
                <h5><Link to='/login'>LOGIN</Link></h5>
            </div>
        </div>
    )
}
