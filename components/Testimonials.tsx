
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      id: 1,
      videoUrl: "https://raw.githubusercontent.com/kayosilvavinicius-prog/40K5D/ac7cfcccc6b5e1e45d24feda6bde7bf038580067/TAI.mp4",
      name: "Tai",
      role: "Mentora de Psicólogas - UNIQUE"
    },
    {
      id: 2,
      videoUrl: "https://raw.githubusercontent.com/kayosilvavinicius-prog/40K5D/f4fb06bd2b4ff133fc629427df37504a4e157442/DEPOIMENTO%20NR.mp4", 
      name: "Guilherme e Kaique",
      role: "NR Imóveis"
    },
    {
      id: 3,
      videoUrl: "", 
      name: "Caso de Sucesso 3",
      role: "Consultor",
      placeholder: true
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-[#0d0d0d] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-4 mb-4 border border-[#60F2E9]/30 text-[#60F2E9] text-[10px] font-bold tracking-[0.2em] uppercase rounded-full bg-[#60F2E9]/5">
            Impacto Real
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
            Conheça alguns empresários que ja foram <br className="hidden md:block" />
            <span className="text-gradient">impactados pela D4 Kingdom.</span>
          </h2>
          <p className="text-gray-400 text-lg">O próximo Case de Sucesso pode ser o seu!</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex justify-center items-center overflow-visible">
            <div className="relative w-full max-w-[320px] md:max-w-[800px] flex justify-center">
              
              {/* The "Track" */}
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ 
                  transform: `translateX(calc(-${currentIndex * 100}%))` 
                }}
              >
                {testimonials.map((item, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <div 
                      key={item.id}
                      className="w-full flex-shrink-0 px-4 transition-all duration-500"
                      style={{ 
                        width: '100%',
                        opacity: isActive ? 1 : 0.4,
                        transform: isActive ? 'scale(1)' : 'scale(0.85)',
                      }}
                    >
                      <div className="relative aspect-[9/16] bg-zinc-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl group mx-auto max-w-[280px] md:max-w-[320px]">
                        
                        {/* CTA Button at the Top of Video */}
                        {!item.placeholder && (
                          <button
                            onClick={scrollToOffer}
                            className="absolute top-6 left-1/2 -translate-x-1/2 z-30 bg-[#60F2E9] hover:bg-[#4de0d7] text-black font-black py-2.5 px-6 rounded-full text-[10px] tracking-widest uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(96,242,233,0.3)] whitespace-nowrap"
                          >
                            Quero aprender agora!
                          </button>
                        )}

                        {item.placeholder ? (
                          <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 bg-zinc-950 px-8 text-center">
                            <Play className="w-12 h-12 mb-4 opacity-20" />
                            <p className="font-bold tracking-widest uppercase text-[10px]">Próximo depoimento sendo editado...</p>
                          </div>
                        ) : (
                          <video 
                            key={item.videoUrl}
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                            preload="metadata"
                          >
                            <source src={item.videoUrl} type="video/mp4" />
                            Seu navegador não suporta vídeos.
                          </video>
                        )}
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none">
                          <p className="text-[#60F2E9] font-black text-lg">{item.name}</p>
                          <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mt-1">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Controls Overlay */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 md:px-10">
            <button 
              onClick={prev}
              className="p-3 md:p-4 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white pointer-events-auto hover:bg-[#60F2E9] hover:text-black transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="p-3 md:p-4 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white pointer-events-auto hover:bg-[#60F2E9] hover:text-black transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-[#60F2E9]' : 'w-2 bg-gray-800 hover:bg-gray-700'}`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
