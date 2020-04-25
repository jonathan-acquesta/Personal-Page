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
            scrum: { "pt-BR": "#SCRUM", "en-US": "#SCRUM" },
            kanban: { "pt-BR": "#KANBAN", "en-US": "#KANBAN" },
            management30: { "pt-BR": "#Management3.0", "en-US": "#Management3.0" },

            dotNetFramework: { "pt-BR": "#.NetFramework", "en-US": "#.NetFramework" },
            aspNet: { "pt-BR": "#Asp.Net", "en-US": "#Asp.Net" },
            asp: { "pt-BR": "#Asp", "en-US": "#Asp" },
            cSharp: { "pt-BR": "#C#", "en-US": "#C#" },
            sql: { "pt-BR": "#SQL", "en-US": "#SQL" },
            visualBasic6: { "pt-BR": "#VisualBasic6", "en-US": "#VisualBasic6" },
            vbScript: { "pt-BR": "#VBScript", "en-US": "#VBScript" },
            javascript: { "pt-BR": "#Javascript", "en-US": "#Javascript" },
            css: { "pt-BR": "#CSS", "en-US": "#CSS" },
            html: { "pt-BR": "#HTML", "en-US": "#HTML" },

            coaching: { "pt-BR": "#Coaching", "en-US": "#Coaching" },
            leadership: { "pt-BR": "#Liderança", "en-US": "#Leadership" },
            highPerformanceTeams: { "pt-BR": "#EquipesAltaPerformance", "en-US": "#HighPerformanceTeams" },
            situationalLeadership: { "pt-BR": "#LiderançaSituacional", "en-US": "#SituationalLeadership" },

            fourthIndustrialRevolution: { "pt-BR": "#QuartaRevoluçãoIndustrial", "en-US": "#FourthIndustrialRevolution" },
            artificialIntelligence: { "pt-BR": "#InteligênciaArtifícial", "en-US": "#ArtificialIntelligence" },
            disruptiveInnovations: { "pt-BR": "#InovaçõesDisruptivas", "en-US": "#DisruptiveInnovations" },

            intern: { "pt-BR": "#Estagiário", "en-US": "#Intern" },

            opportunity: { "pt-BR": "#Oportunidade", "en-US": "#Opportunity" },

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