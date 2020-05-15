const generalMixins = {
    data() {
        return {

        }
    },
    computed: {
        culture() {
            return this.$store.state.culture;
        },
        language() {
            return this.$store.state.common;
        },
        categories() {
            return this.$store.state.categoryType;
        },
        getHistories() {
            return this.histories;
        },
    },
    methods: {
        openSite: function(url) {
            window.open(url, "_blank");
        },
        showPage(url) {
            if (this.$router.currentRoute.name !== url) {
                this.$router.push({ name: url });
            }
        }
    },
}

export default generalMixins;