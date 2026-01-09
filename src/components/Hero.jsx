import React from 'react';
import { Play, Info } from 'lucide-react';
import { content } from '../data/content';
import './Hero.css';

const Hero = () => {
    const { profile } = content;

    const scrollToProjects = () => {
        const flagship = document.getElementById('flagship');
        if (flagship) flagship.scrollIntoView({ behavior: 'smooth' });
    };

    const handleContact = () => {
        window.location.href = `mailto:${profile.email}`;
    };

    return (
        <div className="hero-container">
            <div className="hero-background">
                <img src="/src/assets/hero-bg.png" alt="Hero Background" className="hero-bg-img" />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <div className="hero-badges">
                    <span className="hero-badge">N SERIES</span>
                    <span className="hero-badge-text">DATA SCIENTIST</span>
                </div>

                <h1 className="hero-title">{profile.name}</h1>
                <h2 className="hero-subtitle">{profile.tagline}</h2>
                <p className="hero-desc">{profile.subTagline}</p>

                <div className="hero-actions">
                    <button className="hero-btn primary" onClick={scrollToProjects}>
                        <Play fill="currentColor" size={24} />
                        View Flagship Work
                    </button>
                    <button className="hero-btn secondary" onClick={handleContact}>
                        <Info size={24} />
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
