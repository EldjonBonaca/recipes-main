import { useNavigate } from 'react-router-dom';
import './Header/Header.css'
function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <button className='login-svg' onClick={handleLogout}>
            Logout
        </button>
    );
}

export default Logout;
