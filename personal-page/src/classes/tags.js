const tags = {
    data() {
        return {

        }
    },
    methods: {
        mountTags() {
            let tags = {};

            this.mountAcademic(tags);
            this.mountPosition(tags);
            this.mountManagement(tags);
            this.mountSoftSkill(tags);
            this.mountTechnicalSkill(tags);
            this.mountTestSkill(tags);
            this.mountLanguageSkill(tags);
            this.mountOthers(tags);

            return tags;

        },
        mountAcademic(tags) {
            tags["highSchool"] = { "pt-BR": "#EnsinoMédio", "en-US": "#HighSchool", color: "red" };
            tags["technicalSchool"] = { "pt-BR": "#EscolaTécnica", "en-US": "#TechnicalSchool", color: "red" };
            tags["university"] = { "pt-BR": "#Universidade", "en-US": "#University", color: "red" };
            tags["mba"] = { "pt-BR": "#MBA", "en-US": "#MBA", color: "red" };
        },
        mountPosition(tags) {
            tags["intern"] = { "pt-BR": "#Estagiário", "en-US": "#Intern", color: "red" };
            tags["juniorDeveloper"] = { "pt-BR": "#DesenvolverJunior", "en-US": "#JuniorDeveloper", color: "red" };
            tags["fullDeveloper"] = { "pt-BR": "#DesenvolverPleno", "en-US": "#FullDeveloper", color: "red" };
            tags["seniorDeveloper"] = { "pt-BR": "#DesenvolverSenior", "en-US": "#SeniorDeveloper", color: "red" };
            tags["juniorSystemAnalyst"] = { "pt-BR": "#AnalistaDeSistemasJunior", "en-US": "#JuniorSystemAnalyst", color: "red" };
            tags["fullSystemAnalyst"] = { "pt-BR": "#AnalistaDeSistemasPleno", "en-US": "#FullSystemAnalyst", color: "red" };
            tags["seniorSystemAnalyst"] = { "pt-BR": "#AnalistaDeSistemasSenior", "en-US": "#SeniorSystemAnalyst", color: "red" };
            tags["scrumMaster"] = { "pt-BR": "#ScrumMaster", "en-US": "#ScrumMaster", color: "red" };
            tags["agileCoach"] = { "pt-BR": "#AgileCoach", "en-US": "#AgileCoach", color: "red" };
            tags["itCoordinator"] = { "pt-BR": "#CoordenadorDeTI", "en-US": "#ITCoordinator", color: "red" };
        },
        mountManagement(tags) {
            tags["scrum"] = { "pt-BR": "#SCRUM", "en-US": "#SCRUM", color: "cyan" };
            tags["kanban"] = { "pt-BR": "#KANBAN", "en-US": "#KANBAN", color: "cyan" };
            tags["management30"] = { "pt-BR": "#Management3.0", "en-US": "#Management3.0", color: "cyan" };
            tags["extremeProgramming"] = { "pt-BR": "#ExtremeProgramming", "en-US": "#ExtremeProgramming", color: "cyan" };
            tags["pmi"] = { "pt-BR": "#PMI", "en-US": "#PMI", color: "cyan" };
            tags["cmmi5"] = { "pt-BR": "#CMMI5", "en-US": "#CMMI5", color: "cyan" };
            tags["incidentManagement"] = { "pt-BR": "#GestãoDeIncidentes", "en-US": "#IncidentManagement", color: "cyan" };
            tags["problemManagement"] = { "pt-BR": "#GestãoDeProblemas", "en-US": "#ProblemManagement", color: "cyan" };
            tags["okr"] = { "pt-BR": "#OKRs", "en-US": "#OKRs", color: "cyan" };
            tags["cfr"] = { "pt-BR": "#CFRs", "en-US": "#CFRs", color: "cyan" };
            tags["less"] = { "pt-BR": "#LeSS", "en-US": "#LeSS", color: "cyan" };
            tags["lean"] = { "pt-BR": "#Lean", "en-US": "#Lean", color: "cyan" };
            tags["mvp"] = { "pt-BR": "#MVP", "en-US": "#MVP", color: "cyan" };
            tags["designThinking"] = { "pt-BR": "#DesignThinking", "en-US": "#DesignThinking", color: "cyan" };
            tags["requirements"] = { "pt-BR": "#Requisitos", "en-US": "#Requirements", color: "cyan" };
            tags["agile"] = { "pt-BR": "#Agilidade", "en-US": "#Agile", color: "cyan" };
            tags["userStories"] = { "pt-BR": "#HistóriasDeUsuário", "en-US": "#UserStories", color: "cyan" };
            tags["leanInception"] = { "pt-BR": "#LeanInception", "en-US": "#LeanInception", color: "cyan" };
            tags["devOps"] = { "pt-BR": "#DevOps", "en-US": "#DevOps", color: "cyan" };


        },
        mountSoftSkill(tags) {
            tags["coaching"] = { "pt-BR": "#Coaching", "en-US": "#Coaching", color: "indigo" };
            tags["leadership"] = { "pt-BR": "#Liderança", "en-US": "#Leadership", color: "indigo" };
            tags["servantLeadership"] = { "pt-BR": "#LiderançaServil", "en-US": "#ServantLeadership", color: "indigo" };
            tags["highPerformanceTeams"] = { "pt-BR": "#EquipesAltaPerformance", "en-US": "#HighPerformanceTeams", color: "indigo" };
            tags["challengingGoal"] = { "pt-BR": "#MetaDesafiadora", "en-US": "#ChallengingGoal", color: "indigo" };
            tags["situationalLeadership"] = { "pt-BR": "#LiderançaSituacional", "en-US": "#SituationalLeadership", color: "indigo" };
            tags["criatitySolution"] = { "pt-BR": "#SoluçãoCriativa", "en-US": "#CriatitySolution", color: "indigo" };
            tags["selfManagement"] = { "pt-BR": "#AutoGerenciamento", "en-US": "#SelfManagement", color: "indigo" };
            tags["teamManagement"] = { "pt-BR": "#GerenciamentoEquipe", "en-US": "#TeamManagement", color: "indigo" };
            tags["hireProcess"] = { "pt-BR": "#ProcessoDeContratação", "en-US": "#HireProcess", color: "indigo" };
            tags["trainning"] = { "pt-BR": "#Treinamento", "en-US": "#Trainning", color: "indigo" };
            tags["engagement"] = { "pt-BR": "#Engajamento", "en-US": "#Engagement", color: "indigo" };
            tags["businessManagement"] = { "pt-BR": "#GestãoDeNegócios", "en-US": "#BusinessManagement", color: "indigo" };
            tags["businessProcess"] = { "pt-BR": "#GestãoDeProcesso", "en-US": "#BusinessProcess", color: "indigo" };
            tags["negotiation"] = { "pt-BR": "#Negociação", "en-US": "#Negotiation", color: "indigo" };
            tags["instructor"] = { "pt-BR": "#Instrutor", "en-US": "#Instructor", color: "indigo" };
            tags["teamwork"] = { "pt-BR": "#TrabalhoEmEquipe", "en-US": "#Teamwork", color: "indigo" };
            tags["feedback"] = { "pt-BR": "#Feeback", "en-US": "#Feeback", color: "indigo" };
            tags["persuasion"] = { "pt-BR": "#Persuasão", "en-US": "#Persuasion", color: "indigo" };
            tags["communication"] = { "pt-BR": "#Comunicação", "en-US": "#Communication", color: "indigo" };

        },
        mountTechnicalSkill(tags) {
            tags["dotNetFramework"] = { "pt-BR": "#.NetFramework", "en-US": "#.NetFramework", color: "purple" };
            tags["dotNetCore"] = { "pt-BR": "#.NetCore", "en-US": "#.NetCore", color: "purple" };
            tags["vbNet"] = { "pt-BR": "#VB.Net", "en-US": "#VB.Net", color: "purple" };
            tags["vba"] = { "pt-BR": "#VBA", "en-US": "#VBA", color: "purple" };
            tags["aspNet"] = { "pt-BR": "#Asp.Net", "en-US": "#Asp.Net", color: "purple" };
            tags["aspNetMVC"] = { "pt-BR": "#Asp.NetMVC", "en-US": "#Asp.NetMVC", color: "purple" };
            tags["razor"] = { "pt-BR": "#Razor", "en-US": "#Razor", color: "purple" };
            tags["asp"] = { "pt-BR": "#Asp", "en-US": "#Asp", color: "purple" };
            tags["webServices"] = { "pt-BR": "#WebServices", "en-US": "#WebServices", color: "purple" };
            tags["webAPI"] = { "pt-BR": "#WebAPI", "en-US": "#WebAPI", color: "purple" };
            tags["cSharp"] = { "pt-BR": "#C#", "en-US": "#C#", color: "purple" };
            tags["sql"] = { "pt-BR": "#SQL", "en-US": "#SQL", color: "purple" };
            tags["sqlCompact"] = { "pt-BR": "#SQLCompact", "en-US": "#SQLCompact", color: "purple" };
            tags["adoNet"] = { "pt-BR": "#AdoNet", "en-US": "#AdoNet", color: "purple" };
            tags["entityframework6"] = { "pt-BR": "#Entityframework6", "en-US": "#Entityframework6", color: "purple" };
            tags["entityframeworkNetCore"] = { "pt-BR": "#EntityframeworkNetCore", "en-US": "#EntityframeworkNetCore", color: "purple" };
            tags["oracle"] = { "pt-BR": "#Oracle", "en-US": "#Oracle", color: "purple" };
            tags["visualBasic6"] = { "pt-BR": "#VisualBasic6", "en-US": "#VisualBasic6", color: "purple" };
            tags["vbScript"] = { "pt-BR": "#VBScript", "en-US": "#VBScript", color: "purple" };
            tags["javascript"] = { "pt-BR": "#Javascript", "en-US": "#Javascript", color: "purple" };
            tags["vueJS"] = { "pt-BR": "#VueJS", "en-US": "#VueJS", color: "purple" };
            tags["jQuery"] = { "pt-BR": "#jQuery", "en-US": "#jQuery", color: "purple" };
            tags["css"] = { "pt-BR": "#CSS", "en-US": "#CSS", color: "purple" };
            tags["html"] = { "pt-BR": "#HTML", "en-US": "#HTML", color: "purple" };
            tags["photoshop"] = { "pt-BR": "#Photoshop", "en-US": "#Photoshop", color: "purple" };
            tags["silverlight"] = { "pt-BR": "#Silverlight", "en-US": "#Silverlight", color: "purple" };
            tags["mvvm"] = { "pt-BR": "#MVVM", "en-US": "#MVVM", color: "purple" };
            tags["mvc"] = { "pt-BR": "#MVC", "en-US": "#MVC", color: "purple" };
            tags["designPattern"] = { "pt-BR": "#PadrãoDeProjetos", "en-US": "#designPattern", color: "purple" };
            tags["DDD"] = { "pt-BR": "#DDD", "en-US": "#DDD", color: "purple" };
            tags["dataModeling"] = { "pt-BR": "#ModelagemDeDados", "en-US": "#DataModeling", color: "purple" };
            tags["uml"] = { "pt-BR": "#UML", "en-US": "#UML", color: "purple" };
            tags["azure"] = { "pt-BR": "#Azure", "en-US": "#Azure", color: "purple" };
            tags["computing"] = { "pt-BR": "#Computação", "en-US": "#Computing", color: "purple" };
            tags["refactoring"] = { "pt-BR": "#Refatoração", "en-US": "#Refactoring", color: "purple" };
            tags["continuousDelivery"] = { "pt-BR": "#EntregaContínua", "en-US": "#continuousDelivery", color: "purple" };


            tags["excel"] = { "pt-BR": "#Excel", "en-US": "#Excel", color: "purple" };
            tags["word"] = { "pt-BR": "#Word", "en-US": "#Word", color: "purple" };
            tags["powerPoint"] = { "pt-BR": "#PowerPoint", "en-US": "#PowerPoint", color: "purple" };
            tags["outlook"] = { "pt-BR": "#Outlook", "en-US": "#Outlook", color: "purple" };
            tags["coreldraw"] = { "pt-BR": "#CorelDraw", "en-US": "#CorelDraw", color: "purple" };
            tags["movieMaker"] = { "pt-BR": "#MovieMaker", "en-US": "#MovieMaker", color: "purple" };
            tags["access"] = { "pt-BR": "#Access", "en-US": "#Access", color: "purple" };

            tags["c"] = { "pt-BR": "#C", "en-US": "#C", color: "purple" };
            tags["cPlusPlus"] = { "pt-BR": "#C++", "en-US": "#C++", color: "purple" };
            tags["pascal"] = { "pt-BR": "#Pascal", "en-US": "#Pascal", color: "purple" };
            tags["delphi"] = { "pt-BR": "#Delphi", "en-US": "#Delphi", color: "purple" };
            tags["php"] = { "pt-BR": "#Php", "en-US": "#Php", color: "purple" };
            tags["java"] = { "pt-BR": "#Java", "en-US": "#Java", color: "purple" };
            tags["microAssembly"] = { "pt-BR": "#MontagemComputador", "en-US": "#MicroAssembly", color: "purple" };
            tags["microcomputerMaintenance"] = { "pt-BR": "#ManutençãoMicrocomputador", "en-US": "#MicrocomputerMaintenance", color: "purple" };
        },
        mountTestSkill(tags) {
            tags["unitTest"] = { "pt-BR": "#TesteUnitário", "en-US": "#UnitTest", color: "green" };
            tags["integratedTest"] = { "pt-BR": "#TesteIntegrado", "en-US": "#IntegratedTest", color: "green" };
            tags["codeCoverage"] = { "pt-BR": "#CodeCoverage", "en-US": "#CodeCoverage", color: "green" };
            tags["codeAnalysis"] = { "pt-BR": "#CodeAnalysis", "en-US": "#CodeAnalysis", color: "green" };
            tags["styleCop"] = { "pt-BR": "#StyleCop", "en-US": "#StyleCop", color: "green" };
            tags["codeMetrics"] = { "pt-BR": "#CodeMetrics", "en-US": "#CodeMetrics", color: "green" };
            tags["TDD"] = { "pt-BR": "#TDD", "en-US": "#TDD", color: "green" };
            tags["BDD"] = { "pt-BR": "#BDD", "en-US": "#BDD", color: "green" };
        },
        mountLanguageSkill(tags) {
            tags["english"] = { "pt-BR": "#Inglês", "en-US": "#English", color: "pink" };
            tags["italian"] = { "pt-BR": "#Italiano", "en-US": "#Italian", color: "pink" };
            tags["spanish"] = { "pt-BR": "#Espanhol", "en-US": "#Spanish", color: "pink" };
        },
        mountOthers(tags) {
            tags["fourthIndustrialRevolution"] = { "pt-BR": "#QuartaRevoluçãoIndustrial", "en-US": "#FourthIndustrialRevolution", color: "blue" };
            tags["artificialIntelligence"] = { "pt-BR": "#InteligênciaArtifícial", "en-US": "#ArtificialIntelligence", color: "blue" };
            tags["disruptiveInnovations"] = { "pt-BR": "#InovaçõesDisruptivas", "en-US": "#DisruptiveInnovations", color: "blue" };
            tags["successCase"] = { "pt-BR": "#CasoDeSucesso", "en-US": "#successCase", color: "blue" };
            tags["opportunity"] = { "pt-BR": "#Oportunidade", "en-US": "#Opportunity", color: "blue" };
            tags["greatChallenge"] = { "pt-BR": "#GrandeDesafío", "en-US": "#GreatChallenge", color: "blue" };
            tags["rewarding"] = { "pt-BR": "#Recompensador", "en-US": "#Rewarding", color: "blue" };
            tags["hardworking"] = { "pt-BR": "#TrabalhoDuro", "en-US": "#Hardworking", color: "blue" };
            tags["continuousEvolution"] = { "pt-BR": "#EvoluçãoContínua", "en-US": "#ContinuousEvolution", color: "blue" };
            tags["kaisen"] = { "pt-BR": "#Kaisen", "en-US": "#Kaisen", color: "blue" };
            tags["gemba"] = { "pt-BR": "#Gemba", "en-US": "#Gemba", color: "blue" };
            tags["startup"] = { "pt-BR": "#Startup", "en-US": "#Startup", color: "blue" };
            tags["innovation"] = { "pt-BR": "#Inovação", "en-US": "#Innovation", color: "blue" };
            tags["humanMind"] = { "pt-BR": "#MenteHumana", "en-US": "#HumanMind", color: "blue" };
            tags["anxiety"] = { "pt-BR": "#Ansiedade", "en-US": "#Anxiety", color: "blue" };


            tags["inProgress"] = { "pt-BR": "#EmProgresso", "en-US": "#InProgress", color: "deep-purple" };
        }
    },
}

export default tags;