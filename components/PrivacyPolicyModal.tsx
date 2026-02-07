
import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#121212] border border-white/10 w-full max-w-3xl max-h-[80vh] rounded-[2rem] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white uppercase tracking-widest">Política de Privacidade</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto text-gray-400 text-sm leading-relaxed space-y-6 custom-scrollbar">
          <p>A sua privacidade é importante para nós. É política do <strong>D4 Kingdom</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.</p>
          
          <section>
            <h3 className="text-white font-bold mb-2">1. Coleta de Informações</h3>
            <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
          </section>

          <section>
            <h3 className="text-white font-bold mb-2">2. Uso de Dados</h3>
            <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. Nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
          </section>

          <section>
            <h3 className="text-white font-bold mb-2">3. Cookies e Rastreamento</h3>
            <p>Utilizamos cookies para melhorar sua experiência e para fins de marketing (como pixels do Facebook e Google Ads). Esses dados são processados de forma anônima para entender o comportamento do usuário e otimizar nossas campanhas de anúncios.</p>
          </section>

          <section>
            <h3 className="text-white font-bold mb-2">4. Segurança</h3>
            <p>Protegemos os dados armazenados dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
          </section>

          <section>
            <h3 className="text-white font-bold mb-2">5. Compromisso do Usuário</h3>
            <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o D4 Kingdom oferece no site e com caráter enunciativo, mas não limitativo: não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública.</p>
          </section>

          <p className="pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest">Atualizado em Maio de 2024. D4 Kingdom.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
