import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import './SplineScene.css';

const SplineScene = ({ url }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="spline-wrapper">
            {loading && (
                <div className="spline-loader">
                    <div className="loader-spinner"></div>
                </div>
            )}
            <Spline
                scene={url}
                onLoad={() => setLoading(false)}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default SplineScene;
