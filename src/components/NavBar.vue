<template>
	<div class="nav-bar">
		<div class="nav-list">
			<router-link class="nav-item" v-for="route in NavRoutes" :to="route.path">
				<van-icon :name="(route.meta?.icon as string)" size="24" />
				<span>{{ route.meta?.title }}</span>
			</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">
import { NavRoutes } from "@/router";
</script>

<style scoped>
.nav-bar {
	width: 100%;
	height: 40px;
	position: fixed;
	bottom: 0;
	padding: 5px;
	font-size: 12px;
	box-sizing: content-box;
}
.nav-bar a {
	color: #666;
}

.nav-list {
	height: 100%;
	display: flex;
	justify-content: space-around;
}

.nav-item {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>
