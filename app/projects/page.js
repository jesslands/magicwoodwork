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
        <main className="min-h-screen ">
            {/* Componente para manejar el desplazamiento basado en el hash de la URL */}
            <ScrollHandler />

            {/* Sección de botones de proyectos */}
            <section className="w-full md:w-[90%] mx-auto px-4 mb-12 pt-8 ">
                <div className="container mx-auto pt-10">
                    <div className="grid grid-cols-3 gap-4">
                        {/* Título en la primera columna */}
                        <div className="col-span-1 bg-[#9a8a78] p-6 flex items-center justify-center">
                            <h2 className="text-2xl font-bold text-white text-center ">Our Carpentry Projects</h2>
                        </div>

                        {/* Contenedor de botones en las otras dos columnas */}
                        <div className="col-span-2 grid grid-cols-4 gap-4">
                            <ProjectButton
                                title="Custom Kitchen Remodel"
                                subtitle=""
                                href="#kitchen"
                                targetId="kitchen"
                                bgColor="bg-gray-800"
                                textColor="text-yellow-600"
                            />
                            <ProjectButton
                                title="Luxury Bathroom Renovation"
                                subtitle=""
                                href="#bathroom"
                                targetId="bathroom"
                                bgColor="bg-gray-800"
                                textColor="text-yellow-600"
                            />
                            <ProjectButton
                                title="Handcrafted Furniture"
                                subtitle=""
                                href="#furniture"
                                targetId="furniture"
                                bgColor="bg-brown-500"
                                textColor="text-white"
                            />
                            <ProjectButton
                                title="Offices & Businesses"
                                subtitle=""
                                href="#deck"
                                targetId="deck"
                                bgColor="bg-gray-800"
                                textColor="text-yellow-600"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Componentes de proyectos individuales */}
            <div className="w-full md:w-[90%] mx-auto" id="kitchen">
                <CustomKitchenRemodel />
            </div>
            <div className="w-full md:w-[90%] mx-auto" id="bathroom">
                <LuxuryBathroomRenovation />
            </div>
            <div  className="w-full md:w-[90%] mx-auto" id="furniture">
                <HandcraftedFurnitureDesign />
            </div>

            {/* Puedes agregar más componentes para 'deck' y 'closet' si los tienes */}

            <ContactSection />
        </main>
    );
}