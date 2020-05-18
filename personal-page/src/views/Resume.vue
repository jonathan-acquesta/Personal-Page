<template>
    <div>
<v-overlay class="overlay" :value="overlay">
      <v-btn icon @click="overlay = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <div class="imageLink">
        <v-img class="descriptionImageLink" :src="mainImage"></v-img>
      </div>
    </v-overlay>
        
        <div class="divResume" v-for="(category, index) in this.$store.state.categoryType" :key="index">
            <v-card outlined class="elevation-2"  v-if="category.showResume && category.enable">
               
            
<br>
<v-icon class="iconTitle" :color="category.color" size="36px">{{category.icon}}</v-icon>
<span :class="`headline font-weight-bold ${category.color}--text`"
                    v-text="category.name[culture]"
                  ></span>

          <v-list>
            <template v-for="(history, index) in GetHistories(category.name)">
               <v-divider
                :key="'Divider' + index"
              ></v-divider>
              
              <v-list-item
                :key="index"
              >
                <v-list-item-action>
                  <v-img
                    :key="'Image' + index"
                      class="descriptionImageMin"
                      width="40"
                      :src="history.image"
                    ></v-img>
                </v-list-item-action>

                <v-list-item-content>
                  
                  
                  <v-list-item-title>{{ GetTitle(history) }}</v-list-item-title>
                  
                  <Tags :tags="history.resumeTags"></Tags>
                  
            <div
              class="links"
              v-if="(history.links)">
              <span>Links: </span>
              <a v-for="(link, index) in history.links" :key="index"
                v-if="history.links"
                class="linkShow"
                v-on:click="processLink(link)">{{ link.description[culture] }}
              </a>
            </div>
                </v-list-item-content>
              </v-list-item>

             
            </template>
          </v-list>
          </v-card>
        </div>


    </div>
</template>

<script>
    import generalMixins from './../mixins/generalMixins.js'
    import certificateMixins from './../mixins/certificateMixins.js'
    import Tags from './../components/Tags.vue'

    export default {
        mixins:[generalMixins, certificateMixins],
        components:{Tags},
        data() {
            return {
               
            }
        },
        computed: {
            
        },  
        methods: {
            GetHistories(category)
            {
                var result = this.$store.state.histories.filter(x => x.category.name === category);

                return result;
            },
            GetTitle(history)
            {
                return history.title[this.culture] + " - " +  history.subTitle[this.culture] + " - " + this.language.yearOf[this.culture] + " " + history.date.getFullYear();
            },
            processLink(link){
                if(link.type == "certificate")
                {
                    this.overlay = true; 
                    this.mainImage = link.image;
                }
                else
                {
                    this.openSite(link.url);
                }
            }

        },
    }
</script>

<style scoped>
.iconTitle{
  margin-left: 20px;
  top: -5px;
}

    .title{
        margin: 10px;
        padding: 10px;
        width: 100%;
    }

    .divResume{
        padding: 10px;
    }

    li{
        margin-left: 10px;
        padding-left: 10px;
        margin-right: 10px;
        padding-right: 10px;
        width: 100%;
    }

    .descriptionImageMin {
        text-align: justify;
        margin-left: 5px;
        margin-right: 5px;
        }

        .headline{
            margin: 10px;
        }

        
.links {
  color: rgb(10, 10, 32);
  font-size:small;
  margin-top: 15px;
  margin-left: 5px;
}

.linkShow {
  font-size:small;
  margin: 4px;
}


.descriptionImageLink {
  width: 80%;
  margin-left: 10%;
  max-width: 1000px;
  text-align: center;
}

.imageLink{
  text-align: center;
  max-height: 600px;
  overflow: visible;
}

.overlay {
  text-align: center;
}
</style>