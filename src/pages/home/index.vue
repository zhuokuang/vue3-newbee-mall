<script setup lang="ts">
import { ref } from "vue";
import Header from "./header.vue";
import BottomBar from '@/components/BottomBar.vue';

const activeHeader = ref<boolean>(false);

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

</script>

<template>
	<Header :active="activeHeader" />
	<div class="container" @scroll.passive="onScroll">
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