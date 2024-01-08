"use client"
import '../../public/css/portpolio.css';
import '../../public/css/default.css';

import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

type Project = {
    title: string;
    image: string;
};

type PortfolioProps = {
    data?: {
        projects: Project[];
    };
};

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
    if (!data) return null;

    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const openLightbox = (imageUrl: string) => {
        setCurrentImage(imageUrl);
        setIsOpen(true);
    }

    const projects = data.projects.map((project, index) => {
        const projectImage = `image/portfolio/${project.image}`;
        return (
            <div key={index} className="columns portfolio-item">
                <div className="item-wrap" onClick={() => openLightbox(projectImage)}>
                    <img alt={project.title} src={projectImage} />
                    <div style={{ textAlign: "center" }}>{project.title}</div>
                </div>
            </div>
        );
    });

    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>포트폴리오</h1>
                    <h2>저희 팀의 열정과 전문성이 담긴 포트폴리오를 살펴보세요.</h2>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {projects}
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={currentImage}
                    onCloseRequest={() => setIsOpen(false)}
                />
            )}
        </section>
    );
};

export default Portfolio;
