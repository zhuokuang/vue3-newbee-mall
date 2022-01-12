<script setup lang="ts">
import { ref, onMounted } from "vue";
import BottomBar from '@/components/BottomBar.vue';
import Swiper, { Image } from '@/components/Swiper.vue';
import Header from "./header.vue";
import KingkongBall, { Kingkong } from "./kingkongBall.vue";
import { getSwipeImg } from '@/api/getSwipeImg';
import { getKingkong } from "@/api/getKingkong";

const activeHeader = ref<boolean>(false);
const swipeImages = ref<Image[]>([]);
const kingkongs = ref<Kingkong[]>([]);

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
		swipeImages.value = data;
	});
	getKingkong().then(({ data }) => {
		kingkongs.value = data;
	});
});

</script>

<template>
	<Header :active="activeHeader" />
	<div class="container" @scroll.passive="onScroll">
		<Swiper :images="swipeImages" />
		<!-- TODO: delete fragment -->
		<KingkongBall :list="kingkongs" />
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