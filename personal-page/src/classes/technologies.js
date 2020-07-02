const technologies = {
    data() {
        return {

        }
    },
    methods: {
        mountTechnologies(histories) {

            histories.push({
                date: new Date("2020-05-23"),
                category: this.$store.state.categoryType.technologies,
                title: {
                    "pt-BR": "Vue JS -  Portfolio",
                    "en-US": "Vue JS -  Portfolio",
                },
                subTitle: {
                    "pt-BR": "Meu projeto de criação do meu site pessoal",
                    "en-US": "My personal website project",
                },
                image: require('@/assets/technologies/portfolio.jpg'),
                tags: [this.$store.state.tags.vueJS, this.$store.state.tags.vuex, this.$store.state.tags.vuetify],
                links: [{
                    description: { "pt-BR": "GitHub", "en-US": "GitHub" },
                    url: "https://github.com/jonathan-acquesta/Personal-Page",
                    type: "link"
                }],
            })
        },
    },
}

export default technologies;