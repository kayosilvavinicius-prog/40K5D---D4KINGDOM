
import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 border-b border-white/5 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#60F2E9] opacity-5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block py-1 px-4 mb-8 border border-[#60F2E9]/30 text-[#60F2E9] text-[10px] font-bold tracking-[0.2em] uppercase rounded-full bg-[#60F2E9]/5">
            Relato Estratégico Real
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1.1] tracking-tight max-w-5xl">
            Eu fiz 40.000 em 5 dias — <br className="hidden md:block" />
            <span className="text-gradient">criando liquidez no CPF sem depender da empresa.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl">
            Isso não é uma promessa de resultado garantido, mas o relato estratégico de como utilizei minha expertise para gerar R$ 40.000 de liquidez direta no CPF. Um processo replicável para empresários que já construíram algo e agora precisam colher os frutos com inteligência.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <button 
              onClick={scrollToOffer}
              className="bg-[#60F2E9] hover:bg-[#4de0d7] text-black font-black py-5 px-10 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-[1.03] active:scale-95 btn-glow text-lg"
            >
              Quero aprender o processo dos 40.000 em 5 dias
              <ArrowRight className="ml-2 w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-2 text-[#60F2E9] text-[10px] font-bold tracking-widest uppercase opacity-80">
              <Lock className="w-4 h-4" />
              <span>Relato Real • Sem fórmulas mágicas</span>
            </div>
          </div>

          <div className="w-full max-w-2xl flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#60F2E9] opacity-20 blur group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative aspect-[4/3] w-full bg-zinc-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src="https://raw.githubusercontent.com/kayosilvavinicius-prog/40K5D/e295e6a32b592e2ab9c231b4daaab5b50e6b940f/daniel%20palestra%202.png" 
                  alt="Daniel Fernandes" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent text-left">
                  <p className="text-[#60F2E9] font-black text-xl">Daniel Fernandes</p>
                  <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mt-1">Fundador D4 Kingdom</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 max-w-3xl">
            <p className="text-gray-400 text-lg leading-relaxed italic">
              "Este conteúdo não é para quem está começando do zero. É para quem já construiu uma empresa e agora quer proteger o próprio CPF e a família."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
