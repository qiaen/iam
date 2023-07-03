<template>
	<header class="site-header width100" :class="isShowMenu ? 'is-show-menu' : ''">
		<div class="container-fluid" :style="{background: banner.bg}">
			<div class="container-inner">
				<div class="fxmiddle flex fcfff">
					<span class="logo-box">
						<img src="@/assets/img/logo.svg" class="logo" alt="QUSQ logo" />
					</span>
					<span class="flex1 fsize18 pl50">Unique Portfolio</span>
					<div class="shrink0 fsize18 pointer" @click="ShowMenu(true)">
						<span class="pr20">Menu</span>
						<i class="i-icon-menu"></i>
					</div>
				</div>
				<div class="row">
					<div class="site-branding">
						<h1 class="site-title fcfff" v-html="banner.h1"></h1>
						<h2 class="site-subtitle" v-html="banner.h2"></h2>
						<p class="site-description" v-html="banner.description"></p>
					</div>
				</div>
			</div>
		</div>
		<div class="decor-container"><div class="theme-rotate" :style="{background: banner.bg}"></div></div>
		<imenu></imenu>
	</header>
</template>
<script lang="ts" setup>
import { banner, isShowMenu, ShowMenu } from '@/store/Layout'
import imenu from './menu.vue'
</script>
<style lang="scss">
.site-header {
	&.is-show-menu {
		.site-nav {
			transform: translate3d(0, 0, 0);
		}
	}
	.container-fluid {
		background-color: #37bdb6;
		position: relative;
		padding: 50px 0;
	}
	.container-inner {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 10px;
		.site-title {
			padding: 50px 0 20px;
		}
		.site-subtitle {
			margin: 40px 0;
		}
		.site-description {
			margin-bottom: 0;
		}
	}
}
.decor-container {
	overflow: hidden;
	height: 20vw;
	.theme-rotate {
		background-color: #37bdb6;
		box-shadow: 0 10px 0 rgba(0, 0, 0, 0.1);
		position: relative;
		width: 140%;
		left: -20px;
		bottom: 10px;
		height: 100%;
		z-index: 1;
		transform-origin: 0 100%;
		transform: rotate(-10deg);
	}
}
</style>
