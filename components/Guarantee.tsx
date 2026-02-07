
import React from 'react';
import { RotateCcw } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="border border-white/5 bg-zinc-900/50 p-10 md:p-16 rounded-3xl flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-cyan/20 rounded-full flex items-center justify-center relative">
               <RotateCcw className="w-16 h-16 text-cyan" />
               <div className="absolute -bottom-2 -right-2 bg-cyan text-black text-xs font-bold px-3 py-1 rounded-full">7 DIAS</div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Garantia Incondicional</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              "Se essa aula não explodir sua cabeça, você recebe seu dinheiro de volta. <br className="hidden md:block"/>
              Sem perguntas. Sem burocracia."
            </p>
            <p className="text-gray-500 text-sm">
              Você tem 7 dias inteiros para assistir, validar e decidir. O risco é todo meu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
