<script>
import AboutProjectSingle from "@/components/about/AboutProjectSingle";
import AboutNewsSingle from "@/components/about/AboutNewsSingle.vue";
import projects from "@/data/projects";
import news from "@/data/news";

export default {
	components: {
    AboutProjectSingle,
		AboutNewsSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the brands I have worked with',
			clients: [],
      projects: projects,
			news: news,
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20 border-t-2">
		<p
				class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
				style="text-align: left; padding-top: 3em; padding-bottom: 1em; padding-left: 1em;">
			News
		</p>
		<br>
		<div >
			<AboutNewsSingle
					v-for="msg in news"
					:key="msg.id"
					:news="msg"
			/>
		</div>
	</div>


	<div class="mt-10 sm:mt-20 ">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
			style="text-align: left;padding-left: 1em"
		>
			Selected Publications
		</p>
		<div >
			<AboutProjectSingle
				v-for="project in projects"
				:key="project.id"
				:client="project"
			/>
		</div>
	</div>
</template>
