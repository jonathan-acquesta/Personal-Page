<template>
    <div>
        <label class="language" :class="{languageDisactive: !isActive(this.$store.state.common.languages.portuguese.language)}" :title="this.$store.state.common.languages.portuguese[culture]" v-on:click="changeLanguePortuguese()" >PT</label>
        <label class="languageSeparator">|</label>
        <label class="language" :class="{languageDisactive: !isActive(this.$store.state.common.languages.english.language)}" :title="this.$store.state.common.languages.english[culture]"  v-on:click="changeLangueEnglish()">EN</label>
    </div>
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
            },
            changeLangueEnglish()
            {
                this.$store.state.culture = this.$store.state.common.languages.english.language;
            },
            isActive(language)
            {
                return language == this.$store.state.culture;
            }
        }
    }
</script>

<style scoped>
.language{
  cursor: pointer;
  margin-right: 5px;
  margin-left: 5px;
  opacity: 1;
}

.languageSeparator{
  color: blueviolet;
}

.languageDisactive{
  opacity: 0.5;
}
</style>