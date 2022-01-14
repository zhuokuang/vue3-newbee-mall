<script setup lang="ts">
import { categoryItem } from '@/api/types';

defineProps<{
	categories: categoryItem[];
}>();
</script>

<template>
	<div class="content">
		<div v-for="category in categories">
			<p class="name">{{ category.categoryName }}</p>
			<ul class="wrap">
				<li class="category" v-for="childCategory in category.categoryChildren">
					<img
						:src="childCategory.categoryImg || 'http://s.weituibao.com/1583591077131/%E5%88%86%E7%B1%BB.png'"
						alt="categoryName"
					/>
					<span>{{ childCategory.categoryName }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped lang="less">
.content {
	overflow: auto;
}
.name {
	font-size: 20px;
	margin-left: 20px;
	text-align: left;
}
.wrap {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
}
.category {
	font-size: 12px;
	margin: 10px 0;
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 30px;
		height: 30px;
	}

	span {
		margin-top: 8px;
	}
}
</style>