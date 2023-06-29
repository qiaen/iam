export default {
	/** 新标签 */
	tab: {
		name: `<span class="fcfff">Teemo 新标签 Chrome插件</span>`,
		h2: `<span class="fcfff">已上架Chrome应用市场</span>`,
		description: `<a href='' target="_blank" class="fcfff">前往下载</a>`,
		url: 'https://chrome.google.com/webstore/detail/teemo-%E6%96%B0%E6%A0%87%E7%AD%BE/nimenpblcfmaoogldnmklnfccimjohjn?hl=zh-CN&authuser=0',
		bg:'#012329',
		color: '#fcfcfc',
		list: [
			{
				img: 'https://file.tuoyan.club/1002.png',
				title: 'Teemo 新标签',
				description:
					'作为前端，打交道最密切的要数Chrome，每次面对简陋的浏览器新标签页，总感觉缺了上门，遂早在17年的时候，就萌生了定制自己的新标签页插件的想法，于是翻阅资料摸索着做了一个只有书签的标签页，在标签页左侧借鉴了TIM的日历以折纸的形式展现背景图和签名，不过呢，我的背景可以是视频，更大气！'
			},
			{
				img: 'https://file.tuoyan.club/1023.png',
				title: '日历 Calendar',
				description:
					'日历模块，最初是为了记录待办，查看日历，且细心的增加了点击日期上下开合显示输入框输入待办，但是随着需求量任务量增加，需要记录的东西越来越多，比如需求池地址，上线准备事项等等，现在的日历已经不能满足使用，所以后来开发了基于Markdown语法的笔记功能。'
			},
			{
				img: 'https://file.tuoyan.club/1006.png',
				title: '备忘录 Markdown',
				description: '正如你所看到的笔记，支持Markdown，功能更加丰富，只需要在浏览器右击鼠标，点击【备忘录】即可随心所欲记录日常迭代，常用代码，以及其他功能，也方便自己形成整理的好习惯。'
			},
			{
				img: 'https://file.tuoyan.club/1001.png',
				title: '翻译字典 Teemo Translator',
				description: `尽管学无止境，但是有时候也会碰到不熟悉的单词或者在给变量命名的时候手生误写给别人造成麻烦，翻译也是日常工作必不可少的一个环节。当需要翻译的时候，需要复制单词，打开词典应用/网页，搜索翻译，可见还是比较麻烦的，开新标签或者应用给本来就局促的工作环境更加拥挤了，所以我需要一个随用随关的popup，于是，【Teemo Translator】呼之欲出，成为了生活的一个好帮手~~`
			},
			{
				img: 'https://file.tuoyan.club/1005.png',
				title: '二维码 QR code',
				description: `偷偷的告诉你，她还能显示当前打开网页的二维码，拿出手机扫一扫就能打开网页，(而3年后直到2020年Chrom才上线创建二维码功能)，还能很贴心的把localhost这样的联调网页自动转化成局域网IP，开发起来手机端真是太方便了！`
			},
			{
				img: 'https://file.tuoyan.club/1003.png',
				title: '格式化 JSON',
				description: `说到联调，怎么少的了JSON格式化和Postman！市面上的JSON格式化工具都是一个页面显示一个JSON文本，可是联调的时候需要对比Swagger里，后端需要的入参，前端传送的参数，是否字段有缺失误写，人工比对实在是个细致活，于是我就开发了这个可以单击字段，自动高亮显示的功能，并且单独发布到了【Chrome浏览器应用市场】收获了上千的安装量，嘿嘿~~`
			},
			{
				img: 'https://file.tuoyan.club/1004.png',
				title: '接口管理工具 Postman',
				description: `而另一方面，Postman也是经常用到的前端工具之一，但是呢，当接口需要cookie等登录授权的时候，还需要自己扒拉cookie填写到Postman请求信息里，这....不方便吧......，于是我就想到了开发一个简易的Postman，利用Chrome插件能跨域访问的特性，不需要输入cookie也能自动携带，这样就舒服很多。<br>可是作为前端怎么能满足于此就止步了，在闲暇时光，我又给增加了接口管理工具，能快速在大量的api中根据名称搜索定位，然后进行调试，着实舒服啊~~`
			}
		]
	},
	/** 兰陵王 */
	lanlingwang: {
		name: '兰陵王Vue2后台管理系统模板',
		description: ``,
		url: 'https://lanling.diumx.com',
		bg:'#884888',
		list: []
	},
	/** huamulan */
	huamulan: {
		name: '花木兰Vue3后台管理系统模板',
		description: ``,
		url: 'https://mulan.diumx.com',
		bg:'#012329',
		list: []
	},
	/** 芒果读书客户端 */
	mgui: {
		name: '芒果读书 客户端',
		description: ``,
		url: 'http://diumx.com',
		bg: '#1cbbe3',
		list: [
			{
				img: 'https://file.tuoyan.club/1008.png',
				title: '首页',
				url: 'https://diumx.com',
				description: '根据图书更新时间倒叙展示，在列表可以看到豆瓣评分，图书简介等信息~~'
			},
			{
				img: 'https://file.tuoyan.club/1009.png',
				title: '标签分类',
				url: 'https://diumx.com/tags',
				description: '根据图书类别整理，一共24个分类，分类默认以叠放形式展示点击量前3的图书封面。'
			},
			{
				img: 'https://file.tuoyan.club/1015.png',
				title: '动态Banner大图',
				url: 'https://diumx.com/tag/%E4%BA%BA%E7%89%A9%E4%BC%A0%E8%AE%B0%C2%B7%E6%97%85%E8%A1%8C%E8%A7%81%E9%97%BB/1',
				description: '每个页面的顶部预览图都是动态的，根据书籍信息模糊展示'
			},
			{
				img: 'https://file.tuoyan.club/1016.png',
				title: '动态Banner大图',
				url: 'https://diumx.com/details/4498',
				description: '每个页面的顶部预览图都是动态的，根据书籍信息模糊展示'
			},
			{
				img: 'https://file.tuoyan.club/1010.png',
				title: '专题推介',
				url: 'https://diumx.com/topics',
				description: '由网站运维创建专题，专题内囊括相关书籍，可以以列表或者富文本形式维护为用户展示。'
			},
			{
				img: 'https://file.tuoyan.club/1011.png',
				title: '充值打赏',
				url: 'https://diumx.com/reward',
				description: '芒果读书的所有的源码都是由本人开发提供，目的不仅是为了给自己一个学习锻炼的实践方式，也是互相学习交流的桥梁。'
			},
			{
				img: 'https://file.tuoyan.club/1012.png',
				title: '排行榜',
				url: 'https://diumx.com/ranking',
				description: '排行榜根据下载量生成，每天0点更新，可以根据周，月，总榜来查看下载量。'
			},
			{
				img: 'https://file.tuoyan.club/1014.png',
				title: '聊天室',
				url: 'https://diumx.com',
				description: '在任何页面点击聊天室，即可和同时在线的网友聊天，聊天基于websocket，以弹幕滚动的形式展示，可以查看历史50条聊天信息~~，如果输入以@开头，还可以找机器人玩耍~~'
			},
			{
				img: 'https://file.tuoyan.club/1013.png',
				title: '我的 / 收藏',
				url: 'https://diumx.com/home',
				description: '签到领取积分，查看已下载的图书，以及收藏的图书，对个人信息进行修改'
			}
		]
	},
	/** 芒果读书运营端 */
	mgo: []
} as any
