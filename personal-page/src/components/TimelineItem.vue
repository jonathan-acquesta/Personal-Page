<template>
    <div>
        Item
    </div>
</template>

<script>
    export default {
        props: {
            date: Date,
            title: String, 
            description: String, 
            image: String, 
            category: String, 
            icon: String, 
            color: String
        },
        name: 'TimelineItem'
    }
</script>

<style scoped>

</style>