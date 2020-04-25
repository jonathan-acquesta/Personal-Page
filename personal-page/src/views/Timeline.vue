<template>


  <div class="timeLine">
 <v-overlay class="overlay" :value="overlay">
                  <v-btn
                    icon
                    @click="overlay = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-img class="descriptionImageLink"  :src="mainImage"></v-img>
                </v-overlay>

        <v-timeline class="timelineApp" :dense="$vuetify.breakpoint.smAndDown" :reverse="!$vuetify.breakpoint.smAndDown" :left="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-if="history.category.enable"
          v-for="(history, i) in histories"
          :key="i"
          :dense="!$vuetify.breakpoint.smAndDown"
          :reverse="$vuetify.breakpoint.smAndDown"
          :color="history.category.color"
          :icon="history.category.icon"
          :left="$vuetify.breakpoint.smAndDown"
        :small="small"
          fill-dot
          
        >
          <template v-if="!$vuetify.breakpoint.smAndDown" v-slot:opposite>
            <span style="opacity:0.8"
              :class="`headline font-weight-bold ${history.category.color}--text`"
              v-text="formatePeriod(history.date)"
            ></span>
          </template>
          <v-card class="elevation-2">
          <div class="py-4 card">

            <span
              :class="`headline font-weight-bold ${history.category.color}--text`"
              v-text="history.category.name[culture]"
            ></span>
            <h2 :class="`headline font-weight-light mb-4 ${history.category.color}--text`">
              {{ history.title[culture] }}</h2>
              <div class="descriptionFull">
            <div class="description">
              {{ history.description[culture] }}
            </div>
            <div>
              <v-img class="descriptionImage"  width="110" :src="history.image"></v-img>

            </div>
            </div>
         
            <div>
              <span class="tags" v-for="(tag, index) in history.tags" :key="index" >{{ tag[culture] }}</span>
            </div>
            <br>
               <div class="links" v-if="history.link">
              <span  >Link: </span>
              <a class="linkShow" v-on:click="overlay = true;mainImage=history.link.image">{{history.link.description[culture]}} </a>
            </div>
            <span style="opacity:0.8" v-if="$vuetify.breakpoint.smAndDown"
              :class="`headline font-weight-bold ${history.category.color}--text`"
              v-text="formatePeriod(history.date)"
            ></span>
          </div>
          </v-card>
        </v-timeline-item>
      </v-timeline>
     
      
  </div>
</template>

<script>

  export default {
  name: "Timeline",
  data() {
    return {
      histories: [],
      selectedCategories: [],
      keyWord: [],
      reverse: false,
      right: false,
      left: false,
      small: false,
      overlay: false,
      valueDeterminate: 50,
      mainImage: "",
    };
  },
  computed: {
    culture(){
      return this.$store.state.culture;
    }
  },
  mounted() {
    /*
    this.histories.push({
      date: new Date("2020-07-20 00:33:00"),
      category: this.$store.state.categoryType.professionalExperience,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

    this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.$store.state.categoryType.academicLife,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

    this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.$store.state.categoryType.certifications,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

     this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.$store.state.categoryType.technologies,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

     this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.$store.state.categoryType.courses,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

     this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.$store.state.categoryType.books,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

    this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.$store.state.categoryType.thoughts,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

 this.histories.push({
      date: new Date("2019-01-10 00:33:00"),
      category: this.$store.state.categoryType.managementKnowledge,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

     this.histories.push({
      date: new Date("2018-05-10 00:33:00"),
      category: this.$store.state.categoryType.languages,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

    this.histories.push({
      date: new Date("2018-04-10 00:33:00"),
      category: this.$store.state.categoryType.milestones,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });
    */

   this.histories.push({
      date: new Date("2019-02-02"),
      category: this.$store.state.categoryType.certifications,
      title: {
        "pt-BR": "Scrum.org - PSM 1",
        "en-US": "Scrum.org - PSM 1",
      },
      description: {
        "pt-BR": "A certificação Professional Scrum Master foi um momento importante para formalização do conhecimento que adquiri durante toda a minha carreira profissional. Eu tive a oportunidade de trabalhar com SCRUM desde o inicio dos anos 2010 e esse framework agregou em muito nos bons resultados que venho obtendo.",
        "en-US": "The Professional Scrum Master certification was an important moment to formalize the knowledge I acquired throughout my professional career. I had the opportunity to work with SCRUM since the beginning of the 2010s and this framework added a lot to the good results I have been getting.",
      },
      image: require('@/assets/certifications/psm1.png'),
      link: {
        image:   require('@/assets/certificates/psm1.jpg'),
        description:{ "pt-BR": "Certificado", "en-US": "Certificate"}
      },
      tags: [this.$store.state.tags.scrum]
    });

    this.histories.push({
      date: new Date("2018-10-20"),
      category: this.$store.state.categoryType.certifications,
      title: {
        "pt-BR": "SCRUMstudy – SFC",
        "en-US": "SCRUMstudy – SFC",
      },
      description: {
        "pt-BR": "A certificação Scrum Fundamentals Certified foi importante para mim em relação a validação do conhecimento e correta compreensão os pilares, valores e fundamentos do SCRUM.",
        "en-US": "Scrum Fundamentals Certified was important certification to me in terms of knowledge validation and correct understanding of the pillars, values and fundamentals of SCRUM.",
      },
      image: require('@/assets/certifications/sfc.png'),
      link: {
        image:   require('@/assets/certificates/sfc.jpg'),
        description:{ "pt-BR": "Certificado", "en-US": "Certificate"}
      },
      tags: [this.$store.state.tags.scrum]
    });

    this.histories.push({
      date: new Date("2011-02-18"),
      category: this.$store.state.categoryType.certifications,
      title: {
        "pt-BR": "Microsoft – MCP",
        "en-US": "Microsoft – MCP",
      },
      description: {
        "pt-BR": "A certificação 70-562 Technology Specialist: Microsoft .Net Framework 3.5, ASP.NET Application Development foi muito importante como objetivo pessoal com foco em comprovar o conhecimento que eu tinha adquirido enquanto atuava como líder técnico e essa certificação me concedeu o título de MCP. Obter esta certificação também foi parte de um plano para ajudar nos objetivos corporativos em relação a participação em licitações públicas que exigiam um número mínimo de profissionais certificados na empresa.",
        "en-US": "The 70-562 Technology Specialist: Microsoft .Net Framework 3.5, ASP.NET Application Development certification was very important as a personal objective with a focus on proving the knowledge I had acquired while I acting as a technical leader, and this certification granted me the title of MCP. Obtaining this certification was also part of a plan to help corporate objectives regarding participation in public tenders that required a minimum number of certified professionals in the company.",
      },
      image: require('@/assets/certifications/msoficial.png'),
      link: {
        image:   require('@/assets/certificates/MCP70562.png'),
        description:{ "pt-BR": "Certificado", "en-US": "Certificate"}
      },
      tags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.aspNet, this.$store.state.tags.cSharp]
    });


    this.histories.push({
      date: new Date("2012-04-16"),
      category: this.$store.state.categoryType.certifications,
      title: {
        "pt-BR": "Microsoft – MCTS",
        "en-US": "Microsoft – MCTS",
      },
      description: {
        "pt-BR": "A certificação 70-536 Technology Specialist: Microsoft .Net Framework, ASP.NET Application Development Foundantion foi muito importante para consolidar minha capacidade técnica com as tecnologias Microsoft e essa certificação me concedeu o título de MCTS e apoio na evolução da minha carreira. Obter esta certificação também foi parte de um plano para ajudar nos objetivos corporativos em relação a participação em licitações públicas que exigiam um número mínimo de profissionais certificados na empresa.",
        "en-US": "The 70-536 Technology Specialist: Microsoft .Net Framework, ASP.NET Application Development Foundantion certification was very important to consolidate my technical capacity with Microsoft technologies, and this certification gave me the title of MCTS, beside that, it supported the evolution of my career in that occasion. Obtaining this certification was also part of a plan to help corporate objectives regarding participation in public tenders that required a minimum number of certified professionals in the company",
      },
      image: require('@/assets/certifications/msoficial.png'),
      link: {
        image:   require('@/assets/certificates/MCTS70536.png'),
        description:{ "pt-BR": "Certificado", "en-US": "Certificate"}
      },
      tags: [this.$store.state.tags.dotNetFramework, this.$store.state.tags.aspNet, this.$store.state.tags.cSharp]
    });

     this.histories.push({
      date: new Date("2020-04-02"),
      category: this.$store.state.categoryType.books,
      title: {
        "pt-BR": "KANBAN",
        "en-US": "KANBAN",
      },
      description: {
        "pt-BR": "O livro Kanban: O melhor guia para iniciantes aprenderem Kanban passo a passo, foi escrito por James Turner e traz diversas aplicações sobre o conceito em diversos setores industriais, também faz comparações sobre a aplicação do Kanban em relação a outros frameworks e metodologias ágeis, ajudando a clarificar as melhores situações para se aplicar a metodologia.",
        "en-US": "The book Kanban: The ultimate guide for beginner's to learn Kanban step by step, was written by James Turner and brings several applications about the concept in different industrial sectors, it also makes comparisons about the application of Kanban in relation to other agile frameworks and methodologies, helping to clarify the best situations to apply the methodology.",
      },
      image: require('@/assets/books/kanban.jpg'),
      tags: [this.$store.state.tags.kanban]
    });

    this.histories.push({
      date: new Date("2020-02-05"),
      category: this.$store.state.categoryType.books,
      title: {
        "pt-BR": "Coaching e Liderança",
        "en-US": "Coaching and Leadership",
      },
      description: {
        "pt-BR": "O livro Coaching e Liderança: Novas maneiras para conduzir, influenciar pessoas e gerar negócios de sucesso foi coordenado por Jaques Grinberg e Jorge Penilo, sendo uma obra que reuni a vivencia e experiência de vinte e três autores em relação aos desafios enfrentados por profissionais que se desafiam a liderar. Essa abordagem foi muito interessante para aprender e comparar a minha realidade com outras situações em contextos diversos.",
        "en-US": "The book Coaching and Leadership: New ways to lead, influence people and generate successful businesses was coordinated by Jaques Grinberg and Jorge Penilo, being a work that brought together the experience of twenty-three authors in relation to the challenges faced by professionals who challenge themselves to lead. This approach was very interesting to learn and compare my reality with other situations in different contexts.",
      },
      image: require('@/assets/books/coaching_lideranca.jpg'),
      tags: [this.$store.state.tags.coaching, this.$store.state.tags.leadership]
    });

    this.histories.push({
      date: new Date("2019-12-22"),
      category: this.$store.state.categoryType.books,
      title: {
        "pt-BR": "Gerenciando Pessoas",
        "en-US": "Managing People",
      },
      description: {
        "pt-BR": "O livro Gerenciando Pessoas: Os melhores artigos de Harvard Business Review sobre como liderar equipes, traz dez ótimos artigos que me ajudaram em muito na reflexão sobre aspectos de liderança, engajamento, organização e resultados.",
        "en-US": "The book Managing People: The best articles from Harvard Business Review on how to lead teams, brings ten great articles that helped me a lot in thinking about aspects of leadership, engagement, organization and results.",
      },
      image: require('@/assets/books/gerenciando_pessoas.jpg'),
      tags: [this.$store.state.tags.coaching, this.$store.state.tags.leadership, this.$store.state.tags.highPerformanceTeams, this.$store.state.tags.situationalLeadership]
    });


this.histories.push({
      date: new Date("2019-10-02"),
      category: this.$store.state.categoryType.books,
      title: {
        "pt-BR": "A Quarta Revolução Industrial",
        "en-US": "The Fourth Industrial Revolution",
      },
      description: {
        "pt-BR": "O livro A quarta revolução industrial escrito por Klaus Schwab do World Economic Forum foi uma ferramenta muito interessante para ampliar a minha visão sobre as mudanças que estão ocorrendo em nosso mundo globalizado e entender os possíveis riscos e benefícios desses avanços para os diversos setores da economia.",
        "en-US": "The book The Fourth Industrial Revolution written by Klaus Schwab of the World Economic Forum was a very interesting tool to broaden my view on the changes that are taking place in our globalized world, and I could understand the possible risks and benefits of these advances for many sectors of the economy.",
      },
      image: require('@/assets/books/quarta_revolucao_industrual.jpg'),
      tags: [this.$store.state.tags.fourthIndustrialRevolution, this.$store.state.tags.artificialIntelligence, this.$store.state.tags.disruptiveInnovations]
    });
    
    
this.histories.push({
      date: new Date("2019-09-15"),
      category: this.$store.state.categoryType.books,
      title: {
        "pt-BR": "SCRUM",
        "en-US": "SCRUM",
      },
      description: {
        "pt-BR": "O livro SCRUM: A arte de fazer o dobro do trabalho na metade do tempo foi escrito por Jeff Sutherland e JJ Sutherland. Este livro traz toda a visão e experiência de um dos criadores do SCRUM de uma maneira bem estruturada, fundamentando as razões para criação de uma nova abordagem no setor de desenvolvimento de sistemas. Este livro foi muito interessante para mim, devido a me possibilitar a oportunidade de entender melhor como o SCRUM nasceu e cresceu.",
        "en-US": "The book SCRUM: The art of doing twice the work in half the time was written by Jeff Sutherland and JJ Sutherland, this book brings all the vision and experience from one of the SCRUM creators in a well structured way, making the reasons for create a new approach to the systems development very clear. It was interesting to me, who wanted to know better how SCRUM borned and growed.",
      },
      image: require('@/assets/books/scrum.jpg'),
      tags: [this.$store.state.tags.scrum]
    });


this.histories.push({
      date: new Date("2007-11-01"),
      category: this.$store.state.categoryType.professionalExperience,
      title: {
        "pt-BR": "POLITEC S/A - Minha primeira oportunidade.",
        "en-US": "POLITEC S/A - My first opportunity",
      },
      description: {
        "pt-BR": "Foi em 2007, quando eu recebi a minha primeira oportunidade em minha carreira, naquela ocasião eu tinha 19 anos e estava ansioso para começar a trabalhar no setor de TI. A Politec S/A me contratou como estagiário e me ofereceu a chance de obter experiência em um ambiente de trabalho.",
        "en-US": "It was in 2007 when I receive my first opportunity in my career, in that occasion I was 19 years old and I was looking forward to start to work in IT industry. Politec S/A hired me as an intern and gave me the chance of get experience in a work environment.",
      },
      image: require('@/assets/professionalExperiences/politec.png'),
      tags: [this.$store.state.tags.intern, this.$store.state.tags.opportunity]
    });

    this.histories.push({
      date: new Date("2008-02-01"),
      category: this.$store.state.categoryType.professionalExperience,
      title: {
        "pt-BR": "POLITEC S/A - Seis meses de carreira.",
        "en-US": "POLITEC S/A - Six months of career.",
      },
      description: {
        "pt-BR": "Eu estava completando seis meses de carreira e acredito que tive sorte, porque, logo no primeiro emprego, fui alocado em um importante projeto da Gol Linhas Aéreas, onde me foi permitido resolver problemas de produção relatados pelos clientes. Neste projeto, pude aprimorar minhas habilidades com Asp, Javascript, Visual Basic 6 e SQL.",
        "en-US": "I had been completing six months of career, and I believe that I was lucky, because right in the first job, I was allocated in a important project of Gol Linhas Aereas, where I was allowed to solve production issues that were reported by clients. In this project, I could improve my skills with Asp, Javascript, Visual Basic 6 and SQL.",
      },
      image: require('@/assets/professionalExperiences/politec_gol.png'),
      tags: [this.$store.state.tags.intern, this.$store.state.tags.sql, this.$store.state.tags.visualBasic6, this.$store.state.tags.asp, this.$store.state.tags.vbScript, this.$store.state.tags.javascript, this.$store.state.tags.css, this.$store.state.tags.html]
    });

    this.orderByDates();
    
    this.$store.state.histories = this.histories;
    
  },
  methods: {
    orderByDates()
    {
      this.histories.sort(function(a,b){ return new Date(b.date) - new Date(a.date); });
    },
    formatePeriod(date)
    {
      return this.$store.state.months[this.$store.state.culture][date.getMonth()] + " " + date.getFullYear();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card{
  margin-left: 10px;
}

.timelineApp{
  margin: 10px;
}

  .tags{
    margin-top: 15px;
    color:  rgb(7, 52, 177);
    font-weight: bold;
    margin-right: 10px;
    font-size:small;
  }


.imageMain{
  box-shadow: 2px 2px 5px grey;
}

.skills{
  width: 30%;
  display: flex
}

.descriptionFull{
  display: flex;
}

.description{
  width: 85%;
  text-align: justify;
  display: flex;
}

.descriptionImage{
  width: 25%;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
}

.descriptionImageMobile{
  width: 100%;
  text-align: justify;
  margin-left: 10px;
  margin-right: 10px;
}

.descriptionImageMobile{
  width: 100%;
  text-align: justify;
  margin-left: 10px;
  margin-right: 10px;
}

.links{
  color: rgb(10, 10, 32);
}

.linkShow{
  text-decoration: underline;
}

.descriptionImageLink{
  width: 80%;
  margin-left: 10%;
  max-width: 1000px;
  text-align: center;
}

.overlay{
  text-align: center;
}
</style>
