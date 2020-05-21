const thoughts = {
    data() {
        return {

        }
    },
    methods: {
        mountThoughts(histories) {

            histories.push({
                date: new Date("2020-05-14"),
                category: this.$store.state.categoryType.thoughts,
                title: {
                    "pt-BR": "ZUP Open Talks - Kent Beck",
                    "en-US": "ZUP Open Talks - Kent Beck",
                },
                subTitle: {
                    "pt-BR": "O que torna os testes bons e o que você pode fazer sobre isso!",
                    "en-US": "What Makes Tests Good and What You Can Do About It!",
                },
                description: {
                    "pt-BR": "Foi ótimo ouvir Kent Beck ao vivo e interagir com ele através da pergunta: se você vai começar a testar um projeto legado, como você acha que é a melhor maneira de começar? Obrigado equipe ZUP por escolher minha pergunta e obrigado Kent Beck pela resposta. Eu realmente gostei desse Talk.",
                    "en-US": "It was great to listen Kent Beck live and interect with him though the question: If you are going to start testing on a legacy project, how do you think is the best way to start? Thanks ZUP team for pick my question and thanks Kent Beck for the answer. I really appreciated this Talk.",
                },
                image: require('@/assets/thoughts/kentBeckTalk.jpg'),
                tags: [this.$store.state.tags.extremeProgramming, this.$store.state.tags.unitTest, this.$store.state.tags.integratedTest],
                links: [{
                    description: { "pt-BR": "Talk", "en-US": "Talk" },
                    url: "https://www.youtube.com/watch?v=lXTwxMxNx-Y&feature=push-u-sub&attr_tag=YhBAm0mv1GVOTSfK%3A6",
                    type: "link"
                }],
                showDetail: false
            })
        },
    },
}

export default thoughts;