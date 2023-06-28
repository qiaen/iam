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
				<li>
					<router-link to="/" class="current fsize18">首页</router-link>
				</li>
				<li>
					<label class="fsize18 a">作品</label>
					<ul class="sub-ul">
						<li>
							<router-link to="/works/tab" class="fsize16 fc999">Teemo 新标签浏览器插件</router-link>
						</li>
						<li>
							<router-link to="/works/mgui" class="fsize16">芒果读书客户端</router-link>
						</li>
						<li>
							<router-link to="/works/mgo" class="fsize16">芒果读书运营端</router-link>
						</li>
						<li>
							<router-link to="/works/huamulan" class="fsize16">花木兰Vue3后台管理系统模板</router-link>
						</li>
						<li>
							<router-link to="/works/lanlingwang" class="fsize16">兰陵王Vue2后台管理系统模板</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link to="/about" class="fsize18">关于</router-link>
				</li>
				<li>
					<router-link to="/conact" class="fsize18">联系我</router-link>
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
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { ShowMenu } from '@/store/Layout'
let route: any = useRoute()
/** 菜单折叠/收起 时重新计算 */
watch(() => route.path, (val: boolean) => {
	requestAnimationFrame(() => {
		ShowMenu(false)
	})
})
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
