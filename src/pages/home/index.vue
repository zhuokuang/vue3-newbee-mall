<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getSwipeImg } from '@/api/getSwipeImg';
import Header from "./header.vue";
import BottomBar from '@/components/BottomBar.vue';
import Swiper, { Image } from '@/components/Swiper.vue';

const activeHeader = ref<boolean>(false);
const swipeImages = ref<Image[]>([]);

const onScroll = (e: any) => {
	const scrollTop = e.target?.scrollTop;
	if (scrollTop > 50) {
		activeHeader.value = true;
		console.log('header active');
	}
	else {
		activeHeader.value = false;
		console.log('header deactive');
	}

}

onMounted(() => {
	getSwipeImg().then(({ data }) => {
		console.log(data);
		swipeImages.value = data;
	})
});

</script>

<template>
	<Header :active="activeHeader" />
	<div class="container" @scroll.passive="onScroll">
		<Swiper :images="swipeImages" />
		<!-- TODO: delete fragment -->
		<div class="fragment"></div>
	</div>
	<bottom-bar />
</template>

<style scoped>
.container {
	height: 100%;
	overflow: auto;
}

.fragment {
	height: 1000px;
}
</style>