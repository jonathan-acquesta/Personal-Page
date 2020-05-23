const historyMixins = {
    methods: {
        getTags(history) {
            if (history.resumeTags) { return history.resumeTags; }
            if (history.mainTags) { return history.mainTags; }

            return history.tags;
        },
    },
};

export default historyMixins;