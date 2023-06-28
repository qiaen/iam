import { createRouter, createWebHistory } from 'vue-router'
import { ElLoading } from 'element-plus'
/** 静态菜单列表 */
import routes from './routes'
/** 项目信息 */
const title = import.meta.env.VITE_TITLE

const router = createRouter({
	history: createWebHistory(),
	routes
})
/** 每次路由变动后：可以做页面分析等 */
router.afterEach((to: any) => {
	let doc: any = document
	doc.title = to.name ? `${to.name} - ${title}` : `${title} - '后台管理系统模版Vue3+TS`
})

export default router
