import { useState } from 'react';
import './LoginForm.css';
import useFetch from '../../utils/useFetch';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const { data, isPending, error } = useFetch('https://64f241e60e1e60602d24f2bc.mockapi.io/users');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = data.find(x => email === x.email);
        if (user && user.password === password) {
            setLoginError(null);
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/favorites');
        } else {
            setLoginError("Incorrect Credentials");
        }
    };

    const handleChange = (event) => {
        let inputName = event.target.name;
        let value = event.target.value;
        if (inputName === 'email') setEmail(value);
        else if (inputName === 'password') setPassword(value);
    };

    return (
        <div className="LoginForm">
            <form onSubmit={handleSubmit}>
                <h1 className='label'>Login</h1>
                <fieldset className="form-control">
                    <input type="email" name="email" id="email" onChange={handleChange} placeholder="Email..." />
                </fieldset>
                <fieldset className="form-control">
                    <input type="password" name="password" id="password" onChange={handleChange} placeholder="Password..." />
                </fieldset>
                {loginError && <div className='error'>{loginError}</div>}
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginForm;
