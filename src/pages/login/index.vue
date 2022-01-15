<script setup lang="ts">
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { NavBar, Toast } from 'vant';
import { postLogin } from '@/api/login';
import { User } from '@/api/types'
import { setToken } from "@/common/utils";

const router = useRouter();
const user = reactive({
	username: '',
	password: '',
});

const { username, password } = toRefs(user);

// 头部返回、设置
const onBack = () => {
	router.back();
}
const onClkMore = () => {
	// TODO: 调用端上接口，设置
}

const onSubmit = (form: User) => {
	postLogin(form).then((res) => {
		console.log('res', res);
		if (res.code === 0) {
			Toast.success('登录成功');
			setToken(res.data.token);
			router.push('/home');
		}
		else {
			Toast.fail('账号或者密码错误');
		}
	});
}

</script>

<template>
	<nav-bar title="登录" left-arrow @click-left="onBack" @click-right="onClkMore">
		<template #right>
			<van-icon name="ellipsis" size="18" />
		</template>
	</nav-bar>

	<img
		class="logo"
		src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png"
		alt="购物车"
	/>

	<van-form class="login-form" @submit="onSubmit">
		<van-cell-group inset>
			<van-field
				name="username"
				v-model="username"
				label="用户名"
				placeholder="用户名"
				:rules="[{ required: true, message: '请填写用户名' }]"
			/>
			<van-field
				name="password"
				v-model="password"
				type="password"
				label="密码"
				placeholder="密码"
				:rules="[{ required: true, message: '请填写用户名' }]"
			/>
		</van-cell-group>
		<router-link class="register" to="/register">立即注册</router-link>
		<van-button round block color="#1baeae" native-type="submit">提交</van-button>
	</van-form>
</template>

<style scoped>
.logo {
	width: 120px;
	height: 120px;
	margin: 80px auto 20px;
}

.login-form {
	padding: 0 20px;
}

.register {
	margin: 16px;
	display: block;
	font-size: 14px;
	color: #1989fa;
}
</style>
