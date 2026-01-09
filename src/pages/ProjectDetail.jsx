import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Database, Cpu, TrendingUp } from 'lucide-react';
import { content } from '../data/content';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();

    // Flatten all rows to find the item
    const allItems = content.rows.flatMap(row => row.items);
    const project = allItems.find(item => item.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="project-not-found">
                <h1>Project Not Found</h1>
                <Link to="/" className="back-link">Return Home</Link>
            </div>
        );
    }

    const { details } = project;

    return (
        <div className="project-detail-container">
            <div className="project-backdrop">
                <div className="backdrop-overlay"></div>
                {/* Potentially use project.image here if it were a real image */}
            </div>

            <div className="project-content">
                <Link to="/" className="back-btn"><ArrowLeft /> Back to Browsing</Link>

                <div className="project-header">
                    <h1 className="project-title">{project.title}</h1>
                    <div className="project-meta">
                        <span className="match-score">{project.match}</span>
                        <span className="year">2024</span>
                        <span className="role-badge">{details.role}</span>
                    </div>
                    <p className="project-synopsis">{details.synopsis}</p>

                    <div className="project-actions">
                        {details.github && (
                            <a href={details.github} target="_blank" rel="noreferrer" className="action-btn primary">
                                <Github size={20} /> View Code
                            </a>
                        )}
                        <span className="tag-list">
                            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </span>
                    </div>
                </div>

                <div className="project-grid">
                    <div className="grid-section">
                        <h3><Database className="section-icon" /> The Problem</h3>
                        <p>{details.problem}</p>
                    </div>

                    <div className="grid-section">
                        <h3><TrendingUp className="section-icon" /> The Impact</h3>
                        <p>{details.impact}</p>
                    </div>

                    <div className="grid-section full-width">
                        <h3><Cpu className="section-icon" /> The Approach</h3>
                        <div className="approach-content">
                            <p><strong>Dataset Reality:</strong> {details.dataset}</p>
                            <p style={{ marginTop: '10px' }}>{details.approach}</p>
                            <div className="why-stack">
                                <strong>Why this stack?</strong> {details.whyStack}
                            </div>
                        </div>
                    </div>

                    <div className="grid-section full-width warning">
                        <h3>Limitations & Trade-offs</h3>
                        <p>{details.limitations}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
