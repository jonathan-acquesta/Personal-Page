const books = {
    data() {
        return {

        }
    },
    methods: {
        mountBooks(histories) {

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


        },
    },
}

export default books;