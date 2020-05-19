const courses = {
    data() {
        return {

        }
    },
    methods: {
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
                resumeTags: [this.$store.state.tags.microAssembly],
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
                resumeTags: [this.$store.state.tags.instructor],
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
                resumeTags: [this.$store.state.tags.computing, this.$store.state.tags.excel, this.$store.state.tags.word, this.$store.state.tags.powerPoint,
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
                resumeTags: [this.$store.state.tags.microAssembly, this.$store.state.tags.microcomputerMaintenance],
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
                resumeTags: [this.$store.state.tags.teamwork],
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
                resumeTags: [this.$store.state.tags.dataModeling, this.$store.state.tags.sql],
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
                resumeTags: [this.$store.state.tags.uml],
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
                resumeTags: [this.$store.state.tags.visualBasic6],
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
                resumeTags: [this.$store.state.tags.asp],
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
                resumeTags: [this.$store.state.tags.css],
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
                resumeTags: [this.$store.state.tags.incidentManagement, this.$store.state.tags.problemManagement],
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
                resumeTags: [this.$store.state.tags.cmmi5],
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

            histories.push({
                date: new Date("2010-11-12"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Ka Solution - Microsoft Partner",
                    "en-US": "Ka Solution - Microsoft Partner",
                },
                subTitle: {
                    "pt-BR": "6464 - Visual Studio 2008 ADO.NET 3.2",
                    "en-US": "6464 - Visual Studio 2008 ADO.NET 3.2",
                },
                description: {
                    "pt-BR": "O curso 6464 - Visual Studio 2008 ADO.NET 3.2 foi uma grande oportunidade que me ajudou a melhorar minha formação técnica, além de me ajudar no teste de certificação da Microsoft.",
                    "en-US": "The 6464 - Visual Studio 2008 ADO.NET 3.2 course was a great opportunity that help me to improve my technical background beside that help me with my Microsoft certification test.",
                },
                image: require('@/assets/courses/kaSolution.jpg'),
                tags: [this.$store.state.tags.adoNet, this.$store.state.tags.sql],
                mainTags: [this.$store.state.tags.adoNet, this.$store.state.tags.sql],
                resumeTags: [this.$store.state.tags.adoNet, this.$store.state.tags.sql],
                links: [{
                        image: require('@/assets/certificates/microsoftKaSolution6464.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "KaSolution", "en-US": "KaSolution" },
                        url: "https://www.kasolution.com.br/Microsoft",
                        type: "link"
                    }
                ],
                showDetail: false
            })

            histories.push({
                date: new Date("2010-11-08"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Ka Solution - Microsoft Partner",
                    "en-US": "Ka Solution - Microsoft Partner",
                },
                subTitle: {
                    "pt-BR": "2310 - Developing Microsoft ASP.NET Web Applications Using Visual Studio .Net",
                    "en-US": "2310 - Developing Microsoft ASP.NET Web Applications Using Visual Studio .Net",
                },
                description: {
                    "pt-BR": "O curso 2310 - Developing Microsoft ASP.NET Web Applications Using Visual Studio .Net foi uma grande oportunidade que me ajudou a melhorar minha formação técnica, além de me ajudar no teste de certificação da Microsoft.",
                    "en-US": "The 2310 - Developing Microsoft ASP.NET Web Applications Using Visual Studio .Net Course was a great opportunity that help me to improve my technical background beside that help me with my Microsoft certification test.",
                },
                image: require('@/assets/courses/kaSolution.jpg'),
                tags: [this.$store.state.tags.aspNet, this.$store.state.tags.adoNet],
                mainTags: [this.$store.state.tags.adoNet, this.$store.state.tags.sql],
                resumeTags: [this.$store.state.tags.adoNet, this.$store.state.tags.sql],
                links: [{
                        image: require('@/assets/certificates/microsoftKaSolution2310.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "KaSolution", "en-US": "KaSolution" },
                        url: "https://www.kasolution.com.br/Microsoft",
                        type: "link"
                    }
                ],
                showDetail: false
            })


            histories.push({
                date: new Date("2010-12-02"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Ka Solution - Microsoft Partner",
                    "en-US": "Ka Solution - Microsoft Partner",
                },
                subTitle: {
                    "pt-BR": "2956 - Core Foundations of Microsoft .NET 2.0 Development",
                    "en-US": "2956 - Core Foundations of Microsoft .NET 2.0 Development",
                },
                description: {
                    "pt-BR": "O curso 2956 - Core Foundations of Microsoft .NET 2.0 Development foi uma grande oportunidade que me ajudou a melhorar minha formação técnica, além de me ajudar no teste de certificação da Microsoft.",
                    "en-US": "The 2956 - Core Foundations of Microsoft .NET 2.0 Development Course was a great opportunity that help me to improve my technical background beside that help me with my Microsoft certification test.",
                },
                image: require('@/assets/courses/kaSolution.jpg'),
                tags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.cSharp],
                mainTags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.cSharp],
                resumeTags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.cSharp],
                links: [{
                        image: require('@/assets/certificates/microsoftKaSolution2956.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "KaSolution", "en-US": "KaSolution" },
                        url: "https://www.kasolution.com.br/Microsoft",
                        type: "link"
                    }
                ],
                showDetail: false
            })

            histories.push({
                date: new Date("2011-01-07"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Ka Solution - Microsoft Partner",
                    "en-US": "Ka Solution - Microsoft Partner",
                },
                subTitle: {
                    "pt-BR": "2957 - Advanced Foundations of Microsoft .NET 2.0 Development",
                    "en-US": "2957 - Advanced Foundations of Microsoft .NET 2.0 Development",
                },
                description: {
                    "pt-BR": "O curso 2957 - Advanced Foundations of Microsoft .NET 2.0 Development foi uma grande oportunidade que me ajudou a melhorar minha formação técnica, além de me ajudar no teste de certificação da Microsoft.",
                    "en-US": "The 2957 - Advanced Foundations of Microsoft .NET 2.0 Development Course was a great opportunity that help me to improve my technical background beside that help me with my Microsoft certification test.",
                },
                image: require('@/assets/courses/kaSolution.jpg'),
                tags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.cSharp],
                mainTags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.cSharp],
                resumeTags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.cSharp],
                links: [{
                        image: require('@/assets/certificates/microsoftKaSolution2957.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "KaSolution", "en-US": "KaSolution" },
                        url: "https://www.kasolution.com.br/Microsoft",
                        type: "link"
                    }
                ],
                showDetail: false
            })


            histories.push({
                date: new Date("2013-09-27"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Ka Solution - Microsoft Partner",
                    "en-US": "Ka Solution - Microsoft Partner",
                },
                subTitle: {
                    "pt-BR": "20480 - Programming in HTML5 with Javascript and CSS3",
                    "en-US": "20480 - Programming in HTML5 with Javascript and CSS3",
                },
                description: {
                    "pt-BR": "O curso 20480 - Programming in HTML5 with Javascript and CSS3 foi uma grande oportunidade que me ajudou a melhorar minha formação técnica e me manter em constante evolução.",
                    "en-US": "The 20480 - Programming in HTML5 with Javascript and CSS3 Course was a great opportunity that help me to improve my technical background, and keep me on continues evolution.",
                },
                image: require('@/assets/courses/kaSolution.jpg'),
                tags: [this.$store.state.tags.html, this.$store.state.tags.javascript, this.$store.state.tags.css],
                mainTags: [this.$store.state.tags.html, this.$store.state.tags.javascript, this.$store.state.tags.css],
                resumeTags: [this.$store.state.tags.html, this.$store.state.tags.javascript, this.$store.state.tags.css],
                links: [{
                        image: require('@/assets/certificates/microsoftKaSolution20480.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "KaSolution", "en-US": "KaSolution" },
                        url: "https://www.kasolution.com.br/Microsoft",
                        type: "link"
                    }
                ],
                showDetail: false
            })


            histories.push({
                date: new Date("2013-11-14"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Ka Solution - Microsoft Partner",
                    "en-US": "Ka Solution - Microsoft Partner",
                },
                subTitle: {
                    "pt-BR": "20486 - Developing ASP.NET MVC 4 Web Applications - Visual Studio 2012",
                    "en-US": "20486 - Developing ASP.NET MVC 4 Web Applications - Visual Studio 2012",
                },
                description: {
                    "pt-BR": "O curso 20486 - Developing ASP.NET MVC 4 Web Applications - Visual Studio 2012 foi uma grande oportunidade que me ajudou a melhorar minha formação técnica e me manter em constante evolução.",
                    "en-US": "The 20486 - Developing ASP.NET MVC 4 Web Applications - Visual Studio 2012 Course was a great opportunity that help me to improve my technical background, and keep me on continues evolution.",
                },
                image: require('@/assets/courses/kaSolution.jpg'),
                tags: [this.$store.state.tags.aspNetMVC],
                mainTags: [this.$store.state.tags.aspNetMVC],
                resumeTags: [this.$store.state.tags.aspNetMVC],
                links: [{
                        image: require('@/assets/certificates/microsoftKaSolution20486.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "KaSolution", "en-US": "KaSolution" },
                        url: "https://www.kasolution.com.br/Microsoft",
                        type: "link"
                    }
                ],
                showDetail: false
            })


            histories.push({
                date: new Date("2014-12-05"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Ka Solution - Microsoft Partner",
                    "en-US": "Ka Solution - Microsoft Partner",
                },
                subTitle: {
                    "pt-BR": "20487 - Developing Windows Azure and Web Services - Visual Studio 2012",
                    "en-US": "20487 - Developing Windows Azure and Web Services - Visual Studio 2012",
                },
                description: {
                    "pt-BR": "O curso 20487 - Developing Windows Azure and Web Services - Visual Studio 2012 foi uma grande oportunidade que me ajudou a melhorar minha formação técnica e me manter em constante evolução.",
                    "en-US": "The 20487 - Developing Windows Azure and Web Services - Visual Studio 2012 Course was a great opportunity that help me to improve my technical background, and keep me on continues evolution.",
                },
                image: require('@/assets/courses/kaSolution.jpg'),
                tags: [this.$store.state.tags.azure, this.$store.state.tags.webServices],
                mainTags: [this.$store.state.tags.azure, this.$store.state.tags.webServices],
                resumeTags: [this.$store.state.tags.azure, this.$store.state.tags.webServices],
                links: [{
                        image: require('@/assets/certificates/microsoftKaSolution20487.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "KaSolution", "en-US": "KaSolution" },
                        url: "https://www.kasolution.com.br/Microsoft",
                        type: "link"
                    }
                ],
                showDetail: false
            })


            histories.push({
                date: new Date("2015-01-22"),
                category: this.$store.state.categoryType.courses,
                title: {
                    "pt-BR": "Ka Solution",
                    "en-US": "Ka Solution",
                },
                subTitle: {
                    "pt-BR": "1001 - SCRUM Gestão Ágil de Projetos",
                    "en-US": "1001 - SCRUM Gestão Ágil de Projetos",
                },
                description: {
                    "pt-BR": "O 1001 - SCRUM Agile Project Management foi ótimo para consolidar minha experiência com o SCRUM e formalizar meus conhecimentos sobre esse assunto.",
                    "en-US": "The 1001 - SCRUM Agile Project Management was great to consolidate my experience with SCRUM and formalize my knowledge with this matter.",
                },
                image: require('@/assets/courses/kaSolution.jpg'),
                tags: [this.$store.state.tags.scrum],
                mainTags: [this.$store.state.tags.scrum],
                resumeTags: [this.$store.state.tags.scrum],
                links: [{
                        image: require('@/assets/certificates/kaSolution1001Scrum.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "KaSolution", "en-US": "KaSolution" },
                        url: "https://www.kasolution.com.br/Microsoft",
                        type: "link"
                    }
                ],
                showDetail: false
            })


        },
    },
}

export default courses;