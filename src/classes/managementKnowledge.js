const managementKnowledge = {
    data() {
        return {

        }
    },
    methods: {
        mountManagementKnowledge(histories) {

            histories.push({
                date: new Date("2020-05-14"),
                category: this.$store.state.categoryType.managementKnowledge,
                title: {
                    "pt-BR": "SCRUM",
                    "en-US": "SCRUM",
                },
                subTitle: {
                    "pt-BR": "O que !",
                    "en-US": "What !",
                },
                description: {
                    "pt-BR": "Foi óti.",
                    "en-US": "It was .",
                },
                image: require('@/assets/thoughts/kentBeckTalk.jpg'),
                tags: [this.$store.state.tags.scrum],
                showDetail: false
            })
        },
    },
}

export default managementKnowledge;