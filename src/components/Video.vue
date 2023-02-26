<script>
import { useStore, mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['video'])
    },
    mounted() {
        const store = useStore()

        store.dispatch('fetchVideo', this.$route.params.id)
    }
};
</script>

<template>
    <div v-if="video">
    Video title {{ video.snippet.description }}
    Video Desc {{ video.snippet.title }}
    </div>
</template>