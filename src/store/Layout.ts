import { Ref } from 'vue'
/** 是否显示菜单 */
export let isShowMenu: Ref<boolean> = ref(false)
/** 显示或隐藏菜单 */
export function ShowMenu(val: boolean) {
	isShowMenu.value = val
}
let defaultBanner = {
	h1: `Hi, <span>welcome</span><br/>to <span>here</span>`,
	h2: ``,
	description: `<a class="fcfff relative" style="z-index: 9" href="https://github.com/qiaen" target="_blank">https://github.com/qiaen</a>`,
	bg: '#37bdb6'
}
export let banner: any = reactive(JSON.parse(JSON.stringify(defaultBanner)))
/** 设置banner显示的文字，颜色 */
export function SetBanner(b: any = defaultBanner) {
	banner.h1 = b.h1
	banner.h2 = b.h2
	banner.description = b.description
	// banner.bg = b.bg || '#37bdb6'
	// let doc:any = document
	// doc.querySelector('meta[name = "theme-color"]').content = b.bg || '#37bdb6'
}