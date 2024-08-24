// Importaciones de componentes y módulos necesarios
import CustomKitchenRemodel from '/components/CustomKitchenRemodel';
import HandcraftedFurnitureDesign from '/components/HandcraftedFurnitureDesign';
import LuxuryBathroomRenovation from '/components/LuxuryBathroomRenovation';
import OfficesBusinesses from '/components/OfficesBusinesses';
import ProjectButton from '/components/ProjectButton';
import ScrollHandler from '/components/ScrollHandler';
import ContactSection from '/components/contactanos';

// Componente principal de la página de proyectos
export default function Projects() {
    return (
        <main className="min-h-screen">
            {/* Componente para manejar el desplazamiento basado en el hash de la URL */}
            <ScrollHandler />

            {/* Sección de botones de proyectos */}
            <section className="w-full md:w-[90%] mx-auto px-4 mb-12 pt-8">
                <div className="container mx-auto pt-10">
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
                        {/* Título */}
                        <div className="md:col-span-1 bg-[#9a8a78] p-6 flex items-center justify-center mb-4 md:mb-0">
                            <h2 className="text-xl md:text-2xl font-bold text-white text-center">Our Carpentry Projects</h2>
                        </div>

                        {/* Contenedor de botones */}
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <ProjectButton
                                title="Custom Kitchen Remodel"
                                subtitle=""
                                href="#kitchen"
                                targetId="kitchen"
                                bgColor="bg-gray-800"
                                textColor="text-yellow-600"
                                className="text-sm md:text-base"
                            />
                            <ProjectButton
                                title="Luxury Bathroom Renovation"
                                subtitle=""
                                href="#bathroom"
                                targetId="bathroom"
                                bgColor="bg-gray-800"
                                textColor="text-yellow-600"
                                className="text-sm md:text-base"
                            />
                            <ProjectButton
                                title="Handcrafted Furniture"
                                subtitle=""
                                href="#furniture"
                                targetId="furniture"
                                bgColor="bg-brown-500"
                                textColor="text-white"
                                className="text-sm md:text-base"
                            />
                            <ProjectButton
                                title="Offices & Businesses"
                                subtitle=""
                                href="#deck"
                                targetId="OfficesBusinesses"
                                bgColor="bg-gray-800"
                                textColor="text-yellow-600"
                                className="text-sm md:text-base"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Componentes de proyectos individuales */}
            <div className="w-full px-4 md:w-[90%] mx-auto" id="kitchen">
                <CustomKitchenRemodel />
            </div>
            <div className="w-full px-4 md:w-[90%] mx-auto" id="bathroom">
                <LuxuryBathroomRenovation />
            </div>
            <div className="w-full px-4 md:w-[90%] mx-auto" id="furniture">
                <HandcraftedFurnitureDesign />
            </div>
            <div className="w-full px-4 md:w-[90%] mx-auto" id="OfficesBusinesses">
                <OfficesBusinesses />
            </div>

            {/* Sección de contacto */}
            <div className="mt-8 md:mt-0">
                <ContactSection />
            </div>
        </main>
    );
}