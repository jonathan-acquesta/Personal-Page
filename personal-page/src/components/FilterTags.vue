<template>
    <v-autocomplete
                v-model="tagsToFilter"
                :items="Object.values(tags)"
                filled
                chips
                color="blue"
                item-text="name"
                item-value="name"
                dense
                multiple
                :placeholder="language.filterTags[culture]"
                :clearable="true"               
                :light="true"
                :return-object="true"
                :small-chips="true"
                :value-comparator="comparer"
              >
                <template v-slot:selection="data">
                  <v-chip
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="remove(data.item)">
                    {{ data.item.name[culture] }}
                  </v-chip>
                </template>
                <template v-slot:item="data">
                  <template>
                    <v-list-item-content>
                      <v-list-item-title v-html="data.item.name[culture]"></v-list-item-title>
                      <v-list-item-subtitle v-html="data.item.group[culture]"></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </template>
              </v-autocomplete>
</template>

<script>
import generalMixins from './../mixins/generalMixins.js'

    export default {
        mixins:[generalMixins],
        data() {
            return {
                tagsToFilter: [],
                name: 'Midnight Crew',
                people: [
                    { name: { "pt-BR": "#EnsinoMédio1", "en-US": "#HighSchool1" }, color: "red", "group": { "pt-BR": "Vida Acadêmica", "en-US": "Academic Life" } },
                    { name: { "pt-BR": "#EnsinoMédio2", "en-US": "#HighSchool2" }, color: "red", "group": { "pt-BR": "Vida Acadêmica", "en-US": "Academic Life" } },
                ],
            }
        },
        methods: {
            remove (item) {
                 this.tagsToFilter = this.tagsToFilter.filter(x => { return x.name[this.culture] != item.name[this.culture]});
            },
            comparer(a, b)
            {
                return a[this.culture] === b[this.culture];
            }
        },
    }
</script>

<style scoped>

</style>