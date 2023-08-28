import { Navigate } from 'react-router-dom';

    const ProtectedRoute = ({
        redirectPath = '/',
        children,
    }) => {
        const mealsToken = localStorage.getItem('meals');
        if (!mealsToken) {
            return <Navigate to={redirectPath} replace />;
        }

        return children;
    };

export default ProtectedRoute;