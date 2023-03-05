import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <progress className="progress w-56 flex mt-6 mx-auto"></progress>
    }
    if (user) return children;
    return <Navigate to="/login" state={{ from: location }} replace />

};

export default PrivateRoutes;