<template>
	<footer class="site-footer relative width100">
		<!-- FOOTER WIDGETS GO HERE -->
		<div class="ish-decor-container relative">
			<div class="ish-decor-top ish-theme-rotate ish-bg-color2"></div>
		</div>

		<div class="ish-container-fluid ish-bg-color2">
			<div class="ish-container-inner">
				<div class="ish-row">
					<div class="middle flex">
						<img src="@/assets/img/logo.svg" class="ish-logo-widget" alt="QUSQ logo" />
						<p class="pt50 fcfff pb50">Unique Portfolio</p>
						<div class="address">
							<!-- <a href=""><i class=" pl10 pr10 fcfff fsize18 i-icon-twitter"></i></a>
							<a href=""><i class=" pl10 pr10 fcfff fsize18 i-icon-behance"></i></a>
							<a href=""><i class=" pl10 pr10 fcfff fsize18 i-icon-dribbble"></i></a>
							<a href=""><i class=" pl10 pr10 fcfff fsize18 i-icon-instagram"></i></a>
							<a href=""><i class=" pl10 pr10 fcfff fsize18 i-icon-gplus"></i></a>
							<a href=""><i class=" pl10 pr10 fcfff fsize18 i-icon-facebook"></i></a> -->
							<a target="_blank" href="https://github.com/qiaen"><i class="pl10 pr10 fcfff fsize18 iconfont icon-github"></i></a>
                            <a target="_blank" href="https://diumx.com"><i class="pl10 pr10 fcfff fsize18 iconfont icon-mangguo"></i></a>
							<a target="_blank" href="https://gitlab.com/qiaen"><i class="pl10 pr10 fcfff fsize18 iconfont icon-gitlab"></i></a>
							
						</div>
						<div class="pt50 fcfff">
							<a href="https://beian.miit.gov.cn/" target="_blank" class="fcfff">豫ICP备18004249号-2</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
<style lang="scss">
$c51: #515151;
.site-footer {
	overflow: hidden;
	.ish-container-inner {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 1rem;
		background-color: #{$c51};
	}
	.ish-theme-rotate {
		transform-origin: 100% 0;
		margin-top: 10px;
		margin-right: 0;
		box-shadow: 0 -10px 0 rgba(0, 0, 0, 0.1);
		position: absolute;
		width: 140%;
		right: 0;
		top: 0;
		height: 100%;
		z-index: 1;
		transform: rotate(-10deg);
		background-color: #{$c51};
	}
	.ish-decor-container {
		overflow: hidden;
		z-index: 0;
		height: 20vw;
	}
	.ish-container-fluid {
		z-index: 1;
		background-color: #{$c51};
		height: 300px;
	}
	.address {
	}
}
</style>
