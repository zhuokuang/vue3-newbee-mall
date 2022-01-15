<script setup lang="ts">
defineProps({
	avatarUrl: String,
	nickName: String,
	loginName: String,
	introduce: String,
})
</script>

<template>
	<div class="card">
		<img :src="avatarUrl" alt="avatar" />
		<div class="info">
			<span>昵称: {{ nickName }}</span>
			<span>登录名: {{ loginName }}</span>
			<span>个性签名: {{ introduce }}</span>
		</div>
	</div>
</template>

<style scoped lang="less">
.card {
	height: 115px;
	padding: 0 20px;
	margin: 10px;
	background: linear-gradient(90deg, #1baeae, #51c7c7);
	border-radius: 6px;
	box-shadow: 0 2px 5px #269090;

	display: flex;
	align-items: center;

	img {
		width: 60px;
		height: 60px;
		margin-right: 10px;
		border-radius: 50%;
	}

	.info {
		color: #fff;
		font-size: 14px;
		text-align: left;
		display: flex;
		flex-direction: column;

		span {
			line-height: 24px;
		}
	}
}
</style>
