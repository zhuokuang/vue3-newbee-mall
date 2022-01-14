<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const onBack = () => {
	router.replace('/home');
}
</script>

<template>
	<header class="header">
		<van-icon name="arrow-left" color="#656771" size="16" @click="onBack" />
		<router-link class="search" :to="{ name: 'search' }">
			<!-- <van-search disabled placeholder="请输入商品关键词" shape="round" /> -->
			<van-icon name="search" color="#656771" size="16" />
			<span>请输入商品关键词</span>
		</router-link>
		<van-icon name="ellipsis" color="#656771" size="16" />
		<!-- <van-divider /> -->
	</header>
</template>

<style scoped lang="less">
.header {
	width: 100%;
	height: 50px;
	padding: 0 15px;
	border-bottom: 1px solid #eee;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.search {
	width: 276px;
	height: 30px;
	background-color: #f7f7f7;
	padding: 0 12px;
	border-radius: 20px;
	font-size: 12px;
	color: #bbb;
	display: flex;
	align-items: center;

	span {
		padding: 0 8px;
	}
}
</style>