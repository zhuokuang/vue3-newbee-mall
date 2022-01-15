<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
import BottomBar from '@/components/BottomBar.vue';
import Swiper from '@/components/Swiper.vue';
import Header from "./header.vue";
import KingkongBall from "./kingkongBall.vue";
import GoodsList from '@/components/GoodsList.vue';
import { getSwipeImg } from '@/api/getSwipeImg';
import { getKingkong } from "@/api/getKingkong";
import { getAllGoodsList } from '@/api/getGoodsList';
import { GoodsItem, Kingkong, Image } from '@/api/types';

type Goods = {
	newGoodses: GoodsItem[],
	hotGoodses: GoodsItem[],
	recommendGoodses: GoodsItem[],
};

const activeHeader = ref<boolean>(false);
const swipeImages = ref<Image[]>([]);
const kingkongs = ref<Kingkong[]>([]);
const goods = reactive<Goods>({
	newGoodses: [],
	hotGoodses: [],
	recommendGoodses: [],
});
const { newGoodses, hotGoodses, recommendGoodses } = toRefs(goods);

const onScroll = (e: any) => {
	const scrollTop = e.target?.scrollTop;
	if (scrollTop > 50) {
		activeHeader.value = true;
		console.log('header active');
	}
	else {
		activeHeader.value = false;
		console.log('header deactive');
	}

}

onMounted(() => {
	getSwipeImg().then(({ data }) => {
		swipeImages.value = data;
	});
	getKingkong().then(({ data }) => {
		kingkongs.value = data;
	});
	getAllGoodsList().then((res) => {
		[goods.newGoodses, goods.hotGoodses, goods.recommendGoodses] = res;
	})
});

</script>

<template>
	<Header :active="activeHeader" />
	<div class="container" @scroll.passive="onScroll">
		<Swiper :images="swipeImages" />
		<KingkongBall :list="kingkongs" />
		<div class="goods">
			<GoodsList title="新品上线" :list="newGoodses" />
			<GoodsList title="热门商品" :list="hotGoodses" />
			<GoodsList title="最新推荐" :list="recommendGoodses" />
		</div>
	</div>
	<bottom-bar />
</template>

<style scoped>
.container {
	height: 100%;
	overflow: auto;
}

.goods {
	margin-bottom: 80px;
}
</style>