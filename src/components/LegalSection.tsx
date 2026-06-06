import React from 'react';
import { 
  CheckCircle, 
  Sparkles, 
  UserCheck, 
  ShieldAlert, 
  Heart, 
  MessageSquare, 
  Coins, 
  XCircle, 
  Calendar, 
  Lock, 
  BookOpen, 
  Globe, 
  RefreshCw, 
  Mail, 
  FileText, 
  Compass, 
  Moon, 
  Eye, 
  Scale, 
  Clock, 
  Phone, 
  Instagram,
  ChevronRight
} from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';
import { motion } from 'motion/react';
import { BackButton } from './BackButton';
import { WHATSAPP_LINK, EMAIL_LINK } from '../constants';

interface LegalSectionProps {
  type: 'termos' | 'privacidade';
}

interface LegalCardData {
  num: string;
  title: string;
  icon: React.ComponentType<any>;
  leftText: string;
  bullets?: string[];
  rightIntro?: string;
}

export function LegalSection({ type }: LegalSectionProps) {
  const isTerms = type === 'termos';

  // 12 sections for privacy policy, precisely translated and configured in columns/lists as shown in the reference image
  const privacyData: LegalCardData[] = [
    {
      num: '1',
      title: 'Coleta de Informações',
      icon: FileText,
      leftText: 'Coletamos apenas as informações necessárias para oferecer uma experiência personalizada e segura. As informações podem ser fornecidas por você diretamente ou coletadas automaticamente durante a navegação.',
      rightIntro: 'Podem ser coletados no momento do agendamento:',
      bullets: [
        'Nome completo e data de nascimento;',
        'E-mail para contatos pontuais;',
        'Telefone celular / WhatsApp;',
        'Comprovantes de transações Pix.'
      ]
    },
    {
      num: '2',
      title: 'Uso das Informações',
      icon: Sparkles,
      leftText: 'Utilizamos suas informações com respeito e responsabilidade para garantir o melhor atendimento e aprimorar nossos serviços.',
      rightIntro: 'Usamos os dados para:',
      bullets: [
        'Agendar e gerenciar suas leituras e atendimentos;',
        'Personalizar sua experiência no site;',
        'Enviar comunicações importantes sobre seus agendamentos;',
        'Melhorar o conteúdo, funcionalidades e usabilidade do site;',
        'Cumprir obrigações legais e regulatórias.'
      ]
    },
    {
      num: '3',
      title: 'Segurança e Sigilo',
      icon: Moon,
      leftText: 'A Suma Sacerdotisa adota zelo rigoroso para impedir vazamentos de conversas oraculares. Todos os áudios, fotos de cartas e anotações permanecem arquivados sob confidencialidade inviolável.',
      rightIntro: 'Diretrizes de sigilo:',
      bullets: [
        'Criptografia SSL em todas as conexões;',
        'Acesso restrito a dados apenas a pessoas autorizadas;',
        'Monitoramento contínuo e boas práticas de segurança.'
      ]
    },
    {
      num: '4',
      title: 'Compartilhamento Zero',
      icon: Lock,
      leftText: 'Seus dados são 100% de uso pessoal e oracular. Não alugo, vendo ou repasso comercialmente nenhuma informação trocada no agendamento com qualquer outra organização.',
      rightIntro: 'Nossa garantia:',
      bullets: [
        'Nenhuma venda de dados;',
        'Sigilo integral entre consulente e oraculista;',
        'Parcerias com intermediários de pagamento certificados.'
      ]
    },
    {
      num: '5',
      title: 'Canais Oficiais',
      icon: Globe,
      leftText: 'O tratamento energético e as marcações de hora acontecem através de plataformas parceiras, como WhatsApp, e-mail e Instagram, cujas regras de privacidade também devem ser aceitas.',
      rightIntro: 'Meios oficiais:',
      bullets: [
        'Atendimento seguro no WhatsApp oficial;',
        'E-mail institucional (@gmail.com);',
        'Direct de Instagram monitorado.'
      ]
    },
    {
      num: '6',
      title: 'Período de Retenção',
      icon: Clock,
      leftText: 'Mantenho os registros de sua consulta oracular apenas pelo período estritamente indispensável para a prestação do Tarot terapêutico ou fins fiscais de Pix.',
      rightIntro: 'Prazos praticados:',
      bullets: [
        'Dados de contato: enquanto ativo no agendamento;',
        'Faturamento por Pix: conforme obrigação fiscal;',
        'Exclusão sob demanda imediata.'
      ]
    },
    {
      num: '7',
      title: 'Prevenção de Ataques',
      icon: ShieldAlert,
      leftText: 'Zelo tecnicamente pela proteção dos dispositivos utilizados no suporte oracular para salvaguardar a integridade de cada áudio enviado ao WhatsApp.',
      rightIntro: 'Medidas técnicas:',
      bullets: [
        'Dispositivos com antivírus atualizados e senhas fortes;',
        'Controles de privacidade estritos nas mídias sociais;',
        'Nenhum download de arquivos suspeitos salvaguardando logs.'
      ]
    },
    {
      num: '8',
      title: 'Cookies e Configuração',
      icon: Compass,
      leftText: 'Trabalho com cookies estritamente técnicos e fundamentais para assegurar a velocidade, o layout e o devido carregamento das páginas institucionais no navegador.',
      rightIntro: 'Finalidades:',
      bullets: [
        'Análise anônima de audiência do site;',
        'Persistência de acessabilidade básica;',
        'Nenhum cookie de rastreamento invasivo.'
      ]
    },
    {
      num: '9',
      title: 'Seus Direitos Legais',
      icon: Scale,
      leftText: 'A qualquer instante, o consulente poderá requerer o expurgo completo de seus registros, alteração de dados cadastrais ou cancelamento de correio eletrônico.',
      rightIntro: 'Direitos salvaguardados:',
      bullets: [
        'Acesso facilitado às informações salvas;',
        'Retificação de inconsistências cadastrais;',
        'Exclusão e esquecimento permanente.'
      ]
    },
    {
      num: '10',
      title: 'Menores de Idade',
      icon: UserCheck,
      leftText: 'Atendimento estritamente para pessoas com mais de 18 anos. Caso seja identificada alguma coleta indevida, será realizado o cancelamento e exclusão imediata sem qualquer retardo.',
      rightIntro: 'Diretrizes éticas:',
      bullets: [
        'Validação etária no agendamento;',
        'Invalidação de agendamentos suspeitos;',
        'Responsabilidade civil estrita.'
      ]
    },
    {
      num: '11',
      title: 'Atualizações Pontuais',
      icon: RefreshCw,
      leftText: 'A presente Política de Privacidade oracular poderá ser alterada a qualquer momento, sendo recomendada sua recorrente análise nesta mesma seção de transparência.',
      rightIntro: 'Procedimento:',
      bullets: [
        'Histórico transparente de modificações;',
        'Data de última revisão documentada;',
        'Adequações legais imediatas.'
      ]
    }
  ];

  // 15 sections + 1 contact section = 16 sections for Terms of Use, matching the reference image layout in every single aspect
  const termsData: LegalCardData[] = [
    {
      num: '1',
      title: 'Aceite dos Termos',
      icon: CheckCircle,
      leftText: 'Ao agendar qualquer consulta ou efetuar o pagamento correspondente Pix de atendimento, você declara para todos os efeitos que leu, compreendeu e concorda expressamente com os termos descritos abaixo.',
      rightIntro: 'Requisito:',
      bullets: [
        'Aceite automático ao enviar o comprovante de pagamento Pix;',
        'Caso não concorde, por favor não efetue o agendamento.'
      ]
    },
    {
      num: '2',
      title: 'Natureza do Serviço',
      icon: Compass,
      leftText: 'O Tarot Terapêutico é uma ferramenta oracular de aconselhamento ético e integrativo focado no autoconhecimento. O serviço não representa previsão fatalista ou prognóstico absoluto de futuro e não garante resultados.',
      rightIntro: 'Escopo do oráculo:',
      bullets: [
        'Tendências e rotas para amadurecimento presente;',
        'Indicações intuitivas para livre-arbítrio individual.'
      ]
    },
    {
      num: '3',
      title: 'Limites de Idade',
      icon: UserCheck,
      leftText: 'As consultas oraculares oferecidas são destinadas exclusivamente a indivíduos maiores de 18 anos. Ao agendar uma sessão, o consulente confirma a maioridade legal para atendimento.',
      rightIntro: 'Critério:',
      bullets: [
        'Exibição de documento etário quando demandado;',
        'Cancelamento sumário de transações com menores.'
      ]
    },
    {
      num: '4',
      title: 'Limites Éticos do Tarot',
      icon: ShieldAlert,
      leftText: 'Para preservar a harmonia das leituras, existem temas limitantes que não são respondidos pelo Tarot em meu templo de forma alguma.',
      rightIntro: 'Não realizamos leituras sobre:',
      bullets: [
        'Doenças graves ou diagnósticos de patologias físicas ou mentais;',
        'Definições forenses, prognóstico de partos ou cronologia de falecimentos;',
        'Processos judiciais complexos de alta litigância;',
        'Espionagem e devassa de terceiros sem autorização.'
      ]
    },
    {
      num: '5',
      title: 'Responsabilidade Íntima',
      icon: Heart,
      leftText: 'O consulente declara estar plenamente ciente de que as interpretações são conselhos reflexivos livres de julgamento moralista. Toda ação tomada após a leitura oracular compete unicamente ao livre-arbítrio individual do usuário.',
      rightIntro: 'Compromisso:',
      bullets: [
        'Aconselhamento isento de sentenças imperativas;',
        'Escolhas pessoais geridas estritamente pelo consulente.'
      ]
    },
    {
      num: '6',
      title: 'Formato da Entrega',
      icon: MessageSquare,
      leftText: 'As consultas gerais ocorrem no formato prático de foto nítida das cartas e gravação explicativa de áudio detalhado, entregues via WhatsApp, na data e horário marcados.',
      rightIntro: 'Materiais enviados:',
      bullets: [
        'Fotos reais das cartas tiradas no templo;',
        'Gravações de áudios completos e intuitivos.'
      ]
    },
    {
      num: '7',
      title: 'Pagamento Prévio',
      icon: Coins,
      leftText: 'Os agendamentos são consolidados após comprovação via Pix. O comprovante deve ser enviado pelo WhatsApp com antecedência para garantir a agenda.',
      rightIntro: 'Instruções:',
      bullets: [
        'Transferência prévia antes do envio das leituras;',
        'Envio obrigatório do recibo de confirmação Pix.'
      ]
    },
    {
      num: '8',
      title: 'Cancelamentos',
      icon: XCircle,
      leftText: 'Cancelamentos de consulta são permitidos com até 24 horas de antecedência do horário combinado, ensejando reembolso de 50% do Pix realizado. Sem reembolso após esse prazo.',
      rightIntro: 'Prazos legais:',
      bullets: [
        'Até 24h: devolução de metade do Pix desembolsado;',
        'Menos de 24h: taxa integral retida para cobrir a agenda.'
      ]
    },
    {
      num: '9',
      title: 'Reagendamentos',
      icon: Calendar,
      leftText: 'Comunicação de reagendamento deve ocorrer até 12 horas antes da consulta. Limite no teto de 2 reagendamentos gratuitos por reserva de agenda.',
      rightIntro: 'Parâmetro:',
      bullets: [
        'Aviso prévio mínimo de 12h do horário fixado;',
        'Teto máximo de duas remarcações por consulta.'
      ]
    },
    {
      num: '10',
      title: 'Confidencialidade',
      icon: Lock,
      leftText: 'Toda e qualquer informação trocada no meu templo virtual de acolhimento é tratada com sigilo profissional estritamente absoluto e ético de alma.',
      rightIntro: 'Proteções:',
      bullets: [
        'Conversas excluídas periodicamente após fechamento;',
        'Nenhum compartilhamento de logs com sistemas ou terceiros.'
      ]
    },
    {
      num: '11',
      title: 'Direitos Autorais',
      icon: BookOpen,
      leftText: 'Tudo o que é entregue — fotos, áudios explicativos e mensagens — destina-se unicamente ao proveito íntimo do consulente, sendo proibida a reprodução pública, edição corporativa ou revenda.',
      rightIntro: 'Direitos:',
      bullets: [
        'Material exclusivo de proveito espiritual e privado;',
        'Proibida publicação em redes sociais sem autorização.'
      ]
    },
    {
      num: '12',
      title: 'Preparação Exclusiva',
      icon: Sparkles,
      leftText: 'As lâminas e conselhos oraculares decorrem estritamente de dedicação intelectiva e sensibilidade profissional desenvolvida por mais de uma década de estudo das cartas.',
      rightIntro: 'Formação:',
      bullets: [
        'Aperfeiçoamento constante e técnicas de alta sensibilidade;',
        'Métodos exclusivos de intuição e canalização segura.'
      ]
    },
    {
      num: '13',
      title: 'Canais Auxiliares',
      icon: Globe,
      leftText: 'As comunicações acontecem primariamente via WhatsApp, e-mail de correspondência ou Instagram oficial. O consulente declara aceitar as políticas internas dessas plataformas.',
      rightIntro: 'Termos conexos:',
      bullets: [
        'WhatsApp Messenger (Meta Inc.);',
        'Instagram Network (Meta Inc.);',
        'Google Workspace (Google LLC).'
      ]
    },
    {
      num: '14',
      title: 'Modificações',
      icon: RefreshCw,
      leftText: 'Os presentes Termos de Uso de Atendimento Oracular podem sofrer pontuais atualizações sem prejuízo dos direitos ressalvados para agendamentos previamente quitados.',
      rightIntro: 'Termos de revisão:',
      bullets: [
        'Visualização imediata nos canais digitais do site;',
        'Validade para contratações supervenientes.'
      ]
    },
    {
      num: '15',
      title: 'Declaração e Aval',
      icon: CheckCircle,
      leftText: 'Ao submeter seu Pix ou confirmar uma data de atendimento, o consulente confirma sua livre escolha em aderir aos direitos e responsabilidades contidas nesta página.',
      rightIntro: 'Manifestação:',
      bullets: [
        'Livre escolha consciente ao efetuar a reserva;',
        'Plena sintonia com os termos ora delineados.'
      ]
    }
  ];

  const currentCards = isTerms ? termsData : privacyData;
  const contactCardNum = isTerms ? '16' : '12';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="pt-4 sm:pt-8 pb-12 md:pb-16 px-4 md:px-8 max-w-7xl mx-auto selection:bg-[#B75E3C]/15 selection:text-[#5A1F2E]"
      id="legal-section-wrapper"
    >
      <BackButton />

      {/* 1. TOPO DA PÁGINA */}
      <div className="text-center mt-6 mb-12 sm:mb-16 relative" id="legal-header">
        <h1 className="font-serif text-[42px] sm:text-[54px] text-[#000000] font-medium tracking-tight leading-snug" id="legal-title">
          {isTerms ? 'Termos de Uso' : 'Política de Privacidade'}
        </h1>
        <p className="text-[#000000] font-serif text-[15px] sm:text-[17.5px] mt-3 max-w-2xl mx-auto font-normal leading-relaxed" id="legal-subtitle">
          {isTerms 
            ? 'Ao acessar este site e contratar qualquer serviço oracular oferecido, você concorda expressamente com os termos e regras descritos abaixo.'
            : 'Sua privacidade é inviolável. Saiba de forma simplificada como suas informações pessoais são preservadas, processadas e protegidas.'
          }
        </p>
      </div>

      {/* 2. BLOCO DE DESTAQUE / AVISO INTRODUTÓRIO (No english strings!) */}
      <div className="max-w-[840px] mx-auto mb-12" id="legal-highlight-section">
        {isTerms ? (
          <div className="relative p-6 sm:p-8 bg-[#FAF5EC] border border-[#E8DCB8]/55 rounded-[24px] text-left shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5 select-none">
            {/* Sticky masking tape visual */}
            <div 
              className="absolute top-[-11px] left-8 w-24 h-5.5 bg-[#FAF5EC]/90 border-l border-r border-[#4A3428]/8 text-center select-none rotate-[-1.5deg]"
              style={{ clipPath: 'polygon(0% 15%, 100% 5%, 98% 85%, 2% 95%)' }}
            />
            <div className="shrink-0 relative w-12 h-12 flex items-center justify-center border border-[#D8C6A8]/50 rounded-2xl bg-[#D6AF2A]/5 text-[#5A1F2E]">
              <ShieldAlert className="w-6 h-6 stroke-[1.4]" />
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <h2 className="font-serif text-[18px] sm:text-[20px] text-[#000000] font-semibold leading-tight">
                Aviso Legal Importante
              </h2>
              <p className="text-[13.5px] sm:text-[14px] text-[#4A3428]/95 leading-relaxed font-light">
                O Tarot Terapêutico é uma vivência pacífica voluntária de acolhimento e autoconhecimento focado na alma. Ele não substitui de forma alguma diagnósticos clínicos médicos, tratamentos psicoterapêuticos ou assessorias de finanças e direito de ordem profissional corporativa.
              </p>
            </div>
          </div>
        ) : (
          <div className="relative p-6 sm:p-7 bg-[#FAF5EC] border border-[#E8DCB8]/50 rounded-[20px] text-left shadow-sm flex items-center gap-4.5 select-none">
            <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-[#D6AF2A]" />
            <p className="text-[14px] sm:text-[14.5px] text-[#4A3428]/95 font-serif italic font-light leading-relaxed">
              Esta Política de Privacidade serve para esclarecer aos consulentes a extrema transparência sobre a guarda ética e segredo profissional de todos os dados fornecidos voluntariamente.
            </p>
          </div>
        )}
      </div>

      {/* 3. GRID DE CARDS NUMERADOS (Wide responsive cards list) */}
      <div className="space-y-8 max-w-[840px] mx-auto mb-16" id="legal-cards-container">
        
        {currentCards.map((sect) => {
          return (
            <div 
              key={sect.num} 
              id={`legal-card-${sect.num}`}
              className="bg-[#FAF5EC] border border-[#E8DCB8]/60 rounded-[24px] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(74,52,40,0.04)] select-none hover:border-[#D6AF2A]/45"
            >
              {/* Stack vertically on mobile, split columns on desktop */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-start">
                
                {/* Left Side: Number, Header, and Main Sentence (45% Width) */}
                <div className="w-full md:w-[45%] space-y-4">
                  <div className="flex items-center">
                    {/* Round Olive-Green Medallion Circle */}
                    <div className="w-11 h-11 rounded-full bg-[#6F7A4E] text-[#FAF5EC] font-serif font-bold text-[16px] flex items-center justify-center shrink-0 shadow-sm">
                      {sect.num}
                    </div>
                  </div>
                  
                  <h2 className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#000000] tracking-tight">
                    {sect.title}
                  </h2>
                  
                  <p className="text-[13.8px] sm:text-[14.5px] text-[#4A3428]/95 font-light leading-relaxed">
                    {sect.leftText}
                  </p>
                </div>

                {/* Right Side: Detailed gold-bullet lists if bullets exist (55% Width) */}
                {sect.bullets && sect.bullets.length > 0 ? (
                  <div className="w-full md:w-[50%] bg-[#FAF5EC] border-t md:border-t-0 md:border-l border-[#D8C6A8]/40 pt-5 md:pt-0 md:pl-8 space-y-3.5 flex flex-col justify-center">
                    {sect.rightIntro && (
                      <p className="font-serif italic text-[#4A3428] font-medium text-[13.5px] sm:text-[14px]">
                        ✦ {sect.rightIntro}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {sect.bullets.map((bulletItem, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-[#4A3428]/95 leading-relaxed font-light">
                          <span className="text-[#D6AF2A] text-[12px] shrink-0 font-bold mt-0.5">+</span>
                          <span>{bulletItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  // Empty container to keep spacing consistent if no bullets
                  <div className="hidden md:block w-px self-stretch bg-[#D8C6A8]/20" />
                )}

              </div>
            </div>
          );
        })}

        {/* 4. SELECIONAR CARD FINAL DE CONTATO DIRETO (Numbered gracefully to complete the sequence) */}
        <div 
          id={`legal-card-${contactCardNum}`}
          className="bg-[#FAF5EC] border border-[#E8DCB8]/60 rounded-[24px] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(74,52,40,0.04)] select-none hover:border-[#D6AF2A]/45"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-start">
            
            {/* Left side: header & intro */}
            <div className="w-full md:w-[45%] space-y-4">
              <div className="flex items-center">
                <div className="w-11 h-11 rounded-full bg-[#6F7A4E] text-[#FAF5EC] font-serif font-bold text-[16px] flex items-center justify-center shrink-0 shadow-sm">
                  {contactCardNum}
                </div>
              </div>
              
              <h2 className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#000000] tracking-tight">
                Contato Direto
              </h2>
              
              <p className="text-[13.8px] sm:text-[14.5px] text-[#4A3428]/95 font-light leading-relaxed">
                {isTerms 
                  ? 'Para escolher ou solicitar informações adicionais sobre os Termos de Atendimento Oracular, fale diretamente comigo por meio de nossos canais:'
                  : 'Caso necessite de atendimento pontual sobre a segurança, guarda ou cancelamento de seus dados pessoais, mande um chamado quando desejar:'
                }
              </p>
            </div>

            {/* Right side: actual live contact pillars */}
            <div className="w-full md:w-[50%] bg-[#FAF5EC] border-t md:border-t-0 md:border-l border-[#D8C6A8]/40 pt-5 md:pt-0 md:pl-8 flex flex-col justify-center space-y-4 font-medium">
              <p className="font-serif italic text-[#4A3428] font-medium text-[13.5px] sm:text-[14px]">
                ✦ Canais Oficiais de Contato:
              </p>
              
              <div className="space-y-3.5">
                <a 
                  href={EMAIL_LINK} 
                  className="flex items-center gap-3.5 text-[#5A1F2E] hover:text-[#B75E3C] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full border border-[#D8C6A8]/40 flex items-center justify-center bg-white/50 text-[#D6AF2A] group-hover:bg-[#D6AF2A]/10 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-[13px] sm:text-[13.5px] tracking-wide break-all font-light">sacerdotisasuma@gmail.com</span>
                </a>

                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3.5 text-[#5A1F2E] hover:text-[#B75E3C] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full border border-[#D8C6A8]/40 flex items-center justify-center bg-white/50 text-[#D6AF2A] group-hover:bg-[#D6AF2A]/10 shrink-0">
                    <WhatsappIcon className="w-4 h-4 text-[#D6AF2A] fill-[#D6AF2A]" />
                  </div>
                  <span className="font-sans text-[13px] sm:text-[13.5px] tracking-wide font-light">+55 35 99899-7754</span>
                </a>

                <a 
                  href="https://www.instagram.com/a.sumasacerdotisa/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3.5 text-[#5A1F2E] hover:text-[#B75E3C] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full border border-[#D8C6A8]/40 flex items-center justify-center bg-white/50 text-[#D6AF2A] group-hover:bg-[#D6AF2A]/10 shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-[13px] sm:text-[13.5px] tracking-wide font-light">@a.sumasacerdotisa</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* 5. FAIXA DE VALIDAÇÃO / CONCENTE (Ribbon alignment with Portuguese content, no English allowed!) */}
      <div 
        className="relative max-w-[840px] mx-auto mb-0 p-5 border border-[#D8C6A8]/40 bg-[#FAF5EC] rounded-[18px] flex items-center justify-center text-center shadow-xs select-none"
        id="legal-validation-ribbon"
      >
        <p className="font-sans text-[12.8px] sm:text-[13.5px] text-[#5A1F2E]/95 font-medium leading-relaxed max-w-2xl italic">
          {isTerms 
            ? '✦ Ao prosseguir com o pagamento via Pix ou validação da data, você confirma livre escolha em aderir integralmente às diretrizes contidas nestes Termos de Uso.'
            : '✦ Ao navegar por este site institucional oracular, você expressa seu livre consentimento e adesão às normas descritas nesta Política de Privacidade.'
          }
        </p>
      </div>
    </motion.div>
  );
}
