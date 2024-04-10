<template>
    <div v-if="visible">
        <div class="position-fixed top-50 start-50 translate-middle">
            <div class="spinner-border" role="status" style="width: 6rem; height: 6rem;">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loading',
    props: {
        visible: {
            type: Boolean,
            default: true
        }
    }
}
</script>