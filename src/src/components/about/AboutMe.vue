<script>
export default {
    setup() {
        return {
            bios: [
                {
                    id: 1,
                    bio: "I am currently pursuing my PhD in Computer Science at the National University of Singapore (NUS) under the supervision of <a href=\"https://www.comp.nus.edu.sg/~dyhsu/\">Prof. David Hsu</a>. I received my BSc in Information Systems from NUS in 2019 with the Lee Kuan Yew Gold Medal."
                },
                {
                    id: 2,
                    bio:
                        'My research interests span decision making in robotics, such as representation learning, imitation learning, reinforcement learning and planning in complex environments. The long-term goal of the research is to empower robots with general intelligence in daily household tasks.',
                },
            ],
        };
    },
};
</script>
<style>
.icon-container {
    display: flex;
    margin-left: -0.8em;
    margin-top: -2em;
}

.font_size_icon {
    width: 3em;
    height: 3em;
    filter: grayscale(100%);
//filter: invert(100%);
}

.dark .font_size_icon {
    filter: invert(100%);
}
</style>
<template>
    <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <!-- About profile image -->
        <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
            <img
                    src="@/assets/images/person.jpg"
                    class="rounded-xl w-96"
                    alt=""
            />
        </div>

        <!-- About details -->
        <div class="w-full sm:w-3/4 text-left dark:text-ternary-light" style="text-align: justify">
            <h2 style="font-size: 1.5em; font-weight: bold;">SIWEI CHEN (陈思为)</h2> <br>
            <p class="font-general-regular mb-4  text-lg">
                I am currently pursuing my PhD in Computer Science at the National University of Singapore (NUS) under the supervision of <a href="https://www.comp.nus.edu.sg/~dyhsu/">Prof. David Hsu</a>. I received my BSc from NUS School of Computing in 2019 with the Lee Kuan Yew Gold Medal.
                During my PhD study, I had the opportunity to spend a wonderful time at Sea AI Lab, working closely with <a href="https://zhongwen.one/"> Dr. Zhongwen Xu </a> and <a href="https://yusufma03.github.io/">Dr. Xiao Ma</a>.
                <br><br>
                My research interests span decision making in robotics, such as representation learning, imitation learning, reinforcement learning and planning in complex environments. The long-term goal of the research is to empower robots with general intelligence in daily household tasks.
            </p>
            <br>
            <div class="icon-container">
                <div>
                    <a href="mailto:chensiwei0729@gmail.com">
                        <img :src="require('@/assets/images/follow_me/email.png')"
                             class="rounded-xl font_size_icon"
                             style="object-fit: cover; padding: 0.7em;margin: auto">
                    </a>

                </div>
                <div>
                    <a
                            download="ChenSiwei_CV.pdf"
                            href="/files/ChenSiwei_CV.pdf"
                            aria-label="Download Resume"
                    >
                        <img :src="require('@/assets/images/follow_me/cv.png')" class="rounded-xl font_size_icon"
                             style="object-fit: cover; padding: 0.8em;margin: auto">
                    </a>
                </div>
                <div>
                    <a href="https://scholar.google.com/citations?user=28Wp9rEAAAAJ&hl=en">
                        <img :src="require('@/assets/images/follow_me/google-scholar--v2.png')"
                             class="rounded-xl font_size_icon" style="object-fit: cover; padding: 0.7em; margin: auto">
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/siweich44618142">
                        <img :src="require('@/assets/images/follow_me/twitter.png')" class="rounded-xl font_size_icon"
                             style="object-fit: cover; padding: 0.8em;margin: auto">
                    </a>
                </div>
                <!--                <div>-->
                <!--                    <img :src="require('@/assets/images/follow_me/github.jpg')" class="rounded-xl font_size_icon"-->
                <!--                         style=" object-fit: cover;margin: auto; padding: 0.3em">-->
                <!--                </div>-->
            </div>

        </div>
    </div>
</template>
