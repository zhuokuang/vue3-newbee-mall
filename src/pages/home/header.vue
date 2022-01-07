<script setup lang="ts">

</script>

<template>
	<div class="header active">
		<router-link to="/category">
			<van-icon name="ellipsis" />
		</router-link>
		<div class="search">
			<div class="app-name">新峰商城</div>
			<!-- TODO: to props need to be added -->
			<router-link class="search-title" to="/">山河无恙，人间皆安</router-link>
		</div>
		<router-link to="/user">
			<van-icon name="user-o" />
		</router-link>
	</div>
</template>

<style scoped>
.header {
	width: 100%;
	height: 50px;
	padding: 0 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header.active {
	background-color: #1baeae;
}

.search {
	width: 74%;
	height: 30px;
	border-radius: 20px;
	background-color: hsla(0, 0%, 100%, 0.7);
	display: flex;
	align-items: center;
	font-size: 12px;
}

.app-name {
	padding: 0 10px;
	font-size: 20px;
	font-weight: 700;
	color: #1baeae;
	border-right: 1px solid #2c3e50;
}

.search-title {
	flex: 1;
}
</style>