const tags = {
    data() {
        return {

        }
    },
    methods: {
        mountTagGroups() {
            let groups = {
                languageSkill: { "pt-BR": "Habilidade Línguisticas", "en-US": "Language Skill", tags: {} },
                management: { "pt-BR": "Gestão", "en-US": "Management", tags: {} },
                technicalSkill: { "pt-BR": "Habilidade Técnica", "en-US": "Technical Skill", tags: {} },
                testSkill: { "pt-BR": "Habilidade de Teste", "en-US": "Test Skill", tags: {} },
                softSkill: { "pt-BR": "Competências", "en-US": "Soft Skill", tags: {} },
                others: { "pt-BR": "Outras", "en-US": "Others", tags: {} },
                academic: { "pt-BR": "Vida Acadêmica", "en-US": "Academic Life", tags: {} },
                postion: { "pt-BR": "Posição", "en-US": "Position", tags: {} },
            }

            return groups;
        },
        mountTags(groups) {
            let tags = {};

            tags["inProgress"] = { name: { "pt-BR": "#EmProgresso", "en-US": "#InProgress" }, show: false, color: "deep-purple", "group": groups.others };

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
            group.tags["highSchool"] = { name: { "pt-BR": "#EnsinoMédio", "en-US": "#HighSchool" }, show: false, color: "red", "group": group };
            group.tags["technicalSchool"] = { name: { "pt-BR": "#EscolaTécnica", "en-US": "#TechnicalSchool" }, show: false, color: "red", "group": group };
            group.tags["university"] = { name: { "pt-BR": "#Universidade", "en-US": "#University" }, show: false, color: "red", "group": group };
            group.tags["mba"] = { name: { "pt-BR": "#MBA", "en-US": "#MBA" }, show: false, color: "red", "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountPosition(tagsAll, group) {
            group.tags["intern"] = { name: { "pt-BR": "#Estagiário", "en-US": "#Intern" }, show: false, color: "red", "group": group };
            group.tags["juniorDeveloper"] = { name: { "pt-BR": "#DesenvolverJunior", "en-US": "#JuniorDeveloper" }, show: false, color: "red", "group": group };
            group.tags["fullDeveloper"] = { name: { "pt-BR": "#DesenvolverPleno", "en-US": "#FullDeveloper" }, show: false, color: "red", "group": group };
            group.tags["seniorDeveloper"] = { name: { "pt-BR": "#DesenvolverSenior", "en-US": "#SeniorDeveloper" }, show: false, color: "red", "group": group };
            group.tags["juniorSystemAnalyst"] = { name: { "pt-BR": "#AnalistaDeSistemasJunior", "en-US": "#JuniorSystemAnalyst" }, show: false, color: "red", "group": group };
            group.tags["fullSystemAnalyst"] = { name: { "pt-BR": "#AnalistaDeSistemasPleno", "en-US": "#FullSystemAnalyst" }, show: false, color: "red", "group": group };
            group.tags["seniorSystemAnalyst"] = { name: { "pt-BR": "#AnalistaDeSistemasSenior", "en-US": "#SeniorSystemAnalyst" }, show: false, color: "red", "group": group };
            group.tags["scrumMaster"] = { name: { "pt-BR": "#ScrumMaster", "en-US": "#ScrumMaster" }, show: false, color: "red", "group": group };
            group.tags["agileCoach"] = { name: { "pt-BR": "#AgileCoach", "en-US": "#AgileCoach" }, show: false, color: "red", "group": group };
            group.tags["itCoordinator"] = { name: { "pt-BR": "#CoordenadorDeTI", "en-US": "#ITCoordinator" }, show: false, color: "red", "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountManagement(tagsAll, group) {
            group.tags["scrum"] = { name: { "pt-BR": "#SCRUM", "en-US": "#SCRUM" }, show: false, color: "cyan", "group": group };
            group.tags["kanban"] = { name: { "pt-BR": "#KANBAN", "en-US": "#KANBAN" }, show: false, color: "cyan", "group": group };
            group.tags["management30"] = { name: { "pt-BR": "#Management3.0", "en-US": "#Management3.0" }, show: false, color: "cyan", "group": group };
            group.tags["extremeProgramming"] = { name: { "pt-BR": "#ExtremeProgramming", "en-US": "#ExtremeProgramming" }, show: false, color: "cyan", "group": group };
            group.tags["pmi"] = { name: { "pt-BR": "#PMI", "en-US": "#PMI" }, show: false, color: "cyan", "group": group };
            group.tags["cmmi5"] = { name: { "pt-BR": "#CMMI5", "en-US": "#CMMI5" }, show: false, color: "cyan", "group": group };
            group.tags["incidentManagement"] = { name: { "pt-BR": "#GestãoDeIncidentes", "en-US": "#IncidentManagement" }, show: false, color: "cyan", "group": group };
            group.tags["problemManagement"] = { name: { "pt-BR": "#GestãoDeProblemas", "en-US": "#ProblemManagement" }, show: false, color: "cyan", "group": group };
            group.tags["okr"] = { name: { "pt-BR": "#OKRs", "en-US": "#OKRs" }, show: false, color: "cyan", "group": group };
            group.tags["cfr"] = { name: { "pt-BR": "#CFRs", "en-US": "#CFRs" }, show: false, color: "cyan", "group": group };
            group.tags["less"] = { name: { "pt-BR": "#LeSS", "en-US": "#LeSS" }, show: false, color: "cyan", "group": group };
            group.tags["lean"] = { name: { "pt-BR": "#Lean", "en-US": "#Lean" }, show: false, color: "cyan", "group": group };
            group.tags["mvp"] = { name: { "pt-BR": "#MVP", "en-US": "#MVP" }, show: false, color: "cyan", "group": group };
            group.tags["designThinking"] = { name: { "pt-BR": "#DesignThinking", "en-US": "#DesignThinking" }, show: false, color: "cyan", "group": group };
            group.tags["requirements"] = { name: { "pt-BR": "#Requisitos", "en-US": "#Requirements" }, show: false, color: "cyan", "group": group };
            group.tags["agile"] = { name: { "pt-BR": "#Agilidade", "en-US": "#Agile" }, show: false, color: "cyan", "group": group };
            group.tags["userStories"] = { name: { "pt-BR": "#HistóriasDeUsuário", "en-US": "#UserStories" }, show: false, color: "cyan", "group": group };
            group.tags["leanInception"] = { name: { "pt-BR": "#LeanInception", "en-US": "#LeanInception" }, show: false, color: "cyan", "group": group };
            group.tags["devOps"] = { name: { "pt-BR": "#DevOps", "en-US": "#DevOps" }, show: false, color: "cyan", "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountSoftSkill(tagsAll, group) {
            group.tags["coaching"] = { name: { "pt-BR": "#Coaching", "en-US": "#Coaching" }, show: false, color: "indigo", "group": group };
            group.tags["leadership"] = { name: { "pt-BR": "#Liderança", "en-US": "#Leadership" }, show: false, color: "indigo", "group": group };
            group.tags["servantLeadership"] = { name: { "pt-BR": "#LiderançaServil", "en-US": "#ServantLeadership" }, show: false, color: "indigo", "group": group };
            group.tags["highPerformanceTeams"] = { name: { "pt-BR": "#EquipesAltaPerformance", "en-US": "#HighPerformanceTeams" }, show: false, color: "indigo", "group": group };
            group.tags["challengingGoal"] = { name: { "pt-BR": "#MetaDesafiadora", "en-US": "#ChallengingGoal" }, show: false, color: "indigo", "group": group };
            group.tags["situationalLeadership"] = { name: { "pt-BR": "#LiderançaSituacional", "en-US": "#SituationalLeadership" }, show: false, color: "indigo", "group": group };
            group.tags["criatitySolution"] = { name: { "pt-BR": "#SoluçãoCriativa", "en-US": "#CriatitySolution" }, show: false, color: "indigo", "group": group };
            group.tags["selfManagement"] = { name: { "pt-BR": "#AutoGerenciamento", "en-US": "#SelfManagement" }, show: false, color: "indigo", "group": group };
            group.tags["teamManagement"] = { name: { "pt-BR": "#GerenciamentoEquipe", "en-US": "#TeamManagement" }, show: false, color: "indigo", "group": group };
            group.tags["hireProcess"] = { name: { "pt-BR": "#ProcessoDeContratação", "en-US": "#HireProcess" }, show: false, color: "indigo", "group": group };
            group.tags["trainning"] = { name: { "pt-BR": "#Treinamento", "en-US": "#Trainning" }, show: false, color: "indigo", "group": group };
            group.tags["engagement"] = { name: { "pt-BR": "#Engajamento", "en-US": "#Engagement" }, show: false, color: "indigo", "group": group };
            group.tags["businessManagement"] = { name: { "pt-BR": "#GestãoDeNegócios", "en-US": "#BusinessManagement" }, show: false, color: "indigo", "group": group };
            group.tags["businessProcess"] = { name: { "pt-BR": "#GestãoDeProcesso", "en-US": "#BusinessProcess" }, show: false, color: "indigo", "group": group };
            group.tags["negotiation"] = { name: { "pt-BR": "#Negociação", "en-US": "#Negotiation" }, show: false, color: "indigo", "group": group };
            group.tags["instructor"] = { name: { "pt-BR": "#Instrutor", "en-US": "#Instructor" }, show: false, color: "indigo", "group": group };
            group.tags["teamwork"] = { name: { "pt-BR": "#TrabalhoEmEquipe", "en-US": "#Teamwork" }, show: false, color: "indigo", "group": group };
            group.tags["feedback"] = { name: { "pt-BR": "#Feeback", "en-US": "#Feeback" }, show: false, color: "indigo", "group": group };
            group.tags["persuasion"] = { name: { "pt-BR": "#Persuasão", "en-US": "#Persuasion" }, show: false, color: "indigo", "group": group };
            group.tags["communication"] = { name: { "pt-BR": "#Comunicação", "en-US": "#Communication" }, show: false, color: "indigo", "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountTechnicalSkill(tagsAll, group) {
            group.tags["dotNetFramework"] = { name: { "pt-BR": "#.NetFramework", "en-US": "#.NetFramework" }, show: false, color: "purple", "group": group };
            group.tags["dotNetCore"] = { name: { "pt-BR": "#.NetCore", "en-US": "#.NetCore" }, show: false, color: "purple", "group": group };
            group.tags["vbNet"] = { name: { "pt-BR": "#VB.Net", "en-US": "#VB.Net" }, show: false, color: "purple", "group": group };
            group.tags["vba"] = { name: { "pt-BR": "#VBA", "en-US": "#VBA" }, show: false, color: "purple", "group": group };
            group.tags["aspNet"] = { name: { "pt-BR": "#Asp.Net", "en-US": "#Asp.Net" }, show: false, color: "purple", "group": group };
            group.tags["aspNetMVC"] = { name: { "pt-BR": "#Asp.NetMVC", "en-US": "#Asp.NetMVC" }, show: false, color: "purple", "group": group };
            group.tags["razor"] = { name: { "pt-BR": "#Razor", "en-US": "#Razor" }, show: false, color: "purple", "group": group };
            group.tags["asp"] = { name: { "pt-BR": "#Asp", "en-US": "#Asp" }, show: false, color: "purple", "group": group };
            group.tags["webServices"] = { name: { "pt-BR": "#WebServices", "en-US": "#WebServices" }, show: false, color: "purple", "group": group };
            group.tags["webAPI"] = { name: { "pt-BR": "#WebAPI", "en-US": "#WebAPI" }, show: false, color: "purple", "group": group };
            group.tags["cSharp"] = { name: { "pt-BR": "#C#", "en-US": "#C#" }, show: false, color: "purple", "group": group };
            group.tags["sql"] = { name: { "pt-BR": "#SQL", "en-US": "#SQL" }, show: false, color: "purple", "group": group };
            group.tags["sqlCompact"] = { name: { "pt-BR": "#SQLCompact", "en-US": "#SQLCompact" }, show: false, color: "purple", "group": group };
            group.tags["adoNet"] = { name: { "pt-BR": "#AdoNet", "en-US": "#AdoNet" }, show: false, color: "purple", "group": group };
            group.tags["entityframework6"] = { name: { "pt-BR": "#Entityframework6", "en-US": "#Entityframework6" }, show: false, color: "purple", "group": group };
            group.tags["entityframeworkNetCore"] = { name: { "pt-BR": "#EntityframeworkNetCore", "en-US": "#EntityframeworkNetCore" }, show: false, color: "purple", "group": group };
            group.tags["oracle"] = { name: { "pt-BR": "#Oracle", "en-US": "#Oracle" }, show: false, color: "purple", "group": group };
            group.tags["visualBasic6"] = { name: { "pt-BR": "#VisualBasic6", "en-US": "#VisualBasic6" }, show: false, color: "purple", "group": group };
            group.tags["vbScript"] = { name: { "pt-BR": "#VBScript", "en-US": "#VBScript" }, show: false, color: "purple", "group": group };
            group.tags["javascript"] = { name: { "pt-BR": "#Javascript", "en-US": "#Javascript" }, show: false, color: "purple", "group": group };
            group.tags["vueJS"] = { name: { "pt-BR": "#VueJS", "en-US": "#VueJS" }, show: false, color: "purple", "group": group };
            group.tags["jQuery"] = { name: { "pt-BR": "#jQuery", "en-US": "#jQuery" }, show: false, color: "purple", "group": group };
            group.tags["css"] = { name: { "pt-BR": "#CSS", "en-US": "#CSS" }, show: false, color: "purple", "group": group };
            group.tags["html"] = { name: { "pt-BR": "#HTML", "en-US": "#HTML" }, show: false, color: "purple", "group": group };
            group.tags["photoshop"] = { name: { "pt-BR": "#Photoshop", "en-US": "#Photoshop" }, show: false, color: "purple", "group": group };
            group.tags["silverlight"] = { name: { "pt-BR": "#Silverlight", "en-US": "#Silverlight" }, show: false, color: "purple", "group": group };
            group.tags["mvvm"] = { name: { "pt-BR": "#MVVM", "en-US": "#MVVM" }, show: false, color: "purple", "group": group };
            group.tags["mvc"] = { name: { "pt-BR": "#MVC", "en-US": "#MVC" }, show: false, color: "purple", "group": group };
            group.tags["designPattern"] = { name: { "pt-BR": "#PadrãoDeProjetos", "en-US": "#designPattern" }, show: false, color: "purple", "group": group };
            group.tags["DDD"] = { name: { "pt-BR": "#DDD", "en-US": "#DDD" }, show: false, color: "purple", "group": group };
            group.tags["dataModeling"] = { name: { "pt-BR": "#ModelagemDeDados", "en-US": "#DataModeling" }, show: false, color: "purple", "group": group };
            group.tags["uml"] = { name: { "pt-BR": "#UML", "en-US": "#UML" }, show: false, color: "purple", "group": group };
            group.tags["azure"] = { name: { "pt-BR": "#Azure", "en-US": "#Azure" }, show: false, color: "purple", "group": group };
            group.tags["computing"] = { name: { "pt-BR": "#Computação", "en-US": "#Computing" }, show: false, color: "purple", "group": group };
            group.tags["refactoring"] = { name: { "pt-BR": "#Refatoração", "en-US": "#Refactoring" }, show: false, color: "purple", "group": group };
            group.tags["continuousDelivery"] = { name: { "pt-BR": "#EntregaContínua", "en-US": "#continuousDelivery" }, show: false, color: "purple", "group": group };


            group.tags["excel"] = { name: { "pt-BR": "#Excel", "en-US": "#Excel" }, show: false, color: "purple", "group": group };
            group.tags["word"] = { name: { "pt-BR": "#Word", "en-US": "#Word" }, show: false, color: "purple", "group": group };
            group.tags["powerPoint"] = { name: { "pt-BR": "#PowerPoint", "en-US": "#PowerPoint" }, show: false, color: "purple", "group": group };
            group.tags["outlook"] = { name: { "pt-BR": "#Outlook", "en-US": "#Outlook" }, show: false, color: "purple", "group": group };
            group.tags["coreldraw"] = { name: { "pt-BR": "#CorelDraw", "en-US": "#CorelDraw" }, show: false, color: "purple", "group": group };
            group.tags["movieMaker"] = { name: { "pt-BR": "#MovieMaker", "en-US": "#MovieMaker" }, show: false, color: "purple", "group": group };
            group.tags["access"] = { name: { "pt-BR": "#Access", "en-US": "#Access" }, show: false, color: "purple", "group": group };

            group.tags["c"] = { name: { "pt-BR": "#C", "en-US": "#C" }, show: false, color: "purple", "group": group };
            group.tags["cPlusPlus"] = { name: { "pt-BR": "#C++", "en-US": "#C++" }, show: false, color: "purple", "group": group };
            group.tags["pascal"] = { name: { "pt-BR": "#Pascal", "en-US": "#Pascal" }, show: false, color: "purple", "group": group };
            group.tags["delphi"] = { name: { "pt-BR": "#Delphi", "en-US": "#Delphi" }, show: false, color: "purple", "group": group };
            group.tags["php"] = { name: { "pt-BR": "#Php", "en-US": "#Php" }, show: false, color: "purple", "group": group };
            group.tags["java"] = { name: { "pt-BR": "#Java", "en-US": "#Java" }, show: false, color: "purple", "group": group };
            group.tags["microAssembly"] = { name: { "pt-BR": "#MontagemComputador", "en-US": "#MicroAssembly" }, show: false, color: "purple", "group": group };
            group.tags["microcomputerMaintenance"] = { name: { "pt-BR": "#ManutençãoMicrocomputador", "en-US": "#MicrocomputerMaintenance" }, show: false, color: "purple", "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountTestSkill(tagsAll, group) {
            group.tags["unitTest"] = { name: { "pt-BR": "#TesteUnitário", "en-US": "#UnitTest" }, show: false, color: "green", "group": group };
            group.tags["integratedTest"] = { name: { "pt-BR": "#TesteIntegrado", "en-US": "#IntegratedTest" }, show: false, color: "green", "group": group };
            group.tags["codeCoverage"] = { name: { "pt-BR": "#CodeCoverage", "en-US": "#CodeCoverage" }, show: false, color: "green", "group": group };
            group.tags["codeAnalysis"] = { name: { "pt-BR": "#CodeAnalysis", "en-US": "#CodeAnalysis" }, show: false, color: "green", "group": group };
            group.tags["styleCop"] = { name: { "pt-BR": "#StyleCop", "en-US": "#StyleCop" }, show: false, color: "green", "group": group };
            group.tags["codeMetrics"] = { name: { "pt-BR": "#CodeMetrics", "en-US": "#CodeMetrics" }, show: false, color: "green", "group": group };
            group.tags["TDD"] = { name: { "pt-BR": "#TDD", "en-US": "#TDD" }, show: false, color: "green", "group": group };
            group.tags["BDD"] = { name: { "pt-BR": "#BDD", "en-US": "#BDD" }, show: false, color: "green", "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountLanguageSkill(tagsAll, group) {
            group.tags["portuguese"] = { name: { "pt-BR": "#Português", "en-US": "#Portuguese" }, show: false, color: "pink", "group": group };
            group.tags["english"] = { name: { "pt-BR": "#Inglês", "en-US": "#English" }, show: false, color: "pink", "group": group };
            group.tags["italian"] = { name: { "pt-BR": "#Italiano", "en-US": "#Italian" }, show: false, color: "pink", "group": group };
            group.tags["spanish"] = { name: { "pt-BR": "#Espanhol", "en-US": "#Spanish" }, show: false, color: "pink", "group": group };

            Object.assign(tagsAll, group.tags);
        },
        mountOthers(tagsAll, group) {
            group.tags["fourthIndustrialRevolution"] = { name: { "pt-BR": "#QuartaRevoluçãoIndustrial", "en-US": "#FourthIndustrialRevolution" }, show: false, color: "blue", "group": group };
            group.tags["artificialIntelligence"] = { name: { "pt-BR": "#InteligênciaArtifícial", "en-US": "#ArtificialIntelligence" }, show: false, color: "blue", "group": group };
            group.tags["disruptiveInnovations"] = { name: { "pt-BR": "#InovaçõesDisruptivas", "en-US": "#DisruptiveInnovations" }, show: false, color: "blue", "group": group };
            group.tags["successCase"] = { name: { "pt-BR": "#CasoDeSucesso", "en-US": "#successCase" }, show: false, color: "blue", "group": group };
            group.tags["opportunity"] = { name: { "pt-BR": "#Oportunidade", "en-US": "#Opportunity" }, show: false, color: "blue", "group": group };
            group.tags["greatChallenge"] = { name: { "pt-BR": "#GrandeDesafío", "en-US": "#GreatChallenge" }, show: false, color: "blue", "group": group };
            group.tags["rewarding"] = { name: { "pt-BR": "#Recompensador", "en-US": "#Rewarding" }, show: false, color: "blue", "group": group };
            group.tags["hardworking"] = { name: { "pt-BR": "#TrabalhoDuro", "en-US": "#Hardworking" }, show: false, color: "blue", "group": group };
            group.tags["continuousEvolution"] = { name: { "pt-BR": "#EvoluçãoContínua", "en-US": "#ContinuousEvolution" }, show: false, color: "blue", "group": group };
            group.tags["kaisen"] = { name: { "pt-BR": "#Kaisen", "en-US": "#Kaisen" }, show: false, color: "blue", "group": group };
            group.tags["gemba"] = { name: { "pt-BR": "#Gemba", "en-US": "#Gemba" }, show: false, color: "blue", "group": group };
            group.tags["startup"] = { name: { "pt-BR": "#Startup", "en-US": "#Startup" }, show: false, color: "blue", "group": group };
            group.tags["innovation"] = { name: { "pt-BR": "#Inovação", "en-US": "#Innovation" }, show: false, color: "blue", "group": group };
            group.tags["humanMind"] = { name: { "pt-BR": "#MenteHumana", "en-US": "#HumanMind" }, show: false, color: "blue", "group": group };
            group.tags["anxiety"] = { name: { "pt-BR": "#Ansiedade", "en-US": "#Anxiety" }, show: false, color: "blue", "group": group };

            Object.assign(tagsAll, group.tags);
        },
    },
}

export default tags;