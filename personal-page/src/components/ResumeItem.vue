<template>
    
    <v-list v-if="category.showItems">
        <template v-for="(history, index) in history">
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
            <p class="titleRegister">{{ getTitle(history) }}</p>
            <p class="subTitleRegister">{{ getSubTitle(history) }}</p>

            <div v-if="history.description" class="description" v-show="history.showDetail">
                {{ history.description[culture] }}
            </div>
            
            
            <Tags v-if="history.showDetail" :tags="history.tags"></Tags>
            <Tags v-else :tags="getTags(history)"></Tags>
            
            <Links :history="history"></Links>
    
            <ButtonCloseDetail :history="history"></ButtonCloseDetail>
            </div>
            </v-list-item-content>
            
        </v-list-item>

        
        </template>
    </v-list>
</template>

<script>
    import generalMixins from './../mixins/generalMixins.js';
    import historyMixins from './../mixins/historyMixins.js';
    import ButtonShowDetail from './../components/ButtonShowDetail.vue';
    import ButtonCloseDetail from './../components/ButtonCloseDetail.vue';
    import Tags from './../components/Tags.vue';
    import Links from './../components/Links.vue';

    export default {
        mixins:[generalMixins, historyMixins],
        props:["category", "history"],
        components:{Tags, Links, ButtonShowDetail, ButtonCloseDetail},
        methods: {
            getTitle(history)
            {
                return history.title[this.culture] + " - " + this.language.yearOf[this.culture] + " " + history.date.getFullYear();
            },
            getSubTitle(history)
            {
                return  history.subTitle[this.culture];
            },
        },
    }
</script>

<style scoped>

.titleRegister{
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 20px;
}

.subTitleRegister{
  margin-bottom: 10px;
  font-size: 18px;
}

.description {
  width: 95%;
  text-align: justify;
  display: flex;
  padding-bottom: 10px;
  font-size: 16px;
}

    .descriptionImageMin {
        text-align: justify;
        margin-left: 5px;
        margin-right: 5px;
        }

        .headline{
            margin: 10px;
        }

        .itemContent{
            vertical-align: top;
            height: 100%;
            min-height: 105px;
            width: 100%;
            }

             li{
        margin-left: 10px;
        padding-left: 10px;
        margin-right: 10px;
        padding-right: 10px;
        width: 100%;
    }

</style>