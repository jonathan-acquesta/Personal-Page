const languageCourses = {
    data() {
        return {

        }
    },
    methods: {
        mountLanguageCourses(histories) {


            histories.push({
                date: new Date("2010-12-15"),
                category: this.$store.state.categoryType.languages,
                title: {
                    "pt-BR": "Cultura Inglesa",
                    "en-US": "Cultura Inglesa",
                },
                subTitle: {
                    "pt-BR": "Curso de inglês básico, com duração de dois semestres",
                    "en-US": "Basic English course, lasting two semesters",
                },
                description: {
                    "pt-BR": "Infelizmente, eu não tinha boas aulas de inglês na adolescência, então, no começo deste ano, decidi começar a estudar inglês, porque acredito que será importante para meus objetivos de longo prazo. Nesse momento, completei um ano no nível básico e foi meu primeiro desafio com esse idioma.",
                    "en-US": "Unfortunately, I didn't have good English classes at school when I was a teenager, so, in the beginner of this year, I decided to start to study English, because I believe that it will be important for my long-term goals. In this moment, I completed one year in the basic level, and it was my first challenge with this language.",
                },
                image: require('@/assets/courses/culturaInglesa.jpg'),
                tags: [this.$store.state.tags.english, this.$store.state.tags.basic],
                links: [{
                    description: { "pt-BR": "CulturaInglesa", "en-US": "CulturaInglesa" },
                    url: "https://www.culturainglesa.com.br/",
                    type: "link"
                }],
                showDetail: false
            })

            histories.push({
                date: new Date("2011-12-15"),
                category: this.$store.state.categoryType.languages,
                title: {
                    "pt-BR": "Cultura Inglesa",
                    "en-US": "Cultura Inglesa",
                },
                subTitle: {
                    "pt-BR": "Curso de inglês pré-intermediario, com duração de dois semestres",
                    "en-US": "Pre-intermediate English course, lasting two semesters",
                },
                description: {
                    "pt-BR": "Nesse momento, concluí o curso de inglês pré-intermediário, e isto foi suficiente para eu começar a ler muitas coisas que me ajudaram a estudar sobre desenvolvimento de software.",
                    "en-US": "In this moment, I completed the pre-intermediate english course, it was enough to start reading a lot of things that helped me to study about software development.",
                },
                image: require('@/assets/courses/culturaInglesa.jpg'),
                tags: [this.$store.state.tags.english, this.$store.state.tags.preIntermediate],
                links: [{
                    description: { "pt-BR": "CulturaInglesa", "en-US": "CulturaInglesa" },
                    url: "https://www.culturainglesa.com.br/",
                    type: "link"
                }],
                showDetail: false
            })

            histories.push({
                date: new Date("2018-05-10"),
                category: this.$store.state.categoryType.languages,
                title: {
                    "pt-BR": "Duoling",
                    "en-US": "Duoling",
                },
                subTitle: {
                    "pt-BR": "Aplicativo para aprendizado de inglês",
                    "en-US": "English learning application",
                },
                image: require('@/assets/courses/duolingo.jpg'),
                tags: [this.$store.state.tags.english, this.$store.state.tags.basic],
                links: [{
                    description: { "pt-BR": "Duolingo", "en-US": "Duolingo" },
                    url: "https://www.duolingo.com/",
                    type: "link"
                }],
            });


            histories.push({
                date: new Date("2018-06-18"),
                category: this.$store.state.categoryType.languages,
                title: {
                    "pt-BR": "Wise Up",
                    "en-US": "Wise Up",
                },
                subTitle: {
                    "pt-BR": "Curso completo de inglês, com duração de três semestres",
                    "en-US": "Complete English course, lasting three semesters",
                },
                description: {
                    "pt-BR": "Depois que parei o curso Cultura Inglesa, concentrei-me em melhorar outras habilidades e deixei o inglês esperando, mas depois de alguns anos comecei a precisar falar inglês, então eu decidi estudar no WiseUp e tentei novamente tornar-me fluente. Fiz o melhor esforço possível por três semestres e consegui passar em todos os níveis da escola, mas aprendi muita gramática e não adquiri confiança suficiente para conversar.",
                    "en-US": "After I stopped the Cultura Inglesa course, I kept my focus on improve other skills and let speak English waiting, but after some years, I started to need to speak english, then, I decided to study at WiseUp, and tried again to become fluent. I did the best effort that I could for three semesters and I achieved to pass for all the school's levels, but I learned a lot of grammatic and I'm not confident enough to speak yet.",
                },
                image: require('@/assets/courses/wiseUp.jpg'),
                tags: [this.$store.state.tags.english, this.$store.state.tags.advanced],
                links: [{
                        image: require('@/assets/certificates/wiseUp.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "WiseUp", "en-US": "WiseUp" },
                        url: "https://wiseup.com/",
                        type: "link"
                    }
                ],
                showDetail: false
            })



            histories.push({
                date: new Date("2019-07-02"),
                category: this.$store.state.categoryType.languages,
                title: {
                    "pt-BR": "EF English Live",
                    "en-US": "EF English Live",
                },
                subTitle: {
                    "pt-BR": "Curso de inglês para iniciantes CEFR nível A1",
                    "en-US": "Beginner CEFR Level A1 English Course",
                },
                description: {
                    "pt-BR": "Eu havia terminado o curso da Wise Up e sentia a necessidade de continuar a melhorar meu conjunto de habilidades em inglês, então eu decidi por outra abordagem em que eu poderia estudar on-line de qualquer lugar que eu quisesse. O English Live me testou e me colocou no nível intermediário superior, mas eu decidi revisar todos os níveis e essa foi uma decisão sábia, porque aprendi muitas coisas nos níveis iniciantes.",
                    "en-US": "I had finished Wise Up course and I felt the necessity of continuous to improve my english skill set, so I decided another approach that I could be able to study online anywhere I want. The English Live tested me and put me as a upper intermediate level, but I decided to review all the levels and this was a wise decision, because I learned many things in the beginner levels.",
                },
                image: require('@/assets/courses/englishLive.jpg'),
                tags: [this.$store.state.tags.english, this.$store.state.tags.basic],
                links: [{
                        image: require('@/assets/certificates/EFLevel01.jpg'),
                        description: { "pt-BR": "CertificadoNível01", "en-US": "CertificateLevel01" },
                        type: "certificate"
                    },
                    {
                        image: require('@/assets/certificates/EFLevel02.jpg'),
                        description: { "pt-BR": "CertificadoNível02", "en-US": "CertificateLevel02" },
                        type: "certificate"
                    },
                    {
                        image: require('@/assets/certificates/EFLevel03.jpg'),
                        description: { "pt-BR": "CertificadoNível03", "en-US": "CertificateLevel03" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "EFEnglishLive", "en-US": "EFEnglishLive" },
                        url: "https://englishlive.ef.com/pt-br/",
                        type: "link"
                    }
                ],
                showDetail: false
            })


            histories.push({
                date: new Date("2020-02-06"),
                category: this.$store.state.categoryType.languages,
                title: {
                    "pt-BR": "EF English Live",
                    "en-US": "EF English Live",
                },
                subTitle: {
                    "pt-BR": "Curso de inglês para iniciantes CEFR nível A2",
                    "en-US": "Beginner CEFR Level A2 English Course",
                },
                description: {
                    "pt-BR": "Nesse período, terminei os seis primeiros níveis da escola e essa nova abordagem continuou sendo uma ótima maneira de revisar muitas coisas que aprendi anteriormente e uma boa maneira de aumentar meu conjunto de habilidades em inglês.",
                    "en-US": "In this time, I finished the six first levels of the school and this new approach has been continued a great way to review of many things that a I learned before and one good way to increase my english skill set.",
                },
                image: require('@/assets/courses/englishLive.jpg'),
                tags: [this.$store.state.tags.english, this.$store.state.tags.basic],
                links: [{
                        image: require('@/assets/certificates/EFLevel04.jpg'),
                        description: { "pt-BR": "CertificadoNível04", "en-US": "CertificateLevel04" },
                        type: "certificate"
                    },
                    {
                        image: require('@/assets/certificates/EFLevel05.jpg'),
                        description: { "pt-BR": "CertificadoNível05", "en-US": "CertificateLevel05" },
                        type: "certificate"
                    },
                    {
                        image: require('@/assets/certificates/EFLevel06.jpg'),
                        description: { "pt-BR": "CertificadoNível06", "en-US": "CertificateLevel06" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "EFEnglishLive", "en-US": "EFEnglishLive" },
                        url: "https://englishlive.ef.com/pt-br/",
                        type: "link"
                    }
                ],
                showDetail: false
            })


            histories.push({
                date: new Date("2020-06-03"),
                category: this.$store.state.categoryType.languages,
                title: {
                    "pt-BR": "EF English Live",
                    "en-US": "EF English Live",
                },
                subTitle: {
                    "pt-BR": "Curso Intermediário de Inglês CEFR Nível B1",
                    "en-US": "Intermediate CEFR Level B1 English Course",
                },
                description: {
                    "pt-BR": "Estou muito feliz com minha abordagem atual de como aprender inglês. Estou em progresso no nível intermediário do English Live, que é composto de três partes e eu já terminei duas delas.",
                    "en-US": "I'm really happy with my current approach of how to learn english. I'm in progress with the intermediate level at English Live, which is level is composed of three parts and I've already finished two of them.",
                },
                image: require('@/assets/courses/englishLive.jpg'),
                tags: [this.$store.state.tags.english, this.$store.state.tags.intermediate],
                links: [{
                        image: require('@/assets/certificates/EFLevel07.jpg'),
                        description: { "pt-BR": "CertificadoNível07", "en-US": "CertificateLevel07" },
                        type: "certificate"
                    },
                    {
                        image: require('@/assets/certificates/EFLevel08.jpg'),
                        description: { "pt-BR": "CertificadoNível08", "en-US": "CertificateLevel08" },
                        type: "certificate"
                    },
                    {
                        image: require('@/assets/certificates/EFLevel09.jpg'),
                        description: { "pt-BR": "CertificadoNível09", "en-US": "CertificateLevel09" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "EFEnglishLive", "en-US": "EFEnglishLive" },
                        url: "https://englishlive.ef.com/pt-br/",
                        type: "link"
                    }
                ],
                showDetail: false
            })

            histories.push({
                date: new Date("2019-11-17"),
                category: this.$store.state.categoryType.languages,
                title: {
                    "pt-BR": "Busuu - Italiano",
                    "en-US": "Busuu - Italian",
                },
                subTitle: {
                    "pt-BR": "Curso de Italiano Nível A1",
                    "en-US": "Level A1 Italian Course",
                },
                description: {
                    "pt-BR": "Eu quero aprender italiano, então comecei a estudar no Busuu para aprender o básico e terminei o nível A1 que me mostrou muitas novas palavras e regras gramaticais.",
                    "en-US": "I want to learn Italian, so I started to study at Busuu to learn the basic, and I have finished the level A1 that showed me a lot of new words and grammatical rules.",
                },
                image: require('@/assets/courses/busuuItalian.jpg'),
                tags: [this.$store.state.tags.italian, this.$store.state.tags.basic],
                links: [{
                        image: require('@/assets/certificates/busuuItalianoA1.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "Busuu", "en-US": "Busuu" },
                        url: "https://www.busuu.com/",
                        type: "link"
                    }
                ],
                showDetail: false
            })

            histories.push({
                date: new Date("2020-05-18"),
                category: this.$store.state.categoryType.languages,
                title: {
                    "pt-BR": "Busuu - Italiano",
                    "en-US": "Busuu - Italian",
                },
                subTitle: {
                    "pt-BR": "Curso de Italiano Nível A2",
                    "en-US": "Level A2 Italian Course",
                },
                description: {
                    "pt-BR": "Às vezes, precisamos priorizar as coisas, devido a isso, eu diminuí a velocidade do aprendizado de italiano para manter meu foco no aprendizado de inglês, mas continuo a frequentar a aula de nível A2 de italiano uma vez por semana para alcançar meu objetivo.",
                    "en-US": "Sometimes we need to prioritize things, due to that, I slowed down my italian learn to keep my focus in my english learn, but I continuous to take italian level A2 class once a week to achieve my goal.",
                },
                image: require('@/assets/courses/busuuItalian.jpg'),
                tags: [this.$store.state.tags.stopped, this.$store.state.tags.italian, this.$store.state.tags.basic],
                links: [{
                    description: { "pt-BR": "Busuu", "en-US": "Busuu" },
                    url: "https://www.busuu.com/",
                    type: "link"
                }],
                showDetail: false
            })

            histories.push({
                date: new Date("2020-05-17"),
                category: this.$store.state.categoryType.languages,
                title: {
                    "pt-BR": "Busuu - Espanhol",
                    "en-US": "Busuu - Spanish",
                },
                subTitle: {
                    "pt-BR": "Curso de espenhol Nível A1",
                    "en-US": "Level A1 Spanish Course",
                },
                description: {
                    "pt-BR": "Eu tinha aula de espanhol quando estava na universidade, mas isso foi há dez anos e agora quero retomar esse idioma e melhorar essa habilidade para me ajudar a enfrentar novos desafios futuros.",
                    "en-US": "I had spanish class when I was at university, but it was ten years ago and now I want to retake this language and improve that to help me for new future challenges.",
                },
                image: require('@/assets/courses/busuuSpanish.jpg'),
                tags: [this.$store.state.tags.stopped, this.$store.state.tags.spanish, this.$store.state.tags.basic],
                links: [
                    {
                        description: { "pt-BR": "Busuu", "en-US": "Busuu" },
                        url: "https://www.busuu.com/",
                        type: "link"
                    }
                ],
                showDetail: false
            })

            histories.push({
                date: new Date("2020-07-29"),
                category: this.$store.state.categoryType.languages,
                title: {
                    "pt-BR": "EF English Live",
                    "en-US": "EF English Live",
                },
                subTitle: {
                    "pt-BR": "Curso Pós-Intermediário de Inglês CEFR Nível B2",
                    "en-US": "Upper Intermediate CEFR Level B2 English Course",
                },
                image: require('@/assets/courses/englishLive.jpg'),
                tags: [this.$store.state.tags.inProgress, this.$store.state.tags.english, this.$store.state.tags.upperIntermediate],
                links: [
                    {
                        description: { "pt-BR": "EFEnglishLive", "en-US": "EFEnglishLive" },
                        url: "https://englishlive.ef.com/pt-br/",
                        type: "link"
                    }
                ],
                showDetail: false
            })
        },
    },
}

export default languageCourses;