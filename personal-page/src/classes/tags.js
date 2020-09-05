const tags = {
    data() {
        return {

        }
    },
    methods: {
        mountTagGroups() {
            let groups = {
                management: { id: 1, "pt-BR": "Gestão", "en-US": "Management", color: "cyan", tags: {} },
                technicalSkill: { id: 2, "pt-BR": "Habilidade Técnica", "en-US": "Technical Skill", color: "purple", tags: {} },
                testSkill: { id: 3, "pt-BR": "Habilidade de Teste", "en-US": "Test Skill", color: "green", tags: {} },
                softSkill: { id: 4, "pt-BR": "Competências", "en-US": "Soft Skill", color: "indigo", tags: {} },
                languageSkill: { id: 5, "pt-BR": "Habilidade Línguisticas", "en-US": "Language Skill", color: "pink", tags: {} },
                academic: { id: 6, "pt-BR": "Vida Acadêmica", "en-US": "Academic Life", color: "deep-purple", tags: {} },
                postion: { id: 7, "pt-BR": "Posição", "en-US": "Position", color: "red", tags: {} },
                others: { id: 8, "pt-BR": "Outras", "en-US": "Others", color: "blue", tags: {} },
            }

            return groups;
        },
        mountTags(groups) {
            let tags = {};



            this.mountLanguageSkill(tags, groups.languageSkill);
            this.mountManagement(tags, groups.management);
            this.mountTechnicalSkill(tags, groups.technicalSkill);
            this.mountTestSkill(tags, groups.testSkill);
            this.mountSoftSkill(tags, groups.softSkill);
            this.mountOthers(tags, groups.others);
            this.mountAcademic(tags, groups.academic);
            this.mountPosition(tags, groups.postion);


            return tags;

        },
        mountAcademic(tagsAll, group) {
            group.tags["highSchool"] = { id: 1, name: { "pt-BR": "#EnsinoMédio", "en-US": "#HighSchool" }, show: false, "group": group };
            group.tags["technicalSchool"] = { id: 2, name: { "pt-BR": "#EscolaTécnica", "en-US": "#TechnicalSchool" }, show: false, "group": group };
            group.tags["university"] = { id: 3, name: { "pt-BR": "#Universidade", "en-US": "#University" }, show: false, "group": group };
            group.tags["mba"] = { id: 4, name: { "pt-BR": "#MBA", "en-US": "#MBA" }, show: false, "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountPosition(tagsAll, group) {
            group.tags["intern"] = { id: 5, name: { "pt-BR": "#Estagiário", "en-US": "#Intern" }, show: false, "group": group };
            group.tags["juniorDeveloper"] = { id: 6, name: { "pt-BR": "#DesenvolverJunior", "en-US": "#JuniorDeveloper" }, show: false, "group": group };
            group.tags["fullDeveloper"] = { id: 7, name: { "pt-BR": "#DesenvolverPleno", "en-US": "#FullDeveloper" }, show: false, "group": group };
            group.tags["seniorDeveloper"] = { id: 8, name: { "pt-BR": "#DesenvolverSenior", "en-US": "#SeniorDeveloper" }, show: false, "group": group };
            group.tags["juniorSystemAnalyst"] = { id: 9, name: { "pt-BR": "#AnalistaDeSistemasJunior", "en-US": "#JuniorSystemAnalyst" }, show: false, "group": group };
            group.tags["fullSystemAnalyst"] = { id: 10, name: { "pt-BR": "#AnalistaDeSistemasPleno", "en-US": "#FullSystemAnalyst" }, show: false, "group": group };
            group.tags["seniorSystemAnalyst"] = { id: 11, name: { "pt-BR": "#AnalistaDeSistemasSenior", "en-US": "#SeniorSystemAnalyst" }, show: false, "group": group };
            group.tags["scrumMaster"] = { id: 12, name: { "pt-BR": "#ScrumMaster", "en-US": "#ScrumMaster" }, show: false, "group": group };
            group.tags["agileMaster"] = { id: 13, name: { "pt-BR": "#AgileMaster", "en-US": "#AgileMaster" }, show: false, "group": group };
            group.tags["agileCoach"] = { id: 13, name: { "pt-BR": "#AgileCoach", "en-US": "#AgileCoach" }, show: false, "group": group };
            group.tags["itCoordinator"] = { id: 14, name: { "pt-BR": "#CoordenadorDeTI", "en-US": "#ITCoordinator" }, show: false, "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountManagement(tagsAll, group) {
            group.tags["scrum"] = { id: 15, name: { "pt-BR": "#SCRUM", "en-US": "#SCRUM" }, show: false, "group": group };
            group.tags["kanban"] = { id: 16, name: { "pt-BR": "#KANBAN", "en-US": "#KANBAN" }, show: false, "group": group };
            group.tags["management30"] = { id: 17, name: { "pt-BR": "#Management3.0", "en-US": "#Management3.0" }, show: false, "group": group };
            group.tags["extremeProgramming"] = { id: 18, name: { "pt-BR": "#ExtremeProgramming", "en-US": "#ExtremeProgramming" }, show: false, "group": group };
            group.tags["pmi"] = { id: 19, name: { "pt-BR": "#PMI", "en-US": "#PMI" }, show: false, "group": group };
            group.tags["cmmi5"] = { id: 20, name: { "pt-BR": "#CMMI5", "en-US": "#CMMI5" }, show: false, "group": group };
            group.tags["incidentManagement"] = { id: 21, name: { "pt-BR": "#GestãoDeIncidentes", "en-US": "#IncidentManagement" }, show: false, "group": group };
            group.tags["problemManagement"] = { id: 22, name: { "pt-BR": "#GestãoDeProblemas", "en-US": "#ProblemManagement" }, show: false, "group": group };
            group.tags["okr"] = { id: 23, name: { "pt-BR": "#OKRs", "en-US": "#OKRs" }, show: false, "group": group };
            group.tags["cfr"] = { id: 24, name: { "pt-BR": "#CFRs", "en-US": "#CFRs" }, show: false, "group": group };
            group.tags["less"] = { id: 25, name: { "pt-BR": "#LeSS", "en-US": "#LeSS" }, show: false, "group": group };
            group.tags["lean"] = { id: 26, name: { "pt-BR": "#Lean", "en-US": "#Lean" }, show: false, "group": group };
            group.tags["mvp"] = { id: 27, name: { "pt-BR": "#MVP", "en-US": "#MVP" }, show: false, "group": group };
            group.tags["designThinking"] = { id: 28, name: { "pt-BR": "#DesignThinking", "en-US": "#DesignThinking" }, show: false, "group": group };
            group.tags["requirements"] = { id: 29, name: { "pt-BR": "#Requisitos", "en-US": "#Requirements" }, show: false, "group": group };
            group.tags["agile"] = { id: 30, name: { "pt-BR": "#Agilidade", "en-US": "#Agile" }, show: false, "group": group };
            group.tags["userStories"] = { id: 31, name: { "pt-BR": "#HistóriasDeUsuário", "en-US": "#UserStories" }, show: false, "group": group };
            group.tags["leanInception"] = { id: 32, name: { "pt-BR": "#LeanInception", "en-US": "#LeanInception" }, show: false, "group": group };
            group.tags["devOps"] = { id: 33, name: { "pt-BR": "#DevOps", "en-US": "#DevOps" }, show: false, "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountSoftSkill(tagsAll, group) {
            group.tags["coaching"] = { id: 34, name: { "pt-BR": "#Coaching", "en-US": "#Coaching" }, show: false, "group": group };
            group.tags["leadership"] = { id: 35, name: { "pt-BR": "#Liderança", "en-US": "#Leadership" }, show: false, "group": group };
            group.tags["servantLeadership"] = { id: 36, name: { "pt-BR": "#LiderançaServil", "en-US": "#ServantLeadership" }, show: false, "group": group };
            group.tags["highPerformanceTeams"] = { id: 37, name: { "pt-BR": "#EquipesAltaPerformance", "en-US": "#HighPerformanceTeams" }, show: false, "group": group };
            group.tags["challengingGoal"] = { id: 38, name: { "pt-BR": "#MetaDesafiadora", "en-US": "#ChallengingGoal" }, show: false, "group": group };
            group.tags["situationalLeadership"] = { id: 39, name: { "pt-BR": "#LiderançaSituacional", "en-US": "#SituationalLeadership" }, show: false, "group": group };
            group.tags["criatitySolution"] = { id: 40, name: { "pt-BR": "#SoluçãoCriativa", "en-US": "#CriatitySolution" }, show: false, "group": group };
            group.tags["selfManagement"] = { id: 41, name: { "pt-BR": "#AutoGerenciamento", "en-US": "#SelfManagement" }, show: false, "group": group };
            group.tags["teamManagement"] = { id: 42, name: { "pt-BR": "#GerenciamentoEquipe", "en-US": "#TeamManagement" }, show: false, "group": group };
            group.tags["hireProcess"] = { id: 43, name: { "pt-BR": "#ProcessoDeContratação", "en-US": "#HireProcess" }, show: false, "group": group };
            group.tags["trainning"] = { id: 44, name: { "pt-BR": "#Treinamento", "en-US": "#Trainning" }, show: false, "group": group };
            group.tags["engagement"] = { id: 45, name: { "pt-BR": "#Engajamento", "en-US": "#Engagement" }, show: false, "group": group };
            group.tags["businessManagement"] = { id: 46, name: { "pt-BR": "#GestãoDeNegócios", "en-US": "#BusinessManagement" }, show: false, "group": group };
            group.tags["businessProcess"] = { id: 47, name: { "pt-BR": "#GestãoDeProcesso", "en-US": "#BusinessProcess" }, show: false, "group": group };
            group.tags["negotiation"] = { id: 48, name: { "pt-BR": "#Negociação", "en-US": "#Negotiation" }, show: false, "group": group };
            group.tags["instructor"] = { id: 49, name: { "pt-BR": "#Instrutor", "en-US": "#Instructor" }, show: false, "group": group };
            group.tags["teamwork"] = { id: 50, name: { "pt-BR": "#TrabalhoEmEquipe", "en-US": "#Teamwork" }, show: false, "group": group };
            group.tags["feedback"] = { id: 51, name: { "pt-BR": "#Feeback", "en-US": "#Feeback" }, show: false, "group": group };
            group.tags["persuasion"] = { id: 52, name: { "pt-BR": "#Persuasão", "en-US": "#Persuasion" }, show: false, "group": group };
            group.tags["communication"] = { id: 53, name: { "pt-BR": "#Comunicação", "en-US": "#Communication" }, show: false, "group": group };
            group.tags["empathy"] = { id: 53, name: { "pt-BR": "#Empatia", "en-US": "#Empathy" }, show: false, "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountTechnicalSkill(tagsAll, group) {
            group.tags["dotNetFramework"] = { id: 54, name: { "pt-BR": "#.NetFramework", "en-US": "#.NetFramework" }, show: false, "group": group };
            group.tags["dotNetCore"] = { id: 55, name: { "pt-BR": "#.NetCore", "en-US": "#.NetCore" }, show: false, "group": group };
            group.tags["vbNet"] = { id: 56, name: { "pt-BR": "#VB.Net", "en-US": "#VB.Net" }, show: false, "group": group };
            group.tags["vba"] = { id: 57, name: { "pt-BR": "#VBA", "en-US": "#VBA" }, show: false, "group": group };
            group.tags["aspNet"] = { id: 58, name: { "pt-BR": "#Asp.Net", "en-US": "#Asp.Net" }, show: false, "group": group };
            group.tags["aspNetMVC"] = { id: 59, name: { "pt-BR": "#Asp.NetMVC", "en-US": "#Asp.NetMVC" }, show: false, "group": group };
            group.tags["razor"] = { id: 60, name: { "pt-BR": "#Razor", "en-US": "#Razor" }, show: false, "group": group };
            group.tags["asp"] = { id: 61, name: { "pt-BR": "#Asp", "en-US": "#Asp" }, show: false, "group": group };
            group.tags["webServices"] = { id: 1, name: { "pt-BR": "#WebServices", "en-US": "#WebServices" }, show: false, "group": group };
            group.tags["webAPI"] = { id: 62, name: { "pt-BR": "#WebAPI", "en-US": "#WebAPI" }, show: false, "group": group };
            group.tags["cSharp"] = { id: 63, name: { "pt-BR": "#C#", "en-US": "#C#" }, show: false, "group": group };
            group.tags["sql"] = { id: 64, name: { "pt-BR": "#SQL", "en-US": "#SQL" }, show: false, "group": group };
            group.tags["sqlCompact"] = { id: 65, name: { "pt-BR": "#SQLCompact", "en-US": "#SQLCompact" }, show: false, "group": group };
            group.tags["adoNet"] = { id: 66, name: { "pt-BR": "#AdoNet", "en-US": "#AdoNet" }, show: false, "group": group };
            group.tags["entityframework6"] = { id: 67, name: { "pt-BR": "#Entityframework6", "en-US": "#Entityframework6" }, show: false, "group": group };
            group.tags["entityframeworkNetCore"] = { id: 68, name: { "pt-BR": "#EntityframeworkNetCore", "en-US": "#EntityframeworkNetCore" }, show: false, "group": group };
            group.tags["oracle"] = { id: 69, name: { "pt-BR": "#Oracle", "en-US": "#Oracle" }, show: false, "group": group };
            group.tags["visualBasic6"] = { id: 70, name: { "pt-BR": "#VisualBasic6", "en-US": "#VisualBasic6" }, show: false, "group": group };
            group.tags["vbScript"] = { id: 71, name: { "pt-BR": "#VBScript", "en-US": "#VBScript" }, show: false, "group": group };
            group.tags["javascript"] = { id: 72, name: { "pt-BR": "#Javascript", "en-US": "#Javascript" }, show: false, "group": group };
            group.tags["vueJS"] = { id: 73, name: { "pt-BR": "#VueJS", "en-US": "#VueJS" }, show: false, "group": group };
            group.tags["vuex"] = { id: 73, name: { "pt-BR": "#Vuex", "en-US": "#Vuex" }, show: false, "group": group };
            group.tags["vuetify"] = { id: 73, name: { "pt-BR": "#Vuetify", "en-US": "#Vuetify" }, show: false, "group": group };
            group.tags["jQuery"] = { id: 74, name: { "pt-BR": "#jQuery", "en-US": "#jQuery" }, show: false, "group": group };
            group.tags["css"] = { id: 75, name: { "pt-BR": "#CSS", "en-US": "#CSS" }, show: false, "group": group };
            group.tags["html"] = { id: 76, name: { "pt-BR": "#HTML", "en-US": "#HTML" }, show: false, "group": group };
            group.tags["photoshop"] = { id: 77, name: { "pt-BR": "#Photoshop", "en-US": "#Photoshop" }, show: false, "group": group };
            group.tags["silverlight"] = { id: 78, name: { "pt-BR": "#Silverlight", "en-US": "#Silverlight" }, show: false, "group": group };
            group.tags["mvvm"] = { id: 79, name: { "pt-BR": "#MVVM", "en-US": "#MVVM" }, show: false, "group": group };
            group.tags["mvc"] = { id: 80, name: { "pt-BR": "#MVC", "en-US": "#MVC" }, show: false, "group": group };
            group.tags["designPattern"] = { id: 81, name: { "pt-BR": "#PadrãoDeProjetos", "en-US": "#DesignPattern" }, show: false, "group": group };
            group.tags["DDD"] = { id: 82, name: { "pt-BR": "#DDD", "en-US": "#DDD" }, show: false, "group": group };
            group.tags["dataModeling"] = { id: 83, name: { "pt-BR": "#ModelagemDeDados", "en-US": "#DataModeling" }, show: false, "group": group };
            group.tags["uml"] = { id: 84, name: { "pt-BR": "#UML", "en-US": "#UML" }, show: false, "group": group };
            group.tags["azure"] = { id: 85, name: { "pt-BR": "#Azure", "en-US": "#Azure" }, show: false, "group": group };
            group.tags["computing"] = { id: 86, name: { "pt-BR": "#Computação", "en-US": "#Computing" }, show: false, "group": group };
            group.tags["refactoring"] = { id: 87, name: { "pt-BR": "#Refatoração", "en-US": "#Refactoring" }, show: false, "group": group };
            group.tags["continuousDelivery"] = { id: 88, name: { "pt-BR": "#EntregaContínua", "en-US": "#ContinuousDelivery" }, show: false, "group": group };


            group.tags["excel"] = { id: 89, name: { "pt-BR": "#Excel", "en-US": "#Excel" }, show: false, "group": group };
            group.tags["word"] = { id: 90, name: { "pt-BR": "#Word", "en-US": "#Word" }, show: false, "group": group };
            group.tags["powerPoint"] = { id: 91, name: { "pt-BR": "#PowerPoint", "en-US": "#PowerPoint" }, show: false, "group": group };
            group.tags["outlook"] = { id: 92, name: { "pt-BR": "#Outlook", "en-US": "#Outlook" }, show: false, "group": group };
            group.tags["coreldraw"] = { id: 93, name: { "pt-BR": "#CorelDraw", "en-US": "#CorelDraw" }, show: false, "group": group };
            group.tags["movieMaker"] = { id: 94, name: { "pt-BR": "#MovieMaker", "en-US": "#MovieMaker" }, show: false, "group": group };
            group.tags["access"] = { id: 95, name: { "pt-BR": "#Access", "en-US": "#Access" }, show: false, "group": group };

            group.tags["c"] = { id: 96, name: { "pt-BR": "#C", "en-US": "#C" }, show: false, "group": group };
            group.tags["cPlusPlus"] = { id: 97, name: { "pt-BR": "#C++", "en-US": "#C++" }, show: false, "group": group };
            group.tags["pascal"] = { id: 98, name: { "pt-BR": "#Pascal", "en-US": "#Pascal" }, show: false, "group": group };
            group.tags["delphi"] = { id: 99, name: { "pt-BR": "#Delphi", "en-US": "#Delphi" }, show: false, "group": group };
            group.tags["php"] = { id: 100, name: { "pt-BR": "#Php", "en-US": "#Php" }, show: false, "group": group };
            group.tags["java"] = { id: 101, name: { "pt-BR": "#Java", "en-US": "#Java" }, show: false, "group": group };
            group.tags["microAssembly"] = { id: 102, name: { "pt-BR": "#MontagemComputador", "en-US": "#MicroAssembly" }, show: false, "group": group };
            group.tags["microcomputerMaintenance"] = { id: 103, name: { "pt-BR": "#ManutençãoMicrocomputador", "en-US": "#MicrocomputerMaintenance" }, show: false, "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountTestSkill(tagsAll, group) {
            group.tags["unitTest"] = { id: 104, name: { "pt-BR": "#TesteUnitário", "en-US": "#UnitTest" }, show: false, "group": group };
            group.tags["integratedTest"] = { id: 105, name: { "pt-BR": "#TesteIntegrado", "en-US": "#IntegratedTest" }, show: false, "group": group };
            group.tags["codeCoverage"] = { id: 106, name: { "pt-BR": "#CodeCoverage", "en-US": "#CodeCoverage" }, show: false, "group": group };
            group.tags["codeAnalysis"] = { id: 107, name: { "pt-BR": "#CodeAnalysis", "en-US": "#CodeAnalysis" }, show: false, "group": group };
            group.tags["styleCop"] = { id: 108, name: { "pt-BR": "#StyleCop", "en-US": "#StyleCop" }, show: false, "group": group };
            group.tags["codeMetrics"] = { id: 109, name: { "pt-BR": "#CodeMetrics", "en-US": "#CodeMetrics" }, show: false, "group": group };
            group.tags["TDD"] = { id: 110, name: { "pt-BR": "#TDD", "en-US": "#TDD" }, show: false, "group": group };
            group.tags["BDD"] = { id: 111, name: { "pt-BR": "#BDD", "en-US": "#BDD" }, show: false, "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountLanguageSkill(tagsAll, group) {
            group.tags["portuguese"] = { id: 112, name: { "pt-BR": "#Português", "en-US": "#Portuguese" }, show: false, "group": group };
            group.tags["english"] = { id: 113, name: { "pt-BR": "#Inglês", "en-US": "#English" }, show: false, "group": group };
            group.tags["italian"] = { id: 114, name: { "pt-BR": "#Italiano", "en-US": "#Italian" }, show: false, "group": group };
            group.tags["spanish"] = { id: 115, name: { "pt-BR": "#Espanhol", "en-US": "#Spanish" }, show: false, "group": group };

            group.tags["basic"] = { id: 1001, name: { "pt-BR": "#Básico", "en-US": "#Basic" }, show: false, "group": group };
            group.tags["preIntermediate"] = { id: 1002, name: { "pt-BR": "#PréIntermediário", "en-US": "#PreIntermediate" }, show: false, "group": group };
            group.tags["intermediate"] = { id: 1003, name: { "pt-BR": "#Intermediário", "en-US": "#Intermediate" }, show: false, "group": group };
            group.tags["upperIntermediate"] = { id: 1004, name: { "pt-BR": "#Intermediário Superior", "en-US": "#UpperIntermediate" }, show: false, "group": group };
            group.tags["advanced"] = { id: 1005, name: { "pt-BR": "#Avançado", "en-US": "#Advanced" }, show: false, "group": group };
            group.tags["fluent"] = { id: 1006, name: { "pt-BR": "#Fluente", "en-US": "#Fluent" }, show: false, "group": group };
            group.tags["native"] = { id: 1007, name: { "pt-BR": "#Nativo", "en-US": "#Native" }, show: false, "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountOthers(tagsAll, group) {
            group.tags["inProgress"] = { id: 3000, name: { "pt-BR": "#EmProgresso", "en-US": "#InProgress" }, show: false, "group": group };
            group.tags["stopped"] = { id: 4000, name: { "pt-BR": "#Parado", "en-US": "#Stopped" }, show: false, "group": group };
            group.tags["fourthIndustrialRevolution"] = { id: 117, name: { "pt-BR": "#QuartaRevoluçãoIndustrial", "en-US": "#FourthIndustrialRevolution" }, show: false, "group": group };
            group.tags["artificialIntelligence"] = { id: 118, name: { "pt-BR": "#InteligênciaArtifícial", "en-US": "#ArtificialIntelligence" }, show: false, "group": group };
            group.tags["disruptiveInnovations"] = { id: 119, name: { "pt-BR": "#InovaçõesDisruptivas", "en-US": "#DisruptiveInnovations" }, show: false, "group": group };
            group.tags["successCase"] = { id: 120, name: { "pt-BR": "#CasoDeSucesso", "en-US": "#SuccessCase" }, show: false, "group": group };
            group.tags["opportunity"] = { id: 121, name: { "pt-BR": "#Oportunidade", "en-US": "#Opportunity" }, show: false, "group": group };
            group.tags["greatChallenge"] = { id: 122, name: { "pt-BR": "#GrandeDesafío", "en-US": "#GreatChallenge" }, show: false, "group": group };
            group.tags["rewarding"] = { id: 123, name: { "pt-BR": "#Recompensador", "en-US": "#Rewarding" }, show: false, "group": group };
            group.tags["hardworking"] = { id: 124, name: { "pt-BR": "#TrabalhoDuro", "en-US": "#Hardworking" }, show: false, "group": group };
            group.tags["continuousEvolution"] = { id: 125, name: { "pt-BR": "#EvoluçãoContínua", "en-US": "#ContinuousEvolution" }, show: false, "group": group };
            group.tags["kaisen"] = { id: 126, name: { "pt-BR": "#Kaisen", "en-US": "#Kaisen" }, show: false, "group": group };
            group.tags["gemba"] = { id: 127, name: { "pt-BR": "#Gemba", "en-US": "#Gemba" }, show: false, "group": group };
            group.tags["startup"] = { id: 128, name: { "pt-BR": "#Startup", "en-US": "#Startup" }, show: false, "group": group };
            group.tags["innovation"] = { id: 129, name: { "pt-BR": "#Inovação", "en-US": "#Innovation" }, show: false, "group": group };
            group.tags["humanMind"] = { id: 130, name: { "pt-BR": "#MenteHumana", "en-US": "#HumanMind" }, show: false, "group": group };
            group.tags["anxiety"] = { id: 131, name: { "pt-BR": "#Ansiedade", "en-US": "#Anxiety" }, show: false, "group": group };

            Object.assign(tagsAll, group.tags);
        },
    },
}

export default tags;