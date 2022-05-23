import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

function ChangeUrlProvider({ children }) {
    const state = useSelector(state => state.reducer.menu)
    const location = useLocation()
    const navigate = useNavigate()

    const urls = {
        cars: "/damage",
        damage: '/car-details',
        details: '/damage-details',
        equipment: '/driver-search',
        drivers: '/cooperation-type',
        terms: '/second-terms',
        terms2: '/information',
        final: '/'
    }

    console.log(state);

    useEffect(() => {
        console.log(location.pathname, urls[state.last_page]);
        if ((location.pathname !== urls[state.last_page]) && state.last_page && location.pathname) {
            navigate(urls[state.last_page])
        }
    }, [state])

    return (
        <div>
            {children}
        </div>
    );
}

export default ChangeUrlProvider;