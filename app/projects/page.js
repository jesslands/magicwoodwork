import Image from "next/image";
import Link from 'next/link';
import CustomKitchenRemodel from '/components/CustomKitchenRemodel'; // Asegúrate de que la ruta sea correcta

const ProjectButton = ({ title, subtitle, href }) => (
    <Link href={href} className="group block w-full h-full">
        <div className="h-full flex flex-col justify-center p-6  transition-colors duration-300 ease-in-out group-hover:bg-[#9a8a78]">
            <h3 className="text-xl font-semibold text-[#9a8a78] group-hover:text-white transition-colors duration-300 ease-in-out">{title}</h3>
            <p className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-300 ease-in-out">{subtitle}</p>
        </div>
    </Link>
);
const Divider = () => (
    <div className="my-8 flex items-center">
      <div className="flex-grow border-t border-gray-300"></div>
      <div className="flex-shrink mx-4">
        <div className="w-4 h-4 bg-[#9a8a78] rotate-45"></div>
      </div>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );

export default function Projects() {
    return (
        <main className="min-h-screen ">
            <h1 className="text-2xl sm:text-3xl font-bold text-center py-8 text-white">Projects</h1>
            
            {/* Sección de botones de proyectos */}
            <section className="w-full mb-12">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="bg-[#9a8a78] p-6 flex items-center justify-center">
                        <h2 className="text-3xl font-bold text-white">Our Carpentry Projects</h2>
                    </div>
                    <ProjectButton
                        title="Custom Kitchen Remodel"
                        subtitle="Transform your kitchen space"
                        href="/projects/kitchen"
                    />
                    <ProjectButton
                        title="Luxury Bathroom Renovation"
                        subtitle="Elevate your bathroom experience"
                        href="/projects/bathroom"
                    />
                    <ProjectButton
                        title="Handcrafted Furniture Design"
                        subtitle="Unique pieces for your home"
                        href="/projects/furniture"
                    />
                </div>
            </section>
            <Divider />

            {/* Componente CustomKitchenRemodel */}
            <CustomKitchenRemodel />
            <Divider />

        </main>
    );
}