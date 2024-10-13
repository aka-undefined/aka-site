import React from 'react';
import '../styles/Layout.css';

function Copyright() {
    return (
        <div className="copyright">
            &copy; {new Date().getFullYear()} @arun kumar anguraja. All rights reserved.
        </div>
    );
}

export default Copyright;