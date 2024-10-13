import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Copyright from './Copyright';
import 'styles/Layout.css';

function Layout({ children }) {
    return (
        <div className="App">
            <Header />
            <main>
                {children}
                <Copyright />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;