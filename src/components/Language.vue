<template>
 <v-card  class="elevation-2 allLanguage">

<v-tooltip bottom>
        <template v-slot:activator="{ on }">
            <label class="language" v-on="on" :class="{languageDisactive: !isActive(language.languages.portuguese.language)}"
              v-on:click="changeLanguePortuguese()" >PT</label>
        </template>
        <span>{{ this.$store.state.common.languages.portuguese[culture] }}</span>
    </v-tooltip>
    <label class="languageSeparator">|</label>
<v-tooltip bottom>
        <template v-slot:activator="{ on }">
            <label class="language" v-on="on" :class="{languageDisactive: !isActive(language.languages.english.language)}"
             v-on:click="changeLangueEnglish()" >EN</label>
        </template>
        <span>{{ this.$store.state.common.languages.english[culture] }}</span>
    </v-tooltip>
<!--
        <label class="language" :class="{languageDisactive: !isActive(this.$store.state.common.languages.portuguese.language)}" :title="this.$store.state.common.languages.portuguese[culture]" v-on:click="changeLanguePortuguese()" >PT</label>
        <label class="languageSeparator">|</label>
        <label class="language" :class="{languageDisactive: !isActive(this.$store.state.common.languages.english.language)}" :title="this.$store.state.common.languages.english[culture]"  v-on:click="changeLangueEnglish()">EN</label>
  -->  </v-card>
</template>

<script>
    import generalMixins from './../mixins/generalMixins.js'

    export default {
        mixins:[generalMixins],
        computed: {
            
        },
        methods: {
            changeLanguePortuguese()
            {
                this.$store.state.culture = this.$store.state.common.languages.portuguese.language;
                this.$emit("closeLanguage");
            },
            changeLangueEnglish()
            {
                this.$store.state.culture = this.$store.state.common.languages.english.language;
                this.$emit("closeLanguage");
            },
            isActive(language)
            {
                return language == this.$store.state.culture;
            },
        }
    }
</script>

<style scoped>
.allLanguage{
    margin-right: -5px;
    background-color: white;
}

.language{
  cursor: pointer;
  margin-right: 5px;
  margin-left: 5px;
  opacity: 1;
  font-size: small;
  font-weight: bold;
  color: rgb(0, 51, 190);
}

.languageSeparator{
  color: blueviolet;
}

.languageDisactive{
  opacity: 0.5;
}
</style>