<script setup lang="ts">
import { onMounted, ref } from "vue"
import BottomBar from '@/components/BottomBar.vue';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Content from './Content.vue';
import { getCategories } from '@/api/getCategories';
import { categoryItem } from '@/api/types';

const activeBar = ref<number>(0);
const categories = ref<categoryItem[]>([]);

// TODO: Maybe the function should be used with emit
const onChangeBar = (index: number) => {
	activeBar.value = index;
}

onMounted(() => {
	getCategories().then(({ data }) => {
		categories.value = data;
	})
});
</script>

<template>
	<!-- 头部搜索框 -->
	<Header />

	<main class="main-wrap">
		<!-- 侧边栏 -->
		<Sidebar class="sidebar" :active="activeBar" :categories="categories" :onChange="onChangeBar" />

		<!-- 内容区 -->
		<Content class="content" :categories="categories[activeBar]?.categoryChildren || []" />
	</main>

	<!-- 底部导航栏 -->
	<bottom-bar />
</template>

<style scoped lang="less">
.main-wrap {
	display: flex;
	height: calc(100vh - 50px - 50px);
	align-items: stretch;

	.sidebar {
		width: 30%;
	}

	.content {
		flex: 1;
	}
}
</style>