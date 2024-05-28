import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate();

    useEffect(() => {
        onLogout();
        navigate('/'); // Redirect to the home page after logout
    }, [onLogout, navigate]);

    return null; // This component does not render anything
};

export default Logout;