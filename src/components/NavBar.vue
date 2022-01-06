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
console.log(NavRoutes);
</script>

<style scoped>
.nav-bar {
	width: 100%;
	position: fixed;
	bottom: 0;
}

.nav-list {
	/* width: 100%; */
	display: flex;
	justify-content: space-between;
}
</style>
