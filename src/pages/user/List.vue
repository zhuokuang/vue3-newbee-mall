<script setup lang="ts">
</script>

<template>
	<ul class="manage-list">
		<li class="van-hairline--bottom">
			<span>我的订单</span>
			<van-icon name="arrow" />
		</li>
		<li class="van-hairline--bottom">
			<span>账号管理</span>
			<van-icon name="arrow" />
		</li>
		<li class="van-hairline--bottom">
			<span>地址管理</span>
			<van-icon name="arrow" />
		</li>
		<li>
			<span>关于我们</span>
			<van-icon name="arrow" />
		</li>
	</ul>
</template>

<style scoped lang="less">
.manage-list {
	margin: 20px;

	li {
		height: 40px;
		line-height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
	}
}
</style>
