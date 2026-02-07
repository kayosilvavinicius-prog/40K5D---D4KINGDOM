
import React from 'react';
import { PlayCircle, BookOpen, Check } from 'lucide-react';

const WhatYouWillLearn: React.FC = () => {
  return (
    <section className="py-24 bg-graphite">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight">
              O caminho para um <br/>
              <span className="text-[#60F2E9]">CPF Inabalável:</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <PlayCircle className="w-8 h-8 text-[#60F2E9] shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">🎥 Aulas práticas e estratégicas</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Vou abrir os bastidores de como gerei R$ 40.000 em 5 dias. Um relato prático focado em quem já tem expertise e precisa de liquidez pessoal.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <BookOpen className="w-8 h-8 text-[#60F2E9] shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">📘 O Mapa de Execução</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Um guia estruturado para você replicar o processo sem comprometer sua operação atual ou o tempo que dedica à sua empresa.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-5 pt-4 lg:pt-16">
            <h3 className="text-xl font-bold text-white mb-2">Fundamentos do processo:</h3>
            {[
              "Como separar sua inteligência do operacional da empresa",
              "Identificação de ativos de conhecimento que o mercado já busca",
              "Estruturação de oferta para receita direta no CPF",
              "Proteção patrimonial através de novas fontes de renda",
              "Como fortalecer o negócio através de uma vida pessoal sólida"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="mt-1 bg-[#60F2E9]/10 p-1.5 rounded-lg group-hover:bg-[#60F2E9]/20 transition-colors">
                  <Check className="w-4 h-4 text-[#60F2E9]" />
                </div>
                <span className="text-gray-300 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
