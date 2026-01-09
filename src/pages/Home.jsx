import React from 'react';
import Hero from '../components/Hero';
import Row from '../components/Row';
import { content } from '../data/content';

const Home = () => {
    return (
        <div className="home-page" style={{ paddingBottom: '50px' }}>
            <Hero />
            <div style={{ marginTop: '-150px', position: 'relative', zIndex: 20 }}>
                {content.rows.map(row => (
                    <Row key={row.id} title={row.title} items={row.items} />
                ))}
            </div>
        </div>
    );
};

export default Home;
