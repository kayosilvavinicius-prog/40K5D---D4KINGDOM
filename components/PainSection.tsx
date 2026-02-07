
import React from 'react';

const PainSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tight">
          Sua empresa fatura bem, mas <br/>
          <span className="text-[#60F2E9]">como está o seu CPF?</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-8 border border-white/5 bg-white/5 rounded-2xl hover:border-[#60F2E9]/30 transition-colors">
            <h3 className="text-xl font-bold mb-4 text-white">Patrimônio sem Liquidez</h3>
            <p className="text-gray-400 leading-relaxed">Sua empresa tem ativos, estoque e faturamento, mas sua conta pessoal não reflete essa riqueza. Você prioriza o CNPJ e deixa o seu planejamento pessoal sempre para depois.</p>
          </div>
          <div className="p-8 border border-white/5 bg-white/5 rounded-2xl hover:border-[#60F2E9]/30 transition-colors">
            <h3 className="text-xl font-bold mb-4 text-white">O Sacrifício do Provedor</h3>
            <p className="text-gray-400 leading-relaxed">Você gera o sustento de dezenas de famílias e clientes, enquanto a sua própria família recebe o que sobra. O impacto de um CPF fragilizado é silencioso, mas real.</p>
          </div>
        </div>
        <p className="mt-16 text-xl text-gray-300 italic max-w-2xl mx-auto">
          "É um orgulho gerar empregos e receita, mas sua inteligência não pode gerar dinheiro apenas quando passa pelo filtro da empresa. Existe um valor imenso no seu caminho percorrido que o mercado deseja comprar diretamente de você."
        </p>
      </div>
    </section>
  );
};

export default PainSection;
