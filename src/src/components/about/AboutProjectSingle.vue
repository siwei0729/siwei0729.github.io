<script>
export default {
    props: ['client'],
};
</script>


<template>
    <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20 hover:backdrop-brightness-95 " style="padding: 1em;">
        <!-- About profile image -->
        <div class="w-full sm:w-1/6 mb-7 sm:mb-0">
            <img
                    :src="client.img"
                    :alt="client.title"
                    class="rounded-xl"
                    style=" width:12em;height:12em;object-fit:cover;"
            />
        </div>

        <!-- About details -->
        <div class="w-full sm:w-3/4 text-left dark:text-ternary-light" style="text-align: justify;">
            <a :href="client.link" style="font-size: 1.2em; font-weight: bold; ">{{ client.title }} </a>
            <br>
            <div v-html="client.authors"></div>
            <div v-html="client.conference"></div>
            <div v-html="client.others"></div>
            <br>
            {{client.description}} <br><br>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
<style>
a {
    color: cornflowerblue !important;
}
</style>