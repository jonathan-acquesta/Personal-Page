<template>
    <div class="divBlock">
        <FilterPanel></FilterPanel>
        <div class="divResume" v-for="(category, index) in this.$store.state.categoryType" :key="index" v-if="category.enable">
            <v-card outlined class="elevation-2"  v-if="category.showResume && category.enable">
               
            
          <br>
          
          <div class="categoryGroup" @click="toggleItems(category)">
          <v-icon v-if="isMobile()" class="iconTitleMobile" :color="category.color" size="24px">{{category.icon}}</v-icon>
          <v-icon v-else class="iconTitle" :color="category.color" size="36px">{{category.icon}}</v-icon>
          <span v-if="isMobile()" :class="`mobile font-weight-bold ${category.color}--text`" v-text="category.name[culture]"></span>
          <span v-else :class="`headline font-weight-bold ${category.color}--text`" v-text="category.name[culture]"></span>
        </div>
          <ResumeItem v-if="!isMobile()" :category="category" :history="getHistotyByCategory(category.name)"></ResumeItem>
          <ResumeItemMobile v-else :category="category" :history="getHistotyByCategory(category.name)"></ResumeItemMobile>
          </v-card>
        </div>
    </div>
</template>

<script>
    import generalMixins from './../mixins/generalMixins.js';
    import historyMixins from './../mixins/historyMixins.js';
    import ResumeItem from './../components/ResumeItem.vue';
    import ResumeItemMobile from './../components/ResumeItemMobile.vue';
    import FilterPanel from './../components/FilterPanel.vue'

    export default {
        mixins:[generalMixins, historyMixins],
        components:{ResumeItem, ResumeItemMobile, FilterPanel},
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


.divBlock{
  margin: 0px;
  padding: 0px;
  width: 100%;
  vertical-align: top;
  height: 100%;
}



.iconTitle{
  margin-left: 20px;
  margin-right: 5px;
  top: -5px;
}

.iconTitleMobile{
  margin-left: 20px;
  top: -2px;
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

   
.mobile{
  padding: 5px;
}

        

</style>