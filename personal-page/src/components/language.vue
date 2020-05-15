<template>
    <div>
        <label class="language" :class="{languageDisactive: !IsActive(this.$store.state.common.languages.portuguese.language)}" :title="this.$store.state.common.languages.portuguese[culture]" v-on:click="ChangeLanguePortuguese()" >PT</label>
        <label class="languageSeparator">|</label>
        <label class="language" :class="{languageDisactive: !IsActive(this.$store.state.common.languages.english.language)}" :title="this.$store.state.common.languages.english[culture]"  v-on:click="ChangeLangueEnglish()">EN</label>
    </div>
</template>

<script>
    import generalMixins from './../mixins/generalMixins.js'

    export default {
        mixins:[generalMixins],
        computed: {
            
        },
        methods: {
            ChangeLanguePortuguese()
            {
                this.$store.state.culture = this.$store.state.common.languages.portuguese.language;
            },
            ChangeLangueEnglish()
            {
                this.$store.state.culture = this.$store.state.common.languages.english.language;
            },
            IsActive(language)
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