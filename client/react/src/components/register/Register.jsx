import './Register.css'
export default function Register() {
    return (
        <div className='containerregister'>
            <div className="register-container">
                <h2>Register</h2>
                <form action="#" method="post">
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="username" name="username" placeholder="Username" required />
                    <input type="number" name="number" placeholder="Phone Number" required />
                    <input type="password" name="password" placeholder="Password" required />
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
