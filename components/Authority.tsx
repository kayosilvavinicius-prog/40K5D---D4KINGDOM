
import React from 'react';
import { Users, Heart, Shield } from 'lucide-react';

const Authority: React.FC = () => {
  return (
    <section className="py-24 bg-graphite border-y border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">O compromisso de quem caminha ao seu lado</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Eu entendo o peso de carregar um CNPJ nas costas. Sei que a responsabilidade de manter portas abertas e salários em dia muitas vezes nos faz esquecer de quem somos fora da empresa.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Minha missão com a D4 Kingdom é garantir que o empresário brasileiro tenha a dignidade e a liquidez que o seu esforço merece. O "40K em 5 dias" nasceu de uma necessidade real de proteger minha família e fortalecer meu patrimônio pessoal, e é esse processo validado que compartilho com você.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-cyan/10 p-2 rounded-lg">
                  <Users className="text-cyan w-5 h-5" />
                </div>
                <span className="text-sm font-semibold">Respeito ao Empresário</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-cyan/10 p-2 rounded-lg">
                  <Heart className="text-cyan w-5 h-5" />
                </div>
                <span className="text-sm font-semibold">Foco na Família</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-cyan/10 p-2 rounded-lg">
                  <Shield className="text-cyan w-5 h-5" />
                </div>
                <span className="text-sm font-semibold">Processo de Elite</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-cyan/20 rounded-2xl rotate-3"></div>
              <div className="relative aspect-video w-full max-w-md bg-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://raw.githubusercontent.com/kayosilvavinicius-prog/40K5D/ac7cfcccc6b5e1e45d24feda6bde7bf038580067/FAMILIA%202.png" 
                  alt="Daniel e Família" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
