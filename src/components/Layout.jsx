import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <footer style={{
                padding: '50px var(--page-padding)',
                color: 'var(--text-secondary)',
                textAlign: 'center',
                fontSize: '0.8rem',
                marginTop: '50px',
                borderTop: '1px solid #333'
            }}>
                <p style={{ marginBottom: '10px' }}>© 2026 Gowrishankar M. This is a personal portfolio.</p>
                <p>Netflix-inspired design concept. Not affiliated with Netflix.</p>
            </footer>
        </div>
    );
};

export default Layout;
