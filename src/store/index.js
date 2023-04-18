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
            filterTags: { "pt-BR": "Filtrar por #", "en-US": "Filter by #" },
            filterTagsClose: { "pt-BR": "Fechar filtro", "en-US": "Close filter" },
            quickAccess: { "pt-BR": "Acesso Rápido", "en-US": "Quick Access" },
            closeQuickAccess: { "pt-BR": "Fechar Acesso Rápido", "en-US": "Close Quick Access" },
            upPage: { "pt-BR": "Voltar ao Topo", "en-US": "Back to the Top" },
            search: { "pt-BR": "Pesquisa", "en-US": "Search" },
            all: { "pt-BR": "Mostrar Todas as Categorias", "en-US": "Show All Categories" },
            allTag: { "pt-BR": "#Todos", "en-US": "#All" },
            justInProgressTag: { "pt-BR": "#ApenasEmProgresso", "en-US": "#JustInProgress" },
            allTags: { "pt-BR": "Mostrar Todas as Tags", "en-US": "Show All Tags" },
            languages: {
                portuguese: { "pt-BR": "Português", "en-US": "Portuguese", "language": "pt-BR" },
                english: { "pt-BR": "Inglês", "en-US": "English", "language": "en-US" },
            },
            changeLanguage: { "pt-BR": "Mudar Idioma", "en-US": "Change Language" },
            showDetails: { "pt-BR": "Mostrar Detalhes", "en-US": "Show Details" },
            closeDetails: { "pt-BR": "Fechar Detalhes", "en-US": "Close Details" },
            from: { "pt-BR": "De", "en-US": "From" },
            to: { "pt-BR": "Até", "en-US": "To" },
            yearOf: { "pt-BR": "Ano de", "en-US": "Year" },
            showYear: { "pt-BR": "Mostrar detalhes deste ano", "en-US": "Show details for this year" },
            closeYear: { "pt-BR": "Minimizar detalhes deste ano", "en-US": "Minimize details for this year" },
        },
        itemsTimeLineOpen: [],
        itemsResumeOpen: [],
        itemsTimeLine: [],
        itemsResume: [],
        itemsTimeLineFull: [],
        itemsResumeFull: [],
        tagsActive: [],
        overlay: false,
        showMobileMenu: false,
        showLeftMenu: false,
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
            { showHeader: true, showFooter: true, title: { 'pt-BR':'Download do Currículo', 'en-US': 'Download Resume'}, icon: 'mdi-account-details', url: 'https://github.com/jonathan-acquesta/Personal-Page/raw/master/personal-page/src/assets/resumeJonathanCaravaggioAcquesta.pdf' },
            { showHeader: true, showFooter: true, title: { 'pt-BR':'Linkedin', 'en-US': 'Linkedin'}, icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/jonathan-caravaggio-acquesta-a26a4422/' },
            { showHeader: true, showFooter: true, title: { 'pt-BR':'GitHub', 'en-US': 'GitHub'}, icon: 'fab fa-github', url: 'https://github.com/jonathan-acquesta' },
            { showHeader: false, showFooter: true, title: { 'pt-BR':'StackOverflow', 'en-US': 'StackOverflow'}, icon: 'fab fa-stack-overflow', url: 'https://stackoverflow.com/users/9547421/jonathan-caravaggio-acquesta' },
            { showHeader: false, showFooter: true, title: { 'pt-BR':'YouTube', 'en-US': 'YouTube'}, icon: 'fab fa-youtube', url: 'https://www.youtube.com/channel/UC9dky_d4FDcHUc13iwA19-w?view_as=subscriber' },
            { showHeader: false, showFooter: true, title: { 'pt-BR':'Medium', 'en-US': 'Medium'}, icon: 'fab fa-medium', url: 'https://medium.com/@jcagames' },
            { showHeader: false, showFooter: true, title: { 'pt-BR':'Instagram', 'en-US': 'Instagram'}, icon: 'fab fa-instagram', url: 'https://www.instagram.com/jonathan.acquesta/?hl=pt-br' },
            { showHeader: false, showFooter: true, title: { 'pt-BR':'Facebook', 'en-US': 'Facebook'}, icon: 'fab fa-facebook', url: 'https://www.facebook.com/jonathan.acquesta' },
            { showHeader: false, showFooter: true, title: { 'pt-BR':'Twitter', 'en-US': 'Twitter'}, icon: 'fab fa-twitter', url: 'https://twitter.com/JonathanCAcques' }
        ],
        tagTypes: {
            softSkills: { "pt-BR": "Habilidades Interpessoais", "en-US": "Soft Skills" },
            managementSkills: { "pt-BR": "Habilidades Gerenciais", "en-US": "Management Skills" },
            technicalSkills: { "pt-BR": "Habilidades Técnicas", "en-US": "Technical Skills" },
            languageSkills: { "pt-BR": "Habilidades Lingüísticas", "en-US": "Language Skills" }
        },
        tags: {},
        tagGroups: {},
        histories: [],
        years: [],
        showFilterMenu: false,
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
        categoryType: {},
    },
    mutations: {},
    actions: {},
    modules: {}
});