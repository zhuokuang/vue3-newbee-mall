<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
	value: String,
	placeholder: String,
});

const emit = defineEmits(['update:value', 'search']);

const router = useRouter();

const onSearch = () => {
	// TODO: add search logic
	const val = props.value || props.placeholder;
	emit('search', val);
}

const onBack = () => {
	router.back();
}

const onUpdate = (val: string) => {
	emit('update:value', val);
}

</script>

<template>
	<div class="search">
		<van-search
			:model-value="value"
			shape="round"
			show-action
			:placeholder="placeholder"
			@search="onSearch"
			@update:model-value="onUpdate"
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