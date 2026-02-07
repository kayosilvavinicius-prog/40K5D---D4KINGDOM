
import React from 'react';
import { Target, Users, Shield } from 'lucide-react';

const BeliefBreaker: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que sua inteligência só gera lucro no CNPJ?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Milhões de brasileiros sonham em empreender e sair da CLT. Eles buscam os caminhos que você já percorreu e domina.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Demanda Real", desc: "Seu conhecimento prático é o atalho que muitos empresários iniciantes estão dispostos a pagar para acessar.", icon: Users },
            { title: "Liquidez Direta", desc: "Criar receita no CPF não compete com sua empresa; ela protege sua família e fortalece suas decisões no negócio.", icon: Target },
            { title: "Segurança Familiar", desc: "Um CPF forte permite que você proteja quem ama, sem depender das oscilações mensais do caixa da empresa.", icon: Shield }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6">
              <item.icon className="w-12 h-12 text-[#60F2E9]/50 mb-6" />
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeliefBreaker;
