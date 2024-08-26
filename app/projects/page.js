// Importaciones de componentes y módulos necesarios
import CustomKitchenRemodel from "/components/CustomKitchenRemodel";
import HandcraftedFurnitureDesign from "/components/HandcraftedFurnitureDesign";
import LuxuryBathroomRenovation from "/components/LuxuryBathroomRenovation";
import OfficesBusinesses from "/components/OfficesBusinesses";
import ProjectButton from "/components/ProjectButton";
import ScrollHandler from "/components/ScrollHandler";
import ContactSection from "/components/contactanos";

// Componente principal de la página de proyectos
export default function Projects() {
  return (
    <main className="min-h-screen bg-[#21201f]">
      {/* Componente para manejar el desplazamiento basado en el hash de la URL */}
      <ScrollHandler />

      {/* Sección de botones de proyectos */}
      <section className="w-full md:w-[90%] mx-auto px-4 mb-12 pt-8">
        <div className="container mx-auto pt-10">
          <div className="mt-12">
            {/* Título */}

            {/* Contenedor de botones */}
            <div className="grid grid-cols-5 w-full gap-4">
              <div className="bg-[#ac9172] p-6 flex items-center justify-center mb-4 md:mb-0">
                <h2 className="text-xl md:text-2xl font-bold text-white text-center">
                  Our <br /> Carpentry <br /> Projects
                </h2>
              </div>
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
      <hr className="border-t border-[#ac9172] my-8 w-full md:w-[90%] mx-auto" />

      {/* Componentes de proyectos individuales */}
      <div className="w-full px-4 md:w-[90%] mx-auto" id="kitchen">
        <CustomKitchenRemodel />
      </div>
      <hr className="border-t border-[#ac9172] my-8 w-full md:w-[90%] mx-auto" />

      
      <div className="w-full px-4 md:w-[90%] mx-auto" id="bathroom">
        <LuxuryBathroomRenovation />
      </div>
      <hr className="border-t border-[#ac9172] my-8 w-full md:w-[90%] mx-auto" />

      <div className="w-full px-4 md:w-[90%] mx-auto" id="furniture">
        <HandcraftedFurnitureDesign />
      </div>
      <hr className="border-t border-[#ac9172] my-8 w-full md:w-[90%] mx-auto" />

      <div className="w-full px-4 md:w-[90%] mx-auto" id="OfficesBusinesses">
        <OfficesBusinesses />
      </div>
      <hr className="border-t border-[#ac9172] my-8 w-full md:w-[90%] mx-auto" />


      {/* Sección de contacto */}
      <div className="mt-8 md:mt-0">
        <ContactSection />
      </div>
    </main>
  );
}
