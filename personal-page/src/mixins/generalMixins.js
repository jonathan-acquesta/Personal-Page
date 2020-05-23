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
        state() {
            return this.$store.state;
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
            this.state.showMobileMenu = false;

            if (this.$router.currentRoute.name !== url) {
                this.$router.push({ name: url });
            }
        },
        isMobile() {
            return this.$vuetify.breakpoint.width < 550;
        },
        showMobileMenu() {
            return this.state.showMobileMenu;
        }
    },
}

export default generalMixins;