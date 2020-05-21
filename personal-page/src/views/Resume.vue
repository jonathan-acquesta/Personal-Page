<template>
    <div class="divBlock">
        <div class="divResume" v-for="(category, index) in this.$store.state.categoryType" :key="index" v-if="category.enable">
            <v-card outlined class="elevation-2"  v-if="category.showResume && category.enable">
               
            
          <br>
          
          <div class="categoryGroup" @click="toggleItems(category)">
          <v-icon class="iconTitle" :color="category.color" size="36px">{{category.icon}}</v-icon>
          <span :class="`headline font-weight-bold ${category.color}--text`" v-text="category.name[culture]"></span>
        </div>
          <v-list v-if="category.showItems">
            <template v-for="(history, index) in getHistotyByCategory(category.name)">
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

                
                <v-list-item-content >
                <div class="itemContent">  
                  <ButtonShowDetail :history="history"></ButtonShowDetail>
                  <v-list-item-title class="titleRegister">{{ getTitle(history) }}</v-list-item-title>
                  <v-list-item-title class="subTitleRegister">{{ getSubTitle(history) }}</v-list-item-title>

                  <div class="description" v-show="history.showDetail">
                      {{ history.description[culture] }}
                  </div>
                  
                  
                  <Tags :tags="getTags(history)"></Tags>
                  
                  <Links :history="history"></Links>
         
                  <ButtonCloseDetail :history="history"></ButtonCloseDetail>
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
    import generalMixins from './../mixins/generalMixins.js';
    import historyMixins from './../mixins/historyMixins.js';
    import Tags from './../components/Tags.vue';
    import Links from './../components/Links.vue';
    import ButtonShowDetail from './../components/ButtonShowDetail.vue';
    import ButtonCloseDetail from './../components/ButtonCloseDetail.vue';

    export default {
        mixins:[generalMixins, historyMixins],
        components:{Tags, Links, ButtonShowDetail, ButtonCloseDetail},
        data() {
            return {
               
            }
        },
        computed: {
            
        },  
        methods: {
            getHistotyByCategory(category)
            {
                var result = this.$store.state.histories.filter(x => x.category.name === category);

                return result;
            },
            getTitle(history)
            {
                return history.title[this.culture] + " - " + this.language.yearOf[this.culture] + " " + history.date.getFullYear();
            },
            getSubTitle(history)
            {
                return  history.subTitle[this.culture];
            },
            toggleItems(category)
            {
                category.showItems = !category.showItems;
            },
            
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
  font-size: 20px;
}

.subTitleRegister{
  margin-bottom: 10px;
  font-size: 18px;
}

.divBlock{
  margin: 0px;
  padding: 0px;
  width: 100%;
  vertical-align: top;
  height: 100%;
}

.itemContent{
  vertical-align: top;
  height: 100%;
  min-height: 105px;
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

        
.description {
  width: 95%;
  text-align: justify;
  display: flex;
  padding-bottom: 10px;
  font-size: 16px;
}

</style>