<script setup lang="ts">
import { ref } from "vue";
import Header from "./header.vue";
import NavBar from '@/components/NavBar.vue';

const activeHeader = ref<boolean>(false);

const onScroll = (e: any) => {
	const scrollTop = e.target.scrollTop;
	if (scrollTop > 50) {
		activeHeader.value = true;
	}
	else {
		activeHeader.value = false;
	}

}

</script>

<template>
	<Header :active="activeHeader" />
	<div class="container" @scroll.passive="onScroll">
		<!-- TODO: delete fragment -->
		<div class="fragment"></div>
	</div>
	<nav-bar />
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