import generalMixins from './../mixins/generalMixins.js'

const historyMixins = {
    mixins: [generalMixins],
    methods: {
        getTags(history) {
            if (history.resumeTags) { return history.resumeTags; }
            if (history.mainTags) { return history.mainTags; }

            return history.tags;
        },
        isEnableItem(history) {
            if (this.state.tagsActive.length > 0) {
                var isTagActive = this.state.tagsActive.map(q => q.id).filter(value => history.tags.map(q => q.id).includes(value)).length;

                return history.category.enable && isTagActive;
            }

            return history.category.enable;
        },
        getHistotyByCategory(category) {
            var result = this.$store.state.histories.filter(x => x.category.id === category.id);

            return result;
        },
        getHistory(year) {
            return this.$store.state.histories.filter(x => x.date.getFullYear() === year);
        },
        getID(history) {
            return history.title[this.culture] + " - " + history.subTitle[this.culture];
        },
        updateQuickFilter() {
            this.updateQuickFilterResume();
            this.updateQuickFilterTimeLine();
        },
        updateQuickFilterResume() {
            this.state.itemsResumeOpen = [];

            this.state.itemsResume = this.state.itemsResumeFull.filter(z => z.object.enable && z.object.showItems).map(q => Object.assign({}, q));
            this.state.itemsResume.forEach(element => {
                this.state.itemsResumeOpen.push(element.id);
                element.children = element.children.filter(z => this.isEnableItem(z.object)).map(q => Object.assign({}, q))
            });
        },
        updateQuickFilterTimeLine() {
            this.state.itemsTimeLineOpen = [];

            this.state.itemsTimeLine = this.state.itemsTimeLineFull.filter(z => z.object.show).map(q => Object.assign({}, q));
            this.state.itemsTimeLine.forEach(element => {
                this.state.itemsTimeLineOpen.push(element.id);
                element.children = element.children.filter(z => this.isEnableItem(z.object)).map(q => Object.assign({}, q))
            });
        },
        startTimeLineFilter() {
            if (this.state.itemsTimeLineFull.length > 0) { return; }

            let items = [];
            let years = this.state.years;

            years.forEach(year => {
                let histories = this.getHistory(year.year);

                histories = histories.map(history => {
                    return {
                        id: this.getID(history),
                        name: this.getTitleTimeLine,
                        object: history,
                        image: history.image,
                        color: history.category.color,
                        children: []
                    }
                });

                let item = {
                    id: year.year,
                    name: this.getTitleYear,
                    object: year,
                    icon: "mdi-clock",
                    color: "pink",
                    children: histories
                };

                this.state.itemsTimeLineOpen.push(year.year);

                items.push(item);
            });

            this.state.itemsTimeLine = items;
            this.state.itemsTimeLineFull = this.state.itemsTimeLine;
        },
        startResumeFilter() {
            if (this.state.itemsResumeFull.length > 0) { return; }

            let items = [];
            let categories = Object.values(this.$store.state.categoryType);

            categories.forEach(category => {
                let histories = this.getHistotyByCategory(category);

                histories = histories.map(history => {
                    return {
                        id: this.getID(history),
                        name: this.getTitleResume,
                        image: history.image,
                        color: category.color,
                        object: history,
                        children: []
                    }
                });

                let item = {
                    id: category.id,
                    name: this.getCategory,
                    icon: category.icon,
                    color: category.color,
                    object: category,
                    children: histories
                };

                this.state.itemsResumeOpen.push(category.id);

                items.push(item);
            });

            this.state.itemsResume = items;
            this.state.itemsResumeFull = this.state.itemsResume;

        },
        getTitleTimeLine(history) {
            return this.language.yearOf[this.culture] + " " + history.date.getFullYear() + " | " + this.state.months[this.state.culture][history.date.getMonth()] + " - " + history.title[this.culture];
        },
        getTitleYear(year) {
            return this.language.yearOf[this.culture] + " " + year.year
        },
        getTitleResume(history) {
            return this.language.yearOf[this.culture] + " " + history.date.getFullYear() + " - " + history.title[this.culture];
        },
        getCategory(category) {
            return category.name[this.culture]
        },
    },
};

export default historyMixins;