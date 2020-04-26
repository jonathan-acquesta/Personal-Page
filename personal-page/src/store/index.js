import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        culture: 'pt-BR',
        common: {
            applicationTitle: { "pt-BR": "Meu Currículo Vivo", "en-US": "My Live Resume" },
            portfolio: { "pt-BR": "Portfólio", "en-US": "Portfolio" },
            languages: {
                portuguese: { "pt-BR": "Português", "en-US": "Portuguese", language: "pt-BR" },
                english: { "pt-BR": "Inglês", "en-US": "English", language: "en-US" },
            }
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
            intern: { "pt-BR": "#Estagiário", "en-US": "#Intern", color: "red" },
            juniorDeveloper: { "pt-BR": "#DesenvolverJunior", "en-US": "#JuniorDeveloper", color: "red" },
            fullDeveloper: { "pt-BR": "#DesenvolverPleno", "en-US": "#FullDeveloper", color: "red" },
            seniorDeveloper: { "pt-BR": "#DesenvolverSenior", "en-US": "#SeniorDeveloper", color: "red" },

            scrum: { "pt-BR": "#SCRUM", "en-US": "#SCRUM", color: "cyan" },
            kanban: { "pt-BR": "#KANBAN", "en-US": "#KANBAN", color: "cyan" },
            management30: { "pt-BR": "#Management3.0", "en-US": "#Management3.0", color: "cyan" },

            coaching: { "pt-BR": "#Coaching", "en-US": "#Coaching", color: "cyan" },
            leadership: { "pt-BR": "#Liderança", "en-US": "#Leadership", color: "cyan" },
            highPerformanceTeams: { "pt-BR": "#EquipesAltaPerformance", "en-US": "#HighPerformanceTeams", color: "cyan" },
            situationalLeadership: { "pt-BR": "#LiderançaSituacional", "en-US": "#SituationalLeadership", color: "cyan" },
            criatitySolution: { "pt-BR": "#SoluçãoCriativa", "en-US": "#CriatitySolution", color: "cyan" },
            selfManagement: { "pt-BR": "#AutoGerenciamento", "en-US": "#SelfManagement", color: "cyan" },
            teamManagement: { "pt-BR": "#GerenciamentoEquipe", "en-US": "#TeamManagement", color: "cyan" },

            dotNetFramework: { "pt-BR": "#.NetFramework", "en-US": "#.NetFramework", color: "purple" },
            vbNet: { "pt-BR": "#VB.Net", "en-US": "#VB.Net", color: "purple" },
            vba: { "pt-BR": "#VBA", "en-US": "#VBA", color: "purple" },
            aspNet: { "pt-BR": "#Asp.Net", "en-US": "#Asp.Net", color: "purple" },
            asp: { "pt-BR": "#Asp", "en-US": "#Asp", color: "purple" },
            webServices: { "pt-BR": "#WebServices", "en-US": "#WebServices", color: "purple" },
            cSharp: { "pt-BR": "#C#", "en-US": "#C#", color: "purple" },
            sql: { "pt-BR": "#SQL", "en-US": "#SQL", color: "purple" },
            sqlCompact: { "pt-BR": "#SQLCompact", "en-US": "#SQLCompact", color: "purple" },
            oracle: { "pt-BR": "#Oracle", "en-US": "#Oracle", color: "purple" },
            visualBasic6: { "pt-BR": "#VisualBasic6", "en-US": "#VisualBasic6", color: "purple" },
            vbScript: { "pt-BR": "#VBScript", "en-US": "#VBScript", color: "purple" },
            javascript: { "pt-BR": "#Javascript", "en-US": "#Javascript", color: "purple" },
            jQuery: { "pt-BR": "#jQuery", "en-US": "#jQuery", color: "purple" },
            css: { "pt-BR": "#CSS", "en-US": "#CSS", color: "purple" },
            html: { "pt-BR": "#HTML", "en-US": "#HTML", color: "purple" },
            photoshop: { "pt-BR": "#Photoshop", "en-US": "#Photoshop", color: "purple" },
            silverlight: { "pt-BR": "#Silverlight", "en-US": "#Silverlight", color: "purple" },
            excel: { "pt-BR": "#Excel", "en-US": "#Excel", color: "purple" },

            unitTest: { "pt-BR": "#TesteUnitário", "en-US": "#UnitTest", color: "green" },
            integratedTest: { "pt-BR": "#TesteIntegrado", "en-US": "#IntegratedTest", color: "green" },
            codeCoverage: { "pt-BR": "#CodeCoverage", "en-US": "#CodeCoverage", color: "green" },
            codeAnalysis: { "pt-BR": "#CodeAnalysis", "en-US": "#CodeAnalysis", color: "green" },
            styleCop: { "pt-BR": "#StyleCop", "en-US": "#StyleCop", color: "green" },
            codeMetrics: { "pt-BR": "#CodeMetrics", "en-US": "#CodeMetrics", color: "green" },

            fourthIndustrialRevolution: { "pt-BR": "#QuartaRevoluçãoIndustrial", "en-US": "#FourthIndustrialRevolution", color: "blue" },
            artificialIntelligence: { "pt-BR": "#InteligênciaArtifícial", "en-US": "#ArtificialIntelligence", color: "blue" },
            disruptiveInnovations: { "pt-BR": "#InovaçõesDisruptivas", "en-US": "#DisruptiveInnovations", color: "blue" },
            successCase: { "pt-BR": "#CasoDeSucesso", "en-US": "#successCase", color: "blue" },


            opportunity: { "pt-BR": "#Oportunidade", "en-US": "#Opportunity", color: "blue" },
            greatChallenge: { "pt-BR": "#GrandeDesafío", "en-US": "#GreatChallenge", color: "blue" },
            rewarding: { "pt-BR": "#Recompensador", "en-US": "#Rewarding", color: "blue" },


        },

        histories: [],
        categoryType: {
            professionalExperience: {
                color: "red",
                name: {
                    "pt-BR": "Experiência Profissional",
                    "en-US": "Professional Experiênce"
                },
                icon: "mdi-briefcase-outline",
                enable: true
            },
            academicLife: {
                color: "orange",
                name: {
                    "pt-BR": "Vida Academica",
                    "en-US": "Academic Life"
                },
                icon: "mdi-school",
                enable: true
            },
            courses: {
                color: "deep-purple",
                name: {
                    "pt-BR": "Curso Extracurricular",
                    "en-US": "Extracurricular Course"
                },
                icon: "mdi-seal-variant",
                enable: true
            },
            certifications: {
                color: "green",
                name: {
                    "pt-BR": "Certificação",
                    "en-US": "Certification"
                },
                icon: "mdi-book-variant",
                enable: true
            },
            books: {
                color: "teal",
                name: {
                    "pt-BR": "Livros",
                    "en-US": "Book"
                },
                icon: "mdi-book-open-page-variant",
                enable: true
            },
            thoughts: {
                color: "pink",
                name: {
                    "pt-BR": "Pensamentos",
                    "en-US": "Thoughts"
                },
                icon: "mdi-head-snowflake-outline",
                enable: true
            },
            managementKnowledge: {
                color: "cyan",
                name: {
                    "pt-BR": "Conhecimento em Gestão",
                    "en-US": "Management Knowledge"
                },
                icon: "mdi-account-group",
                enable: true
            },
            technologies: {
                color: "purple",
                name: {
                    "pt-BR": "Tecnologias",
                    "en-US": "Technologies"
                },
                icon: "mdi-laptop",
                enable: true
            },
            languages: {
                color: "indigo",
                name: {
                    "pt-BR": "Idiomas",
                    "en-US": "Languages"
                },
                icon: "mdi-account-voice",
                enable: true
            },
            milestones: {
                color: "light-blue",
                name: {
                    "pt-BR": "Marcos",
                    "en-US": "Milestones"
                },
                icon: "mdi-flag-checkered",
                enable: true
            }
        },
    },
    mutations: {},
    actions: {},
    modules: {}
});