// js/data.js — Mock data para demonstração
// Em produção, substituir por chamadas reais à Evolution API

let INSTANCES = [
  { id: 'inst1', name: 'Empresa Alpha', phone: '+55 11 99123-4500', status: 'connected' },
  { id: 'inst2', name: 'Suporte Beta',  phone: '+55 21 98765-3300', status: 'connected' },
  { id: 'inst3', name: 'Vendas Gama',   phone: '+55 31 97654-2200', status: 'disconnected' },
];

let CONTACTS = [
  {
    id: 'c1', name: 'João Silva', phone: '+55 11 99999-0001',
    avatar: 'J', instance: 'inst1', instanceName: 'Empresa Alpha',
    unread: 2, lastMsg: 'Olá, preciso de suporte!', time: '10:42',
    tags: ['Novo Lead', 'Vendas'],
    messages: [
      { id: 'm1', text: 'Olá! Gostaria de saber mais sobre os planos.', type: 'in',  time: '10:35' },
      { id: 'm2', text: 'Claro! Temos 3 opções disponíveis. Qual é sua necessidade?', type: 'out', time: '10:37' },
      { id: 'm3', text: 'Preciso de algo para uma equipe de 10 pessoas.', type: 'in', time: '10:40' },
      { id: 'm4', text: 'Olá, preciso de suporte!', type: 'in', time: '10:42' },
    ]
  },
  {
    id: 'c2', name: 'Maria Oliveira', phone: '+55 11 98888-0002',
    avatar: 'M', instance: 'inst1', instanceName: 'Empresa Alpha',
    unread: 0, lastMsg: 'Obrigada pelo atendimento! 😊', time: '09:15',
    tags: ['Cliente'],
    messages: [
      { id: 'm1', text: 'Bom dia! Meu pedido chegou com defeito.', type: 'in', time: '08:50' },
      { id: 'm2', text: 'Bom dia, Maria! Sinto muito. Pode me enviar uma foto?', type: 'out', time: '08:52' },
      { id: 'm3', text: 'Claro, enviando agora!', type: 'in', time: '08:54' },
      { id: 'm4', text: 'Perfeito, vamos enviar um novo item sem custo adicional.', type: 'out', time: '09:00' },
      { id: 'm5', text: 'Obrigada pelo atendimento! 😊', type: 'in', time: '09:15' },
    ]
  },
  {
    id: 'c3', name: 'Carlos Pereira', phone: '+55 21 97777-0003',
    avatar: 'C', instance: 'inst2', instanceName: 'Suporte Beta',
    unread: 1, lastMsg: 'Qual o prazo de entrega?', time: 'Ontem',
    tags: ['Suporte'],
    messages: [
      { id: 'm1', text: 'Oi, fiz um pedido há 5 dias e não recebi.', type: 'in', time: 'Ontem 14:10' },
      { id: 'm2', text: 'Olá Carlos! Vou verificar agora.', type: 'out', time: 'Ontem 14:12' },
      { id: 'm3', text: 'Qual o prazo de entrega?', type: 'in', time: 'Ontem 14:14' },
    ]
  },
  {
    id: 'c4', name: 'Ana Souza', phone: '+55 31 96666-0004',
    avatar: 'A', instance: 'inst2', instanceName: 'Suporte Beta',
    unread: 0, lastMsg: 'Vou aguardar o retorno.', time: 'Ontem',
    tags: ['Leads'],
    messages: [
      { id: 'm1', text: 'Boa tarde! Queria saber sobre os preços.', type: 'in', time: 'Ontem 15:00' },
      { id: 'm2', text: 'Boa tarde, Ana! Nosso plano básico começa em R$49/mês.', type: 'out', time: 'Ontem 15:05' },
      { id: 'm3', text: 'Vou aguardar o retorno.', type: 'in', time: 'Ontem 15:08' },
    ]
  },
  {
    id: 'c5', name: 'Rafael Mendes', phone: '+55 11 95555-0005',
    avatar: 'R', instance: 'inst1', instanceName: 'Empresa Alpha',
    unread: 0, lastMsg: 'Perfeito, obrigado!', time: 'Seg',
    tags: ['Cliente', 'VIP'],
    messages: [
      { id: 'm1', text: 'Preciso de upgrade no meu plano.', type: 'in', time: 'Seg 11:00' },
      { id: 'm2', text: 'Com certeza! Vou preparar a proposta agora.', type: 'out', time: 'Seg 11:02' },
      { id: 'm3', text: 'Perfeito, obrigado!', type: 'in', time: 'Seg 11:03' },
    ]
  },
];

let EMOJIS = ['😀','😂','😍','🥰','😎','🤔','👍','👋','❤️','🔥','✅','⚡','🎉','💬','📱','💼','🚀','💡','🙏','😊','🤝','💰','📊','📈','⭐','🏆','✨','🌟'];
