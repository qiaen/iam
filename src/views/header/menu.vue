<template>
	<nav class="site-nav fixed">
		<div class="close pointer" @click="ShowMenu(false)">
			<i class="fc999 i-icon-cancel-1 fsize20"></i>
			<span class="fc999 fsize18">Close</span>
		</div>
		<div class="nav-bg-rotate"></div>
		<div class="nav-container">
			<div class="widget-element txright">
				<a href="index.html"><img src="@/assets/img/logo.svg" class="logo-widget" alt="QUSQ logo" /></a>
				<div class="fc999 fsize18">Unique Portfolio</div>
			</div>
			<menu class="nav-menu txright pt50">
				<li v-for="item in menus">
					<router-link v-if="!item.child" :to="item.path" :class="route.path == item.path ? 'current' : ''" class="fsize18">{{ item.name }}</router-link>
					<template v-else>
						<label class="fsize18 a">{{ item.name }}</label>
						<ul v-for="aaa in item.child" class="sub-ul">
							<li>
								<router-link :class="route.path == aaa.path ? 'current' : ''" :to="aaa.path" class="fsize16 fc999">{{ aaa.name }}</router-link>
							</li>
						</ul>
					</template>
				</li>
			</menu>
			<div class="search flex pt50">
				<input class="pr10 flex1" type="text" />
				<button class="fsize18">
					<i class="i-icon-search"></i>
				</button>
			</div>
		</div>
	</nav>
</template>
<script lang="ts" setup>
import { ShowMenu } from '@/store/Layout'
let route: any = useRoute()
/** 菜单折叠/收起 时重新计算 */
watch(() => route.path, (val: boolean) => {
	requestAnimationFrame(() => {
		ShowMenu(false)
	})
})

let menus = [
	{
		name: '首页',
		path:'/',
	},
	{
		name: '个人作品',
		path:'/works',
		child: [
			{
				name: 'Teemo 新标签浏览器插件',
				path:'/works/tab',
			},
			{
				name: '芒果读书客户端',
				path:'/works/mgui',
			},
			{
				name: '芒果读书运营端',
				path:'/works/mgo',
			},
			{
				name: '花木兰Vue3后台管理系统模板',
				path:'/works/huamulan',
			},
			{
				name: '兰陵王Vue2后台管理系统模板',
				path:'/works/lanlingwang',
			}
		]
	},
	{
		name: '关于',
		path:'/about',
	},
	{
		name: '联系我',
		path:'/contact',
	}
]
</script>
<style lang="scss">
$c51: #515151;
.site-nav {
	width: 480px;
	right: 0;
	top: 0;
	z-index: 10;
	overflow: hidden;
	transition: 0.36s;
	transform: translate3d(480px, 0, 0);
	.nav-container {
		width: 239px;
		padding: 50px 50px 20px 20px;
		background-color: #{$c51};
		height: 100vh;
		float: right;
	}
	.nav-bg-rotate {
		background-color: #{$c51};
		height: 150%;
		transform: rotate(-10deg);
	}
	.close {
		position: absolute;
		top: 30px;
		left: 60px;
		transform: rotate(80deg);
		transform-origin: 0 0;
		background: none;
		.i-icon-cancel-1::before {
			transform: rotate(0deg);
			transition: 0.5s ease;
			transform-origin: 50%;
		}
		&:hover .i-icon-cancel-1::before {
			color: #fff;
			transform: rotate(180deg);
		}
	}
	.search {
		width: 200px;
		float: right;
		button,
		input {
			border: none;
			outline: none;
			background-color: transparent;
			color: #fcfcfc;
		}
		input {
			text-align: right;
		}
	}
	.sub-ul a {
		color: #aaa !important;
		line-height: 36px;
	}
	
}
.nav-menu {
	a,
	.a {
		color: #fcfcfc;
		text-decoration: none;
		position: relative;
		display: inline-block;
		line-height: 44px;
		clear: both;
		&::after {
			position: absolute;
			display: block;
			content: '';
			height: 2px;
			background-color: #{$c51};
			bottom: 5px;
			width: 0;
			right: 0;
			transition: 0.36s;
		}
	}
	a {
		&.current::after,
		&:hover::after {
			background-color: #fcfcfc;
			width: 100%;
		}
	}
}
@media only screen and (min-width: 480px) {
	.site-nav .nav-bg-rotate {
		position: absolute;
		display: block;
		width: 320px;
		top: 0;
		left: 0;
		z-index: -1;
		transform-origin: 0 0;
	}
}
@media only screen and (max-width: 480px) {
	.site-nav .close {
		right: 200px;
		left: auto;
		transform: rotate(00deg);
	}
}
</style>
