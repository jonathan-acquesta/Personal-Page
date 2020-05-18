import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        culture: 'en-US',
        common: {
            applicationTitle: { "pt-BR": "Meu Currículo Vivo", "en-US": "My Live Resume" },
            portfolio: { "pt-BR": "Portfólio", "en-US": "Portfolio" },
            languages: {
                portuguese: { "pt-BR": "Português", "en-US": "Portuguese", "language": "pt-BR" },
                english: { "pt-BR": "Inglês", "en-US": "English", "language": "en-US" },
            },
            showDetails: { "pt-BR": "Mostrar Detalhes", "en-US": "Show Details" },
            closeDetails: { "pt-BR": "Fechar Detalhes", "en-US": "Close Details" },
            from: { "pt-BR": "De", "en-US": "From" },
            to: { "pt-BR": "Até", "en-US": "To" },
            yearOf: { "pt-BR": "Ano de", "en-US": "Year" },
            showYear: { "pt-BR": "Mostrar detalhes deste ano", "en-US": "Show details for this year" },
            closeYear: { "pt-BR": "Minimizar detalhes deste ano", "en-US": "Minimize details for this year" },
        },
        months: {
            "pt-BR": [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ],
            "en-US": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
        },
        icons: [
            { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/jonathan-caravaggio-acquesta-a26a4422/' },
            { icon: 'fab fa-github', url: 'https://github.com/jonathan-acquesta' },
            { icon: 'fab fa-stack-overflow', url: 'https://stackoverflow.com/users/9547421/jonathan-caravaggio-acquesta' },
            { icon: 'fab fa-youtube', url: 'https://www.youtube.com/channel/UC9dky_d4FDcHUc13iwA19-w?view_as=subscriber' },
            { icon: 'fab fa-medium', url: 'https://medium.com/@jcagames' },
            { icon: 'fab fa-instagram', url: 'https://www.instagram.com/jonathan.acquesta/?hl=pt-br' },
            { icon: 'fab fa-facebook', url: 'https://www.facebook.com/jonathan.acquesta' },
            { icon: 'fab fa-twitter', url: 'https://twitter.com/JonathanCAcques' }
        ],
        tagTypes: {
            softSkills: { "pt-BR": "Habilidades Interpessoais", "en-US": "Soft Skills" },
            managementSkills: { "pt-BR": "Habilidades Gerenciais", "en-US": "Management Skills" },
            technicalSkills: { "pt-BR": "Habilidades Técnicas", "en-US": "Technical Skills" },
            languageSkills: { "pt-BR": "Habilidades Lingüísticas", "en-US": "Language Skills" }
        },
        tags: {
            highSchool: { "pt-BR": "#EnsinoMédio", "en-US": "#HighSchool", color: "red" },
            technicalSchool: { "pt-BR": "#EscolaTécnica", "en-US": "#TechnicalSchool", color: "red" },
            university: { "pt-BR": "#Universidade", "en-US": "#University", color: "red" },
            mba: { "pt-BR": "#MBA", "en-US": "#MBA", color: "red" },

            intern: { "pt-BR": "#Estagiário", "en-US": "#Intern", color: "red" },
            juniorDeveloper: { "pt-BR": "#DesenvolverJunior", "en-US": "#JuniorDeveloper", color: "red" },
            fullDeveloper: { "pt-BR": "#DesenvolverPleno", "en-US": "#FullDeveloper", color: "red" },
            seniorDeveloper: { "pt-BR": "#DesenvolverSenior", "en-US": "#SeniorDeveloper", color: "red" },
            juniorSystemAnalyst: { "pt-BR": "#AnalistaDeSistemasJunior", "en-US": "#JuniorSystemAnalyst", color: "red" },
            fullSystemAnalyst: { "pt-BR": "#AnalistaDeSistemasPleno", "en-US": "#FullSystemAnalyst", color: "red" },
            seniorSystemAnalyst: { "pt-BR": "#AnalistaDeSistemasSenior", "en-US": "#SeniorSystemAnalyst", color: "red" },
            scrumMaster: { "pt-BR": "#ScrumMaster", "en-US": "#ScrumMaster", color: "red" },
            agileCoach: { "pt-BR": "#AgileCoach", "en-US": "#AgileCoach", color: "red" },
            itCoordinator: { "pt-BR": "#CoordenadorDeTI", "en-US": "#ITCoordinator", color: "red" },

            scrum: { "pt-BR": "#SCRUM", "en-US": "#SCRUM", color: "cyan" },
            kanban: { "pt-BR": "#KANBAN", "en-US": "#KANBAN", color: "cyan" },
            management30: { "pt-BR": "#Management3.0", "en-US": "#Management3.0", color: "cyan" },
            extremeProgramming: { "pt-BR": "#ExtremeProgramming", "en-US": "#ExtremeProgramming", color: "cyan" },
            pmi: { "pt-BR": "#PMI", "en-US": "#PMI", color: "cyan" },
            cmmi5: { "pt-BR": "#CMMI5", "en-US": "#CMMI5", color: "cyan" },
            incidentManagement: { "pt-BR": "#GestãoDeIncidentes", "en-US": "#IncidentManagement", color: "cyan" },
            problemManagement: { "pt-BR": "#GestãoDeProblemas", "en-US": "#ProblemManagement", color: "cyan" },
            okr: { "pt-BR": "#OKRs", "en-US": "#OKRs", color: "cyan" },
            cfr: { "pt-BR": "#CFRs", "en-US": "#CFRs", color: "cyan" },

            coaching: { "pt-BR": "#Coaching", "en-US": "#Coaching", color: "cyan" },
            leadership: { "pt-BR": "#Liderança", "en-US": "#Leadership", color: "cyan" },
            highPerformanceTeams: { "pt-BR": "#EquipesAltaPerformance", "en-US": "#HighPerformanceTeams", color: "cyan" },
            challengingGoal: { "pt-BR": "#MetaDesafiadora", "en-US": "#ChallengingGoal", color: "cyan" },
            situationalLeadership: { "pt-BR": "#LiderançaSituacional", "en-US": "#SituationalLeadership", color: "cyan" },
            criatitySolution: { "pt-BR": "#SoluçãoCriativa", "en-US": "#CriatitySolution", color: "cyan" },
            selfManagement: { "pt-BR": "#AutoGerenciamento", "en-US": "#SelfManagement", color: "cyan" },
            teamManagement: { "pt-BR": "#GerenciamentoEquipe", "en-US": "#TeamManagement", color: "cyan" },
            hireProcess: { "pt-BR": "#ProcessoDeContratação", "en-US": "#HireProcess", color: "cyan" },
            trainning: { "pt-BR": "#Treinamento", "en-US": "#Trainning", color: "cyan" },
            engagement: { "pt-BR": "#Engajamento", "en-US": "#Engagement", color: "cyan" },
            businessManagement: { "pt-BR": "#GestãoDeNegócios", "en-US": "#BusinessManagement", color: "cyan" },
            businessProcess: { "pt-BR": "#GestãoDeProcesso", "en-US": "#BusinessProcess", color: "cyan" },
            negotiation: { "pt-BR": "#Negociação", "en-US": "#Negotiation", color: "cyan" },
            instructor: { "pt-BR": "#Instrutor", "en-US": "#Instructor", color: "cyan" },
            computing: { "pt-BR": "#Computação", "en-US": "#Computing", color: "cyan" },
            teamwork: { "pt-BR": "#TrabalhoEmEquipe", "en-US": "#Teamwork", color: "cyan" },
            feedback: { "pt-BR": "#Feeback", "en-US": "#Feeback", color: "cyan" },

            dotNetFramework: { "pt-BR": "#.NetFramework", "en-US": "#.NetFramework", color: "purple" },
            dotNetCore: { "pt-BR": "#.NetCore", "en-US": "#.NetCore", color: "purple" },
            vbNet: { "pt-BR": "#VB.Net", "en-US": "#VB.Net", color: "purple" },
            vba: { "pt-BR": "#VBA", "en-US": "#VBA", color: "purple" },
            aspNet: { "pt-BR": "#Asp.Net", "en-US": "#Asp.Net", color: "purple" },
            aspNetMVC: { "pt-BR": "#Asp.NetMVC", "en-US": "#Asp.NetMVC", color: "purple" },
            razor: { "pt-BR": "#Razor", "en-US": "#Razor", color: "purple" },
            asp: { "pt-BR": "#Asp", "en-US": "#Asp", color: "purple" },
            webServices: { "pt-BR": "#WebServices", "en-US": "#WebServices", color: "purple" },
            webAPI: { "pt-BR": "#WebAPI", "en-US": "#WebAPI", color: "purple" },
            cSharp: { "pt-BR": "#C#", "en-US": "#C#", color: "purple" },
            sql: { "pt-BR": "#SQL", "en-US": "#SQL", color: "purple" },
            sqlCompact: { "pt-BR": "#SQLCompact", "en-US": "#SQLCompact", color: "purple" },
            adoNet: { "pt-BR": "#AdoNet", "en-US": "#AdoNet", color: "purple" },
            entityframework6: { "pt-BR": "#Entityframework6", "en-US": "#Entityframework6", color: "purple" },
            entityframeworkNetCore: { "pt-BR": "#EntityframeworkNetCore", "en-US": "#EntityframeworkNetCore", color: "purple" },
            oracle: { "pt-BR": "#Oracle", "en-US": "#Oracle", color: "purple" },
            visualBasic6: { "pt-BR": "#VisualBasic6", "en-US": "#VisualBasic6", color: "purple" },
            vbScript: { "pt-BR": "#VBScript", "en-US": "#VBScript", color: "purple" },
            javascript: { "pt-BR": "#Javascript", "en-US": "#Javascript", color: "purple" },
            vueJS: { "pt-BR": "#VueJS", "en-US": "#VueJS", color: "purple" },
            jQuery: { "pt-BR": "#jQuery", "en-US": "#jQuery", color: "purple" },
            css: { "pt-BR": "#CSS", "en-US": "#CSS", color: "purple" },
            html: { "pt-BR": "#HTML", "en-US": "#HTML", color: "purple" },
            photoshop: { "pt-BR": "#Photoshop", "en-US": "#Photoshop", color: "purple" },
            silverlight: { "pt-BR": "#Silverlight", "en-US": "#Silverlight", color: "purple" },
            mvvm: { "pt-BR": "#MVVM", "en-US": "#MVVM", color: "purple" },
            mvc: { "pt-BR": "#MVC", "en-US": "#MVC", color: "purple" },
            designPattern: { "pt-BR": "#PadrãoDeProjetos", "en-US": "#designPattern", color: "purple" },
            DDD: { "pt-BR": "#DDD", "en-US": "#DDD", color: "purple" },
            dataModeling: { "pt-BR": "#ModelagemDeDados", "en-US": "#DataModeling", color: "purple" },
            uml: { "pt-BR": "#UML", "en-US": "#UML", color: "purple" },
            azure: { "pt-BR": "#Azure", "en-US": "#Azure", color: "purple" },

            excel: { "pt-BR": "#Excel", "en-US": "#Excel", color: "purple" },
            word: { "pt-BR": "#Word", "en-US": "#Word", color: "purple" },
            powerPoint: { "pt-BR": "#PowerPoint", "en-US": "#PowerPoint", color: "purple" },
            outlook: { "pt-BR": "#Outlook", "en-US": "#Outlook", color: "purple" },
            coreldraw: { "pt-BR": "#CorelDraw", "en-US": "#CorelDraw", color: "purple" },
            movieMaker: { "pt-BR": "#MovieMaker", "en-US": "#MovieMaker", color: "purple" },
            access: { "pt-BR": "#Access", "en-US": "#Access", color: "purple" },

            c: { "pt-BR": "#C", "en-US": "#C", color: "purple" },
            cPlusPlus: { "pt-BR": "#C++", "en-US": "#C++", color: "purple" },
            pascal: { "pt-BR": "#Pascal", "en-US": "#Pascal", color: "purple" },
            delphi: { "pt-BR": "#Delphi", "en-US": "#Delphi", color: "purple" },
            php: { "pt-BR": "#Php", "en-US": "#Php", color: "purple" },
            java: { "pt-BR": "#Java", "en-US": "#Java", color: "purple" },
            microAssembly: { "pt-BR": "#MontagemComputador", "en-US": "#MicroAssembly", color: "purple" },
            microcomputerMaintenance: { "pt-BR": "#ManutençãoMicrocomputador", "en-US": "#MicrocomputerMaintenance", color: "purple" },

            unitTest: { "pt-BR": "#TesteUnitário", "en-US": "#UnitTest", color: "green" },
            integratedTest: { "pt-BR": "#TesteIntegrado", "en-US": "#IntegratedTest", color: "green" },
            codeCoverage: { "pt-BR": "#CodeCoverage", "en-US": "#CodeCoverage", color: "green" },
            codeAnalysis: { "pt-BR": "#CodeAnalysis", "en-US": "#CodeAnalysis", color: "green" },
            styleCop: { "pt-BR": "#StyleCop", "en-US": "#StyleCop", color: "green" },
            codeMetrics: { "pt-BR": "#CodeMetrics", "en-US": "#CodeMetrics", color: "green" },
            TDD: { "pt-BR": "#TDD", "en-US": "#TDD", color: "green" },
            BDD: { "pt-BR": "#BDD", "en-US": "#BDD", color: "green" },


            fourthIndustrialRevolution: { "pt-BR": "#QuartaRevoluçãoIndustrial", "en-US": "#FourthIndustrialRevolution", color: "blue" },
            artificialIntelligence: { "pt-BR": "#InteligênciaArtifícial", "en-US": "#ArtificialIntelligence", color: "blue" },
            disruptiveInnovations: { "pt-BR": "#InovaçõesDisruptivas", "en-US": "#DisruptiveInnovations", color: "blue" },
            successCase: { "pt-BR": "#CasoDeSucesso", "en-US": "#successCase", color: "blue" },

            english: { "pt-BR": "#Inglês", "en-US": "#English", color: "pink" },
            italian: { "pt-BR": "#Italiano", "en-US": "#Italian", color: "pink" },
            spanish: { "pt-BR": "#Espanhol", "en-US": "#Spanish", color: "pink" },


            opportunity: { "pt-BR": "#Oportunidade", "en-US": "#Opportunity", color: "blue" },
            greatChallenge: { "pt-BR": "#GrandeDesafío", "en-US": "#GreatChallenge", color: "blue" },
            rewarding: { "pt-BR": "#Recompensador", "en-US": "#Rewarding", color: "blue" },
            hardworking: { "pt-BR": "#TrabalhoDuro", "en-US": "#Hardworking", color: "blue" },
            continuousEvolution: { "pt-BR": "#EvoluçãoContínua", "en-US": "#ContinuousEvolution", color: "blue" },

            inProgress: { "pt-BR": "#EmProgresso", "en-US": "#InProgress", color: "red" },
        },

        histories: [],
        years: [],
        sideMenu: {
            timeLine: {
                color: "black",
                name: {
                    "pt-BR": "Linha do Tempo",
                    "en-US": "Time Line"
                },
                url: "TimeLine",
                icon: "mdi-timeline-clock-outline",
            },
            Curriculum: {
                color: "black",
                name: {
                    "pt-BR": "Currículo",
                    "en-US": "Resume"
                },
                url: "Resume",
                icon: "mdi-file-account",
            },
        },
        categoryType: {
            professionalExperience: {
                color: "red",
                name: {
                    "pt-BR": "Experiência Profissional",
                    "en-US": "Professional Experiênce"
                },
                icon: "mdi-briefcase-outline",
                enable: true,
                showResume: true
            },
            academicLife: {
                color: "orange",
                name: {
                    "pt-BR": "Vida Academica",
                    "en-US": "Academic Life"
                },
                icon: "mdi-school",
                enable: true,
                showResume: true
            },
            certifications: {
                color: "green",
                name: {
                    "pt-BR": "Certificação",
                    "en-US": "Certification"
                },
                icon: "mdi-book-variant",
                enable: true,
                showResume: true
            },
            languages: {
                color: "indigo",
                name: {
                    "pt-BR": "Idiomas",
                    "en-US": "Languages"
                },
                icon: "mdi-account-voice",
                enable: true,
                showResume: true
            },
            courses: {
                color: "deep-purple",
                name: {
                    "pt-BR": "Curso Extracurricular",
                    "en-US": "Extracurricular Course"
                },
                icon: "mdi-seal-variant",
                enable: true,
                showResume: true
            },

            books: {
                color: "teal",
                name: {
                    "pt-BR": "Livros",
                    "en-US": "Book"
                },
                icon: "mdi-book-open-page-variant",
                enable: true,
                showResume: true
            },
            thoughts: {
                color: "pink",
                name: {
                    "pt-BR": "Pensamentos",
                    "en-US": "Thoughts"
                },
                icon: "mdi-head-snowflake-outline",
                enable: true,
                showResume: true
            },
            /*
            managementKnowledge: {
                color: "cyan",
                name: {
                    "pt-BR": "Conhecimento em Gestão",
                    "en-US": "Management Knowledge"
                },
                icon: "mdi-account-group",
                enable: true,
                showResume: false
            },
            technologies: {
                color: "purple",
                name: {
                    "pt-BR": "Tecnologias",
                    "en-US": "Technologies"
                },
                icon: "mdi-laptop",
                enable: true,
                showResume: false
            },
            milestones: {
                color: "light-blue",
                name: {
                    "pt-BR": "Marcos",
                    "en-US": "Milestones"
                },
                icon: "mdi-flag-checkered",
                enable: true,
                showResume: false
            }*/
        },
    },
    mutations: {},
    actions: {},
    modules: {}
});