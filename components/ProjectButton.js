'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Componente de botón para cada proyecto
const ProjectButton = ({ title, subtitle, href, targetId }) => {
    const router = useRouter();

    // Manejador de clic para el desplazamiento suave
    const handleClick = (e) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            // Si el elemento existe en la página actual, desplazarse suavemente
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Si no existe, navegar a la página de proyectos con el hash correspondiente
            router.push(`/projects${href}`);
        }
    };
    const data = title.split(' ');
    return (
        <Link href={href} onClick={handleClick} className="group block w-full aspect-square">
            <div className="h-full flex flex-col justify-center p-4 border border-[#9a8a78] transition-colors duration-300 ease-in-out group-hover:bg-[#9a8a78]">
                <h3 className="text-base font-semibold text-[#9a8a78] group-hover:text-white text-center transition-colors duration-300 ease-in-out">{data.map((title) => (
                <span>
                    {title}  <br/>
                </span>
                ))}</h3>
                <p className="mt-1 text-xs text-gray-400 group-hover:text-white transition-colors duration-300 ease-in-out">{subtitle}</p>
            </div>
        </Link>
    );
};

export default ProjectButton;