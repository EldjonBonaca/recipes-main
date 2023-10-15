import { Outlet, Navigate } from 'react-router-dom';

const useAuth = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return isAuthenticated === 'true';
};

const PrivateRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/Login" />
}

export default PrivateRoutes