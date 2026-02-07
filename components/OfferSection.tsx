
import React from 'react';
import { ShieldCheck, ArrowRight, Lock } from 'lucide-react';

const OfferSection: React.FC = () => {
  return (
    <section id="offer" className="py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#60F2E9]/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <h2 className="text-xl font-bold text-gray-500 mb-4 tracking-[0.3em] uppercase">DECISÃO E CLAREZA</h2>
        <h3 className="text-4xl md:text-6xl font-black mb-12 tracking-tight">
          Tenha em mãos o mapa que gerou <span className="text-gradient">R$ 40k em 5 dias.</span>
        </h3>
        
        <div className="bg-zinc-900 border-2 border-[#60F2E9]/20 rounded-[3rem] p-10 md:p-16 mb-10 shadow-2xl relative">
          <div className="mb-10">
            <p className="text-gray-500 line-through text-xl mb-2">De R$ 197,00</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold self-start mt-4">R$</span>
              <span className="text-8xl md:text-9xl font-black text-white tracking-tighter">47</span>
              <span className="text-2xl text-gray-400 self-end mb-6">,00</span>
            </div>
            <p className="text-[#60F2E9] font-black tracking-[0.2em] text-[10px] md:text-xs mt-4 uppercase">Pagamento Único • Acesso Vitalício</p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <button className="w-full max-w-md bg-[#60F2E9] hover:bg-[#4de0d7] text-black font-black py-6 px-8 rounded-2xl flex items-center justify-center text-xl transition-all duration-300 transform hover:scale-[1.02] btn-glow">
              SIM, QUERO ACESSAR AGORA
              <ArrowRight className="ml-3 w-7 h-7" />
            </button>
            
            <div className="flex items-center gap-2 text-[#60F2E9] text-[10px] font-bold tracking-widest uppercase opacity-70">
              <Lock className="w-4 h-4" />
              <span>Checkout Seguro e Blindado</span>
            </div>
          </div>
          
          <div className="mt-12 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Suporte Prioritário</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-500 max-w-2xl mx-auto text-xs font-medium leading-relaxed">
          Este é um produto de entrada da D4 Kingdom. Nosso objetivo é que você tenha seu primeiro grande resultado conosco para que possamos fazer negócios maiores no futuro.
        </p>
      </div>
    </section>
  );
};

export default OfferSection;
