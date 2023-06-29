<template>
	<ul class="sit-contain-works">
		<li class="flex pb50" v-for="(item, index) in list" :key="item.img">
			<div class="title flex1" :class="index % 2 == 0 ? 'pl20' : 'pr20'">
				<h2>{{ item.title }}</h2>
				<div class="pt20 description" v-html="item.description"></div>
			</div>
			<div class="imgs">
				<div class="shadow">
					<a :href="item.img" target="_blank"><img class="width100" :src="item.img" :alt="item.title" /></a>
				</div>
			</div>
		</li>
	</ul>
</template>
<script lang="ts" setup>
import config from './config'
import { SetBanner } from '@/store/Layout'
let route: any = useRoute()
let data: any = computed(() => config[route.params.name])
let list = computed(() => data.value.list)
/** 菜单折叠/收起 时重新计算 */
watch(() => route.path, (val: boolean) => {
	requestAnimationFrame(() => {
		SetBanner({
			h1: data.value.name,
			h2: data.value.h2,
			description: data.value.description,
			bg: data.value.bg
		})
	})
}, {
	immediate: true
})
</script>
<style lang="scss">
.sit-contain-works {
	position: relative;
	z-index: 2;
	transform: translate3d(0, -150px, 0);
	max-width: 1000px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 40px;
	.title {
		// width: 50%;
	}
	.imgs {
		width: 50%;
		flex-shrink: 0;
		.shadow {
			box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
			overflow: hidden;
		}

		height: auto;
		img {
			transition: 0.36s;
			transform: scale(1);
			cursor: pointer;
			display: block;
		}
		&:hover img {
			transform: scale(1.2);
		}
	}
	li {
		flex-direction: row-reverse;
		width: 100%;
	}
	li:nth-child(even) {
		flex-direction: row;
	}
	.description {
		line-height: 1.6;
	}
}
</style>
