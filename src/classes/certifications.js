const certifications = {
    data() {
        return {

        }
    },
    methods: {
        mountCertifications(histories) {
            histories.push({
                date: new Date("2021-08-19"),
                category: this.$store.state.categoryType.certifications,
                title: {
                    "pt-BR": "Kanban University - KMP I",
                    "en-US": "Kanban University - KMP I",
                },
                subTitle: {
                    "pt-BR": "Kanban System Design",
                    "en-US": "Kanban System Design",
                },
                description: {
                    "pt-BR": "Método Kanban é algo que está em minha vida a mais de uma década, mesmo assim decidi dar mais um passo em busca de aprimoramento. O treinamento realmente nós trás novas forma de ver o sistema e ideias para continuar de forma empírica aprimorando a gestão visual e facilitando a evolução das equipes.",
                    "en-US": "Kanban Method is something that has been in my life for more than a decade, but I decided to go one step further in search of improvements. The training really brings us new ways of seeing the system and ideas to continue in an empirical way, improving visual management and facilitating the evolution of teams.",
                },
                image: require('@/assets/certifications/kanbanUniversity.png'),
                links: [{
                        image: require('@/assets/certificates/kmpI.png'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "Kanban University", "en-US": "Kanban University" },
                        url: "https://kanban.university/",
                        type: "link"
                    },
                    {
                        description: { "pt-BR": "K21", "en-US": "K21 " },
                        url: "https://k21.global/treinamentos/kanban-oficial-lku?id=2",
                        type: "link"
                    }
                ],
                tags: [this.$store.state.tags.kanban],
                showDetail: false
            });


            histories.push({
                date: new Date("2019-02-02"),
                category: this.$store.state.categoryType.certifications,
                title: {
                    "pt-BR": "Scrum.org - PSM I",
                    "en-US": "Scrum.org - PSM I",
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
                showDetail: false
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
                        url: "https://github.com/jonathan-acquesta/Personal-Page/raw/master/personal-page/src/assets/microsoft_certified_professional_transcript.pdf",
                        type: "link"
                    }
                ],
                tags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.aspNet, this.$store.state.tags.cSharp],
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
                        url: "https://github.com/jonathan-acquesta/Personal-Page/raw/master/personal-page/src/assets/microsoft_certified_professional_transcript.pdf",
                        type: "link"
                    }
                ],
                tags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.aspNet, this.$store.state.tags.cSharp],
                showDetail: false
            });
        },
    },
}

export default certifications;