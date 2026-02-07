
import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">D4 Kingdom</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            © 2025 D4 Kingdom. Todos os direitos reservados. <br/>
            Este site não faz parte do Google ou Facebook. Os resultados mencionados são relatos reais mas não garantem ganhos futuros.
          </p>
          <button 
            onClick={scrollToTop}
            className="p-3 bg-zinc-900 border border-white/10 rounded-full hover:border-cyan/50 transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 text-xs text-gray-600 uppercase tracking-tighter">
          <button 
            onClick={(e) => {
              e.preventDefault();
              onPrivacyClick();
            }}
            className="hover:text-cyan transition-colors"
          >
            Políticas de Privacidade
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              onTermsClick();
            }}
            className="hover:text-cyan transition-colors"
          >
            Termos de Uso
          </button>
          <a href="#" className="hover:text-cyan transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
