
import React from 'react';
import { Gift, Zap, MessageSquare } from 'lucide-react';

const BonusSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-5 bg-[#60F2E9]/10 rounded-full mb-6">
            <Gift className="w-4 h-4 text-[#60F2E9]" />
            <span className="text-[#60F2E9] text-xs font-black tracking-widest uppercase">BÔNUS EXCLUSIVOS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Ao garantir seu acesso hoje:</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60F2E9] to-[#71ADFF] rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-zinc-900 p-10 rounded-[2rem] border border-white/10 h-full flex flex-col transition-all duration-300 group-hover:border-[#60F2E9]/30">
              <Zap className="w-12 h-12 text-[#60F2E9] mb-8" />
              <h3 className="text-2xl font-black mb-4 leading-tight">“3 formas mais rápidas e fáceis de fazer 40K”</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">Um guia adaptável ao seu nicho específico, mostrando os caminhos de menor resistência para atingir sua meta de faturamento.</p>
              <div className="mt-auto">
                <p className="text-[#60F2E9] font-black text-lg">Valor: R$ 197,00</p>
                <p className="text-gray-500 text-[10px] font-bold mt-1 uppercase tracking-widest">Incluso Gratuitamente</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60F2E9] to-[#71ADFF] rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-zinc-900 p-10 rounded-[2rem] border border-white/10 h-full flex flex-col transition-all duration-300 group-hover:border-[#60F2E9]/30">
              <MessageSquare className="w-12 h-12 text-[#60F2E9] mb-8" />
              <h3 className="text-2xl font-black mb-4 leading-tight">D4 SELLER IA</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">Acesso gratuito por 7 dias à nossa Inteligência Artificial especialista em vendas consultivas pelo WhatsApp. Scripts e fechamentos automáticos.</p>
              <div className="mt-auto">
                <p className="text-[#60F2E9] font-black text-lg">Acesso VIP</p>
                <p className="text-gray-500 text-[10px] font-bold mt-1 uppercase tracking-widest">Incluso Gratuitamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
