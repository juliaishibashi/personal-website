import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/data.js';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = data.find(item => item.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-detail">
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <p>{project.description}</p>
            {/* 必要に応じて他のプロジェクト情報を追加 */}
            <a href={project.github}>View on GitHub</a>
        </div>

    );
}