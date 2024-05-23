import { POST } from '../../requester'
import useAuthForm from '../../hooks/formValues'

import './Register.css'

export default function Register() {

    const { formValue, onChangeValue } = useAuthForm({ email: '', username: '', number: '', password: '', rePassword: '' })

    async function onRegister(e) {
        e.preventDefault()

        try {
            await POST('register', formValue)
        } catch (err) {
            console.log(err)
        }
        
    }
    return (
        <div className='containerregister'>
            <div className="register-container">
                <h2>Register</h2>
                <form onSubmit={onRegister} method="post">
                    <input onChange={onChangeValue} type="username" value={formValue.email} name="email" placeholder="Email" required />
                    <input onChange={onChangeValue} type="username" value={formValue.username} name="username" placeholder="Username" required />
                    <input onChange={onChangeValue} type="number" value={formValue.number} name="number" placeholder="Phone Number" required />
                    <input onChange={onChangeValue} type="password" value={formValue.password} name="password" placeholder="Password" required />
                    <input onChange={onChangeValue} type="password" value={formValue.rePassword} name="rePassword" placeholder="rePassword" required />

                    {/* <select>
                        <option>bussines</option>
                        <option>no-bussines</option>
                    </select> */}
                    <button type="submit">Register</button>
                </form>
                <h5><a>Login HERE</a></h5>
            </div>
        </div>
    )
}
