<script setup lang="ts">
import { Kingkong } from '@/types';

defineProps<{
	list: Kingkong[];
}>();

</script>

<template>
	<div class="kingkong">
		<a class="kingkong-icon" v-for="icon in list" :key="icon.categoryId" :href="icon.linkTo">
			<img :src="icon.imgUrl" :alt="icon.name" />
			<span>{{ icon.name }}</span>
		</a>
	</div>
</template>

<style scoped lang="less">
.kingkong {
	width: 100%;
	padding-top: 6px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.kingkong-icon {
	width: 70px;
	height: 74px;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	font-size: 12px;

	img {
		width: 36px;
		height: 36px;
	}

	span {
		color: #2c3e50;
	}
}
</style>