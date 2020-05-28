<template>
    
    <v-list v-if="category.showItems">
        <template v-for="(history, index) in history" v-if="isEnableItem(history)">
        <v-divider
            :key="'Divider' + index"
        ></v-divider>

        <v-list-item
            :key="index"
        >
        <table class="tableResume">
            <tr>
                <td>
                    <div class="imageResume">
                        <v-img
                            :key="'Image' + index"
                            class="descriptionImageMin"
                            width="80"
                            :src="history.image"
                            ></v-img>
                </div>
                </td>
                <td>
                    <v-list-item-content >
            <div class="itemContent">  
            <p class="titlePeriodRegister">{{ getPeriod(history) }}</p>
            <p class="titleRegister">{{ getTitle(history) }}</p>
            <p class="subTitleRegister">{{ getSubTitle(history) }}</p>

            <div v-if="history.description" class="description" v-show="history.showDetail">
                {{ history.description[culture] }}
            </div>
            
            
            <Tags  :vertical="true" :tagsData="getTags(history)"></Tags>
            
            <Links :history="history"></Links>
    
            </div>
            </v-list-item-content>
                </td>
            </tr>
        </table>
            
            
        </v-list-item>

        
        </template>
    </v-list>
</template>

<script>
    import generalMixins from './../mixins/generalMixins.js';
    import historyMixins from './../mixins/historyMixins.js';
    import Tags from './../components/Tags.vue';
    import Links from './../components/Links.vue';

    export default {
        mixins:[generalMixins, historyMixins],
        props:["category", "history"],
        components:{Tags, Links},
        methods: {
            getPeriod(history)
            {
                return this.language.yearOf[this.culture] + " " + history.date.getFullYear();
            },
            getTitle(history)
            {
                return history.title[this.culture];
            },
            getSubTitle(history)
            {
                return  history.subTitle[this.culture];
            },
        },
    }
</script>

<style scoped>

.tableResume{
    height: 100%;
}

.imageResume{
    height: 100%;
}

.titleRegister{
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 16px;

}

.titlePeriodRegister{
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 16px;
  opacity: 0.7;
}

.subTitleRegister{
  margin-bottom: 10px;
  font-size: 14px;
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
        margin-left: -10px;
        margin-top: 25px;
        margin-right: 10px;
        vertical-align: top;
        
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