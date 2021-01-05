const books = {
    data() {
        return {

        }
    },
    methods: {
        mountBooks(histories) {


            histories.push({
                date: new Date("2021-01-01"),
                category: this.$store.state.categoryType.books,
                author: "Fabricio Teixeira",
                title: {
                    "pt-BR": "UX Design",
                    "en-US": "UX Design",
                },
                subTitle: {
                    "pt-BR": "Introdução e boas práticas em UX Design",
                    "en-US": "Introduction and good practices in UX Design",
                },
                image: require('@/assets/books/uxDesign.jpg'),
                tags: [this.$store.state.tags.ux],
            });

            histories.push({
                date: new Date("2020-11-22"),
                category: this.$store.state.categoryType.books,
                author: "Mary Provinciatto e Paulo Caroli",
                title: {
                    "pt-BR": "Sprint a Sprint",
                    "en-US": "Sprint to Sprint",
                },
                subTitle: {
                    "pt-BR": "Erros e acertos na transformação cultural de um time ágil",
                    "en-US": "Mistakes and successes in the cultural transformation of an agile team",
                },
                image: require('@/assets/books/sprintASprint.jpg'),
                tags: [this.$store.state.tags.kanban, this.$store.state.tags.scrum, this.$store.state.tags.spotifyModel, this.$store.state.tags.okr, this.$store.state.tags.devOps, this.$store.state.tags.leanInception, this.$store.state.tags.designThinking, this.$store.state.tags.mvp],
            });

            histories.push({
                date: new Date("2020-10-29"),
                category: this.$store.state.categoryType.books,
                author: "Paulo Caroli",
                title: {
                    "pt-BR": "Diagrama de Fluxo Cumulativo",
                    "en-US": "Cumulative Flow Diagram",
                },
                subTitle: {
                    "pt-BR": "Uma ferramenta valiosa para melhorar o fluxo de trabalho",
                    "en-US": "A valuable tool for improving workflow",
                },
                image: require('@/assets/books/diagramaDeFluxoCumulativo.jpg'),
                tags: [this.$store.state.tags.leanInception, this.$store.state.tags.designThinking, this.$store.state.tags.mvp],
            });

            histories.push({
                date: new Date("2020-10-18"),
                category: this.$store.state.categoryType.books,
                author: "Paulo Caroli",
                title: {
                    "pt-BR": "Direto ao Ponto",
                    "en-US": "Direct to the Point",
                },
                subTitle: {
                    "pt-BR": "Criando produtos de forma enxuta",
                    "en-US": "Creating products in a lean way",
                },
                description: {
                    "pt-BR": "Direto ao ponto é uma ótima leitura para compreensão da combinação de Lean Inception e Design Thinking de uma forma estruturada para se construir MVPs capazes de falhar cedo e gerar aprendizado rápido em busca de oportunidades de negócio.",
                    "en-US": "Straight to the point is a great read to understand the combination of Lean Inception and Design Thinking in a structured way to build MVPs capable of failing early and generating quick learning in search of business opportunities.",
                },
                image: require('@/assets/books/diretoAoPonto.jpg'),
                tags: [this.$store.state.tags.leanInception, this.$store.state.tags.designThinking, this.$store.state.tags.mvp],
                showDetail: false
            });

            histories.push({
                date: new Date("2020-04-02"),
                category: this.$store.state.categoryType.books,
                author: "James Turner",
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
                showDetail: false
            });

            histories.push({
                date: new Date("2020-02-05"),
                category: this.$store.state.categoryType.books,
                author: "Jaques Grinberg e Jorge Penilo",
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
                showDetail: false
            });


            histories.push({
                date: new Date("2019-10-02"),
                category: this.$store.state.categoryType.books,
                author: "Klaus Schwab",
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
                showDetail: false
            });


            histories.push({
                date: new Date("2019-09-15"),
                category: this.$store.state.categoryType.books,
                author: "Jeff Sutherland e JJ Sutherland",
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
                showDetail: false
            });


            histories.push({
                date: new Date("2020-05-11"),
                category: this.$store.state.categoryType.books,
                author: "John Doerr",
                title: {
                    "pt-BR": "Avalie o que importa",
                    "en-US": "Measure what matters",
                },
                subTitle: {
                    "pt-BR": "Como o Google, Bono Vox, e a Fundação Gates sacudiram o mundo com os OKRs",
                    "en-US": "How Google, Bono, and the Gates Foundation Rock the World with OKRs",
                },
                description: {
                    "pt-BR": "O livro Avalie o que importa: como o Google, Bono Vox e a Fundação Gates sacudiram o mundo com os OKRs foi escrito por John Doerr, eu realmente gostei deste livro que me mostrou como os OKRs e os CRFs têm um forte poder de engajar as pessoas para mudar o mundo, eu acredito firmemente que essas ferramentas podem ser utilizadas em conjunto com práticas ágeis e tornar as empresas ágeis mais organizadas e com foco no que importa.",
                    "en-US": "The book Measure what matter: How Google, Bono, and the Gates Foundation Rock the World with OKRs was written by John Doerr, I really appreciated this book that showed to me how OKRs and CRFs have a strong power to engaging people to change the world, I strong believe that this tools could be mixed with agile practices and became agile companies more organized and with focus on what matters.",
                },
                image: require('@/assets/books/avalieOQueImporta.jpg'),
                tags: [this.$store.state.tags.okr, this.$store.state.tags.cfr, this.$store.state.tags.engagement, this.$store.state.tags.teamwork, this.$store.state.tags.teamManagement, this.$store.state.tags.feedback, this.$store.state.tags.challengingGoal],
                showDetail: false
            });

            histories.push({
                date: new Date("2019-09-15"),
                category: this.$store.state.categoryType.books,
                author: "Masaaki Imai",
                title: {
                    "pt-BR": "Gemba Kaizen",
                    "en-US": "Gemba Kaizen",
                },
                subTitle: {
                    "pt-BR": "Uma abordagem de bom senso à estratégia de melhoria contínua",
                    "en-US": "A common sense approach to continuous improvement strategy",
                },
                image: require('@/assets/books/gembaKaisen.jpg'),
                tags: [this.$store.state.tags.continuousEvolution, this.$store.state.tags.kaisen, this.$store.state.tags.gemba, this.$store.state.tags.kanban],
            });

            histories.push({
                date: new Date("2019-08-15"),
                category: this.$store.state.categoryType.books,
                author: "Vinícius Manhães Teles",
                title: {
                    "pt-BR": "Extreme Programming",
                    "en-US": "Extreme Programming",
                },
                subTitle: {
                    "pt-BR": "Aprenda como encantar seus usuários desenvolvendo software com agilidade e alta qualidade",
                    "en-US": "Learn how to delight your users by developing software with agility and high quality",
                },
                image: require('@/assets/books/extremeProgramming.jpg'),
                tags: [this.$store.state.tags.extremeProgramming, this.$store.state.tags.TDD, this.$store.state.tags.unitTest, this.$store.state.tags.integratedTest, this.$store.state.tags.codeCoverage, this.$store.state.tags.continuousDelivery, this.$store.state.tags.refactoring]
            });

            histories.push({
                date: new Date("2019-07-15"),
                category: this.$store.state.categoryType.books,
                author: "Eric Ries",
                title: {
                    "pt-BR": "A Startup Enxuta",
                    "en-US": "The Lean Startup",
                },
                subTitle: {
                    "pt-BR": "Como os Empreendedores atuais utilizam a inovação contínua para criar empresas extremamente bem-sucedidas",
                    "en-US": "How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
                },
                image: require('@/assets/books/aStartupEnxuta.jpg'),
                tags: [this.$store.state.tags.lean, this.$store.state.tags.mvp, this.$store.state.tags.startup, this.$store.state.tags.continuousEvolution]
            });

            histories.push({
                date: new Date("2019-06-15"),
                category: this.$store.state.categoryType.books,
                author: "Tim Brown",
                title: {
                    "pt-BR": "Design Thinking",
                    "en-US": "Design Thinking",
                },
                subTitle: {
                    "pt-BR": "Uma metodologia poderosa para decretar o fim das velhas ideias",
                    "en-US": "A powerful methodology to enact the end of old ideas",
                },
                image: require('@/assets/books/designThinking.jpg'),
                tags: [this.$store.state.tags.designThinking, this.$store.state.tags.innovation]
            });

            histories.push({
                date: new Date("2019-06-02"),
                category: this.$store.state.categoryType.books,
                author: "Rafael Helm e Daniel Wildt",
                title: {
                    "pt-BR": "Histórias de Usuário",
                    "en-US": "User Stories",
                },
                subTitle: {
                    "pt-BR": "Por que e como escrever requisitos de forma ágil",
                    "en-US": "Why and how to write requirements in an agile way",
                },
                image: require('@/assets/books/userStories.jpg'),
                tags: [this.$store.state.tags.userStories, this.$store.state.tags.agile, this.$store.state.tags.requirements]
            });


            histories.push({
                date: new Date("2019-05-15"),
                category: this.$store.state.categoryType.books,
                author: "Paulo Caroli",
                title: {
                    "pt-BR": "Lean Inception",
                    "en-US": "Lean Inception",
                },
                subTitle: {
                    "pt-BR": "Como alinhar pessoas e construir o produto certo",
                    "en-US": "How to align people and build the right product",
                },
                image: require('@/assets/books/leanInception.jpg'),
                tags: [this.$store.state.tags.leanInception, this.$store.state.tags.mvp, this.$store.state.tags.innovation]
            });

            histories.push({
                date: new Date("2019-03-15"),
                category: this.$store.state.categoryType.books,
                author: "Gene Kim, Jez Humble, Patrick Debois e John Willis",
                title: {
                    "pt-BR": "Manual de DevOps",
                    "en-US": "The DevOps Handbook",
                },
                subTitle: {
                    "pt-BR": "Como obter agilidade, confiabilidade e segurança em organizações tecnológicas",
                    "en-US": "How to Create World-Class Agility, Reliability, and Security in Technology Organizations",
                },
                image: require('@/assets/books/devOps.jpg'),
                tags: [this.$store.state.tags.devOps]
            });

            histories.push({
                date: new Date("2020-05-20"),
                category: this.$store.state.categoryType.books,
                author: "Jurgen Appelo",
                title: {
                    "pt-BR": "Management 3.0",
                    "en-US": "Management 3.0",
                },
                subTitle: {
                    "pt-BR": "Conduzindo Desenvolvedore Ágeis, Desenvolvendo Lider Ágil",
                    "en-US": "Leading Agile Developers, Developing Agile Leader",
                },
                image: require('@/assets/books/management30.jpg'),
                tags: [this.$store.state.tags.inProgress, this.$store.state.tags.management30]
            });

            histories.push({
                date: new Date("2019-01-20"),
                category: this.$store.state.categoryType.books,
                author: "Augusto Cury",
                title: {
                    "pt-BR": "Prisioneiros da Mente",
                    "en-US": "Prisoners of the Mind",
                },
                subTitle: {
                    "pt-BR": "Os cárceres mentais",
                    "en-US": "Mental prisons",
                },
                image: require('@/assets/books/prisioneirosDaMente.jpg'),
                tags: [this.$store.state.tags.humanMind]
            });

            histories.push({
                date: new Date("2018-12-20"),
                category: this.$store.state.categoryType.books,
                author: "Augusto Cury",
                title: {
                    "pt-BR": "Ansiedade",
                    "en-US": "Anxiety",
                },
                subTitle: {
                    "pt-BR": "Como enfrentar o mal do século",
                    "en-US": "How to face the evil of the century",
                },
                image: require('@/assets/books/ansiedade.jpg'),
                tags: [this.$store.state.tags.anxiety, this.$store.state.tags.humanMind]
            });

            histories.push({
                date: new Date("2018-11-20"),
                category: this.$store.state.categoryType.books,
                author: "Alvaro Fernando",
                title: {
                    "pt-BR": "Comunicação e Persuasão",
                    "en-US": "Communication and Persuasion",
                },
                subTitle: {
                    "pt-BR": "O Poder do Diálogo",
                    "en-US": "The Power of Dialogue",
                },
                image: require('@/assets/books/comunicacaoPersuasao.jpg'),
                tags: [this.$store.state.tags.communication, this.$store.state.tags.persuasion]
            });

            histories.push({
                date: new Date("2018-09-20"),
                category: this.$store.state.categoryType.books,
                author: "Carol S. Dweck",
                title: {
                    "pt-BR": "MindSet",
                    "en-US": "MindSet",
                },
                subTitle: {
                    "pt-BR": "A nova psicologia do sucesso",
                    "en-US": "The new psychology of success",
                },
                image: require('@/assets/books/mindSet.jpg'),
                tags: [this.$store.state.tags.humanMind]
            });

            histories.push({
                date: new Date("2018-08-20"),
                category: this.$store.state.categoryType.books,
                author: "Tom Rath e Donald O. Clifton",
                title: {
                    "pt-BR": "Seu Balde está cheio?",
                    "en-US": "Is your bucket full?",
                },
                subTitle: {
                    "pt-BR": "O poder transformador das emoções positivas na vida profissional e afetiva",
                    "en-US": "The transforming power of positive emotions in professional and affective life",
                },
                image: require('@/assets/books/baldeCheio.jpg'),
                tags: [this.$store.state.tags.feedback]
            });

            histories.push({
                date: new Date("2018-07-20"),
                category: this.$store.state.categoryType.books,
                author: "Geoff Colvin",
                title: {
                    "pt-BR": "Os humanos subestimados",
                    "en-US": "Underestimated humans",
                },
                subTitle: {
                    "pt-BR": "O que as pessoas de sucesso sabem que as máquinas mais brilhantes jamais saberão",
                    "en-US": "What successful people know that the brightest machines will never know",
                },
                image: require('@/assets/books/osHumanosSubestimados.jpg'),
                tags: [this.$store.state.tags.empathy, this.$store.state.tags.teamwork]
            });

            histories.push({
                date: new Date("2018-07-10"),
                category: this.$store.state.categoryType.books,
                author: "Richard L. Williams",
                title: {
                    "pt-BR": "Preciso saber se estou indo bem!",
                    "en-US": "I need to know if I'm doing well!",
                },
                subTitle: {
                    "pt-BR": "Uma história sobre a importância de dar e receber feedback",
                    "en-US": "A story about the importance of giving and receiving feedback",
                },
                image: require('@/assets/books/precisoSaber.jpg'),
                tags: [this.$store.state.tags.feedback]
            });

            histories.push({
                date: new Date("2014-01-10"),
                category: this.$store.state.categoryType.books,
                author: "Jeffrey Palermo, Ben Sheirman e Jimmy Bogard",
                title: {
                    "pt-BR": "ASP.NET MVC 4 em Ação",
                    "en-US": "ASP.NET MVC 4 In Action",
                },
                subTitle: {
                    "pt-BR": "Em Ação",
                    "en-US": "In Action",
                },
                image: require('@/assets/books/aspNetMVC4.jpg'),
                tags: [this.$store.state.tags.aspNetMVC]
            });


            histories.push({
                date: new Date("2014-06-10"),
                category: this.$store.state.categoryType.books,
                author: "Eric Freeman & Elisabeth Freeman",
                title: {
                    "pt-BR": "Use a Cabeça!",
                    "en-US": "Head First!",
                },
                subTitle: {
                    "pt-BR": "Padrões de Projetos",
                    "en-US": "Design Patterns",
                },
                image: require('@/assets/books/designPattern.jpg'),
                tags: [this.$store.state.tags.designPattern]
            });

            histories.push({
                date: new Date("2010-04-10"),
                category: this.$store.state.categoryType.books,
                author: "John Sharp",
                title: {
                    "pt-BR": "Microsoft Visual C# 2008",
                    "en-US": "Microsoft Visual C# 2008",
                },
                subTitle: {
                    "pt-BR": "Passo a Passo",
                    "en-US": "Step by Step",
                },
                image: require('@/assets/books/cSharp.jpg'),
                tags: [this.$store.state.tags.cSharp]
            });

            histories.push({
                date: new Date("2009-04-10"),
                category: this.$store.state.categoryType.books,
                author: "Luis Abreu",
                title: {
                    "pt-BR": "Silverlight 4.0",
                    "en-US": "Silverlight 4.0",
                },
                subTitle: {
                    "pt-BR": "Curso Completo",
                    "en-US": "Full Course",
                },
                image: require('@/assets/books/silverlight4.jpg'),
                tags: [this.$store.state.tags.designPattern]
            });


            histories.push({
                date: new Date("2007-04-10"),
                category: this.$store.state.categoryType.books,
                author: "José Augusto N. G. Manzano",
                title: {
                    "pt-BR": "Estudo Dirigido SQL",
                    "en-US": "SQL Directed Study",
                },
                subTitle: {
                    "pt-BR": "Structured Query Language",
                    "en-US": "Structured Query Language",
                },
                image: require('@/assets/books/sql.jpg'),
                tags: [this.$store.state.tags.sql]
            });


        },
    },
}

export default books;