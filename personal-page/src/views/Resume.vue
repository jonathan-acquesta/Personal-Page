<template>
    <div class="divBlock">
        <div class="divResume" v-for="(category, index) in this.$store.state.categoryType" :key="index" v-if="category.enable">
            <v-card outlined class="elevation-2"  v-if="category.showResume && category.enable">
               
            
          <br>
          
          <div class="categoryGroup" @click="ToogleItems(category)">
          <v-icon class="iconTitle" :color="category.color" size="36px">{{category.icon}}</v-icon>
          <span :class="`headline font-weight-bold ${category.color}--text`" v-text="category.name[culture]"></span>
        </div>
          <v-list v-if="category.showItems">
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
                      width="80"
                      :src="history.image"
                    ></v-img>
                </v-list-item-action>

                <v-list-item-content>
                  
                  
                  <v-list-item-title class="titleRegister">{{ GetTitle(history) }}</v-list-item-title>
                  <v-list-item-title class="subTitleRegister">{{ GetSubTitle(history) }}</v-list-item-title>
                  
                  <Tags :tags="history.resumeTags"></Tags>
                  
                  <Links :history="history"></Links>
         
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
    import Tags from './../components/Tags.vue'
    import Links from './../components/Links.vue'

    export default {
        mixins:[generalMixins],
        components:{Tags, Links},
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
                return history.title[this.culture] + " - " + this.language.yearOf[this.culture] + " " + history.date.getFullYear();
            },
            GetSubTitle(history)
            {
                return  history.subTitle[this.culture];
            },
            ToogleItems(category)
            {
              debugger;
                category.showItems = !category.showItems;
            }
        },
    }
</script>

<style scoped>
.categoryGroup{
    cursor: pointer;
    width: 100%;
    height: 50px;
}

.categoryGroup:hover{
    cursor: pointer;
    filter: brightness(80%);
}

.titleRegister{
  font-weight: bold;
  margin-bottom: 5px;
}

.subTitleRegister{
  margin-bottom: 10px;
}

.divBlock{
  margin: 0px;
  padding: 0px;
  width: 100%;
  vertical-align: top;
  height: 100%;
}

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
        padding-bottom: 10px;
        width: 100%;
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

        


</style>