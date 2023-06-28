/** 注意，name要和组件内的name一致，用于路由缓存识别！！！ */
export default [
	{
		path: '/',
		name: '首页',
		component: () => import('@/views/home/index.vue'),
		meta: {
			title: '首页'
		}
	},
	{
		path: '/about',
		name: '关于',
		component: () => import('@/views/about/index.vue'),
		meta: {
			title: '关于'
		}
	},
	{
		path: '/conact',
		name: '联系我',
		component: () => import('@/views/about/index.vue'),
		meta: {
			title: '联系我'
		}
	},
	{
		path: '/works/:name',
		name: '作品',
		component: () => import('@/views/works/index.vue'),
		meta: {
			title: '作品'
		}
	}
]
