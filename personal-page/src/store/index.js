import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        culture: 'en-US',
        common: {
            toolbarTitleMobile: { "pt-BR": "Jonathan C Acquesta", "en-US": "Jonathan C Acquesta" },
            toolbarTitle: { "pt-BR": "Jonathan Caravaggio Acquesta - Agile Coach - PSM I", "en-US": "Jonathan Caravaggio Acquesta - Agile Coach - PSM I" },
            applicationTitle: { "pt-BR": "Meu Currículo Vivo", "en-US": "My Live Resume" },
            portfolio: { "pt-BR": "Portfólio", "en-US": "Portfolio" },
            filter: { "pt-BR": "Filtros", "en-US": "Filter" },
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
        overlay: false,
        showMobileMenu: false,
        mainImage: "",
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
        tags: {},
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
                    "en-US": "Professional Experience"
                },
                icon: "mdi-briefcase-outline",
                enable: true,
                showResume: true,
                showItems: true,
                pinned: false,
            },
            academicLife: {
                color: "orange",
                name: {
                    "pt-BR": "Vida Academica",
                    "en-US": "Academic Life"
                },
                icon: "mdi-school",
                enable: true,
                showResume: true,
                showItems: true,
                pinned: false,
            },
            certifications: {
                color: "green",
                name: {
                    "pt-BR": "Certificações",
                    "en-US": "Certifications"
                },
                icon: "mdi-book-variant",
                enable: true,
                showResume: true,
                showItems: true,
                pinned: false,
            },
            languages: {
                color: "indigo",
                name: {
                    "pt-BR": "Idiomas",
                    "en-US": "Languages"
                },
                icon: "mdi-account-voice",
                enable: true,
                showResume: true,
                showItems: true,
                pinned: false,
            },
            courses: {
                color: "deep-purple",
                name: {
                    "pt-BR": "Cursos Extracurriculares",
                    "en-US": "Extracurricular Courses"
                },
                icon: "mdi-seal-variant",
                enable: true,
                showResume: true,
                showItems: true,
                pinned: false,
            },

            books: {
                color: "teal",
                name: {
                    "pt-BR": "Livros",
                    "en-US": "Books"
                },
                icon: "mdi-book-open-page-variant",
                enable: true,
                showResume: true,
                showItems: true,
                pinned: false,
            },
            thoughts: {
                color: "pink",
                name: {
                    "pt-BR": "Pensamentos",
                    "en-US": "Thoughts"
                },
                icon: "mdi-head-snowflake-outline",
                enable: true,
                showResume: true,
                showItems: true,
                pinned: false,
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
                showResume: false,
                showItems: true,
                pinned: false,
            },
            technologies: {
                color: "purple",
                name: {
                    "pt-BR": "Tecnologias",
                    "en-US": "Technologies"
                },
                icon: "mdi-laptop",
                enable: true,
                showResume: false,
                showItems: true,
                pinned: false,
            },
            milestones: {
                color: "light-blue",
                name: {
                    "pt-BR": "Marcos",
                    "en-US": "Milestones"
                },
                icon: "mdi-flag-checkered",
                enable: true,
                showResume: false,
                showItems: true,
                pinned: false,
            }*/
        },
    },
    mutations: {},
    actions: {},
    modules: {}
});