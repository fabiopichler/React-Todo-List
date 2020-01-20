import React from 'react';

import AppHeader from './appHeader/AppHeader';
import AppContent from './appContent/AppContent';
import AppFooter from './appFooter/AppFooter';

import { useStore } from '../store/StoreContext';

const App = () => {
    const { actions } = useStore();

    React.useEffect(() => {
        actions.init();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <AppHeader />

            <AppContent />

            <AppFooter />
        </>
    );
}

export default App;
