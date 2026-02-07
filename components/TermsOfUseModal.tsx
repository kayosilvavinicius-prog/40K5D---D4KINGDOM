
import React from 'react';
import { X } from 'lucide-react';

interface TermsOfUseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfUseModal: React.FC<TermsOfUseModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#121212] border border-white/10 w-full max-w-3xl max-h-[80vh] rounded-[2rem] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white uppercase tracking-widest">Termos de Uso</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto text-gray-400 text-sm leading-relaxed space-y-6 custom-scrollbar">
          <p>Ao acessar ao site <strong>D4 Kingdom</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
          
          <section>
            <h3 className="text-white font-bold mb-2">1. Uso de Licença</h3>
            <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site D4 Kingdom, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>modificar ou copiar os materiais;</li>
              <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
              <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site D4 Kingdom;</li>
              <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
              <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white font-bold mb-2">2. Isenção de Responsabilidade</h3>
            <p>Os materiais no site da D4 Kingdom são fornecidos 'como estão'. D4 Kingdom não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
          </section>

          <section>
            <h3 className="text-white font-bold mb-2">3. Limitações</h3>
            <p>Em nenhum caso o D4 Kingdom ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em D4 Kingdom.</p>
          </section>

          <section>
            <h3 className="text-white font-bold mb-2">4. Precisão dos Materiais</h3>
            <p>Os materiais exibidos no site da D4 Kingdom podem incluir erros técnicos, tipográficos ou fotográficos. D4 Kingdom não garante que qualquer material em seu site seja preciso, completo ou atual. D4 Kingdom pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.</p>
          </section>

          <section>
            <h3 className="text-white font-bold mb-2">5. Modificações</h3>
            <p>O D4 Kingdom pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
          </section>

          <p className="pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest">Estes termos são efetivos a partir de Maio de 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUseModal;
