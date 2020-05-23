const categories = {
    methods: {
        mountCategories() {
            let categories = {
                professionalExperience: {
                    id: 1,
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
                    id: 2,
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
                    id: 3,
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
                    id: 4,
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
                    id: 5,
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
                    id: 6,
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
                technologies: {
                    id: 9,
                    color: "purple",
                    name: {
                        "pt-BR": "Tecnologias",
                        "en-US": "Technologies"
                    },
                    icon: "mdi-laptop",
                    enable: true,
                    showResume: true,
                    showItems: true,
                    pinned: false,
                },
                thoughts: {
                    id: 7,
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
                                    id: 8,
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
                                },*/


                /*
                                milestones: {
                                    id: 10,
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
            };

            return categories;
        }
    },
}

export default categories;