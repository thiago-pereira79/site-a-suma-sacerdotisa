import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Sparkles, 
  Sun, 
  Moon, 
  Eye, 
  Compass, 
  Lock, 
  Clock, 
  Coins, 
  Calendar, 
  ShieldAlert, 
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BackButton } from './BackButton';

interface FAQItem {
  id: string;
  num: string;
  question: string;
  answer: string;
  icon: React.ComponentType<any>;
}

interface FAQSectionGroup {
  sectionTitle: string;
  items: FAQItem[];
}

export function FaqSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // 13 fully detailed questions matching the prompt specifications
  const featuredItem: FAQItem = {
    id: '1',
    num: '1',
    question: 'Como funciona a leitura da Suma Sacerdotisa?',
    icon: Sun,
    answer: 'A leitura é feita de forma intuitiva e canalizada, através dos oráculos, da intuição e da energia do momento. Após você enviar sua pergunta, conecto-me à sua energia e trago respostas claras, profundas e alinhadas com o que você precisa saber agora. Você recebe uma mensagem completa e personalizada, com orientações que iluminam seus caminhos e fortalecem suas escolhas.'
  };

  const sections: FAQSectionGroup[] = [
    {
      sectionTitle: 'Sobre a Consulta',
      items: [
        featuredItem,
        {
          id: '2',
          num: '2',
          question: 'Como funciona uma consulta online?',
          icon: Moon,
          answer: 'Você envia sua pergunta por WhatsApp, recebe as fotos reais das cartas tiradas e um áudio completo detalhado com a interpretação. Você pode revisar e reouvir sua leitura sempre que precisar.'
        },
        {
          id: '3',
          num: '3',
          question: 'O Tarot pode prever o futuro?',
          icon: Sparkles,
          answer: 'O Tarot não é um prognóstico determinista, mas sim de conscientização e autoconhecimento. He revela energias predispostas, tendências e rotas para amadurecimento, cabendo unicamente a você escolher seu curso a partir do livre-arbítrio no presente.'
        },
        {
          id: '4',
          num: '4',
          question: 'Como escolher o tipo de leitura ideal?',
          icon: Compass,
          answer: 'Depende da sua maturidade mental de momento. Para inquietações focadas, Perguntas Avulsas são perfeitas. Se demanda mais profundidade, a Leitura em Conversa por Hora é a mais coerente. Já as Tiragens Especiais destinam-se a diagnósticos amplos.'
        },
        {
          id: '5',
          num: '5',
          question: 'Posso fazer perguntas sobre qualquer tema?',
          icon: Eye,
          answer: 'Praticamente todos os âmbitos humanos, como autoconhecimento, carreira, amor e espiritualidade, podem ser lidos. Contudo, não comento sobre prognósticos médicos, enfermidades físicas ou mentais, gravidez, morte, disputas judiciais complexas e espionagem invasiva da vida de terceiros.'
        }
      ]
    },
    {
      sectionTitle: 'Tipos de Leitura e Limites',
      items: [
        {
          id: '6',
          num: '6',
          question: 'Você faz acompanhamento ou indica trabalhos espirituais?',
          icon: Sparkles,
          answer: 'Não. Meu trabalho oracular limita-se exclusivamente ao aconselhamento ético do Tarot como mapa terapêutico de consciência. Não vendo magias, intervenções metafísicas ou limpezas energéticas.'
        },
        {
          id: '7',
          num: '7',
          question: 'O Tarot pode dar respostas negativas?',
          icon: Moon,
          answer: 'O Tarot reflete verdades de alma, sem julgamento moralista ou sentenças binárias de passamento negativo. Mensagens porventura duras destinam-se unicamente a acordar maturidade e iluminar saídas criativas.'
        },
        {
          id: '8',
          num: '8',
          question: 'Existe algum tipo de pergunta que não deve ser feita?',
          icon: ShieldAlert,
          answer: 'Sim. Não realizo leituras sobre julgamentos criminais, diagnósticos médicos, gestação, enfermidades crônicas, óbito de qualquer natureza ou revelação de terceiros não autorizados. O Tarot é luz, não devassa oracular.'
        }
      ]
    },
    {
      sectionTitle: 'Prazos e Devolução',
      items: [
        {
          id: '9',
          num: '9',
          question: 'Quanto tempo leva para receber a leitura?',
          icon: Clock,
          answer: 'A maior parte das leituras gerais é realizada rigorosamente no dia e hora agendados. Mandalas Astrológicas e Mesa Real possuem prazo de processamento para entrega de até 48 horas úteis devido à riqueza de dados.'
        },
        {
          id: '10',
          num: '10',
          question: 'Como faço o pagamento?',
          icon: Coins,
          answer: 'O Pix de e-mail é realizado de forma antecipada. Após efetuar a transação, envie o comprovante correspondente diretamente pelo WhatsApp para consolidação da agenda.'
        },
        {
          id: '11',
          num: '11',
          question: 'Posso reagendar ou cancelar?',
          icon: Calendar,
          answer: 'Com toda certeza. Cancelamentos feitos em até 24h reembolsam metade do valor desembolsado. Reagendamentos são permitidos de forma gratuita com antecedência mínima de 12 horas, no teto de 2 alterações.'
        }
      ]
    },
    {
      sectionTitle: 'Ética e Responsabilidade',
      items: [
        {
          id: '12',
          num: '12',
          question: 'As leituras são confidenciais?',
          icon: Lock,
          answer: 'Sim. Cada palavra, nome e história trocada no meu templo de atendimento permanece salvaguardada sob sigilo profissional estritamente sagrado.'
        },
        {
          id: '13',
          num: '13',
          question: 'O Tarot substitui terapia ou orientação médica?',
          icon: ShieldAlert,
          answer: 'Absolutamente não. Age como roteiro integrativo espiritual e intuitivo focado na alma, mas jamais anula ou compete com psicoterapias, diagnósticos ou tratamentos médicos clínicos orientados.'
        }
      ]
    }
  ];

  const renderCard = (item: FAQItem) => {
    const isOpen = !!openItems[item.id];
    return (
      <div 
        key={item.id} 
        id={`faq-card-${item.id}`}
        className={`bg-[#FAF5EC] border border-[#E8DCB8]/60 transition-all duration-300 rounded-[20px] overflow-hidden select-none ${
          isOpen ? 'shadow-[0_8px_20px_rgba(74,52,40,0.04)] ring-1 ring-[#D6AF2A]/20' : 'hover:border-[#D6AF2A]/40'
        }`}
      >
        <button
          onClick={() => toggleItem(item.id)}
          className="w-full flex items-center justify-between text-left p-5 sm:p-6 cursor-pointer focus:outline-none gap-4"
          id={`faq-btn-${item.id}`}
        >
          <div className="flex items-center gap-4.5">
            {/* Round Olive-Green Medallion Circle */}
            <div 
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#6F7A4E] text-[#FAF5EC] font-serif font-bold text-[15px] sm:text-[16px] flex items-center justify-center shrink-0 shadow-sm"
              id={`faq-medallion-${item.id}`}
            >
              {item.num}
            </div>
            
            <h3 className="font-serif text-[15px] sm:text-[17px] text-[#2F241D] leading-snug font-semibold" id={`faq-qtext-${item.id}`}>
              {item.question}
            </h3>
          </div>
          
          <div className="shrink-0 text-[#D6AF2A]" id={`faq-chevron-wrapper-${item.id}`}>
            {isOpen ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5 opacity-70" />
            )}
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div 
                className="px-6 sm:px-8 pb-6 sm:pb-7 pt-1 border-t border-dashed border-[#D8C6A8]/40 text-[14px] sm:text-[15px] text-[#4A3428]/95 font-light leading-relaxed text-left"
                id={`faq-answer-${item.id}`}
              >
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="pt-4 sm:pt-8 pb-12 md:pb-16 px-4 md:px-8 max-w-7xl mx-auto selection:bg-[#B75E3C]/15 selection:text-[#5A1F2E]"
      id="faq-section-wrapper"
    >
      <BackButton />

      {/* 1. TOPO DA PÁGINA */}
      <div className="text-center mt-6 mb-12 sm:mb-16 relative" id="faq-header">
        <h1 className="font-serif text-[42px] sm:text-[54px] text-[#000000] font-medium tracking-tight" id="faq-title">
          Dúvidas Frequentes
        </h1>
        <p className="text-[#000000] font-serif text-[15px] sm:text-[17.5px] mt-3 max-w-2xl mx-auto font-normal leading-relaxed" id="faq-subtitle">
          Aqui estão as respostas para as perguntas mais comuns sobre a leitura da Suma Sacerdotisa.
        </p>
      </div>

      {/* 2. CONTEÚDO PRINCIPAL (Clean centered block lists categorized) */}
      <div className="max-w-[840px] mx-auto flex flex-col gap-10 md:gap-12 relative mb-16" id="faq-notebook-outer">
        {/* Render questions by groups */}
        {sections.map((sect, sectionIdx) => (
          <div key={sectionIdx} className="flex flex-col" id={`faq-section-group-${sectionIdx}`}>
            {/* Category label / Title */}
            <div className="flex items-center gap-2 mb-4.5 select-none" id={`faq-category-header-${sectionIdx}`}>
              <span className="text-[#D6AF2A] text-sm">✦</span>
              <h2 className="font-serif text-[24px] md:text-[28px] lg:text-[32px] text-[#000000] font-semibold leading-tight tracking-tight">
                {sect.sectionTitle}
              </h2>
            </div>

            {/* Notebook inner sheet per category */}
            <div 
              className="bg-[#FAF5EC] border border-[#E8DCB8]/50 px-5 sm:px-8 py-8 sm:py-10 rounded-[28px] shadow-[0_10px_35px_rgba(74,52,40,0.035)]"
              id={`faq-notebook-sheet-${sectionIdx}`}
            >
              <div className="space-y-4" id={`faq-items-list-container-${sectionIdx}`}>
                {sect.items.map((item) => renderCard(item))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. BLOCO DE DESTAQUE: Atendimento Ético e Seguro */}
      <div 
        className="relative max-w-[840px] mx-auto mb-0 p-6 sm:p-8 bg-[#FAF5EC] border border-[#E8DCB8]/55 rounded-[24px] text-left shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5 select-none"
        id="faq-ethics-warning-card"
      >
        {/* Sticky masking tape visual at top left */}
        <div 
          className="absolute top-[-11px] left-8 w-24 h-5.5 bg-[#FAF5EC]/90 border-l border-r border-[#4A3428]/8 text-center select-none rotate-[-1.5deg]"
          style={{ clipPath: 'polygon(0% 15%, 100% 5%, 98% 85%, 2% 95%)' }}
        />
        
        <div className="shrink-0 relative w-12 h-12 flex items-center justify-center border border-[#D8C6A8]/50 rounded-2xl bg-[#D6AF2A]/5 text-[#D6AF2A]" id="faq-ethics-icon">
          <ShieldAlert className="w-6 h-6 stroke-[1.4]" />
        </div>

        <div className="space-y-1.5 text-center sm:text-left" id="faq-ethics-text">
          <h2 className="font-serif text-[18px] sm:text-[20px] text-[#000000] font-semibold leading-tight">
            Atendimento Ético e Seguro
          </h2>
          <p className="text-[13.5px] sm:text-[14px] text-[#4A3428]/95 leading-relaxed font-light">
            Por compromisso profissional, declino leituras referentes a diagnósticos graves de saúde, prognósticos de gravidez ou parto, mortes ou espionagem da privacidade alheia. O Tarot é luz e ferramenta integrativa consciente.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
