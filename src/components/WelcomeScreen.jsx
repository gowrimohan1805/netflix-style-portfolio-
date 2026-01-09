import React, { useEffect, useState } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onComplete }) => {
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        // Total animation duration approx 3.5s
        const timer = setTimeout(() => {
            setExiting(true);
            setTimeout(onComplete, 800); // 800ms fade out transition
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`welcome-container ${exiting ? 'fade-out' : ''}`}>
            <div className="anim-text">
                <span>G</span>
                <span>O</span>
                <span>W</span>
                <span>R</span>
                <span>I</span>
                <span>S</span>
                <span>H</span>
                <span>A</span>
                <span>N</span>
                <span>K</span>
                <span>A</span>
                <span>R</span>
            </div>
        </div>
    );
};

export default WelcomeScreen;
