<script setup lang="ts">

export type TabItem = {
	title: string,
	name?: string,
}

defineProps<{
	active: number | string;
	tabs: TabItem[];
}>();

const emit = defineEmits(['update:active']);

const onChange = (name: string) => {
	emit('update:active', name);
}

</script>

<template>
	<van-tabs :active="active" type="card" color="#1baeae" @change="onChange">
		<van-tab v-for="(tab, index) in tabs" :title="tab.title" :name="tab.name || index">
			<slot></slot>
		</van-tab>
	</van-tabs>
</template>

<style scoped lang="less">
</style>