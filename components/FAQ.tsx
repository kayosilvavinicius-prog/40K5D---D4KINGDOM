
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-cyan transition-colors"
      >
        <span className="font-bold text-lg">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-400 animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "O acesso é vitalício?",
      answer: "Você terá acesso por 1 ano completo à aula e aos materiais, tempo mais do que suficiente para implementar o método diversas vezes."
    },
    {
      question: "Preciso ter muitos seguidores?",
      answer: "Não. Como relatado, o método foi validado com menos de mil seguidores. O foco é em qualidade de audiência e clareza de oferta."
    },
    {
      question: "Serve para qualquer nicho?",
      answer: "Sim, se você é um empresário, consultor ou prestador de serviços que vende conhecimento ou estratégia, o método é aplicável."
    },
    {
      question: "O bônus da IA é realmente gratuito?",
      answer: "Sim, você terá 7 dias de uso completo e gratuito do D4 SELLER para testar o poder da inteligência artificial nas suas vendas."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center underline decoration-cyan underline-offset-8">Dúvidas Frequentes</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
