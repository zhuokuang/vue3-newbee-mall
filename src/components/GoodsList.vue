<script setup lang="ts">
import { GoodsItem } from '@/types';

defineProps<{
	title: string;
	list: GoodsItem[];
}>();

</script>

<template>
	<header class="title">{{ title }}</header>
	<div class="goods-list">
		<div class="goods-item" v-for="goods in list">
			<img :src="goods.imgUrl" :alt="goods.name" />
			<div class="name">{{ goods.name }}</div>
			<span class="price">￥{{ goods.price }}</span>
		</div>
	</div>
</template>

<style scoped lang="less">
.title {
	height: 50px;
	line-height: 50px;
	font-size: 16px;
	color: @main-green;
	background-color: #f9f9f9;
}
.goods-list {
	display: flex;
	flex-wrap: wrap;

	.goods-item {
		width: 50%;
		height: 200px;
		padding: 10px;
		font-size: 14px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #e9e9e9;

		&:nth-child(odd) {
			border-right: 1px solid #e9e9e9;
		}

		img {
			width: 120px;
			height: 120px;
			object-fit: cover;
		}

		.name {
			color: @main-black;
		}

		.price {
			color: @main-green;
		}
	}
}
</style>