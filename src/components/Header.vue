<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
	title: {
		type: String,
		default: "我的"
	},
})

const goBack = () => {
	router.back();
}
</script>

<template>
	<header class="header">
		<van-icon name="arrow-left" color="#656771" size="16" @click="goBack" />
		<span>{{ title }}</span>
		<van-icon name="ellipsis" color="#656771" size="16" />
	</header>
</template>

<style scoped lang="less">
.header {
	height: 44px;
	padding: 0 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
}
</style>
