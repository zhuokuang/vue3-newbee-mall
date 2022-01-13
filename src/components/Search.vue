<script setup lang="ts">
import { ref } from 'vue';

const searchText = ref<string>('');
</script>

<template>
	<div class="search">
		<van-search v-model="searchText" shape="round" />
	</div>
</template>

<style scoped lang="less">
</style>