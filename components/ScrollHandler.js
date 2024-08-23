'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Componente para manejar el desplazamiento inicial basado en el hash de la URL
export default function ScrollHandler() {
    const pathname = usePathname();

    useEffect(() => {
        // Verificar si hay un hash en la URL
        if (pathname.includes('#')) {
            const id = pathname.split('#')[1];
            const element = document.getElementById(id);
            if (element) {
                // Pequeño retraso para asegurar que la página se ha renderizado completamente
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [pathname]);

    // Este componente no renderiza nada visualmente
    return null;
}