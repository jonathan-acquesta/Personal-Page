const professionalExperiences = {
    data() {
        return {

        }
    },
    methods: {
        mountProfessionalExperiences(histories) {

            histories.push({
                date: new Date("2007-11-05"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "POLITEC S/A",
                    "en-US": "POLITEC S/A",
                },
                subTitle: {
                    "pt-BR": "Minha primeira oportunidade",
                    "en-US": "My first opportunity",
                },
                description: {
                    "pt-BR": "Foi em 2007, quando eu recebi a minha primeira oportunidade em minha carreira, naquela ocasião eu tinha 19 anos e estava ansioso para começar a trabalhar no setor de TI. A Politec S/A me contratou como estagiário e me ofereceu a chance de obter experiência em um ambiente de trabalho.",
                    "en-US": "It was in 2007 when I receive my first opportunity in my career, in that occasion I was 19 years old and I was looking forward to start to work in IT industry. Politec S/A hired me as an intern and gave me the chance of get experience in a work environment.",
                },
                links: [{
                    description: { "pt-BR": "Politec", "en-US": "Politec" },
                    url: "http://www.politecincorporadora.com.br/empresa/",
                    type: "link"
                }],
                image: require('@/assets/professionalExperiences/politec.jpg'),
                tags: [this.$store.state.tags.intern, this.$store.state.tags.opportunity],
                showDetail: false
            });

            histories.push({
                date: new Date("2008-02-05"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "POLITEC S/A",
                    "en-US": "POLITEC S/A",
                },
                subTitle: {
                    "pt-BR": "Seis meses de carreira",
                    "en-US": "Six months of career",
                },
                description: {
                    "pt-BR": "Eu estava completando seis meses de carreira e acredito que tive sorte, porque, logo no primeiro emprego, fui alocado em um importante projeto da Gol Linhas Aéreas, onde me foi permitido resolver problemas de produção relatados pelos clientes. Neste projeto, pude aprimorar minhas habilidades com Asp, Javascript, Visual Basic 6 e SQL.",
                    "en-US": "I had been completing six months of career, and I believe that I was lucky, because right in the first job, I was allocated in an important project of Gol Linhas Aereas, where I was allowed to solve production issues that were reported by clients. In this project, I could improve my skills with Asp, Javascript, Visual Basic 6 and SQL.",
                },
                links: [{
                    description: { "pt-BR": "Politec", "en-US": "Politec" },
                    url: "http://www.politecincorporadora.com.br/empresa/",
                    type: "link"
                }],
                image: require('@/assets/professionalExperiences/politec_gol.jpg'),
                tags: [this.$store.state.tags.intern, this.$store.state.tags.sql, this.$store.state.tags.visualBasic6, this.$store.state.tags.asp, this.$store.state.tags.vbScript, this.$store.state.tags.javascript, this.$store.state.tags.css, this.$store.state.tags.html],
                mainTags: [this.$store.state.tags.intern, this.$store.state.tags.sql, this.$store.state.tags.visualBasic6, this.$store.state.tags.asp],
                resumeTags: [this.$store.state.tags.intern, this.$store.state.tags.sql, this.$store.state.tags.visualBasic6, this.$store.state.tags.asp],
                showDetail: false
            });

            histories.push({
                date: new Date("2008-09-05"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "Prosegur Brasil",
                    "en-US": "Prosegur Brasil",
                },
                subTitle: {
                    "pt-BR": "Um novo caminho",
                    "en-US": "A new path",
                },
                description: {
                    "pt-BR": "Infelizmente, a Politec S/A perdeu seu principal projeto e consequentemente, quase todos os funcionários também perderam seus empregos. Por isso, tive que encontrar um novo caminho o mais rápido possível, e logo após um mês comecei a trabalhar na Prosegur Brasil, essa oportunidade foi interessante e me permitiu aprender novas tecnologias como VB.Net e Oracle. Eu era um estagiário e a minha principal responsabilidade era criar novos recursos em um sistema interno.",
                    "en-US": "Unfortunately, Politec S/A had lost his main project and consequently, almost all the employees lost their jobs too, so, I had to find a new way as soon as possible, and just after one month I started to work for Prosegur Brasil, this opportunity was interesting and allowed me to learn new technologies like VB.Net and Oracle. I was an intern and my main responsibility was to create new features in an internal system.",
                },
                image: require('@/assets/professionalExperiences/prosegurBrasil.jpg'),
                tags: [this.$store.state.tags.intern, this.$store.state.tags.oracle, this.$store.state.tags.visualBasic6, this.$store.state.tags.vbNet],
                showDetail: false
            });

            histories.push({
                date: new Date("2008-11-11"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "CNP Brasil",
                    "en-US": "CNP Brasil",
                },
                subTitle: {
                    "pt-BR": "Projeto Sadia",
                    "en-US": "Sadia Project",
                },
                description: {
                    "pt-BR": "Depois de alguns meses trabalhando como estagiário na Prosegur Brasil, meu chefe na época compartilhou com a equipe seu plano de melhorar seu departamento, mas sua idéia era me colocar em uma área de suporte, onde minha principal atividade não era o desenvolvimento de software. Decidi mudar novamente e surgiu uma nova oportunidade de trabalhar como programador júnior em uma empresa de pesquisa chamada CNP Brasil. Esta empresa era pequena e eu era o único desenvolvedor, mas tive a oportunidade de criar alguns sites e aplicativos móveis para coletar dados sobre pesquisas de um projeto para a Sadia, além de trabalhar em um sistema interno. Este trabalho me permitiu aprender Asp.Net, Ajax, SQL Compact e me unir essas tecnologias com as outras que eu já havia aprendido anteriormente.",
                    "en-US": "After some months working like an intern at Prosegur Brasil, my boss at that time shared with the team his plan to improve his department, but his idea was to put me in a support area, where my main activity was not development software, so, I decided to change again and a new opportunity emerged to work as junior developer in a research company called CNP Brasil. This company was small and I was the unique developer, but I had the opportunity to create some sites and mobile applications to collect data about surveys for a project to Sadia, besides work in an internal system. This job let me learn Asp.Net, Ajax, SQL Compact and join those technologies with the other that I had leaned before.",
                },
                image: require('@/assets/professionalExperiences/cnpBrasil_Sadia.jpg'),
                tags: [this.$store.state.tags.juniorDeveloper, this.$store.state.tags.aspNet, this.$store.state.tags.vbNet, this.$store.state.tags.vbScript, this.$store.state.tags.sql,
                    this.$store.state.tags.sqlCompact, this.$store.state.tags.javascript, this.$store.state.tags.jQuery, this.$store.state.tags.css, this.$store.state.tags.html
                ],
                mainTags: [this.$store.state.tags.juniorDeveloper, this.$store.state.tags.aspNet, this.$store.state.tags.vbNet, this.$store.state.tags.sql, this.$store.state.tags.sqlCompact],
                resumeTags: [this.$store.state.tags.juniorDeveloper, this.$store.state.tags.aspNet, this.$store.state.tags.vbNet, this.$store.state.tags.sql, this.$store.state.tags.sqlCompact],
                showDetail: false
            });


            histories.push({
                date: new Date("2009-02-04"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "Adedo Contact Center",
                    "en-US": "Adedo Contact Center",
                },
                subTitle: {
                    "pt-BR": "Projeto Site Comercial",
                    "en-US": "Commercial Website Project",
                },
                description: {
                    "pt-BR": "Minha carreira estava avançando rapidamente e recebi uma oferta interessante para trabalhar na Adedo Contact Center como desenvolvedor pleno, onde minha principal responsabilidade era iniciar um novo departamento para o desenvolvimento de sistemas. O primeiro projeto foi criar um novo site comercial em vários idiomas para a empresa, com o objetivo de interromper um contrato de terceirização, eu fiz esse projeto junto ao departamento de marketing e criei uma área de gerenciamento para que usuários administrativos gerenciem novos conteúdos no site. Este projeto foi aprovado como um sucesso pelo conselho diretor e pelo presidente, alcançando os resultados de redução de custos e ganho de agilidade na comunicação externa.",
                    "en-US": "My career was going fast and I received an interesting offer to work for Adedo Contact Center as a full developer where my main responsibility had been starting a new department to system development. The first project was to create a new multi-language commercial site for the company with the objective of stop a outsource contract, I did this project together the marketing department and create a management area to able admin users to managed new content on the site. This project was approved like a success with the director board and the president, achieving the results of cost reduction and agility in external communication.",
                },
                image: require('@/assets/professionalExperiences/adedo.jpg'),
                tags: [this.$store.state.tags.fullDeveloper, this.$store.state.tags.criatitySolution, this.$store.state.tags.selfManagement, this.$store.state.tags.successCase,
                    this.$store.state.tags.photoshop, this.$store.state.tags.aspNet, this.$store.state.tags.vbNet, this.$store.state.tags.vbScript, this.$store.state.tags.sql,
                    this.$store.state.tags.javascript, this.$store.state.tags.jQuery, this.$store.state.tags.css, this.$store.state.tags.html
                ],
                mainTags: [this.$store.state.tags.fullDeveloper, this.$store.state.tags.criatitySolution, this.$store.state.tags.selfManagement, this.$store.state.tags.successCase,
                    this.$store.state.tags.aspNet, this.$store.state.tags.vbNet, this.$store.state.tags.sql
                ],
                resumeTags: [this.$store.state.tags.fullDeveloper, this.$store.state.tags.criatitySolution, this.$store.state.tags.selfManagement,
                    this.$store.state.tags.successCase, this.$store.state.tags.vbNet, this.$store.state.tags.aspNet, this.$store.state.tags.sql
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2009-09-15"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "Adedo Contact Center",
                    "en-US": "Adedo Contact Center",
                },
                subTitle: {
                    "pt-BR": "Projeto Intranet",
                    "en-US": " Project",
                },
                description: {
                    "pt-BR": "Após concluir o projeto do site comercial, iniciei um novo grande desafio nessa empresa, criei uma intranet para conectar os departamentos de Marketing, Infraestrutura, Helpdesk e Call Centers. Esse projeto foi realmente gratificante, porque tive a oportunidade de conhecer muitas pessoas de diferentes partes da empresa e entender o que elas realmente precisavam. Durante esse período, criei muitos softwares para dar suporte às operações do call center e um sistema para controlar a distribuição de almoço por código de barras.",
                    "en-US": "After conclude the commercial site project, I started a new great challenge in that company, I created an intranet to connect the departments of Marketing, Infrastructure, Helpdesk and Call Centers. This project was really rewarding because I had the opportunity to know many people of different parts of the company and understand what them really needed. During this period, I created too many software to support the call center operations and a system to control lunch distribution by bar code.",
                },
                image: require('@/assets/professionalExperiences/adedo.jpg'),
                tags: [this.$store.state.tags.fullDeveloper, this.$store.state.tags.criatitySolution, this.$store.state.tags.selfManagement, this.$store.state.tags.greatChallenge, this.$store.state.tags.rewarding,
                    this.$store.state.tags.successCase, this.$store.state.tags.silverlight, this.$store.state.tags.webServices,
                    this.$store.state.tags.photoshop, this.$store.state.tags.aspNet, this.$store.state.tags.vbNet, this.$store.state.tags.vbScript, this.$store.state.tags.sql,
                    this.$store.state.tags.javascript, this.$store.state.tags.jQuery, this.$store.state.tags.css, this.$store.state.tags.html
                ],
                mainTags: [this.$store.state.tags.fullDeveloper, this.$store.state.tags.criatitySolution, this.$store.state.tags.selfManagement, this.$store.state.tags.greatChallenge, this.$store.state.tags.rewarding,
                    this.$store.state.tags.successCase, this.$store.state.tags.silverlight, this.$store.state.tags.webServices,
                    this.$store.state.tags.aspNet, this.$store.state.tags.vbNet, this.$store.state.tags.sql
                ],
                resumeTags: [this.$store.state.tags.fullDeveloper, this.$store.state.tags.selfManagement, this.$store.state.tags.rewarding,
                    this.$store.state.tags.successCase, this.$store.state.tags.vbNet, this.$store.state.tags.aspNet, this.$store.state.tags.sql
                ],
                showDetail: false
            });


            histories.push({
                date: new Date("2010-04-08"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "CPM Braxis",
                    "en-US": "CPM Braxis",
                },
                subTitle: {
                    "pt-BR": "Projeto Ambiente De Pagamentos",
                    "en-US": "Payment Environment Project",
                },
                description: {
                    "pt-BR": "O trabalho na Adedo Contact Center foi um grande passo na minha carreira, mas eu sentia que precisava de um novo grande desafio; portanto, aceitei uma oferta para trabalhar como desenvolvedor sênior da CPM Braxis. Minha primeira oportunidade foi no Projeto Ambiente de Pagamento, na Sefaz SP, onde trabalhei como desenvolvedor de sistemas e pude aprender muito trabalhando com ótimos profissionais e logo comecei a receber bons feedbacks.",
                    "en-US": "Work at Adedo Contact Center was a great step in my career, but I was feeling that I needed a new big challenge, therefore, I accepted an offer to work as Senior Developer for CPM Braxis. My first opportunity was the Payment Environment Project in Sefaz SP that I worked as a system developer and could learn a lot working with great professionals and soon I started to receive good feedbacks.",
                },
                image: require('@/assets/professionalExperiences/cpmbraxis.jpg'),
                tags: [],
                links: [{
                        description: { "pt-BR": "AmbienteDePagamentos", "en-US": "PaymentEnvironment" },
                        url: "https://portal.fazenda.sp.gov.br/acessoinformacao/Paginas/Ambiente-de-Pagamentos.aspx",
                        type: "link"
                    },
                    {
                        description: { "pt-BR": "Capgemini", "en-US": "Capgemini" },
                        url: "https://www.capgemini.com/br-pt/",
                        type: "link"
                    }
                ],
                tags: [this.$store.state.tags.seniorDeveloper, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.greatChallenge,
                    this.$store.state.tags.unitTest, this.$store.state.tags.integratedTest, this.$store.state.tags.codeCoverage, this.$store.state.tags.codeAnalysis,
                    this.$store.state.tags.codeMetrics, this.$store.state.tags.styleCop, this.$store.state.tags.mvc, this.$store.state.tags.webServices,
                    this.$store.state.tags.aspNet, this.$store.state.tags.cSharp, this.$store.state.tags.vbScript, this.$store.state.tags.sql,
                    this.$store.state.tags.javascript, this.$store.state.tags.jQuery, this.$store.state.tags.css, this.$store.state.tags.html
                ],
                mainTags: [this.$store.state.tags.seniorDeveloper, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.greatChallenge,
                    this.$store.state.tags.codeCoverage, this.$store.state.tags.codeMetrics, this.$store.state.tags.mvc, this.$store.state.tags.webServices,
                    this.$store.state.tags.aspNet, this.$store.state.tags.cSharp, this.$store.state.tags.sql
                ],
                resumeTags: [this.$store.state.tags.seniorDeveloper, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.greatChallenge, this.$store.state.tags.cSharp, this.$store.state.tags.aspNet, this.$store.state.tags.sql
                ],
                showDetail: false
            });


            histories.push({
                date: new Date("2010-09-08"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "CPM Braxis",
                    "en-US": "CPM Braxis",
                },
                subTitle: {
                    "pt-BR": "Projeto Crédito Acumulado",
                    "en-US": "Accumulated Credit Project",
                },
                description: {
                    "pt-BR": "Após alguns meses trabalhando para a CPM Braxis, passamos por um momento complicado para atender a todos os requisitos exigidos pelo governo de São Paulo, então meu gerente organizou um grande esforço para ajustar todos os projetos aos requisitos. Tivemos que trabalhar duro por três meses e eu pude trabalhar no meu projeto e ajudar o projeto Crédito Acumulado, onde tive algumas idéias para melhorar a maneira como estávamos trabalhando para atender aos requisitos. Não foi fácil, mas alcançamos a meta e todos os projetos puderam continuar, evitando grandes problemas para a empresa.",
                    "en-US": "After some months working to CPM Braxis, we passed for a complicated moment to meet all the requirements that the São Paulo government demands, so, my manager organized a big effort to adjusted all the projects to the requirements. We had to work hard for three months and I could work in my project and help the project Accumulated Credit where I had some ideas to improve the ways that we were working to meet the requirements. It was not easy but we achieve the goal and all the projects could continue, avoiding big problems for the company.",
                },
                image: require('@/assets/professionalExperiences/cpmbraxis.jpg'),
                tags: [],
                links: [{
                        description: { "pt-BR": "CréditoAcumulado", "en-US": "Accumulatedcredit" },
                        url: "https://portal.fazenda.sp.gov.br/servicos/ecredac/",
                        type: "link"
                    },
                    {
                        description: { "pt-BR": "Capgemini", "en-US": "Capgemini" },
                        url: "https://www.capgemini.com/br-pt/",
                        type: "link"
                    }
                ],
                tags: [this.$store.state.tags.seniorDeveloper, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.teamManagement, this.$store.state.tags.greatChallenge,
                    this.$store.state.tags.unitTest, this.$store.state.tags.integratedTest, this.$store.state.tags.codeCoverage, this.$store.state.tags.codeAnalysis,
                    this.$store.state.tags.codeMetrics, this.$store.state.tags.styleCop, this.$store.state.tags.mvc, this.$store.state.tags.webServices,
                    this.$store.state.tags.aspNet, this.$store.state.tags.cSharp, this.$store.state.tags.vbScript, this.$store.state.tags.sql,
                    this.$store.state.tags.javascript, this.$store.state.tags.jQuery, this.$store.state.tags.css, this.$store.state.tags.html
                ],
                mainTags: [this.$store.state.tags.seniorDeveloper, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.teamManagement, this.$store.state.tags.greatChallenge,
                    this.$store.state.tags.codeCoverage, this.$store.state.tags.codeMetrics, this.$store.state.tags.mvc, this.$store.state.tags.webServices,
                    this.$store.state.tags.aspNet, this.$store.state.tags.cSharp, this.$store.state.tags.sql
                ],
                resumeTags: [this.$store.state.tags.seniorDeveloper, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.greatChallenge, this.$store.state.tags.cSharp, this.$store.state.tags.aspNet, this.$store.state.tags.sql
                ],
                showDetail: false
            });


            histories.push({
                date: new Date("2011-01-08"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "CPM Braxis",
                    "en-US": "CPM Braxis",
                },
                subTitle: {
                    "pt-BR": "Projecto SAT - Oportunidade de Liderança",
                    "en-US": "SAT Project - Leadership Opportunity",
                },
                description: {
                    "pt-BR": "Eu havia completado o primeiro ciclo de avaliação e muitas boas notícias vieram, fui promovido a analista de sistemas júnior e ganhei a oportunidade de liderar uma nova equipe para um novo projeto chamado SAT, foi a minha primeira experiência em liderar os outros. Quando me tornei o líder da equipe, comecei a melhorar meu entendimento sobre o SCRUM e o Kanban, eles eram meus parceiros para melhorar o trabalho em equipe e colocar todos em evidência.",
                    "en-US": "I had completed the first evaluation cycle and many good news came, I was promoted to junior system analyst and I earned the opportunity to lead a new team for a new project called SAT, it was my first experience in lead the others. When I became the team leader I started to improve my understanding about the SCRUM and Kanban, they were my partners to improve my team work and put everyone in evidence.",
                },
                image: require('@/assets/professionalExperiences/cpmbraxis.jpg'),
                tags: [],
                links: [{
                        description: { "pt-BR": "SAT", "en-US": "SAT" },
                        url: "https://portal.fazenda.sp.gov.br/servicos/sat",
                        type: "link"
                    },
                    {
                        description: { "pt-BR": "Capgemini", "en-US": "Capgemini" },
                        url: "https://www.capgemini.com/br-pt/",
                        type: "link"
                    }
                ],
                tags: [this.$store.state.tags.juniorSystemAnalyst, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.teamManagement, this.$store.state.tags.rewarding,
                    this.$store.state.tags.unitTest, this.$store.state.tags.integratedTest, this.$store.state.tags.codeCoverage, this.$store.state.tags.codeAnalysis,
                    this.$store.state.tags.codeMetrics, this.$store.state.tags.styleCop, this.$store.state.tags.mvc, this.$store.state.tags.excel, this.$store.state.tags.vba, this.$store.state.tags.webServices,
                    this.$store.state.tags.aspNet, this.$store.state.tags.cSharp, this.$store.state.tags.vbScript, this.$store.state.tags.sql,
                    this.$store.state.tags.javascript, this.$store.state.tags.jQuery, this.$store.state.tags.css, this.$store.state.tags.html
                ],
                mainTags: [this.$store.state.tags.juniorSystemAnalyst, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.teamManagement, this.$store.state.tags.rewarding,
                    this.$store.state.tags.codeCoverage, this.$store.state.tags.codeMetrics, this.$store.state.tags.mvc, this.$store.state.tags.vba, this.$store.state.tags.webServices,
                    this.$store.state.tags.aspNet, this.$store.state.tags.cSharp, this.$store.state.tags.sql
                ],
                resumeTags: [this.$store.state.tags.juniorSystemAnalyst, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.cSharp, this.$store.state.tags.aspNet, this.$store.state.tags.sql
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2012-01-08"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "CPM Braxis - SAT",
                    "en-US": "CPM Braxis - SAT",
                },
                subTitle: {
                    "pt-BR": "Projeto SAT - Trabalho em Equipe",
                    "en-US": "SAT Project - Team Work",
                },
                description: {
                    "pt-BR": "Outro ciclo de avaliação se completou e desta vez, não apenas eu, mas toda a minha equipe foi promovida, tornei-me um analista de sistemas pleno e o projeto SAT estava evoluindo com boas idéias sobre novas soluções técnicas e uma equipe organizada trabalhando muito bem em conjunto.",
                    "en-US": "Another evaluation cycle completed itself, and this time not just me but all my team were promoted, I became a full system analyst and the SAT project was evolving with good ideas about new technical solutions and an organized team working very well together.",
                },
                image: require('@/assets/professionalExperiences/capgemini.jpg'),
                tags: [],
                links: [{
                        description: { "pt-BR": "SAT", "en-US": "SAT" },
                        url: "https://portal.fazenda.sp.gov.br/servicos/sat",
                        type: "link"
                    },
                    {
                        description: { "pt-BR": "Capgemini", "en-US": "Capgemini" },
                        url: "https://www.capgemini.com/br-pt/",
                        type: "link"
                    }
                ],
                tags: [this.$store.state.tags.fullSystemAnalyst, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.rewarding,
                    this.$store.state.tags.unitTest, this.$store.state.tags.integratedTest, this.$store.state.tags.codeCoverage, this.$store.state.tags.codeAnalysis,
                    this.$store.state.tags.codeMetrics, this.$store.state.tags.styleCop, this.$store.state.tags.mvc, this.$store.state.tags.excel, this.$store.state.tags.vba, this.$store.state.tags.webServices,
                    this.$store.state.tags.aspNet, this.$store.state.tags.cSharp, this.$store.state.tags.vbScript, this.$store.state.tags.sql,
                    this.$store.state.tags.javascript, this.$store.state.tags.jQuery, this.$store.state.tags.css, this.$store.state.tags.html
                ],
                mainTags: [this.$store.state.tags.fullSystemAnalyst, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.rewarding,
                    this.$store.state.tags.codeCoverage, this.$store.state.tags.codeMetrics, this.$store.state.tags.mvc, this.$store.state.tags.webServices,
                    this.$store.state.tags.aspNet, this.$store.state.tags.cSharp, this.$store.state.tags.sql
                ],
                resumeTags: [this.$store.state.tags.fullSystemAnalyst, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.rewarding, this.$store.state.tags.cSharp, this.$store.state.tags.aspNet, this.$store.state.tags.sql
                ],
                showDetail: false
            });


            histories.push({
                date: new Date("2012-09-10"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "Sistema Pri",
                    "en-US": "Sistema Pri",
                },
                subTitle: {
                    "pt-BR": "Projeto de Auditoria de Obras",
                    "en-US": "Construction Audit Project",
                },
                description: {
                    "pt-BR": "Decidi terminar meu ciclo na CPM Braxis e enfrentar um desafio diferente, por isso aceitei trabalhar para a Sistema PRI, e foi uma grande mudança, porque deixei meu cargo de líder para trabalhar novamente como um membro da equipe, mas foi realmente um boa escolha, pois tive a oportunidade de trabalhar com muitos profissionais experientes que me mostraram quais deviam ser meus próximos passos.",
                    "en-US": "I decided to finish my cycle at CPM Braxis and face a different challenge, so I accepted to work for Sistema PRI, and it was a big change, because I let my leader position to work again as a team member, but it was really a good choice, due to I had an opportunity to work with many experienced professionals who showed me which should be my next steps.",
                },
                image: require('@/assets/professionalExperiences/sistemaPri.jpg'),
                tags: [],
                links: [{
                    description: { "pt-BR": "SistemaPri", "en-US": "SistemaPri" },
                    url: "https://infra.bureauveritas.com.br/",
                    type: "link"
                }],
                tags: [this.$store.state.tags.fullSystemAnalyst,
                    this.$store.state.tags.mvvm, this.$store.state.tags.designPattern, this.$store.state.tags.silverlight,
                    this.$store.state.tags.cSharp, this.$store.state.tags.sql, this.$store.state.tags.entityframework6,
                    this.$store.state.tags.javascript, this.$store.state.tags.jQuery, this.$store.state.tags.css, this.$store.state.tags.html
                ],
                mainTags: [this.$store.state.tags.fullSystemAnalyst,
                    this.$store.state.tags.mvvm, this.$store.state.tags.designPattern, this.$store.state.tags.silverlight,
                    this.$store.state.tags.cSharp, this.$store.state.tags.sql
                ],
                resumeTags: [this.$store.state.tags.fullSystemAnalyst, this.$store.state.tags.designPattern, this.$store.state.tags.silverlight, this.$store.state.tags.cSharp,
                    this.$store.state.tags.mvvm, this.$store.state.tags.sql
                ],
                showDetail: false
            });


            histories.push({
                date: new Date("2013-10-05"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "Talent Four Consulting",
                    "en-US": "Talent Four Consulting",
                },
                subTitle: {
                    "pt-BR": "Projeto MindSet - Um recomeço",
                    "en-US": "MindSet Project - A fresh start ",
                },
                description: {
                    "pt-BR": "Às vezes, as coisas não funcionam como queremos, mas precisamos passar por esses momentos para crescer e desenvolver resiliência, então, um novo capítulo em minha vida começou quando aceitei trabalhar para a Talent Four, ainda não sabia, mas isso mudaria minha vida de uma maneira excelente. Fui alocado em um novo projeto chamado MindSet e jurei para mim que ajudaria esse projeto a se tornar grandioso.",
                    "en-US": "Sometimes the things doesn't work how we want, but we need to pass for thoses moments to grow and to develop resilience, so, a new chapter in my life started when I accepted to work for Talent Four, I didn't know yet, but it would change my life in a great way. I was allocated in a new project called MindSet and I swore for myself that I would help this project became huge.",
                },
                image: require('@/assets/professionalExperiences/talentFour.jpg'),
                tags: [],
                links: [{
                    description: { "pt-BR": "TalentFourConsulting", "en-US": "TalentFourConsulting" },
                    url: "http://www.talentfour.com.br/",
                    type: "link"
                }, {
                    description: { "pt-BR": "MindSet", "en-US": "MindSet" },
                    url: "http://www.unous.com.br/mindset/",
                    type: "link"
                }],
                tags: [this.$store.state.tags.fullSystemAnalyst, this.$store.state.tags.opportunity, this.$store.state.tags.greatChallenge, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.entityframework6, this.$store.state.tags.razor, this.$store.state.tags.javascript,
                    this.$store.state.tags.css, this.$store.state.tags.html, this.$store.state.tags.photoshop, this.$store.state.tags.mvc, this.$store.state.tags.cSharp,
                ],
                mainTags: [this.$store.state.tags.fullSystemAnalyst, this.$store.state.tags.opportunity, this.$store.state.tags.greatChallenge, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.mvc
                ],
                resumeTags: [this.$store.state.tags.fullSystemAnalyst, this.$store.state.tags.opportunity, this.$store.state.tags.greatChallenge, this.$store.state.tags.cSharp,
                    this.$store.state.tags.aspNetMVC, this.$store.state.tags.sql
                ],
                showDetail: false
            });


            histories.push({
                date: new Date("2014-11-10"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "Talent Four Consulting",
                    "en-US": "Talent Four Consulting",
                },
                subTitle: {
                    "pt-BR": "Projeto MindSet - Grande Desáfio",
                    "en-US": "MindSet Project - Great Challenge",
                },
                description: {
                    "pt-BR": "Trabalhei na TalentFour e o cliente era uma startup de inteligência em negócios com foco no setor de varejo. O projeto MindSet foi um desafio para enfrentar o mercado com uma nova solução que poderia resolver grandes problemas sobre o varejo, e comecei a aprender muito sobre os negócios enquanto ajudava a equipe a desenvolver essa nova solução. Após o primeiro ano do projeto, tivemos a entrega do módulo OpenToBuy para alguns clientes e fui promovido a analista de sistemas sênior pelo meu trabalho.",
                    "en-US": "I worked for TalentFour and the client was a business intelligence startup with focus in the retail sector. The project MindSet was a challenge to face the market with a new solution that could solve great problem about retail, and I started learning a lot about the business while I help the team to develop this new solution. After the first year of the project we had delivery open to buy module for some clients and I was promoted to senior system analyst for my hardwork.",
                },
                image: require('@/assets/professionalExperiences/talentFour.jpg'),
                tags: [],
                links: [{
                    description: { "pt-BR": "TalentFourConsulting", "en-US": "TalentFourConsulting" },
                    url: "http://www.talentfour.com.br/",
                    type: "link"
                }, {
                    description: { "pt-BR": "MindSet", "en-US": "MindSet" },
                    url: "http://www.unous.com.br/mindset/",
                    type: "link"
                }],
                tags: [this.$store.state.tags.seniorSystemAnalyst, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.aspNetMVC, this.$store.state.tags.cSharp,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.entityframework6, this.$store.state.tags.razor, this.$store.state.tags.javascript,
                    this.$store.state.tags.css, this.$store.state.tags.html, this.$store.state.tags.photoshop, this.$store.state.tags.mvc
                ],
                mainTags: [this.$store.state.tags.seniorSystemAnalyst, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.mvc
                ],
                resumeTags: [this.$store.state.tags.seniorSystemAnalyst, this.$store.state.tags.scrum, this.$store.state.tags.rewarding, this.$store.state.tags.cSharp,
                    this.$store.state.tags.aspNetMVC, this.$store.state.tags.sql
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2015-04-10"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "Unous Inteligência em Negócios",
                    "en-US": "Unous Business Intelligence",
                },
                subTitle: {
                    "pt-BR": "Projeto MindSet - Trabalho duro recompensador",
                    "en-US": "MindSet Project - Rewarding hard work",
                },
                description: {
                    "pt-BR": "Depois de alguns meses, recebi uma oferta para trabalhar diretamente para a Unous como Coordenador de TI e assumi a responsabilidade pelo projeto MindSet. Nesta ocasião, desempenhei o papel de Scrum Master, ajudando a equipe a aplicar o Scrum e ensinei-lhes regras de negócios, além de ser responsável pelo processo de contratação, treinamento e planejamento de lançamentos.",
                    "en-US": "After some months I received an offer to work direct to Unous as IT Coordinator and I assumed the responsibility for the MindSet project. In this occasion I played the Scrum Master role, helping the team to apply Scrum and I taught them business rules, besides I was responsable for the hire process, trainning and planning of releases.",
                },
                image: require('@/assets/professionalExperiences/unous.jpg'),
                tags: [],
                links: [{
                    description: { "pt-BR": "Unous", "en-US": "Unous" },
                    url: "http://www.unous.com.br/",
                    type: "link"
                }, {
                    description: { "pt-BR": "MindSet", "en-US": "MindSet" },
                    url: "http://www.unous.com.br/mindset/",
                    type: "link"
                }],
                tags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.scrumMaster, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.leadership,
                    this.$store.state.tags.coaching, this.$store.state.tags.trainning,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.hireProcess, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC, this.$store.state.tags.cSharp,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.entityframework6, this.$store.state.tags.oracle, this.$store.state.tags.razor, this.$store.state.tags.javascript,
                    this.$store.state.tags.css, this.$store.state.tags.html, this.$store.state.tags.mvc
                ],
                mainTags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.scrumMaster, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.leadership,
                    this.$store.state.tags.coaching, this.$store.state.tags.trainning,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.hireProcess, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.oracle, this.$store.state.tags.mvc
                ],
                resumeTags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.scrumMaster, this.$store.state.tags.scrum,
                    this.$store.state.tags.hardworking, this.$store.state.tags.cSharp, this.$store.state.tags.aspNetMVC, this.$store.state.tags.sql
                ],
                showDetail: false
            });


            histories.push({
                date: new Date("2016-10-10"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "Unous Inteligência em Negócios",
                    "en-US": "Unous Business Intelligence",
                },
                subTitle: {
                    "pt-BR": "Projeto MindSet - Liderança",
                    "en-US": "MindSet Project - Leadership",
                },
                description: {
                    "pt-BR": "Não é fácil liderar os outros e acredito que todos os líderes evoluem apenas enfrentando situações difíceis e tomando decisões, é claro que isso não foi diferente comigo, de qualquer maneira, me sinto gratificado por toda a situação complexa que o projeto e a equipe passaram e eu pude experienciar. Depois de três anos atuando no projeto MindSet, tive o prazer de trabalhar com muitas pessoas e aprendi muito com todos. Nesse momento, o MindSet é um grande software com três módulos de negócios e com novos grandes clientes de varejo. Tenho orgulho de deixar minha marca nesses resultados.",
                    "en-US": "It's not easy lead the others and I believe that every leader only evolve facing hard situation and taking decisions, of course that this wasn't different with me, anyway I am greatfull for all the complex situation that the project and the team had passed and I was able to experience. After three years working on MindSet project, I had the pleasure of work with many people and I learned a lot with everyone. At this time, the MindSet is a big software with three business modules and with new big retail clients. I am proud in let my mark in this results.",
                },
                image: require('@/assets/professionalExperiences/unous.jpg'),
                tags: [],
                links: [{
                    description: { "pt-BR": "Unous", "en-US": "Unous" },
                    url: "http://www.unous.com.br/",
                    type: "link"
                }, {
                    description: { "pt-BR": "MindSet", "en-US": "MindSet" },
                    url: "http://www.unous.com.br/mindset/",
                    type: "link"
                }],
                tags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.scrumMaster, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.leadership, this.$store.state.tags.engagement,
                    this.$store.state.tags.coaching, this.$store.state.tags.trainning,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.hireProcess, this.$store.state.tags.continuousEvolution, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC, this.$store.state.tags.cSharp,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.entityframework6, this.$store.state.tags.oracle, this.$store.state.tags.razor, this.$store.state.tags.javascript,
                    this.$store.state.tags.css, this.$store.state.tags.html, this.$store.state.tags.mvc
                ],
                mainTags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.scrumMaster, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.leadership, this.$store.state.tags.engagement,
                    this.$store.state.tags.coaching, this.$store.state.tags.trainning,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.hireProcess, this.$store.state.tags.continuousEvolution, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.sql, this.$store.state.tags.oracle, this.$store.state.tags.mvc
                ],
                resumeTags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.scrumMaster, this.$store.state.tags.scrum,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.cSharp,
                    this.$store.state.tags.aspNetMVC, this.$store.state.tags.sql
                ],
                showDetail: false
            });


            histories.push({
                date: new Date("2018-08-27"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "Unous Inteligência em Negócios",
                    "en-US": "Unous Business Intelligence",
                },
                subTitle: {
                    "pt-BR": "Project MindSet - Latam Retail Show",
                    "en-US": "MindSet Project - Latam Retail Show",
                },
                description: {
                    "pt-BR": "Eu estava quase completando cinco anos de dedicação no projeto MindSet e meu maior presente foi ver o projeto muito bem exposto no Latam Retail Show, a sensação foi incrível quando pude ver meu trabalho e o trabalho de todos os que já participam deste projeto exposto, foi gratificante.",
                    "en-US": "I was almost completing five years of dedication in MindSet project and my biggest gift was to see the project very well exposed in the Latam Retail Show, the feeling was amazing when I could see my work and the work of every one that already participate of this project exposed, it was rewarding.",
                },
                image: require('@/assets/professionalExperiences/unous_latam.jpg'),
                tags: [],
                links: [{
                    description: { "pt-BR": "Unous", "en-US": "Unous" },
                    url: "http://www.unous.com.br/",
                    type: "link"
                }, {
                    description: { "pt-BR": "MindSet", "en-US": "MindSet" },
                    url: "http://www.unous.com.br/mindset/",
                    type: "link"
                }, {
                    description: { "pt-BR": "LatamRetailShow", "en-US": "LatamRetailShow" },
                    url: "https://latamretailshow.com.br/",
                    type: "link"
                }],
                tags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.agileCoach, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.leadership, this.$store.state.tags.engagement,
                    this.$store.state.tags.coaching, this.$store.state.tags.trainning,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.hireProcess, this.$store.state.tags.continuousEvolution, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.vueJS, this.$store.state.tags.webAPI,
                    this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC, this.$store.state.tags.cSharp,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.entityframework6, this.$store.state.tags.oracle, this.$store.state.tags.razor, this.$store.state.tags.javascript,
                    this.$store.state.tags.css, this.$store.state.tags.html, this.$store.state.tags.mvc
                ],
                mainTags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.agileCoach, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.leadership, this.$store.state.tags.engagement,
                    this.$store.state.tags.coaching, this.$store.state.tags.trainning,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.hireProcess, this.$store.state.tags.continuousEvolution, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.vueJS, this.$store.state.tags.webAPI,
                    this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.oracle, this.$store.state.tags.mvc
                ],
                resumeTags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.agileCoach, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.rewarding, this.$store.state.tags.designPattern, this.$store.state.tags.vueJS
                ],
                showDetail: false
            });


            histories.push({
                date: new Date("2020-01-15"),
                category: this.$store.state.categoryType.professionalExperience,
                title: {
                    "pt-BR": "Unous Inteligência em Negócios",
                    "en-US": "Unous Business Intelligence",
                },
                subTitle: {
                    "pt-BR": "Projeto MindSet: Momento de evolução",
                    "en-US": "MindSet Project: Evolution Moment",
                },
                description: {
                    "pt-BR": "Iniciamos o ano de 2020 com um novo desafio, o número de clientes aumentou e suas características demandam mais do nosso projeto. Neste ano, estamos evoluindo em muitos aspectos, como arquitetura, escalabilidade, desempenho, usabilidade, além de melhorar nossos processos com base em práticas ágeis.",
                    "en-US": "We started the 2020 with a new challenge, the number of clients increased and their characteristics demand more of our project. This years we are evolving in many aspects as architecture, scalability, performance, usability, besides we are improving our processes based on agile practices.",
                },
                image: require('@/assets/professionalExperiences/unous.jpg'),
                tags: [],
                links: [{
                    description: { "pt-BR": "Unous", "en-US": "Unous" },
                    url: "http://www.unous.com.br/",
                    type: "link"
                }, {
                    description: { "pt-BR": "MindSet", "en-US": "MindSet" },
                    url: "http://www.unous.com.br/mindset/",
                    type: "link"
                }],
                tags: [this.$store.state.tags.inProgress, this.$store.state.tags.itCoordinator, this.$store.state.tags.agileCoach, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.management30,
                    this.$store.state.tags.extremeProgramming,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.leadership, this.$store.state.tags.engagement,
                    this.$store.state.tags.coaching, this.$store.state.tags.trainning,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.hireProcess, this.$store.state.tags.continuousEvolution, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge,
                    this.$store.state.tags.unitTest, this.$store.state.tags.integratedTest, this.$store.state.tags.codeCoverage, this.$store.state.tags.codeAnalysis,
                    this.$store.state.tags.codeMetrics, this.$store.state.tags.TDD, this.$store.state.tags.BDD, this.$store.state.tags.styleCop,
                    this.$store.state.tags.vueJS, this.$store.state.tags.webAPI, this.$store.state.tags.dotNetCore, this.$store.state.tags.cSharp,
                    this.$store.state.tags.DDD, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.entityframework6, this.$store.state.tags.entityframeworkNetCore, this.$store.state.tags.oracle, this.$store.state.tags.razor, this.$store.state.tags.javascript,
                    this.$store.state.tags.css, this.$store.state.tags.html, this.$store.state.tags.mvc
                ],
                mainTags: [this.$store.state.tags.inProgress, this.$store.state.tags.itCoordinator, this.$store.state.tags.agileCoach, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.management30,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.engagement,
                    this.$store.state.tags.coaching, this.$store.state.tags.trainning,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.hireProcess, this.$store.state.tags.continuousEvolution, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge,
                    this.$store.state.tags.vueJS, this.$store.state.tags.webAPI, this.$store.state.tags.dotNetCore,
                    this.$store.state.tags.DDD, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC, this.$store.state.tags.sql, this.$store.state.tags.oracle, this.$store.state.tags.mvc
                ],
                resumeTags: [this.$store.state.tags.inProgress, this.$store.state.tags.itCoordinator, this.$store.state.tags.agileCoach, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.dotNetCore, this.$store.state.tags.vueJS
                ],
                showDetail: false
            });


        },
    },
}

export default professionalExperiences;