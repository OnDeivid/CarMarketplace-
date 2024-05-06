import './Login.css'
export default function Login() {
    return (
        <div className='containerLogin'>
            <div className="login-container">
                <h2>Login</h2>
                <form action="#" method="post">
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
                <h5><a>REGISTER HERE</a></h5>
            </div>
        </div>
    );
}
