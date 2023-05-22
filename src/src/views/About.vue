<script>
import AboutMe from '@/components/about/AboutMe';
// import AboutCounter from '@/components/about/AboutCounter';
// import AboutFollowMe from "@/components/about/AboutFollowMe";
// import AboutClients from '@/components/about/AboutClients';
import feather from 'feather-icons';
import AboutProjects from "@/components/about/AboutProjects";

export default {
	name: 'About',
	components: {
    AboutProjects,
		AboutMe,
		// AboutFollowMe,
	},
	data: () => {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

		<!-- About counter -->
<!--		<AboutFollowMe />-->

		<!-- About counter -->
		<div class="container mx-auto">
<!--			<AboutClients />-->
      <AboutProjects />
		</div>
	</div>
</template>

<style scoped></style>
