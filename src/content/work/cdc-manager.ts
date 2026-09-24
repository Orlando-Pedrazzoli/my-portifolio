// src/content/work/cdc-manager.ts
import type { WorkCase } from '../types';

export const cdcManager: WorkCase = {
  slug: 'cdc-manager',
  title: 'CDC Manager',
  headline: {
    pt: 'Substituir uma operação clínica fragmentada por uma única plataforma integrada.',
    en: 'Replacing a fragmented clinic operation with one integrated platform.',
  },
  category: {
    pt: 'Plataforma de operações dentárias',
    en: 'Dental operations platform',
  },
  tags: {
    pt: ['Produto', 'Full stack', 'SaaS'],
    en: ['Product', 'Full stack', 'SaaS'],
  },
  tagline: {
    pt: 'Sistema de gestão clínica para clínicas dentárias multi-unidade, construído para substituir integralmente um software legado.',
    en: 'Clinic management system for multi-site dental clinics, built to fully replace a legacy system.',
  },
  client: {
    pt: 'Centro Dentário Colombo (Lisboa e Amadora)',
    en: 'Centro Dentário Colombo (Lisbon and Amadora)',
  },
  year: '2025 – 2026',
  status: {
    pt: 'A entrar em produção na clínica; a ser preparado como produto para outras clínicas.',
    en: 'Going live at the clinic; being prepared as a product for other clinics.',
  },
  repoUrl: 'https://github.com/Orlando-Pedrazzoli/cdc-manager',
  selected: true,
  cover: {
    src: '/work/cdc-manager/dashboard-admin.webp',
    caption: {
      pt: 'Dashboard de administração — "Hoje", "A seguir" e "Requer atenção".',
      en: 'Admin dashboard — "Today", "Up next" and "Needs attention".',
    },
    alt: {
      pt: 'Dashboard de administração do CDC Manager',
      en: 'CDC Manager admin dashboard',
    },
  },
  metrics: [
    {
      value: '34 / 37',
      label: {
        pt: 'requisitos de stakeholders entregues',
        en: 'stakeholder requirements delivered',
      },
    },
    {
      value: '749',
      label: {
        pt: 'atos migrados do sistema legado',
        en: 'records migrated from the legacy system',
      },
    },
    {
      value: '25+',
      label: {
        pt: 'modelos de dados, 3 áreas, 2 clínicas',
        en: 'data models, 3 areas, 2 clinics',
      },
    },
  ],
  context: {
    pt: [
      'O Centro Dentário Colombo opera duas clínicas: uma no Centro Comercial Colombo com cinco gabinetes e médicos rotativos, outra na Buraca com um gabinete e um único médico. A operação corria num software de gestão legado (Dentoral) que a equipa queria substituir por completo.',
      'Comecei por construir o website institucional da clínica. Quando a direção viu o que era possível, o pedido cresceu: um sistema que cobrisse pacientes, agenda, registo clínico, cobranças, faturação, comissões de médicos, stock e portal do paciente — com dados clínicos globais e operação segregada por clínica.',
    ],
    en: [
      'Centro Dentário Colombo runs two clinics: one at the Colombo shopping centre with five surgeries and rotating doctors, another in Buraca with one surgery and a single doctor. Operations ran on a legacy management system (Dentoral) the team wanted to replace entirely.',
      "I started by building the clinic's public website. Once the owners saw what was possible, the brief grew: a system covering patients, scheduling, clinical records, billing, invoicing, doctor commissions, stock and a patient portal — with global clinical data and per-clinic operations.",
    ],
  },
  problem: {
    pt: [
      'A informação vivia em vários sítios: agenda num sistema, comissões em folhas de cálculo, stock de cabeça, confirmações de consulta por telefone. Erros de dupla marcação e de cobrança eram frequentes e difíceis de reconstruir depois.',
      'Os médicos precisavam de ver a sua agenda e produção no telemóvel — no carro, entre clínicas — e os pacientes precisavam de confirmar presença e aceder a documentos sem ligar para a receção.',
      'Depois de uma apresentação aos sócios, recebi 37 requisitos de melhoria (E1–E19, P1–P16, X1–X2). Tinham de ser faseados sem parar a operação.',
    ],
    en: [
      "Information lived in several places: the schedule in one system, commissions in spreadsheets, stock in people's heads, appointment confirmations by phone. Double-booking and double-charging errors were common and hard to reconstruct afterwards.",
      'Doctors needed to see their schedule and production on their phone — in the car, between clinics — and patients needed to confirm attendance and access documents without calling reception.',
      'After a presentation to the partners I received 37 improvement requirements (E1–E19, P1–P16, X1–X2). They had to be phased without stopping the operation.',
    ],
  },
  role: {
    pt: 'Único developer e responsável pelo produto: levantamento de requisitos com os sócios, modelação do domínio, arquitetura, implementação, migração de dados do sistema legado, documentação e apresentações de aprovação.',
    en: 'Sole developer and product owner: requirements with the partners, domain modelling, architecture, implementation, data migration from the legacy system, documentation and approval presentations.',
  },
  constraints: {
    pt: [
      'Dados legados: 749 atos e 22 categorias importados de um sistema que continuava a ser usado durante a migração.',
      'Exatidão financeira: comissões de médicos e faturação certificada — um cêntimo errado é um problema contabilístico.',
      'Marcações concorrentes em cinco gabinetes com médicos rotativos.',
      'Três perfis de utilizador com permissões distintas e dados clínicos sob RGPD.',
      'Utilizadores reais em produção: a operação não podia parar entre fases.',
    ],
    en: [
      'Legacy data: 749 acts and 22 categories imported from a system still in use during the migration.',
      'Financial accuracy: doctor commissions and certified invoicing — one wrong cent is an accounting problem.',
      'Concurrent bookings across five surgeries with rotating doctors.',
      'Three user roles with distinct permissions and clinical data under GDPR.',
      'Real users in production: the operation could not stop between phases.',
    ],
  },
  solution: {
    pt: [
      'Uma aplicação Next.js com três áreas — administração/receção, médico e portal do paciente — sobre uma única base de dados MongoDB com mais de 25 modelos. Tudo o que é operacional (agenda, cobrança, faturação, recalls, stock) é segregado por clínica; pacientes e fichas clínicas são globais.',
      'Os 37 requisitos foram organizados num plano de sete fases. A primeira foi o motor financeiro: desconto e custo direto por linha de tratamento, cadeia de resolução de comissões (override do médico → base do médico → taxa do ato → 40% por defeito), cancelamento e estorno. As restantes cobriram agenda, painel do médico, portal do paciente, RX, stock e dashboards. 34 dos 37 pedidos foram entregues; os três restantes dependem de terceiros (leitura do Cartão de Cidadão, PEM/SPMS) ou ficaram para depois da aprovação.',
    ],
    en: [
      'A Next.js application with three areas — admin/reception, doctor and patient portal — on a single MongoDB database with 25+ models. Everything operational (schedule, billing, invoicing, recalls, stock) is segregated per clinic; patients and clinical records are global.',
      'The 37 requirements were organised into a seven-phase plan. Phase one was the financial engine: discount and direct cost per treatment line, commission resolution chain (doctor override → doctor base → act rate → 40% default), cancellation and reversal. The remaining phases covered scheduling, the doctor panel, patient portal, X-ray, stock and dashboards. 34 of the 37 requests were delivered; the remaining three depend on third parties (Citizen Card reading, PEM/SPMS) or were deferred until after approval.',
    ],
  },
  features: {
    pt: [
      'Agenda multi-clínica com grelha de 15 minutos, horários por clínica e por profissional, correção de DST e prevenção atómica de dupla marcação por transação MongoDB.',
      'Circuito de três emails por marcação (criação, lembrete por cron, confirmação pública) com página de confirmação sem login.',
      'Fluxo de consulta orientado por máquina de estados: pending → confirmed → checked-in → in-progress → completed.',
      'Odontograma SVG de 32 dentes com cinco faces, versionado e imutável; planos de tratamento com execução faseada; notas clínicas append-only.',
      'Catálogo de 749 atos em 22 categorias importado do sistema legado por script idempotente com dry-run.',
      'Fila de cobrança por clínica com checkout ao balcão, guarda anti-dupla-cobrança e documentos preparados para emissão certificada via Moloni.',
      'Módulo de RX com pedido, máquina de estados, assinatura digital do consentimento e captura de imagem via Cloudinary (assets privados, URLs assinados).',
      'Stock por localização: entradas centrais, requisições para gabinetes, contagens quinzenais, ledger imutável de movimentos, transferências entre clínicas como par atómico.',
      'Recalls gerados automaticamente na conclusão de atos, com um único ciclo aberto por paciente e tipo de ato.',
      'Dashboards de administração (KPIs, ocupação, "Requer atenção") e de médico (produção própria, comissões, consultas por fechar).',
      'Portal do paciente: marcações, confirmação de presença, ficheiro .ics, documentos, dados pessoais, consentimentos RGPD.',
      'RBAC estrito: só administradores veem produção e comissões dos médicos; receção com âmbito por clínica; médicos só veem os seus dados. Trilho de auditoria em todas as escritas.',
      'Branding dinâmico (modelo Organization: nome, logo, cor, dados legais, remetente) para o sistema poder ser instalado noutra clínica sem tocar no código.',
    ],
    en: [
      'Multi-clinic schedule with a 15-minute grid, per-clinic and per-professional hours, DST handling and atomic double-booking prevention via MongoDB transactions.',
      'Three-email circuit per appointment (creation, cron reminder, public confirmation) with a login-free confirmation page.',
      'Consultation flow driven by a state machine: pending → confirmed → checked-in → in-progress → completed.',
      '32-tooth SVG odontogram with five faces, versioned and immutable; treatment plans with phased execution; append-only clinical notes.',
      'Catalog of 749 acts in 22 categories imported from the legacy system with an idempotent, dry-run script.',
      'Per-clinic billing queue with front-desk checkout, double-charge guard and documents ready for certified issuance via Moloni.',
      'X-ray module with request, state machine, digital consent signature and image capture via Cloudinary (private assets, signed URLs).',
      'Stock by location: central intake, requisitions to surgeries, fortnightly counts, immutable movement ledger, inter-clinic transfers as an atomic pair.',
      'Recalls generated automatically when acts are completed, one open cycle per patient and act type.',
      'Admin dashboards (KPIs, occupancy, "Needs attention") and doctor dashboards (own production, commissions, consultations to close).',
      'Patient portal: appointments, attendance confirmation, .ics file, documents, personal data, GDPR consents.',
      "Strict RBAC: only admins see doctors' production and commissions; reception scoped per clinic; doctors only see their own data. Audit trail on every write.",
      'Dynamic branding (Organization model: name, logo, colour, legal data, sender) so the system can be installed at another clinic without touching code.',
    ],
  },
  decisions: [
    {
      title: { pt: 'Imutabilidade financeira', en: 'Financial immutability' },
      body: {
        pt: 'Valores em cêntimos inteiros com arredondamento bancário. Cada ato congela preço e taxa de comissão no momento do registo. Relatórios mensais são calculados a partir desses snapshots, nunca da tabela atual.',
        en: "Integer cents with banker's rounding. Every act freezes price and commission rate when recorded. Monthly reports are computed from those snapshots, never from the current table.",
      },
    },
    {
      title: { pt: 'Never delete', en: 'Never delete' },
      body: {
        pt: 'Nada é apagado. Registos anulam-se com autor e motivo, stock corrige-se com movimentos de acerto, o odontograma versiona-se, faturas anulam-se por nota de crédito. É o que permite reconstruir qualquer situação numa clínica.',
        en: 'Nothing is deleted. Records are voided with author and reason, stock is corrected with adjustment movements, the odontogram is versioned, invoices are voided by credit note. It is what makes any situation in a clinic reconstructible.',
      },
    },
    {
      title: {
        pt: 'Regra de ouro dos horários',
        en: 'Golden rule of schedules',
      },
      body: {
        pt: 'Alterar horários de clínicas ou profissionais nunca cancela nem move marcações existentes. O sistema identifica os conflitos e a remarcação é sempre uma decisão humana.',
        en: 'Changing clinic or professional hours never cancels or moves existing appointments. The system flags conflicts and rescheduling is always a human decision.',
      },
    },
    {
      title: {
        pt: 'Multi-tenancy por base de dados',
        en: 'Multi-tenancy per database',
      },
      body: {
        pt: 'Para vender a outras clínicas, o caminho escolhido foi uma base de dados por cliente (deploy e MONGODB_URI separados) em vez de um organizationId em cada coleção. Simples, isolado, e suficiente até haver vários clientes a pagar.',
        en: 'To sell to other clinics, the chosen path was one database per client (separate deployment and MONGODB_URI) instead of an organizationId in every collection. Simple, isolated, and enough until several paying clients exist.',
      },
    },
    {
      title: {
        pt: 'Mobile como prioridade de produto',
        en: 'Mobile as a product priority',
      },
      body: {
        pt: 'Os médicos usam o painel pelo telemóvel. A shell da aplicação foi reconstruída com drawer, linhas de duas alturas e grelhas que colapsam, e as tabelas cruas passaram a ter scroll horizontal controlado. Nada foi "adaptado" no fim; foi desenhado para isso.',
        en: 'Doctors use the panel on their phones. The app shell was rebuilt with a drawer, two-height rows and collapsing grids, and raw tables got controlled horizontal scroll. Nothing was "adapted" at the end; it was designed for it.',
      },
    },
  ],
  architecture: {
    pt: [
      'Next.js 16 App Router com Server Actions como camada principal (uma por domínio: agenda, cobrança, faturação, recalls, stock, configurações). Rotas de API apenas para autenticação, cron de lembretes e integrações.',
      'MongoDB Atlas com Mongoose; transações para invariantes (dupla marcação, dupla cobrança, saldo de stock). Constantes de domínio partilhadas em src/lib/domain.ts sem dependências, para que componentes de cliente nunca arrastem código de servidor.',
      'NextAuth v5 (JWT) com RBAC; Zod para validação e máquinas de transição por domínio; Resend para email (região UE); Cloudinary para imagens privadas; Vercel.',
    ],
    en: [
      'Next.js 16 App Router with Server Actions as the main layer (one per domain: schedule, billing, invoicing, recalls, stock, settings). API routes only for auth, the reminder cron and integrations.',
      'MongoDB Atlas with Mongoose; transactions for invariants (double booking, double charge, stock balance). Domain constants shared in src/lib/domain.ts with no dependencies, so client components never pull in server code.',
      'NextAuth v5 (JWT) with RBAC; Zod for validation and per-domain transition machines; Resend for email (EU region); Cloudinary for private images; Vercel.',
    ],
  },
  result: {
    pt: [
      '34 dos 37 requisitos dos stakeholders entregues em oito entregas faseadas, com relatório de desenvolvimento e apresentação de aprovação aos sócios.',
      'Sistema pronto para operar as duas clínicas e preparado, com branding dinâmico e isolamento por base de dados, para ser instalado noutras clínicas dentárias.',
      'O que este projeto demonstra: capacidade de levar um produto do levantamento com stakeholders até um sistema em produção, com decisões de arquitetura pensadas para dados financeiros e clínicos.',
    ],
    en: [
      '34 of 37 stakeholder requirements delivered across eight phased deliveries, with a development report and an approval presentation to the partners.',
      'System ready to run both clinics and prepared, with dynamic branding and per-database isolation, to be installed at other dental clinics.',
      'What this project shows: the ability to take a product from stakeholder discovery to a system in production, with architecture decisions designed for financial and clinical data.',
    ],
  },
  learned: {
    pt: [
      'Numa segunda iteração começaria pelo modelo de permissões e pelo trilho de auditoria antes do motor financeiro: foram os pontos que mais forçaram refactoring quando chegaram os requisitos dos sócios.',
      'A decisão de uma base de dados por clínica foi certa para vender a segunda instalação depressa, mas a partir de várias clínicas pagantes um organizationId por coleção passa a compensar — o código já está preparado para essa migração.',
    ],
    en: [
      "In a second iteration I would start with the permissions model and the audit trail before the financial engine: those were the areas that forced the most refactoring once the partners' requirements arrived.",
      'One database per clinic was the right call to sell a second installation fast, but past a handful of paying clinics an organizationId per collection starts paying off — the code is already prepared for that migration.',
    ],
  },
  stack: [
    'Next.js 16',
    'TypeScript',
    'MongoDB Atlas',
    'Mongoose',
    'NextAuth v5',
    'Zod',
    'Resend',
    'Cloudinary',
    'Tailwind CSS v4',
    'Vercel',
  ],
  figures: [
    {
      src: '/work/cdc-manager/agenda.webp',
      caption: {
        pt: 'Agenda de administração — vista de dia com colunas por gabinete e painel de escalonamento.',
        en: 'Admin schedule — day view with columns per surgery and escalation panel.',
      },
      alt: { pt: 'Agenda do CDC Manager', en: 'CDC Manager schedule' },
    },
    {
      src: '/work/cdc-manager/medico-mobile.webp',
      caption: {
        pt: 'Painel do médico no telemóvel — agenda do dia, produção e consultas por fechar.',
        en: "Doctor panel on mobile — today's schedule, production and consultations to close.",
      },
      alt: { pt: 'Painel do médico em mobile', en: 'Doctor panel on mobile' },
    },
    {
      src: '/work/cdc-manager/consulta.webp',
      caption: {
        pt: 'Registo clínico — odontograma, atos com snapshot de preço e comissão, notas.',
        en: 'Clinical record — odontogram, acts with price and commission snapshot, notes.',
      },
      alt: { pt: 'Registo clínico', en: 'Clinical record' },
    },
    {
      src: '/work/cdc-manager/portal-paciente.webp',
      caption: {
        pt: 'Portal do paciente — marcações com confirmação de presença e documentos.',
        en: 'Patient portal — appointments with attendance confirmation and documents.',
      },
      alt: { pt: 'Portal do paciente', en: 'Patient portal' },
    },
  ],
};
