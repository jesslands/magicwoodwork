import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchProjects } from "@/services/directusService";

const GalleryItem = ({ imageSrc, projectName }) => (
  <div className="relative border border-r-1 border-[#9a8a78] overflow-hidden group cursor-pointer">
    <img 
      src={imageSrc} 
      alt={projectName} 
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-black text-center text-lg font-semibold">{projectName}</p>
    </div>
  </div>
);

const Gallery = () => {
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className="w-[90%] mx-auto">
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4' onClick={()=> router.push("/projects")}>
        {projects.length > 0 && (
          <>
            <div className="grid grid-cols-2 gap-4">
              {projects.slice(0, 4).map(project => (
                <GalleryItem 
                  key={project.id} 
                  imageSrc={`${process.env.NEXT_PUBLIC_BaseURL}/assets/${project.image}?download=`} 
                  projectName={project.name} 
                />
              ))}
            </div>
            <div>
              {projects[4] && (
                <GalleryItem 
                  key={projects[4].id} 
                  imageSrc={`${process.env.NEXT_PUBLIC_BaseURL}/assets/${projects[4].image}?download=`} 
                  projectName={projects[4].name} 
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
