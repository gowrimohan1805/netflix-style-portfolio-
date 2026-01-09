import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './Card';
import './Row.css';

const Row = ({ title, items }) => {
    const rowRef = useRef(null);

    const slide = (direction) => {
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="row-container">
            <h2 className="row-header">{title}</h2>

            <div className="row-wrapper">
                <button className="handle handle-left" onClick={() => slide('left')}>
                    <ChevronLeft size={40} />
                </button>

                <div className="row-slider" ref={rowRef}>
                    {items.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>

                <button className="handle handle-right" onClick={() => slide('right')}>
                    <ChevronRight size={40} />
                </button>
            </div>
        </div>
    );
};

export default Row;
