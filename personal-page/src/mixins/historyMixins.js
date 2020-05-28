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
        }
    },
};

export default historyMixins;