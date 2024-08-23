// Importaciones de componentes y módulos necesarios
import CustomKitchenRemodel from '/components/CustomKitchenRemodel';
import HandcraftedFurnitureDesign from '/components/HandcraftedFurnitureDesign';
import LuxuryBathroomRenovation from '/components/LuxuryBathroomRenovation';
import ProjectButton from '/components/ProjectButton';
import ScrollHandler from '/components/ScrollHandler';
import ContactSection from '/components/contactanos';

// Componente principal de la página de proyectos
export default function Projects() {
    return (
        <main className="min-h-screen bg-gray-900">
            {/* Componente para manejar el desplazamiento basado en el hash de la URL */}
            <ScrollHandler />

            {/* Sección de botones de proyectos */}
            <section className="w-full px-4 mb-12 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Título de la sección */}
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 p-6 flex items-center justify-center">
                        <h2 className="text-3xl font-bold text-white">Our Carpentry Projects</h2>
                    </div>

                    {/* Botones de proyectos */}
                    <ProjectButton
                        title="Custom Kitchen Remodel"
                        subtitle=""
                        href="#kitchen"
                        targetId="kitchen"
                    />
                    <ProjectButton
                        title="Luxury Bathroom Renovation"
                        subtitle=""
                        href="#bathroom"
                        targetId="bathroom"
                    />
                    <ProjectButton
                        title="Handcrafted Furniture "
                        subtitle=""
                        href="#furniture"
                        targetId="furniture"
                    />
                    <ProjectButton
                        title="Offices  Businesses"
                        subtitle=""
                        href="#deck"
                        targetId="deck"
                    />
                   
                </div>
            </section>

            {/* Componentes de proyectos individuales */}
            <div id="kitchen">
                <CustomKitchenRemodel />
            </div>
            <div id="bathroom">
                <LuxuryBathroomRenovation />
            </div>
            <div id="furniture">
                <HandcraftedFurnitureDesign />
            </div>

            {/* Puedes agregar más componentes para 'deck' y 'closet' si los tienes */}

            <ContactSection />
        </main>
    );
}