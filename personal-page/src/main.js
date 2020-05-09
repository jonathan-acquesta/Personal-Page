import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false;

var app = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    methods: {
        mountCertifications(histories) {
            histories.push({
                date: new Date("2019-02-02"),
                category: this.$store.state.categoryType.certifications,
                title: {
                    "pt-BR": "Scrum.org - PSM 1",
                    "en-US": "Scrum.org - PSM 1",
                },
                subTitle: {
                    "pt-BR": "Professional Scrum Master I",
                    "en-US": "Professional Scrum Master I",
                },
                description: {
                    "pt-BR": "A certificação Professional Scrum Master foi um momento importante para formalização do conhecimento que adquiri durante toda a minha carreira profissional. Eu tive a oportunidade de trabalhar com SCRUM desde o inicio dos anos 2010 e esse framework agregou em muito nos bons resultados que venho obtendo.",
                    "en-US": "The Professional Scrum Master certification was an important moment to formalize the knowledge I acquired throughout my professional career. I had the opportunity to work with SCRUM since the beginning of the 2010s and this framework added a lot to the good results I have been getting.",
                },
                image: require('@/assets/certifications/psm1.jpg'),
                links: [{
                        image: require('@/assets/certificates/psm1.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "Scrum.org", "en-US": "Scrum.org" },
                        url: "https://www.scrum.org/",
                        type: "link"
                    }
                ],
                tags: [this.$store.state.tags.scrum],
                mainTags: [this.$store.state.tags.scrum],
                showDetail: true
            });

            histories.push({
                date: new Date("2018-10-20"),
                category: this.$store.state.categoryType.certifications,
                title: {
                    "pt-BR": "SCRUMstudy – SFC",
                    "en-US": "SCRUMstudy – SFC",
                },
                subTitle: {
                    "pt-BR": "Scrum Fundamentals Certified",
                    "en-US": "Scrum Fundamentals Certified",
                },
                description: {
                    "pt-BR": "A certificação Scrum Fundamentals Certified foi importante para mim em relação a validação do conhecimento e correta compreensão dos pilares, valores e fundamentos do SCRUM.",
                    "en-US": "Scrum Fundamentals Certified was important certification to me in terms of knowledge validation and correct understanding of the pillars, values and fundamentals of SCRUM.",
                },
                image: require('@/assets/certifications/sfc.jpg'),
                links: [{
                        image: require('@/assets/certificates/sfc.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "SCRUMstudy", "en-US": "SCRUMstudy" },
                        url: "https://www.scrumstudy.com/portuguese/",
                        type: "link"
                    }
                ],
                tags: [this.$store.state.tags.scrum],
                mainTags: [this.$store.state.tags.scrum],
                showDetail: false
            });

            histories.push({
                date: new Date("2010-12-06"),
                category: this.$store.state.categoryType.certifications,
                title: {
                    "pt-BR": "Microsoft – MCP",
                    "en-US": "Microsoft – MCP",
                },
                subTitle: {
                    "pt-BR": "70-562 Technology Specialist: Microsoft .Net Framework 3.5, ASP.NET Application Development",
                    "en-US": "70-562 Technology Specialist: Microsoft .Net Framework 3.5, ASP.NET Application Development",
                },
                description: {
                    "pt-BR": "A certificação 70-562 Technology Specialist: Microsoft .Net Framework 3.5, ASP.NET Application Development foi muito importante como objetivo pessoal com foco em comprovar o conhecimento que eu tinha adquirido enquanto atuava como líder técnico e essa certificação me concedeu o título de MCP. Obter esta certificação também foi parte de um plano para ajudar nos objetivos corporativos em relação a participação em licitações públicas que exigiam um número mínimo de profissionais certificados na empresa.",
                    "en-US": "The 70-562 Technology Specialist: Microsoft .Net Framework 3.5, ASP.NET Application Development certification was very important as a personal objective with a focus on proving the knowledge I had acquired while I acting as a technical leader, and this certification granted me the title of MCP. Obtaining this certification was also part of a plan to help corporate objectives regarding participation in public tenders that required a minimum number of certified professionals in the company.",
                },
                image: require('@/assets/certifications/msoficial.jpg'),
                links: [{
                        image: require('@/assets/certificates/MCP70562.png'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "Transcrição", "en-US": "Transcript" },
                        url: "https://github.com/jonathan-acquesta/Personal-Page/blob/master/personal-page/public/microsoft_certified_professional_transcript.pdf",
                        type: "link"
                    }
                ],
                tags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.aspNet, this.$store.state.tags.cSharp],
                mainTags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.aspNet, this.$store.state.tags.cSharp],
                showDetail: false
            });


            histories.push({
                date: new Date("2011-02-18"),
                category: this.$store.state.categoryType.certifications,
                title: {
                    "pt-BR": "Microsoft – MCTS",
                    "en-US": "Microsoft – MCTS",
                },
                subTitle: {
                    "pt-BR": "70-536 Technology Specialist: Microsoft .Net Framework, ASP.NET Application Development Foundantion",
                    "en-US": "70-536 Technology Specialist: Microsoft .Net Framework, ASP.NET Application Development Foundantion",
                },
                description: {
                    "pt-BR": "A certificação 70-536 Technology Specialist: Microsoft .Net Framework, ASP.NET Application Development Foundantion foi muito importante para consolidar minha capacidade técnica com as tecnologias Microsoft e essa certificação me concedeu o título de MCTS e apoio na evolução da minha carreira. Obter esta certificação também foi parte de um plano para ajudar nos objetivos corporativos em relação a participação em licitações públicas que exigiam um número mínimo de profissionais certificados na empresa.",
                    "en-US": "The 70-536 Technology Specialist: Microsoft .Net Framework, ASP.NET Application Development Foundantion certification was very important to consolidate my technical capacity with Microsoft technologies, and this certification gave me the title of MCTS, beside that, it supported the evolution of my career in that occasion. Obtaining this certification was also part of a plan to help corporate objectives regarding participation in public tenders that required a minimum number of certified professionals in the company",
                },
                image: require('@/assets/certifications/msoficial.jpg'),
                links: [{
                        image: require('@/assets/certificates/MCTS70536.png'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "Transcrição", "en-US": "Transcript" },
                        url: "https://github.com/jonathan-acquesta/Personal-Page/blob/master/personal-page/public/microsoft_certified_professional_transcript.pdf",
                        type: "link"
                    }
                ],
                tags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.aspNet, this.$store.state.tags.cSharp],
                mainTags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.aspNet, this.$store.state.tags.cSharp],
                showDetail: false
            });
        },
        mountBooks(histories) {

            histories.push({
                date: new Date("2020-04-02"),
                category: this.$store.state.categoryType.books,
                title: {
                    "pt-BR": "KANBAN",
                    "en-US": "KANBAN",
                },
                subTitle: {
                    "pt-BR": "O melhor guia para iniciantes aprenderem Kanban passo a passo",
                    "en-US": "The ultimate guide for beginner's to learn Kanban step by step",
                },
                description: {
                    "pt-BR": "O livro Kanban: O melhor guia para iniciantes aprenderem Kanban passo a passo, foi escrito por James Turner e traz diversas aplicações sobre o conceito em diversos setores industriais, também faz comparações sobre a aplicação do Kanban em relação a outros frameworks e metodologias ágeis, ajudando a clarificar as melhores situações para se aplicar a metodologia.",
                    "en-US": "The book Kanban: The ultimate guide for beginner's to learn Kanban step by step, was written by James Turner and brings several applications about the concept in different industrial sectors, it also makes comparisons about the application of Kanban in relation to other agile frameworks and methodologies, helping to clarify the best situations to apply the methodology.",
                },
                image: require('@/assets/books/kanban.jpg'),
                tags: [this.$store.state.tags.kanban],
                mainTags: [this.$store.state.tags.kanban],
                showDetail: true
            });

            histories.push({
                date: new Date("2020-02-05"),
                category: this.$store.state.categoryType.books,
                title: {
                    "pt-BR": "Coaching e Liderança",
                    "en-US": "Coaching and Leadership",
                },
                subTitle: {
                    "pt-BR": "Novas maneiras para conduzir, influenciar pessoas e gerar negócios de sucesso",
                    "en-US": "New ways to lead, influence people and generate successful businesses",
                },
                description: {
                    "pt-BR": "O livro Coaching e Liderança: Novas maneiras para conduzir, influenciar pessoas e gerar negócios de sucesso foi coordenado por Jaques Grinberg e Jorge Penilo, sendo uma obra que reuni a vivencia e experiência de vinte e três autores em relação aos desafios enfrentados por profissionais que se desafiam a liderar. Essa abordagem foi muito interessante para aprender e comparar a minha realidade com outras situações em contextos diversos.",
                    "en-US": "The book Coaching and Leadership: New ways to lead, influence people and generate successful businesses was coordinated by Jaques Grinberg and Jorge Penilo, being a work that brought together the experience of twenty-three authors in relation to the challenges faced by professionals who challenge themselves to lead. This approach was very interesting to learn and compare my reality with other situations in different contexts.",
                },
                image: require('@/assets/books/coaching_lideranca.jpg'),
                tags: [this.$store.state.tags.coaching, this.$store.state.tags.leadership],
                mainTags: [this.$store.state.tags.coaching, this.$store.state.tags.leadership],
                showDetail: false
            });

            histories.push({
                date: new Date("2019-12-22"),
                category: this.$store.state.categoryType.books,
                title: {
                    "pt-BR": "Gerenciando Pessoas",
                    "en-US": "Managing People",
                },
                subTitle: {
                    "pt-BR": "Os melhores artigos de Harvard Business Review sobre como liderar equipes",
                    "en-US": "The best articles from Harvard Business Review on how to lead teams",
                },
                description: {
                    "pt-BR": "O livro Gerenciando Pessoas: Os melhores artigos de Harvard Business Review sobre como liderar equipes, traz dez ótimos artigos que me ajudaram em muito na reflexão sobre aspectos de liderança, engajamento, organização e resultados.",
                    "en-US": "The book Managing People: The best articles from Harvard Business Review on how to lead teams, brings ten great articles that helped me a lot in thinking about aspects of leadership, engagement, organization and results.",
                },
                image: require('@/assets/books/gerenciando_pessoas.jpg'),
                tags: [this.$store.state.tags.coaching, this.$store.state.tags.leadership, this.$store.state.tags.highPerformanceTeams, this.$store.state.tags.situationalLeadership],
                mainTags: [this.$store.state.tags.coaching, this.$store.state.tags.leadership, this.$store.state.tags.highPerformanceTeams, this.$store.state.tags.situationalLeadership],
                showDetail: false
            });


            histories.push({
                date: new Date("2019-10-02"),
                category: this.$store.state.categoryType.books,
                title: {
                    "pt-BR": "A Quarta Revolução Industrial",
                    "en-US": "The Fourth Industrial Revolution",
                },
                subTitle: {
                    "pt-BR": "Fórum Econômico Mundial",
                    "en-US": "World Economic Forum",
                },
                description: {
                    "pt-BR": "O livro A quarta revolução industrial escrito por Klaus Schwab do World Economic Forum foi uma ferramenta muito interessante para ampliar a minha visão sobre as mudanças que estão ocorrendo em nosso mundo globalizado e entender os possíveis riscos e benefícios desses avanços para os diversos setores da economia.",
                    "en-US": "The book The Fourth Industrial Revolution written by Klaus Schwab of the World Economic Forum was a very interesting tool to broaden my view on the changes that are taking place in our globalized world, and I could understand the possible risks and benefits of these advances for many sectors of the economy.",
                },
                image: require('@/assets/books/quarta_revolucao_industrual.jpg'),
                tags: [this.$store.state.tags.fourthIndustrialRevolution, this.$store.state.tags.artificialIntelligence, this.$store.state.tags.disruptiveInnovations],
                mainTags: [this.$store.state.tags.fourthIndustrialRevolution, this.$store.state.tags.artificialIntelligence, this.$store.state.tags.disruptiveInnovations],
                showDetail: false
            });


            histories.push({
                date: new Date("2019-09-15"),
                category: this.$store.state.categoryType.books,
                title: {
                    "pt-BR": "SCRUM",
                    "en-US": "SCRUM",
                },
                subTitle: {
                    "pt-BR": "A arte de fazer o dobro do trabalho na metade do tempo",
                    "en-US": "The art of doing twice the work in half the time",
                },
                description: {
                    "pt-BR": "O livro SCRUM: A arte de fazer o dobro do trabalho na metade do tempo foi escrito por Jeff Sutherland e JJ Sutherland. Este livro traz toda a visão e experiência de um dos criadores do SCRUM de uma maneira bem estruturada, fundamentando as razões para criação de uma nova abordagem no setor de desenvolvimento de sistemas. Este livro foi muito interessante para mim, devido a me possibilitar a oportunidade de entender melhor como o SCRUM nasceu e cresceu.",
                    "en-US": "The book SCRUM: The art of doing twice the work in half the time was written by Jeff Sutherland and JJ Sutherland, this book brings all the vision and experience from one of the SCRUM creators in a well structured way, making the reasons for create a new approach to the systems development very clear. It was interesting to me, who wanted to know better how SCRUM borned and growed.",
                },
                image: require('@/assets/books/scrum.jpg'),
                tags: [this.$store.state.tags.scrum],
                mainTags: [this.$store.state.tags.scrum],
                showDetail: false
            });
        },
        mountProfessionExperiences(histories) {


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
                mainTags: [this.$store.state.tags.intern, this.$store.state.tags.opportunity],
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
                mainTags: [this.$store.state.tags.intern, this.$store.state.tags.oracle, this.$store.state.tags.visualBasic6, this.$store.state.tags.vbNet],
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
                    this.$store.state.tags.aspNet, this.$store.state.tags.cSharp, this.$store.state.tags.sql,
                    this.$store.state.tags.javascript, this.$store.state.tags.jQuery, this.$store.state.tags.css, this.$store.state.tags.html
                ],
                mainTags: [this.$store.state.tags.fullSystemAnalyst,
                    this.$store.state.tags.mvvm, this.$store.state.tags.designPattern, this.$store.state.tags.silverlight,
                    this.$store.state.tags.aspNet, this.$store.state.tags.cSharp, this.$store.state.tags.sql
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
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.razor, this.$store.state.tags.javascript,
                    this.$store.state.tags.css, this.$store.state.tags.html, this.$store.state.tags.photoshop, this.$store.state.tags.mvc
                ],
                mainTags: [this.$store.state.tags.fullSystemAnalyst, this.$store.state.tags.opportunity, this.$store.state.tags.greatChallenge, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.mvc
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
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.razor, this.$store.state.tags.javascript,
                    this.$store.state.tags.css, this.$store.state.tags.html, this.$store.state.tags.photoshop, this.$store.state.tags.mvc
                ],
                mainTags: [this.$store.state.tags.seniorSystemAnalyst, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.mvc
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
                    "en-US": "MindSet Projet - Rewarding hard work",
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
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.oracle, this.$store.state.tags.razor, this.$store.state.tags.javascript,
                    this.$store.state.tags.css, this.$store.state.tags.html, this.$store.state.tags.mvc
                ],
                mainTags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.scrumMaster, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.leadership,
                    this.$store.state.tags.coaching, this.$store.state.tags.trainning,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.hireProcess, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.oracle, this.$store.state.tags.mvc
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
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.oracle, this.$store.state.tags.razor, this.$store.state.tags.javascript,
                    this.$store.state.tags.css, this.$store.state.tags.html, this.$store.state.tags.mvc
                ],
                mainTags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.scrumMaster, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.leadership, this.$store.state.tags.engagement,
                    this.$store.state.tags.coaching, this.$store.state.tags.trainning,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.hireProcess, this.$store.state.tags.continuousEvolution, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.sql, this.$store.state.tags.oracle, this.$store.state.tags.mvc
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
                    this.$store.state.tags.dotNetCore, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.oracle, this.$store.state.tags.razor, this.$store.state.tags.javascript,
                    this.$store.state.tags.css, this.$store.state.tags.html, this.$store.state.tags.mvc
                ],
                mainTags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.agileCoach, this.$store.state.tags.scrum, this.$store.state.tags.kanban,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.leadership, this.$store.state.tags.engagement,
                    this.$store.state.tags.coaching, this.$store.state.tags.trainning,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.hireProcess, this.$store.state.tags.continuousEvolution, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge, this.$store.state.tags.vueJS, this.$store.state.tags.webAPI,
                    this.$store.state.tags.dotNetCore, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.oracle, this.$store.state.tags.mvc
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
                tags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.agileCoach, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.management30,
                    this.$store.state.tags.extremeProgramming,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.leadership, this.$store.state.tags.engagement,
                    this.$store.state.tags.coaching, this.$store.state.tags.trainning,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.hireProcess, this.$store.state.tags.continuousEvolution, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge,
                    this.$store.state.tags.unitTest, this.$store.state.tags.integratedTest, this.$store.state.tags.codeCoverage, this.$store.state.tags.codeAnalysis,
                    this.$store.state.tags.codeMetrics, this.$store.state.tags.TDD, this.$store.state.tags.BDD, this.$store.state.tags.styleCop,
                    this.$store.state.tags.vueJS, this.$store.state.tags.webAPI, this.$store.state.tags.dotNetCore,
                    this.$store.state.tags.DDD, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC,
                    this.$store.state.tags.webServices, this.$store.state.tags.sql, this.$store.state.tags.oracle, this.$store.state.tags.razor, this.$store.state.tags.javascript,
                    this.$store.state.tags.css, this.$store.state.tags.html, this.$store.state.tags.mvc
                ],
                mainTags: [this.$store.state.tags.itCoordinator, this.$store.state.tags.agileCoach, this.$store.state.tags.scrum, this.$store.state.tags.kanban, this.$store.state.tags.management30,
                    this.$store.state.tags.situationalLeadership, this.$store.state.tags.engagement,
                    this.$store.state.tags.coaching, this.$store.state.tags.trainning,
                    this.$store.state.tags.teamManagement, this.$store.state.tags.hireProcess, this.$store.state.tags.continuousEvolution, this.$store.state.tags.hardworking,
                    this.$store.state.tags.rewarding, this.$store.state.tags.greatChallenge,
                    this.$store.state.tags.vueJS, this.$store.state.tags.webAPI, this.$store.state.tags.dotNetCore,
                    this.$store.state.tags.DDD, this.$store.state.tags.designPattern, this.$store.state.tags.aspNetMVC, this.$store.state.tags.sql, this.$store.state.tags.oracle, this.$store.state.tags.mvc
                ],
                showDetail: true
            });


        },
        mountAcademicLife(histories) {
            histories.push({
                date: new Date("2005-12-15"),
                category: this.$store.state.categoryType.academicLife,
                period: {
                    begin: '2003',
                    end: '2005'
                },
                title: {
                    "pt-BR": "Colegial",
                    "en-US": "High School",
                },
                subTitle: {
                    "pt-BR": "E.E. Comendador Mario Reys",
                    "en-US": "E.E. Comendador Mario Reys",
                },
                description: {
                    "pt-BR": "No final de 2005, me formei no ensino médio e foi o começo da minha jornada, foi como um marco para mim, porque deixei minha infância para trás e iniciei minha vida adulta.",
                    "en-US": "At the end of 2005 I got my high school degree and it was the beginner of my journey, it was like a milestone to me, because I let my childhood behind and start my adult life.",
                },
                image: require('@/assets/academicLife/highSchool.jpg'),
                tags: [this.$store.state.tags.highSchool],
                mainTags: [this.$store.state.tags.highSchool],
                links: [{
                    description: { "pt-BR": "ComendadorMarioReys", "en-US": "ComendadorMarioReys" },
                    url: "https://www.educamaisbrasil.com.br/escolas/mario-reys-comendador",
                    type: "link"
                }],
                showDetail: false
            });

            histories.push({
                date: new Date("2007-07-15"),
                category: this.$store.state.categoryType.academicLife,
                period: {
                    begin: '2005',
                    end: '2007'
                },
                title: {
                    "pt-BR": "ETEC-ZL - Escola Técnica Estadual",
                    "en-US": "ETEC-ZL - State Technical School",
                },
                subTitle: {
                    "pt-BR": "Curso de Informática",
                    "en-US": "Computer course",
                },
                description: {
                    "pt-BR": "Eu sempre gostei de criar coisas e resolver problemas, então trabalhar com computador foi realmente uma ótima escolha na minha vida. Para iniciar minha carreira, eu decidi fazer uma escola técnica onde o foco era programar computadores e isto foi o inicio e a validação da minha paixão por essa área.",
                    "en-US": "I always liked to build thing and solve problems, so working with computer was really a great choose in my life. To start my career I decided to do a technical school where the focus was programming computer, and this was the beginning and the validation of my passion for this area.",
                },
                image: require('@/assets/academicLife/technicalSchool.jpg'),
                tags: [this.$store.state.tags.technicalSchool, this.$store.state.tags.sql, this.$store.state.tags.visualBasic6, this.$store.state.tags.asp, this.$store.state.tags.vbScript, this.$store.state.tags.javascript, this.$store.state.tags.css, this.$store.state.tags.html,
                    this.$store.state.tags.c, this.$store.state.tags.cPlusPlus, this.$store.state.tags.pascal, this.$store.state.tags.delphi, this.$store.state.tags.php
                ],
                mainTags: [this.$store.state.tags.technicalSchool, this.$store.state.tags.sql, this.$store.state.tags.visualBasic6, this.$store.state.tags.asp, this.$store.state.tags.vbScript, this.$store.state.tags.javascript, this.$store.state.tags.css, this.$store.state.tags.html,
                    this.$store.state.tags.c, this.$store.state.tags.cPlusPlus, this.$store.state.tags.pascal, this.$store.state.tags.delphi, this.$store.state.tags.php
                ],
                links: [{
                        image: require('@/assets/certificates/etecAuxiliarInformatica.jpg'),
                        description: { "pt-BR": "CertificadoAuxiliarInformática", "en-US": "InformaticAuxiliaryCertificate" },
                        type: "certificate"
                    },
                    {
                        image: require('@/assets/certificates/etecProgramadorDeComputadores.jpg'),
                        description: { "pt-BR": "CertificadoProgramador", "en-US": "ProgrammerCertificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "ETEC-ZL", "en-US": "ETEC-ZL" },
                        url: "https://eteczonaleste.com.br/",
                        type: "link"
                    }
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2009-07-15"),
                category: this.$store.state.categoryType.academicLife,
                period: {
                    begin: '2006',
                    end: '2009'
                },
                title: {
                    "pt-BR": "FATEC-ZL - Faculdade de Técnologia Estadual",
                    "en-US": "FATEC-ZL - State Technology University",
                },
                subTitle: {
                    "pt-BR": "Informática para Gestão de Negócios",
                    "en-US": "Computer Science for Business Management",
                },
                description: {
                    "pt-BR": "Eu sempre quis ter sucesso trabalhando com TI, e meu segundo passo para criar uma boa base para o meu objetivo foi ir para a universidade. Eu fiz uma escolha diferente de curso, dei preferência a um curso de negócios em vez de um curso técnico, porque acreditava firmemente que essa opção seria melhor combinada com o meu conjunto de habilidades que adquiri na minha escola técnica.",
                    "en-US": "I always wanted to be success work with IT, and my second step to create a good base for my goal was to go to university. I did a different choice of course, I gave preference to a business course instead of a technical course, because I strongly believed that this choice would combine better with my skill set that I acquired in my technical school.",
                },
                image: require('@/assets/academicLife/university.jpg'),
                tags: [],
                links: [{
                        image: require('@/assets/certificates/fatecCertificate.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        image: require('@/assets/certificates/fatecUniversityDegree.jpg'),
                        description: { "pt-BR": "Diploma", "en-US": "UniversityDegree" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "TCC", "en-US": "TCC" },
                        url: "https://www.dropbox.com/s/vilzxxnmd0v7zxm/Jonathan Caravaggio Acquesta.pdf?dl=0",
                        type: "link"
                    },
                    {
                        description: { "pt-BR": "FATEC-ZL", "en-US": "FATEC-ZL" },
                        url: "http://www.fateczl.edu.br/",
                        type: "link"
                    }
                ],
                tags: [this.$store.state.tags.university, this.$store.state.tags.pmi, this.$store.state.tags.businessManagement, this.$store.state.tags.sql,
                    this.$store.state.tags.visualBasic6,
                    this.$store.state.tags.asp, this.$store.state.tags.vbScript, this.$store.state.tags.javascript, this.$store.state.tags.css, this.$store.state.tags.html,
                    this.$store.state.tags.java, this.$store.state.tags.php
                ],
                mainTags: [this.$store.state.tags.university, this.$store.state.tags.pmi, this.$store.state.tags.businessManagement, this.$store.state.tags.sql,
                    this.$store.state.tags.visualBasic6,
                    this.$store.state.tags.asp, this.$store.state.tags.vbScript, this.$store.state.tags.javascript, this.$store.state.tags.css, this.$store.state.tags.html,
                    this.$store.state.tags.java, this.$store.state.tags.php
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2019-08-15"),
                category: this.$store.state.categoryType.academicLife,
                period: {
                    begin: '2018',
                    end: '2020'
                },
                title: {
                    "pt-BR": "FATEC-SP - Centro Paula Souza",
                    "en-US": "FATEC-SP - Centro Paula Souza",
                },
                subTitle: {
                    "pt-BR": "MBA Excelência em Gestão de Projetos e Processos Organizacionais",
                    "en-US": "MBA Excellence in Project Management and Organizational Processes",
                },
                description: {
                    "pt-BR": "Trabalho na área de TI há doze anos e tive a oportunidade de atuar em muitas empresas e funções diferentes, por isso decidi dar mais um passo na minha carreira e o MBA em gerenciamento de projetos foi uma boa escolha para me mostrar muitos caminhos para que eu possa continuar evoluindo em minha carreira. Neste momento, terminei o curso e vou iniciar meu projeto de TCC.",
                    "en-US": "I have been working in IT area for the last twelve years, and I had the opportunity of work in many companies and different roles, so I decided that I want to give another step in my career and the MBA in project management was a good choice to show me many paths that make me able to continue evolving my career. At this moment, I have finished the course and I will start my TCC project.",
                },
                image: require('@/assets/academicLife/mba.jpg'),
                tags: [],
                links: [{
                    description: { "pt-BR": "MBA", "en-US": "MBA" },
                    url: "https://posgraduacao.cps.sp.gov.br/lato-sensu/",
                    type: "link"
                }],
                tags: [this.$store.state.tags.mba, this.$store.state.tags.pmi, this.$store.state.tags.scrum, this.$store.state.tags.coaching,
                    this.$store.state.tags.leadership, this.$store.state.tags.highPerformanceTeams, this.$store.state.tags.situationalLeadership,
                    this.$store.state.tags.criatitySolution, this.$store.state.tags.selfManagement, this.$store.state.tags.teamManagement,
                    this.$store.state.tags.businessProcess, this.$store.state.tags.negotiation
                ],
                mainTags: [this.$store.state.tags.mba, this.$store.state.tags.pmi, this.$store.state.tags.scrum, this.$store.state.tags.businessProcess,
                    this.$store.state.tags.leadership, this.$store.state.tags.highPerformanceTeams, this.$store.state.tags.situationalLeadership,
                    this.$store.state.tags.criatitySolution, this.$store.state.tags.teamManagement
                ],
                showDetail: true
            });
        },
        mountCourses(histories) {
            histories.push({
                date: new Date("2003-06-15"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "SENAI – Serviço Nacional de Aprendizagem Industrial",
                    "en-US": "SENAI - National Service for Industrial Learning",
                },
                subTitle: {
                    "pt-BR": "Curso de Montagem e Configuração de Micro, com duração de 3 meses",
                    "en-US": "Micro Assembly and Configuration Course, lasting 3 months",
                },
                description: {
                    "pt-BR": "Nessa época, eu tinha apenas 15 anos e estava realmente curioso sobre microcomputadores. Meu pai me ajudou a fazer meu primeiro curso na área de TI no SENAI e esse foi o primeiro passo para iniciar uma paixão.",
                    "en-US": "In this time, I was just 15 years old and I was really curious about microcomputers. My father helped me to do my first course at IT area in SENAI and that was the first step to start a passion.",
                },
                image: require('@/assets/courses/senai.jpg'),
                tags: [this.$store.state.tags.microAssembly],
                mainTags: [this.$store.state.tags.microAssembly],
                links: [{
                        image: require('@/assets/certificates/senaiMicrocomputadores.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "SENAI", "en-US": "SENAI" },
                        url: "http://www.sp.senai.br/cursos/18/cursos-tecnicos?menu=31",
                        type: "link"
                    }
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2004-10-15"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "CEDASPY – Cedaspy Computer Training",
                    "en-US": "CEDASPY – Cedaspy Computer Training",
                },
                subTitle: {
                    "pt-BR": "Curso para formação de Instrutores com duração de 3 meses",
                    "en-US": "Instructor training course, lasting 3 months",
                },
                description: {
                    "pt-BR": "Os melhores alunos da escola ganharam o curso de treinamento para instrutores como um prêmio pela dedicação e pelos resultados no curso principal, e eu consegui estar entre os melhores alunos. Foi uma ótima experiência, porque eu pude aprender na prática como ajudar os outros alunos a entender o que o professor estava ensinando.",
                    "en-US": "The best students in the school earned the instructor training course as a prize for the dedication and the results in the main course, and I achieved to be between the best students. It was a great experience, because I could learning in the practice how to help the other students to understand what the teacher was teaching.",
                },
                image: require('@/assets/courses/cedaspy.jpg'),
                tags: [this.$store.state.tags.instructor],
                mainTags: [this.$store.state.tags.instructor],
                links: [{
                        image: require('@/assets/certificates/cedaspyInstrutor.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "CEDASPY", "en-US": "CEDASPY" },
                        url: "https://www.cedaspy.com.br/",
                        type: "link"
                    }
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2005-07-15"),
                category: this.$store.state.categoryType.courses,
                period: {
                    begin: '2004',
                    end: '2005'
                },
                title: {
                    "pt-BR": "CEDASPY – Cedaspy Computer Training",
                    "en-US": "CEDASPY – Cedaspy Computer Training",
                },
                subTitle: {
                    "pt-BR": "Curso Técnico de Computação Jr",
                    "en-US": "Jr Computer Technician Course",
                },
                description: {
                    "pt-BR": "Este curso foi realmente ótimo para me mostrar muitas possibilidades sobre o trabalho com computador, tive a oportunidade de aprender o pacote office e outras ferramentas para criar vídeos e imagens.",
                    "en-US": "This course was really great to show me many possibilities about work with computer, I had an opportunity of learn the office package and other tools to create videos and images.",
                },
                image: require('@/assets/courses/cedaspy.jpg'),
                tags: [this.$store.state.tags.computing, this.$store.state.tags.excel, this.$store.state.tags.word, this.$store.state.tags.powerPoint,
                    this.$store.state.tags.outlook, this.$store.state.tags.coreldraw, this.$store.state.tags.movieMaker, this.$store.state.tags.access
                ],
                mainTags: [this.$store.state.tags.computing, this.$store.state.tags.excel, this.$store.state.tags.word, this.$store.state.tags.powerPoint,
                    this.$store.state.tags.outlook, this.$store.state.tags.coreldraw, this.$store.state.tags.movieMaker, this.$store.state.tags.access
                ],
                links: [{
                        image: require('@/assets/certificates/cedaspyTecnicoDeComputacaoJr.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "CEDASPY", "en-US": "CEDASPY" },
                        url: "https://www.cedaspy.com.br/",
                        type: "link"
                    }
                ],
                showDetail: false
            });



            histories.push({
                date: new Date("2005-05-15"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "DOM BOSCO – Obra Social Dom Bosco",
                    "en-US": "DOM BOSCO - Dom Bosco Social Work",
                },
                subTitle: {
                    "pt-BR": "Curso de Manutenção de Microcomputadores, com duração de 3 meses",
                    "en-US": "Microcomputer Maintenance Course, lasting 3 months",
                },
                description: {
                    "pt-BR": "Este curso foi uma oportunidade para aprender a consertar microcomputadores e me ajudou a começar a exporadicamente ganhar algum dinheiro, foi realmente ótimo para esse momento da minha vida e me deu uma boa base sobre como funciona o microcomputador.",
                    "en-US": "This course was an opportunity to learn how to repair microcomputers and helped me to start earning some money exporadically, it was really great for me on that moment of my life and gave me a good basis on how the microcomputer works.",
                },
                image: require('@/assets/courses/domBosco.jpg'),
                tags: [this.$store.state.tags.microAssembly, this.$store.state.tags.microcomputerMaintenance],
                mainTags: [this.$store.state.tags.microAssembly, this.$store.state.tags.microcomputerMaintenance],
                links: [{
                        image: require('@/assets/certificates/domBoscoMicrocomputadores.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "DomBosco", "en-US": "DomBosco" },
                        url: "http://www.domboscoitaquera.org.br/",
                        type: "link"
                    }
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2007-11-15"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Politec S/A – Global IT Services",
                    "en-US": "Politec S/A – Global IT Services",
                },
                subTitle: {
                    "pt-BR": "Curso de Trabalho em Equipe",
                    "en-US": "Teamwork Course",
                },
                description: {
                    "pt-BR": "A Politec foi minha primeira oportunidade de trabalho e tive sorte de iniciar uma empresa que realmente investe em sua equipe. Eu fiz o curso de trabalho em equipe e foi ótimo para aumentar meu conjunto de habilidades.",
                    "en-US": "Politec was my first job opportunity and I was luck for start in a company that really invest in its staff. I did the teamwork course and it was great for increase my skill set.",
                },
                image: require('@/assets/courses/politec.jpg'),
                tags: [this.$store.state.tags.teamwork],
                mainTags: [this.$store.state.tags.teamwork],
                links: [{
                        image: require('@/assets/certificates/politecTrabalhoEquipe.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "Politec", "en-US": "Politec" },
                        url: "http://www.politecincorporadora.com.br/empresa/",
                        type: "link"
                    }
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2007-11-30"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Politec S/A – Global IT Services",
                    "en-US": "Politec S/A – Global IT Services",
                },
                subTitle: {
                    "pt-BR": "Curso de Modelagem de Dados Junior",
                    "en-US": "Junior Data Modeling Course",
                },
                description: {
                    "pt-BR": "A Politec foi minha primeira oportunidade de trabalho e tive sorte de iniciar uma empresa que realmente investe em sua equipe. Eu fiz o curso de modelagem de dados junior e foi ótimo para aumentar meu conjunto de habilidades.",
                    "en-US": "Politec was my first job opportunity and I was luck for start in a company that really invest in its staff. I did the junior data modeling course and it was great for increase my skill set.",
                },
                image: require('@/assets/courses/politec.jpg'),
                tags: [this.$store.state.tags.dataModeling, this.$store.state.tags.sql],
                mainTags: [this.$store.state.tags.dataModeling, this.$store.state.tags.sql],
                links: [{
                        image: require('@/assets/certificates/politecModelagemDeDados.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "Politec", "en-US": "Politec" },
                        url: "http://www.politecincorporadora.com.br/empresa/",
                        type: "link"
                    }
                ],
                showDetail: false
            });


            histories.push({
                date: new Date("2007-12-20"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Politec S/A – Global IT Services",
                    "en-US": "Politec S/A – Global IT Services",
                },
                subTitle: {
                    "pt-BR": "Curso de UML Junior",
                    "en-US": "Junior UML Course",
                },
                description: {
                    "pt-BR": "A Politec foi minha primeira oportunidade de trabalho e tive sorte de iniciar uma empresa que realmente investe em sua equipe. Eu fiz o curso de UML junior e foi ótimo para aumentar meu conjunto de habilidades.",
                    "en-US": "Politec was my first job opportunity and I was luck for start in a company that really invest in its staff. I did the junior UML course and it was great for increase my skill set.",
                },
                image: require('@/assets/courses/politec.jpg'),
                tags: [this.$store.state.tags.uml],
                mainTags: [this.$store.state.tags.uml],
                links: [{
                        image: require('@/assets/certificates/politecUMLjr.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "Politec", "en-US": "Politec" },
                        url: "http://www.politecincorporadora.com.br/empresa/",
                        type: "link"
                    }
                ],
                showDetail: false
            });


            histories.push({
                date: new Date("2008-01-29"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Politec S/A – Global IT Services",
                    "en-US": "Politec S/A – Global IT Services",
                },
                subTitle: {
                    "pt-BR": "Curso de Visual Basic 6 Junior",
                    "en-US": "Junior Visual Basic 6 Course",
                },
                description: {
                    "pt-BR": "A Politec foi minha primeira oportunidade de trabalho e tive sorte de iniciar uma empresa que realmente investe em sua equipe. Eu fiz o curso de Visual Basic 6 junior e foi ótimo para aumentar meu conjunto de habilidades.",
                    "en-US": "Politec was my first job opportunity and I was luck for start in a company that really invest in its staff. I did the junior Visual Basic 6 course and it was great for increase my skill set.",
                },
                image: require('@/assets/courses/politec.jpg'),
                tags: [this.$store.state.tags.visualBasic6],
                mainTags: [this.$store.state.tags.visualBasic6],
                links: [{
                        image: require('@/assets/certificates/politecVisualBasic6jr.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "Politec", "en-US": "Politec" },
                        url: "http://www.politecincorporadora.com.br/empresa/",
                        type: "link"
                    }
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2008-02-05"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Politec S/A – Global IT Services",
                    "en-US": "Politec S/A – Global IT Services",
                },
                subTitle: {
                    "pt-BR": "Curso de ASP Junior",
                    "en-US": "Junior ASP Course",
                },
                description: {
                    "pt-BR": "A Politec foi minha primeira oportunidade de trabalho e tive sorte de iniciar uma empresa que realmente investe em sua equipe. Eu fiz o curso de ASP junior e foi ótimo para aumentar meu conjunto de habilidades.",
                    "en-US": "Politec was my first job opportunity and I was luck for start in a company that really invest in its staff. I did the junior ASP course and it was great for increase my skill set.",
                },
                image: require('@/assets/courses/politec.jpg'),
                tags: [this.$store.state.tags.asp],
                mainTags: [this.$store.state.tags.asp],
                links: [{
                        image: require('@/assets/certificates/politecASPjr.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "Politec", "en-US": "Politec" },
                        url: "http://www.politecincorporadora.com.br/empresa/",
                        type: "link"
                    }
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2008-05-19"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Politec S/A – Global IT Services",
                    "en-US": "Politec S/A – Global IT Services",
                },
                subTitle: {
                    "pt-BR": "Curso de CSS Visão Geral e Ambientação",
                    "en-US": "CSS Overview and Setting Course",
                },
                description: {
                    "pt-BR": "A Politec foi minha primeira oportunidade de trabalho e tive sorte de iniciar uma empresa que realmente investe em sua equipe. Eu fiz o curso de CSS e foi ótimo para aumentar meu conjunto de habilidades.",
                    "en-US": "Politec was my first job opportunity and I was luck for start in a company that really invest in its staff. I did the CSS course and it was great for increase my skill set.",
                },
                image: require('@/assets/courses/politec.jpg'),
                tags: [this.$store.state.tags.css],
                mainTags: [this.$store.state.tags.css],
                links: [{
                        image: require('@/assets/certificates/politecCSS.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "Politec", "en-US": "Politec" },
                        url: "http://www.politecincorporadora.com.br/empresa/",
                        type: "link"
                    }
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2008-06-04"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Politec S/A – Global IT Services",
                    "en-US": "Politec S/A – Global IT Services",
                },
                subTitle: {
                    "pt-BR": "Curso Processo de Gerenciamento de Incidentes e de Problemas",
                    "en-US": "Incident and Problem Management Process Course",
                },
                description: {
                    "pt-BR": "A Politec foi minha primeira oportunidade de trabalho e tive sorte de iniciar uma empresa que realmente investe em sua equipe. Eu fiz o curso de gerenciamento de incidentes e problemas e foi ótimo para aumentar meu conjunto de habilidades.",
                    "en-US": "Politec was my first job opportunity and I was luck for start in a company that really invest in its staff. I did the incident and problema management course and it was great for increase my skill set.",
                },
                image: require('@/assets/courses/politec.jpg'),
                tags: [this.$store.state.tags.incidentManagement, this.$store.state.tags.problemManagement],
                mainTags: [this.$store.state.tags.incidentManagement, this.$store.state.tags.problemManagement],
                links: [{
                        image: require('@/assets/certificates/politecProcessosGIP.jpg'),
                        description: { "pt-BR": "Certificado_I", "en-US": "Certificate_I" },
                        type: "certificate"
                    },
                    {
                        image: require('@/assets/certificates/politecRAS.jpg'),
                        description: { "pt-BR": "Certificado_II", "en-US": "Certificate_II" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "Politec", "en-US": "Politec" },
                        url: "http://www.politecincorporadora.com.br/empresa/",
                        type: "link"
                    }
                ],
                showDetail: false
            })

            histories.push({
                date: new Date("2008-06-26"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Politec S/A – Global IT Services",
                    "en-US": "Politec S/A – Global IT Services",
                },
                subTitle: {
                    "pt-BR": "Curso Processo de Apoio ao Desenvolvimento de Software",
                    "en-US": "Software Development Support Process Course",
                },
                description: {
                    "pt-BR": "A Politec foi minha primeira oportunidade de trabalho e tive sorte de iniciar uma empresa que realmente investe em sua equipe. Eu fiz o curso de CMMI5 e foi ótimo para aumentar meu conjunto de habilidades.",
                    "en-US": "Politec was my first job opportunity and I was luck for start in a company that really invest in its staff. I did the CMMI5 course and it was great for increase my skill set.",
                },
                image: require('@/assets/courses/politec.jpg'),
                tags: [this.$store.state.tags.cmmi5],
                mainTags: [this.$store.state.tags.cmmi5],
                links: [{
                        image: require('@/assets/certificates/politecProcessoDS.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "Politec", "en-US": "Politec" },
                        url: "http://www.politecincorporadora.com.br/empresa/",
                        type: "link"
                    }
                ],
                showDetail: false
            })
        },
        mountYears(histories) {
            this.$store.state.years = histories.map(x => x.date.getFullYear()).filter((value, index, self) => { return self.indexOf(value) === index; }).map(function(x, index) { return { year: x, show: false }; });
            this.$store.state.years[0].show = true;
            this.$store.state.years[1].show = true;
            this.$store.state.years[2].show = true;
            this.$store.state.years[this.$store.state.years.length - 1].show = true;
        }
    },
    mounted() {
        var histories = [];

        this.mountCertifications(histories);
        this.mountBooks(histories);
        this.mountProfessionExperiences(histories);
        this.mountAcademicLife(histories);
        this.mountCourses(histories);

        histories.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });

        this.$store.state.histories = histories;

        this.mountYears(histories);
    },
}).$mount("#app");