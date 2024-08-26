
"use client";
import { useState } from 'react';
import Image from 'next/image';

const images = [
  { 
    src: '/imagenes/banos/01.jpg', 
    alt: 'Kitchen cabinet and shelving',
    description: 'Custom-built kitchen cabinets with open shelving, providing both storage and display space. The warm wood tones contrast beautifully with the white cabinetry.'
  },
  { 
    src: '/imagenes/banos/02.jpg', 
    alt: 'Modern kitchen with island',
    description: 'A sleek, modern kitchen featuring a large island with seating. The stainless steel appliances and pendant lights add a contemporary touch to the space.'
  },
  { 
    src: '/imagenes/banos/03.jpg', 
    alt: 'The Nelson\'s Project bathroom',
    description: 'The Nelson\'s Project showcases a luxurious bathroom renovation with marble tiles, a spacious shower, and elegant fixtures.'
  },
  { 
    src: '/imagenes/banos/04.jpg', 
    alt: 'Marble bathroom with large mirror',
    description: 'A stunning bathroom featuring marble walls and floors, complemented by a large, statement mirror and modern lighting fixtures.'
  },
  { 
    src: '/imagenes/banos/05.jpg', 
    alt: 'White kitchen with wooden floor',
    description: 'This bright, airy kitchen combines white cabinetry with warm wooden floors. The large windows allow plenty of natural light, creating an inviting cooking space.'
  },
];

export default function LuxuryBathroomRenovation() {
  const [selectedImage, setSelectedImage] = useState(null);

  
        return (
          <section className="text-white py-8 sm:py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#ac9172]"> Luxury Bathroom Renovation</h2>
              <p className="mb-6 sm:mb-8 text-gray-300 text-sm sm:text-base">
                      </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((img, index) => (
                  <div key={index} className="relative h-48 sm:h-64 overflow-hidden cursor-pointer rounded-lg" onClick={() => setSelectedImage(img)}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </div>
      
            {/* Modal para imagen ampliada */}
            {selectedImage && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50" onClick={() => setSelectedImage(null)}>
                <div className="bg-gray-800 p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/2 relative h-48 sm:h-64 md:h-80">
                      <Image
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="sm:w-1/2 p-4">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{selectedImage.alt}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{selectedImage.description}</p>
                    </div>
                  </div>
                  <button 
                    className="mt-4 bg-[#ac9172] text-white px-4 py-2 rounded hover:bg-[#ac9172] text-sm sm:text-base"
                    onClick={() => setSelectedImage(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </section>
  );
}