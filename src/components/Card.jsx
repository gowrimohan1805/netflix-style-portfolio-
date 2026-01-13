import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Info } from 'lucide-react';
import SplineScene from './SplineScene';
import './Card.css';

const Card = ({ item }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/project/${item.id}`);
    };

    const getGradient = (key) => {
        // Cinematic dark gradients
        const gradients = {
            churn: 'linear-gradient(135deg, #590d0d 0%, #1a0505 100%)', // Netflix Red tint
            eda: 'linear-gradient(135deg, #0d2e59 0%, #05101a 100%)',   // Deep Blue
            sql: 'linear-gradient(135deg, #59420d 0%, #1a1305 100%)',   // Gold tint
            python: 'linear-gradient(135deg, #0d592a 0%, #051a0c 100%)', // Green tint
            default: 'linear-gradient(135deg, #2a2a2a 0%, #111 100%)'
        };
        if (key?.startsWith('http')) return `url(${key})`;
        return gradients[key] || gradients.default;
    };

    const bgStyle = item.image && item.image.startsWith('http')
        ? { backgroundImage: `url(${item.image})` }
        : { background: getGradient(item.image) };

    return (
        <div className="card-container" onClick={handleClick}>
            <div className="card-image-wrapper">
                {item.spline ? (
                    <div className="card-image spline-card">
                        <SplineScene url={item.spline} />
                    </div>
                ) : (
                    <div className="card-image" style={bgStyle}>
                        {!item.image?.startsWith('http') && (
                            <div className="placeholder-content">
                                <span className="card-title-overlay">{item.title}</span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="card-content">
                <div className="card-actions">
                    <button className="icon-btn filled"><Play size={12} fill="currentColor" /></button>
                    <button className="icon-btn"><Info size={12} /></button>
                </div>

                <div className="card-meta">
                    <span className="match-score">{item.match}</span>
                    <span className="age-rating">12+</span> {/* Cosmetic */}
                    <span className="duration">1h 20m</span> {/* Cosmetic/Humor like "2 Weeks" */}
                </div>

                <div className="card-tags">
                    {(item.tags || []).slice(0, 3).join(' • ')}
                </div>
            </div>
        </div>
    );
};

export default Card;
