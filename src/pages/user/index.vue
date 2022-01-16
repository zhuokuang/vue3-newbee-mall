<script setup lang="ts">
import { onActivated, reactive, toRefs } from 'vue';
import BottomBar from '@/components/BottomBar.vue';
import Header from '@/components/Header.vue';
import Card from './Card.vue';
import List from './List.vue';
import { getUserInfo } from '@/api';
import { UserInfo } from '@/types';

const user = reactive<UserInfo>({
	loginName: '',
	nickName: '',
	introduce: '',
});

const { loginName, nickName, introduce } = toRefs(user);

onActivated(() => {
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
		<Card
			avatar-url="https://s.yezgea02.com/1604040746310/aaaddd.png"
			:nick-name="nickName"
			:login-name="loginName"
			:introduce="introduce"
		/>
		<!-- 使用 Vant List 组件 -->
		<List />
		<bottom-bar />
	</div>
</template>

<style scoped>
</style>