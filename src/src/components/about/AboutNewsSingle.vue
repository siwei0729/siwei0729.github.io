<script>
export default {
    props: ['news'],
};
</script>


<template>
    <div class="block sm:flex hover:backdrop-brightness-95 " style="padding: 1em;">

        <!-- About details -->
        <div class="w-full text-left dark:text-ternary-light" style="text-align: justify;">
            {{ news.content }}
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
<style>
a {
    color: cornflowerblue !important;
}
</style>