<script setup lang="ts">
import { Toast } from 'vant';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
	placeholder: String,
});

const router = useRouter();
const searchText = ref<string>('');

const onSearch = () => {
	// TODO: add search logic
	const value = searchText.value || props.placeholder;
	Toast(value);
}

const onBack = () => {
	router.back();
}

</script>

<template>
	<div class="search">
		<van-search
			v-model="searchText"
			shape="round"
			show-action
			:placeholder="placeholder"
			@search="onSearch"
		>
			<template #left>
				<van-icon name="arrow-left" color="#656771" size="16" @click="onBack" />
			</template>
			<template #action>
				<div class="btn-search" @click="onSearch">搜索</div>
			</template>
		</van-search>
	</div>
</template>

<style scoped lang="less">
.btn-search {
	width: 40px;
	height: 28px;
	line-height: 28px;
	border-radius: 5px;
	background-color: @main-green;
}
</style>