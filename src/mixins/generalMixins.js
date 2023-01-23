import axiosClient from 'axios'

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
        tags() {
            return this.$store.state.tags;
        },
        tagGroups() {
            return this.$store.state.tagGroups;
        },
        categories() {
            return this.$store.state.categoryType;
        },
        getHistories() {
            return this.histories.filter(history => this.isEnableItem(history));
        },
    },
    methods: {
        async processUrl()
        {
            
            let data = await axiosClient.get('https://1493-2804-388-e058-f551-39f2-80d7-a894-2f3f.sa.ngrok.io/FootballSchool/GetAll',{
            headers: {
                Accept: 'application/json',
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              withCredentials: true}
              );

            debugger;
            return data;
        },
        openSite: function(url) {
            window.open(url, "_blank");
        },
        showPage(url) {
            this.scrollToTop();

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
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        scrollMeTo(refName) {
            let element = document.getElementById(refName);
            element.scrollIntoView(true);

            //if (!this.isMobile()) {
            window.scrollTo(0, window.scrollY - 60);
            //} else {
            //window.scrollTo(0, window.scrollY - 20);
            //}

        },
        getMenuWidth() {
            if (this.isMobile()) {
                return "100%";
            } else {
                return "300";
            }
        },
        getMenuLeftWidth() {
            if (this.isMobile()) {
                return "100%";
            } else {
                return "400";
            }
        },
    },
}

export default generalMixins;