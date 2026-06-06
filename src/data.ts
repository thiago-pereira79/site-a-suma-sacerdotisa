import { ServiceCategory, TestimonialItem, FaqItem } from './types';

export const SERVICES: ServiceCategory[] = [
  {
    id: 'avulsas',
    title: 'Perguntas Avulsas',
    description: 'Respostas objetivas e diretas para uma dúvida específica que precisa de clareza agora.',
    items: [
      { name: '1 Pergunta', price: 'R$ 20,00', description: 'Uma resposta clara e direta para seu questionamento.' },
      { name: '2 Perguntas', price: 'R$ 25,00', description: 'Ideal para duas questões conectadas ou temas pontuais.' },
      { name: '3 Perguntas', price: 'R$ 30,00', description: 'Permite uma análise um pouco mais detalhada.' },
      { name: '4 Perguntas', price: 'R$ 40,00', description: 'Cobre múltiplos pontos de dúvida do seu momento.' },
      { name: '5 Perguntas', price: 'R$ 50,00', description: 'Máximo recomendado para uma mesma tiragem.' }
    ],
    extraObs: 'Não realizo mais que 5 perguntas para um cliente em um mesmo jogo. Ideal para tirar "aquela pulguinha" de trás da orelha.'
  },
  {
    id: 'hora',
    title: 'Leitura por Hora',
    description: 'Para quem precisa de mais tempo, profundidade e liberdade durante a consulta.',
    items: [
      { name: '30 Minutos', price: 'R$ 49,90', duration: '30 min', description: 'Perguntas livres dentro do limite de 30 minutos de atendimento.' },
      { name: '1 Hora', price: 'R$ 92,90', duration: '60 min', description: 'Perguntas livres dentro do limite de 60 minutos de atendimento.' }
    ],
    extraObs: '1 hora é o tempo máximo que faço para um cliente em um jogo. Ideal para quem tem muitas dúvidas e não sabe por onde começar.'
  },
  {
    id: 'especiais',
    title: 'Tiragens Especiais',
    description: 'Tiragens completas e temáticas para momentos importantes e decisões profundas.',
    items: [
      { 
        name: 'Mesa Real', 
        price: 'R$ 148,00', 
        description: 'Tiragem adaptada do baralho cigano com 36 cartas. Analisa espiritualidade, afetivo, mental, financeiro, saúde e trabalho (passado, presente, futuro).',
        obs: 'Agendamento antecipado necessário. Prazo maior.'
      },
      { 
        name: 'Daqui 6 meses + 1 pergunta', 
        price: 'R$ 52,90', 
        description: 'Previsões para trabalho, estudo, financeiro, família e amor. Ideal para novos ciclos ou inícios de ano.' 
      },
      { 
        name: 'Combo do Amor', 
        price: 'R$ 92,00', 
        description: 'Para solteiros, enrolados ou comprometidos. Tudo sobre a vida amorosa e propensões do momento. A mais completa para o coração.' 
      },
      { 
        name: 'Mandala Astrológica + 1 pergunta', 
        price: 'R$ 100,00', 
        description: 'Entenda todos os campos da vida através das 12 casas do zodíaco. Abrangente e conselheira.',
        obs: 'Agendamento antecipado necessário. Prazo maior.'
      }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Guilherme',
    location: 'Irlanda',
    text: '"Eu não costumo escrever avaliação, mas precisei vir aqui. A leitura tocou em questões muito específicas da minha infância e padrões que eu repito até hoje. Não foi algo genérico. Foi quase como uma conversa terapêutica, só que com cartas. Saí impactado."',
    rating: 5
  },
  {
    id: '2',
    name: 'Aline Rosa',
    location: 'Fortaleza/CE',
    text: '"Que leitura sensível.. de verdade. Não senti julgamento em nenhum momento, só acolhimento e clareza. Parecia que alguém estava traduzindo o que eu não conseguia organizar dentro de mim."',
    rating: 5
  },
  {
    id: '3',
    name: 'Georgiana Matos',
    location: 'São Paulo/SP',
    text: '"Eu já faço tiragem com outras pessoas há anos, e posso dizer que tem diferença. Aqui senti firmeza na interpretação, sem forçar significado. As cartas foram explicadas com profundidade e sem pressa. Recomendo de olhos fechados."',
    rating: 5
  },
  {
    id: '4',
    name: 'Deivison',
    location: 'Ribeirão Preto/SP',
    text: '"Eu estava numa dúvida enorme sobre um relacionamento e a leitura praticamente colocou tudo em perspectiva. Não foi o que eu queria ouvir, mas foi exatamente o que eu precisava. Isso pra mim já diz muito. Com certeza farei outras vezes."',
    rating: 5
  },
  {
    id: '5',
    name: 'Sandra Helena',
    location: 'Campinas/SP',
    text: '"Gostei bastante da experiência. A leitura foi coerente e fez sentido com o momento que tô vivendo. Não foi nada místico, o que eu achei positivo."',
    rating: 5
  },
  {
    id: '6',
    name: 'Jéssica Silveira',
    location: 'Belo Horizonte/MG',
    text: '"eu fui totalmente sem acreditar. fiz mais por curiosidade mesmo. só que ele descreveu uma situação que está acontecendo no meu trabalho com uma precisão absurda, inclusive envolvendo duas pessoas específicas. concerteza irei fazer mais"',
    rating: 5
  },
  {
    id: '7',
    name: 'Marília',
    location: 'Anápolis/GO',
    text: '"Achei bom, principalmente na parte emocional. Algumas coisas ainda não aconteceram, então não posso confirmar tudo, mas fez bastante sentido no geral. Valeu a experiência e recomendo."',
    rating: 5
  },
  {
    id: '8',
    name: 'Thamires',
    location: 'São Sebastião do Paraíso/MG',
    text: '"Já fiz vários jogos antes e várias coisas que foram ditas acabaram acontecendo e se mostrando verdadeiras. Principalmente sobre um ciclo que realmente se encerrou. Fiquei impressionada."',
    rating: 5
  },
  {
    id: '9',
    name: 'Bruna',
    location: 'Passos/MG',
    text: '"Gostei da abordagem. Não foi nada sensacionalista, nem prometendo mil coisas. Foi pé no chão, mas ao mesmo tempo intuitivo. Me passou confiança."',
    rating: 5
  },
  {
    id: '10',
    name: 'Nádia Erão',
    location: 'Portugal',
    text: '"Não foi a primeira vez, eu sempre volto pra jogar de novo, gosto das leituras e também fico mais aliviada."',
    rating: 5
  },
  {
    id: '11',
    name: 'Víctor Paulino',
    location: 'Franca/SP',
    text: '"Procurei algumas vezes hehehe eu estava esperando a resposta de um processo seletivo e foi muito tranquilizante. Já tiro cartas tem uns 3 anos. E sempre acerta!"',
    rating: 5
  },
  {
    id: '12',
    name: 'Thiago Pereira',
    location: 'Brodowski/SP',
    text: '"A tiragem foi maravilhosa. Foi a primeira vez que tirei cartas e eu simplesmente amei. A consulta foi acolhedora, verdadeira e muito especial. Não tenho nada a reclamar."',
    rating: 5
  },
  {
    id: '13',
    name: 'Moara Ribas',
    location: 'Ribeirão Preto/SP',
    text: '"Recebi a leitura em um momento em que eu precisava organizar melhor meus pensamentos. Algumas mensagens tocaram exatamente em pontos que eu vinha sentindo, mas ainda não conseguia colocar em palavras. Foi uma experiência leve, cuidadosa e cheia de sentido."',
    rating: 5
  },
  {
    id: '14',
    name: 'Juliana',
    location: 'Rio de Janeiro/RJ',
    text: '"Me senti muito respeitada durante toda a leitura. As mensagens vieram com clareza, cuidado e sensibilidade, trazendo reflexões importantes para o momento que eu estava vivendo."',
    rating: 5
  },
  {
    id: '15',
    name: 'Allyson',
    location: 'Uberlândia/MG',
    text: '"Fiz a leitura sem criar muita expectativa, mas algumas coisas bateram de um jeito muito específico. Gostei porque não teve exagero nem promessa, foi uma orientação clara, direta e ao mesmo tempo bem cuidadosa. Saí pensando bastante no que foi dito."',
    rating: 5
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como funciona uma consulta online?',
    answer: 'A consulta é realizada de forma personalizada. Você envia sua pergunta ou tema via WhatsApp, eu realizo a leitura e envio fotos das cartas junto com um áudio completo explicando cada posição. Assim, você pode revisitar a leitura sempre que precisar.'
  },
  {
    question: 'O Tarot pode prever o futuro?',
    answer: 'O Tarot não é uma ferramenta de previsão absoluta, mas sim de reflexão e autoconhecimento. Ele revela tendências, padrões e caminhos possíveis, sempre respeitando o seu livre arbítrio e as escolhas que você faz no presente.'
  },
  {
    question: 'Como escolher o tipo de leitura ideal?',
    answer: 'Depende do seu momento. Para dúvidas pontuais, as Perguntas Avulsas são ideais. Se você precisa de mais tempo e profundidade, as Leituras por Hora oferecem liberdade. Já as Tiragens Especiais são indicadas para análises mais completas e específicas.'
  },
  {
    question: 'Posso fazer perguntas sobre qualquer tema?',
    answer: 'Depende. O Tarot pode abordar temas como amor, carreira, família, decisões importantes, autoconhecimento e espiritualidade, caminhos e tendências. Porém, leituras sobre sexo de bebê, gravidez, traição ou questões médicas ou doenças, de qualquer cunho que for, não serão respondidas. Cada leitura é conduzida com respeito, sensibilidade e sigilo absoluto.'
  },
  {
    question: 'Quanto tempo leva para receber a leitura?',
    answer: 'O prazo varia conforme o tipo de consulta. Nas consultas que não necessitam de um tempo maior, as respostas são entregues no horário e dia agendados. Já nas que necessitam de tempo de análise maior, como Mandala Astrológica e Mesa Real, você receberá sua leitura dentro do prazo combinado após o pagamento. Lembrando que a data e hora de envio serão previamente acordadas durante o agendamento.'
  },
  {
    question: 'Como faço o pagamento?',
    answer: 'O pagamento é feito de forma antecipada, via Pix. Após o pagamento, basta enviar o comprovante via WhatsApp para dar início ao agendamento.'
  },
  {
    question: 'Posso reagendar ou cancelar?',
    answer: 'Sim. Reagendamentos podem ser feitos com antecedência, até 12 horas antes da hora agendada, tendo limite de 2 reagendamentos por leitura. Cancelamentos também são possíveis, desde que solicitados com 24 horas de antecedência. Dentro desse prazo, 50% do valor é reembolsado. Após esse prazo ou envio da tiragem, não é possível cancelar e não haverá reembolso.'
  },
  {
    question: 'As leituras são confidenciais?',
    answer: 'Totalmente. Todas as consultas são sigilosas e tratadas com respeito e ética. Não há julgamento de valor ou questionamentos indevidos. Nada do que for compartilhado será divulgado.'
  },
  {
    question: 'O Tarot substitui terapia ou orientação médica?',
    answer: 'Não. O Tarot é uma ferramenta espiritual e de autoconhecimento, e não substitui acompanhamento psicológico, médico ou de quaisquer outros profissionais da saúde.'
  },
  {
    question: 'Nunca fiz uma consulta de Tarot. Por onde começo?',
    answer: 'Você pode começar com uma pergunta simples ou escolher uma leitura geral. Não precisa ter experiência, eu vou te guiar em todo o processo para que você se sinta confortável e seguro.'
  },
  {
    question: 'Posso consultar sobre outra pessoa?',
    answer: 'Depende. É possível em questões envolvendo relacionamentos. No entanto, a leitura será sempre voltada para a sua conexão com essa pessoa e como a situação impacta você, respeitando limites éticos e energéticos. Leituras feitas de forma especulativa apenas para saber caminhos ou direcionamentos alheios, o que outra pessoa está fazendo ou pensando sem conexão com você, não são realizadas.'
  },
  {
    question: 'Você faz acompanhamento ou indica trabalhos espirituais, banhos ou caminhos?',
    answer: 'Não. Trabalho exclusivamente com o tarot terapêutico como ferramenta de melhoria, autoconhecimento e direcionamento. O trabalho oracular se limita apenas à leitura de cartas.'
  },
  {
    question: 'O Tarot pode dar respostas negativas?',
    answer: 'O Tarot não trabalha simplesmente com "positivo" ou "negativo", mas com verdades e orientações. Algumas mensagens podem ser mais desafiadoras, porém sempre vêm com o propósito de trazer clareza, crescimento e tomada de consciência.'
  },
  {
    question: 'Existe algum tipo de pergunta que não deve ser feita?',
    answer: 'Sim. Não respondo perguntas relacionadas à saúde, morte, diagnósticos clínicos, gravidez ou sexualidade do bebê, questões jurídicas ou investigações de infidelidade. O Tarot é uma ferramenta de orientação, não de diagnóstico ou sentença.'
  },
  {
    question: 'O Tarot erra?',
    answer: 'O Tarot interpreta as energias e tendências do momento. Como as escolhas humanas podem mudar caminhos recorrentemente, a leitura pode não se manifestar exatamente como esperado se o consulente alterar suas atitudes. Por isso, ele é melhor utilizado como bússola de orientação, e não como certeza fatalista.'
  },
  {
    question: 'As cartas podem mudar o meu destino?',
    answer: 'Não. As cartas não mudam o destino, elas mostram caminhos. Quem tem o poder máximo de escolha e decisão é você. O Tarot serve como guia esclarecedor.'
  },
  {
    question: 'Preciso informar meus dados, como nome e data de nascimento?',
    answer: 'Geralmente, apenas o seu primeiro nome já é suficiente para a conexão energética. No entanto, para as leituras especiais da Mandala Astrológica e da Mesa Real, há necessidade do nome completo e da data de nascimento.'
  },
  {
    question: 'Preciso estar em um ambiente específico para a consulta?',
    answer: 'Não é obrigatório, visto que o envio é feito por áudio e foto, mas recomendamos que no momento de ouvir os áudios e contemplar as fotos você esteja em um ambiente tranquilo para se conectar com a experiência e absorver melhor as mensagens.'
  },
  {
    question: 'Você utiliza algum tipo de ritual ou preparação antes da leitura?',
    answer: 'Não. Não utilizo rituais ritualísticos específicos ou ritos religiosos. Meu foco está na leitura técnica dos símbolos tradicionais das cartas, aliada à intuição lapidada e à experiência de mais de uma década.'
  },
  {
    question: 'E se eu estiver emocionalmente abalado(a)?',
    answer: 'O Tarot pode trazer imenso acolhimento e clareza. Ainda assim, se você estiver passando por uma fragilidade emocional severa, é essencial e prioritário buscar a ajuda de profissionais médicos, terapeutas ou psicólogos.'
  },
  {
    question: 'O Tarot pode ajudar em decisões importantes?',
    answer: 'Sim. Ele é uma excelente ferramenta de reflexão e discernimento, ajudando você a enxergar diferentes frentes de ação e suas ramificações antes de decidir.'
  },
  {
    question: 'Com que frequência posso fazer consultas?',
    answer: 'Não existe uma regra absoluta, mas o ideal é dar um intervalo de tempo razoável (mínimo de um mês) para que as energias e acontecimentos se desenvolvam. Consultas excessivas e frequentes sobre o mesmo tema geram apenas ansiedade e confusão mental.'
  },
  {
    question: 'Você usa apenas Tarot ou outros oráculos também?',
    answer: 'Utilizo estritamente o Tarot como ferramenta oracular.'
  },
  {
    question: 'Como você interpreta as cartas? Intuição ou método?',
    answer: 'Utilizo uma combinação de ambos. Fundamento as leituras no método tradicional dos símbolos e arcanos, aliado à sensibilidade intuitiva refinada ao longo de mais de dez anos de prática.'
  }
];
