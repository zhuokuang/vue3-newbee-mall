<script setup lang="ts">
import { onMounted, reactive, toRefs } from 'vue';
import BottomBar from '@/components/BottomBar.vue';
import Header from '@/components/Header.vue';
import { getUserInfo } from '@/api/getUserInfo';
import { UserInfo } from '@/api/types';

const user = reactive<UserInfo>({
	loginName: '',
	nickName: '',
	introduce: '',
});

const { loginName, nickName, introduce } = toRefs(user);

onMounted(() => {
	getUserInfo().then(({ data }) => {
		user.loginName = data.loginName;
		user.nickName = data.nickName;
		user.introduce = data.introduce || '';
	})
});
</script>

<template>
	<div>
		<Header title="我的" />
		<p>{{ loginName }}</p>
		<p>{{ nickName }}</p>
		<p>{{ introduce }}</p>
	</div>
	<bottom-bar />
</template>

<style scoped>
</style>