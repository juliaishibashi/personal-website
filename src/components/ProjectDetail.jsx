import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../data/data.js';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = data.find(item => item.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-screen bg-[#9e98f7] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project not found</h1>
                    <button 
                        onClick={() => navigate('/#works')}
                        className="bg-white text-[#9e98f7] px-6 py-3 rounded-full hover:bg-gray-100 transition"
                    >
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#9e98f7] py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back button */}
                <button 
                    onClick={() => {
                        navigate('/');
                        setTimeout(() => {
                            const worksSection = document.getElementById('works');
                            if (worksSection) {
                                worksSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 100);
                    }}
                    className="mb-8 bg-white/70 hover:bg-white text-[#9e98f7] px-6 py-2 rounded-full transition flex items-center gap-2"
                >
                    <span>←</span> Back to Projects
                </button>

                {/* Project content */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Project image */}
                    <div className="relative h-[400px]">
                        <img 
                            src={project.image} 
                            alt={project.name} 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Project details */}
                    <div className="p-8">
                        <h1 className="text-4xl font-serif mb-4">{project.name}</h1>
                        
                        {/* Project description */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">About this project</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {project.description || 'No description available.'}
                            </p>
                        </div>

                        {/* Project links */}
                        <div className="flex gap-4">
                            {project.github && (
                                <a 
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition flex items-center gap-2"
                                >
                                    <span>View on GitHub</span>
                                    <span>→</span>
                                </a>
                            )}
                            {project.live && (
                                <a 
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#9e98f7] text-white px-6 py-3 rounded-full hover:bg-[#8a84e6] transition flex items-center gap-2"
                                >
                                    <span>Live Demo</span>
                                    <span>→</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;