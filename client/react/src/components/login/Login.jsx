import { POST } from '../../requester';
import useAuthForm from '../../hooks/formValues';

import { authContext } from '../../context/authContext';
import { useContext } from 'react';

import './Login.css'

export default function Login() {

    const { formValue, onChangeValue } = useAuthForm({ email: '', password: '' })
    const { setActiveUser } = useContext(authContext)

    async function onLogin(e) {
        e.preventDefault()

        try {
            const data = await POST('login', formValue)
            setActiveUser(data)

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='containerLogin'>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={onLogin} method="post">
                    <input onChange={onChangeValue} type="text" value={formValue.email} name="email" placeholder="Email" required />
                    <input onChange={onChangeValue} type="password" value={formValue.password} name="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
                <h5><a>REGISTER HERE</a></h5>
            </div>
        </div>
    );
}
