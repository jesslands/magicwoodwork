import React from 'react';
import { useRouter } from 'next/navigation';

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
  const projects = [
    { id: 1, name: "The Jefferson's Lake House", image: "/imagenes/oficinas/IMG_0888.jpg" },
    { id: 2, name: "Modern Kitchen Design", image: "/imagenes/oficinas/IMG_0889.jpg" },
    { id: 3, name: "Spacious Living Room", image: "/imagenes/oficinas/IMG_3309.jpg" },
    { id: 4, name: "Spacious Living Room", image: "/imagenes/oficinas/IMG_3311.jpg" },
    { id: 5, name: "Spacious Living Room", image: "/imagenes/oficinas/01.jpg" }
    // Añade más proyectos según sea necesario
  ];


  const router = useRouter()

  return (
    <div className="w-[90%] mx-auto">
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4' onClick={()=> router.push("/projects")}>

      <div className="grid grid-cols-2 gap-4">
       
       <GalleryItem key={projects[0].id} imageSrc={projects[0].image} projectName={projects[0].name} />
       <GalleryItem key={projects[1].id} imageSrc={projects[1].image} projectName={projects[1].name} />
       <GalleryItem  key={projects[2].id} imageSrc={projects[2].image} projectName={projects[2].name} />
       <GalleryItem  key={projects[3].id} imageSrc={projects[3].image} projectName={projects[3].name} />
       </div>

       <div>
       <GalleryItem  key={projects[4].id} imageSrc={projects[4].image} projectName={projects[4].name} />
       </div>

      </div>
    </div>
  );
};

export default Gallery;