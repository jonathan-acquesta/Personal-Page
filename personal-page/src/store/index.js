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
        tagTypes: {
            softSkills: { "pt-BR": "Habilidades Interpessoais", "en-US": "Soft Skills" },
            managementSkills: { "pt-BR": "Habilidades Gerenciais", "en-US": "Management Skills" },
            technicalSkills: { "pt-BR": "Habilidades Técnicas", "en-US": "Technical Skills" },
            languageSkills: { "pt-BR": "Habilidades Lingüísticas", "en-US": "Language Skills" }
        },
        tags: {
            scrum: { "pt-BR": "#SCRUM", "en-US": "#SCRUM" },
            kanban: { "pt-BR": "#KANBAN", "en-US": "#KANBAN" },
            management30: { "pt-BR": "#Management3.0", "en-US": "#Management3.0" }
        },
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