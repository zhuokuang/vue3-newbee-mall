<script setup lang="ts">

export interface Image {
	id: number,
	url: string,
	name: string,
};

const props = defineProps<{
	images: Image[],
}>();

</script>

<template>
	<van-swipe class="swipe" :autoplay="3000" lazy-render indicator-color="#1baeae">
		<van-swipe-item v-for="image in props.images" :key="image.id">
			<img :src="image.url" />
		</van-swipe-item>
	</van-swipe>
</template>

<style scoped>
.swipe {
	width: 100%;
	height: 170px;
}
.swipe img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
