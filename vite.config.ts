import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
/** 拓展 set，可以直接使用 name */
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import autoImport from 'unplugin-auto-import/vite'
const base: any = {
	isProd: process.env.NODE_ENV === 'production',
	/** 目标接口域名 */
	target: 'https://mulan.diumx.com'
}

export default defineConfig({
	server: {
		host: process.env.HOST,
		open: false,
		proxy: {
			// 项目接口
			'/api': {
				target: base.target,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, '/api'),
				cookieDomainRewrite: ''
			}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	plugins: [
		vue(),
		VueSetupExtend(),
		autoImport({
			imports: ['vue', 'vue-router']
		})
	],
	build: {
		minify: 'terser'
	}
})
