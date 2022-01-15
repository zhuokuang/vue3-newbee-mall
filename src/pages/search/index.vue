<script setup lang="ts">
import { ref, watch } from 'vue';
import { Toast } from 'vant';
import Search from '@/components/Search.vue';
import Tab, { TabItem } from './Tab.vue';

const searchText = ref<string>('');
const activeTab = ref('recommend');
const tabs: Array<TabItem> = [{
	title: '推荐',
	name: 'recommend',
}, {
	title: '新品',
	name: 'new',
}, {
	title: '价格',
	name: 'price'
}];

watch(activeTab, newName => {
	// TODO: add change activeTab logic here
	console.log(newName);
})

const onSearch = (val: string) => {
	// TODO: add search logic here
	Toast(val);
	console.log(searchText.value);
}

</script>

<template>
	<!-- 头部搜索框 -->
	<Search v-model:value="searchText" placeholder="MacBook Pro" @search="onSearch" />

	<!-- Tab 及其内容 -->
	<Tab v-model:active="activeTab" :tabs="tabs">
		<div class="empty">
			<img src="https://s.yezgea02.com/1604041313083/kesrtd.png" alt="empty" />
			<p>搜索想要的商品</p>
		</div>
	</Tab>
</template>

<style scoped lang="less">
.empty {
	img {
		width: 150px;
		height: 150px;
		margin-top: 50px;
	}

	p {
		font-size: 14px;
		color: @main-gray;
	}
}
</style>