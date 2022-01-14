<script setup lang="ts">
import { categoryItem } from '@/api/types';

defineProps<{
	active: number,
	categories: categoryItem[],
	onChange: (index: number) => void,
}>();
</script>

<template>
	<van-sidebar v-model="active" @change="onChange">
		<van-sidebar-item
			class="sidebar-item"
			v-for="category in categories"
			:title="category.categoryName"
		/>
	</van-sidebar>
</template>

<style scoped lang="less">
.sidebar-item {
	padding: 20px 10px;
}
</style>