import React, { useState, useEffect, useRef } from 'react';
import { Project, ProjectCategory } from '../types';
import { Upload, FileVideo, Image as ImageIcon, Plus } from 'lucide-react';

interface SubPageLayoutProps {
  category: ProjectCategory;
  projects: Project[];
}

interface UploadedMedia {
  id: string;
  url: string;
  type: 'image' | 'video';
  name: string;
}

const SubPageLayout: React.FC<SubPageLayoutProps> = ({ category, projects }) => {
  const filteredProjects = projects.filter(p => p.category === category);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [projectMedia, setProjectMedia] = useState<Record<string, UploadedMedia[]>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Set initial selected project when category changes
  useEffect(() => {
    if (filteredProjects.length > 0) {
      setSelectedProjectId(filteredProjects[0].id);
    } else {
      setSelectedProjectId(null);
    }
  }, [category]);

  const selectedProject = filteredProjects.find(p => p.id === selectedProjectId);
  const isThoughts = category === ProjectCategory.THOUGHTS;

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0 && selectedProjectId) {
      const newMediaItems: UploadedMedia[] = (Array.from(files) as File[]).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        url: URL.createObjectURL(file),
        type: file.type.startsWith('video') ? 'video' : 'image',
        name: file.name
      }));

      setProjectMedia(prev => ({
        ...prev,
        [selectedProjectId]: [...(prev[selectedProjectId] || []), ...newMediaItems]
      }));
    }
    // Reset input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-5rem)] max-w-[1920px] mx-auto w-full">
      {/* LEFT COLUMN: Project Directory */}
      <div className="w-full md:w-1/3 lg:w-[400px] border-b md:border-b-0 md:border-r border-white/10 flex flex-col bg-black overflow-y-auto custom-scrollbar">
        <div className="p-6 sticky top-0 bg-black/95 backdrop-blur z-10 border-b border-white/5">
          <h2 className="text-xl font-bold text-white">{category}</h2>
          <span className="text-xs text-gray-500 uppercase tracking-wider">{filteredProjects.length} Items</span>
        </div>

        <div className="flex flex-col">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className={`group flex items-start p-6 cursor-pointer border-b border-white/5 transition-colors duration-200 ${
                selectedProjectId === project.id ? 'bg-white/5' : 'hover:bg-white/5'
              }`}
            >
              {!isThoughts && (
                <div className="flex-shrink-0 w-24 h-16 mr-4 bg-gray-900 overflow-hidden rounded-[8px]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h3 className={`text-base font-medium leading-tight mb-2 ${
                  selectedProjectId === project.id ? 'text-white' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="p-8 text-gray-500 text-center text-sm">
              No projects in this category yet.
            </div>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Project Details & Upload */}
      <div className="flex-1 flex flex-col bg-[#050505] overflow-y-auto relative h-full">
        {selectedProject ? (
          <div className="p-8 md:p-12 max-w-5xl w-full mx-auto">
            {/* Header Info */}
            <div className="mb-12 border-b border-white/5 pb-8">
              <span className="inline-block px-2 py-1 mb-4 text-xs font-mono uppercase tracking-widest text-gray-400 border border-white/10 rounded-sm">
                {selectedProject.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {selectedProject.title}
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
                {selectedProject.description}
              </p>
            </div>

            {/* Media Gallery / Content Area */}
            <div className="space-y-12">
              {/* Primary Image (Default from project data) */}
              {!isThoughts && (
                <div className="w-full bg-gray-900 rounded-[8px] overflow-hidden shadow-2xl shadow-black">
                  <img 
                    src={selectedProject.imageUrl} 
                    alt="Cover" 
                    className="w-full h-auto"
                  />
                  <div className="p-3 bg-black/50 text-xs text-gray-500">Project Cover</div>
                </div>
              )}

              {/* Uploaded Media List */}
              {(projectMedia[selectedProject.id] || []).map((media) => (
                <div key={media.id} className="w-full bg-gray-900 rounded-[8px] overflow-hidden shadow-2xl shadow-black relative group">
                  {media.type === 'video' ? (
                    <video 
                      src={media.url} 
                      controls 
                      className="w-full h-auto" 
                    />
                  ) : (
                    <img 
                      src={media.url} 
                      alt={media.name} 
                      className="w-full h-auto"
                    />
                  )}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur px-2 py-1 rounded text-xs text-white">
                    {media.name}
                  </div>
                </div>
              ))}

              {/* Upload Interaction Area */}
              <div 
                onClick={triggerUpload}
                className="w-full border border-dashed border-white/10 rounded-lg p-12 flex flex-col items-center justify-center text-gray-500 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer group"
              >
                <input 
                  type="file" 
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*,video/*"
                  multiple
                  onChange={handleFileUpload}
                />
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <Plus size={32} />
                </div>
                <h3 className="text-lg font-medium mb-2">Add Media Content</h3>
                <p className="text-sm text-gray-600 mb-6 text-center max-w-xs">
                  Upload images or videos to enhance this project entry.
                </p>
                <div className="flex gap-4">
                  <span className="flex items-center gap-2 text-xs uppercase tracking-wider bg-black border border-white/10 px-3 py-2 rounded">
                    <ImageIcon size={14} /> Images
                  </span>
                  <span className="flex items-center gap-2 text-xs uppercase tracking-wider bg-black border border-white/10 px-3 py-2 rounded">
                    <FileVideo size={14} /> Videos
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
            <p>Select a project from the list to view details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubPageLayout;