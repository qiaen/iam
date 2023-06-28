import { Ref } from 'vue'
/** 是否显示菜单 */
export let isShowMenu: Ref<boolean> = ref(false)
/** 显示或隐藏菜单 */
export function ShowMenu(val: boolean) {
	isShowMenu.value = val
}

export let banner = reactive({
	h1: `No <span>Need</span> for<br/>item <span>Detail</span> pages?`,
	h2: `Use the <span>Beautiful</span> pop-up <span>Gallery</span>!`,
	description: `<span>Show Pop-up Gallery on click!</span>`,
	bg: '#37bdb6'
})
/** 设置banner显示的文字，颜色 */
export function SetBanner(b: any) {
	console.log(b)
	banner.h1 = b.h1
	banner.h2 = b.h2
	banner.description = b.description
	banner.bg = b.bg
	(document as any).querySelector('meta[name = "theme-color"]').content = b.bg
}