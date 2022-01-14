<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useRouter } from 'vue-router';
import BottomBar from '@/components/BottomBar.vue';
import { getCategories } from '@/api/getCategories';
import { categoryItem } from '@/api/types';

const router = useRouter();
const activeBar = ref();
const categories = ref<categoryItem[]>([]);

const onBack = () => {
	router.replace('/home');
}

const onChange = (index: number) => {
	console.log(index);
	console.log(activeBar.value);
}

onMounted(() => {
	getCategories().then(({ data }) => {
		categories.value = data;
	})
});
</script>

<template>
	<!-- 头部搜索框 -->
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

	<!-- 侧边栏 -->
	<van-sidebar class="sidebar" v-model="activeBar" @change="onChange">
		<van-sidebar-item
			class="sidebar-item"
			v-for="category in categories"
			:title="category.categoryName"
		/>
	</van-sidebar>

	<!-- 底部导航栏 -->
	<bottom-bar />
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
.sidebar {
	width: 120px;

	&-item {
		padding: 20px 10px;
	}
}
</style>