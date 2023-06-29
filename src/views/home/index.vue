<template>
	<ul class="sit-contain">
		<li class="flex" v-for="(item, index) in list" :key="item.img" :style="{ visibility: index == 0 ? 'hidden' : 'visible' }">
			<div class="title shrink0">
				<p>{{ item.title }}</p>
			</div>
			<div class="imgs flex1">
				<div class="shadow">
					<router-link v-if="!item.href" :to="item.url || ''"><img class="width100" :src="item.img" :alt="item.title" /></router-link>
					<a :href="item.href" target="_blank" v-else><img class="width100" :src="item.img" :alt="item.title" /></a>
				</div>
			</div>
		</li>
	</ul>
</template>
<script setup lang="ts">
let list:any = [
	{
		img: '',
		title: ''
	},
	{
		img: 'https://file.tuoyan.club/1001.png',
		url: '/works/tab',
		title: 'TEEMO 新标签浏览器插件'
	},
	{
		img: 'https://file.tuoyan.club/1010.png',
		url: '/works/mgui',
		title: '芒果读书'
	},
	{
		img: 'https://file.tuoyan.club/1018.png',
		url: '/works/mgo',
		title: '芒果读书运营端'
	},
	{
		img: 'https://file.tuoyan.club/1023.jpg',
		url: '/works/huamulan',
		title: '花木兰Vue3后台管理系统模板'
	},
	{
		img: 'https://file.tuoyan.club/1022.png',
		url: '/works/lanlingwang',
		href: 'http://lanling.diumx.com',
		title: '兰陵王Vue2后台管理系统模板'
	}
]
</script>
<style lang="scss">
.sit-contain {
	position: relative;
	z-index: 2;
	transform: translate3d(0, -400px, 0);
	overflow: hidden;
	max-width: 1000px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 40px;
	.title {
		white-space: nowrap;
		display: flex;
		align-items: end;
		p {
			transform: rotate(-90deg);
			transform-origin: 22px 6px;
		}
		width: 34px;
	}
	.imgs {
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
		flex-direction: row;
		width: 50%;
		transform: scale(1.1);
	}
	li:nth-child(even) {
		flex-direction: row-reverse;
		// background-color: green;
		margin-top: 260px;
		height: fit-content;
		margin-left: -44px;
	}
	li:nth-child(odd) {
		height: fit-content;
		margin-left: 20px;
		.title p {
			transform: rotate(-90deg);
			transform-origin: 10px 7px;
		}
	}
}
</style>
