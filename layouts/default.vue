<template>
    <div id="dh">
        <dh-header />
        <main id="main">
            <slot />
        </main>
        <dh-footer />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    #dh {
        box-shadow: 0 0 40px 10px rgba(204,204,204,.4);
        margin-left: auto;
        margin-right: auto;
        max-width: 1700px;
        min-height: 100vh;
        position: relative;
        z-index: 99;
    }
</style>