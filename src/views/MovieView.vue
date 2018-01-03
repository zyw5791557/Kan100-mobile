<script>
import BaseBanner from '../components/BaseBanner';
import BaseNavTypeModule from '../components/BaseNavTypeModule';
import BaseHotModule from '../components/BaseHotModule';
import BaseHomeModule from '../components/BaseHomeModule';
import BaseSwiperModule from '../components/BaseSwiperModule';
/**@data
 * bannerModuleData         轮播数据
 * navTypeModule            电影细分类型导航
 * hotModuleData            热播推荐数据
 * featureMovieModuleData   特色电影模块数据
 * onlineModuleData         网络电影
 * chineseModuleData        华语电影
 * eaModuleData             欧美电影
 * jkModuleData             日韩电影
 */
export default {
    components: {
		BaseBanner,
        BaseNavTypeModule,
		BaseHotModule,
        BaseHomeModule,
        BaseSwiperModule
    },
    data () {
        return {
            bannerModuleData: {
                backEnable: true,
                piclistData: [
                    // 电影
                    {
                        id: 123456,
                        routeName: 'MovieDetailView',
                        img: 'http://m.qiyipic.com/common/lego/20171128/17107ac0abbe4236b160598ec6d0b9d5.jpg',
                        content: {
                            title: '独步天下',
                            des: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                        }
                    },
                    // 电视剧
                    {
                        id: 123456,
                        routeName: 'TeleplayDetailView',
                        img: 'http://m.qiyipic.com/common/lego/20171128/17107ac0abbe4236b160598ec6d0b9d5.jpg',
                        content: {
                            title: '独步天下',
                            des: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                        }
                    },
                    // 综艺
                    {
                        id: 123456,
                        routeName: 'ShowDetailView',
                        img: 'http://m.qiyipic.com/common/lego/20171128/17107ac0abbe4236b160598ec6d0b9d5.jpg',
                        content: {
                            title: '独步天下',
                            des: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                        }
                    },
                    // 动漫
                    {
                        id: 123456,
                        routeName: 'AnimeDetailView',
                        img: 'http://m.qiyipic.com/common/lego/20171128/17107ac0abbe4236b160598ec6d0b9d5.jpg',
                        content: {
                            title: '独步天下',
                            des: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                        }
                    },
                    // 明星
                    {
                        id: 123456,
                        routeName: 'StarDetailView',
                        img: 'http://m.qiyipic.com/common/lego/20171128/17107ac0abbe4236b160598ec6d0b9d5.jpg',
                        content: {
                            title: '独步天下',
                            des: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                        }
                    }
                ]
            },
            navTypeModuleData: [
                {
                    name: '科幻',
                    routerName: ''
                },
                {
                    name: '犯罪',
                    routerName: ''
                },
                {
                    name: '动作',
                    routerName: ''
                },
                {
                    name: '悬疑',
                    routerName: ''
                },
                {
                    name: '全部',
                    routerName: ''
                }
            ],
            hotModuleData: {
                type: '热播推荐',
                headLinkName: '',
                newsModule: true,
                backEnable: true,
                itemRouteName: 'MovieDetailView',
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '电视剧',
                        collect: '更新至40集',
                        score: '',
                        title: '猎场',
                        des: '郑秋冬拆骗局攻陈修风'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '更新至22集',
                        score: '',
                        title: '九州海上牧云记',
                        des: '三角恋？组合你站谁你站谁你沾水啊啊啊啊'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '11-28期',
                        score: '',
                        title: '演员的诞生被被被被猩猩嫌弃',
                        des: '章子怡：只有她会这样对我'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '新片',
                        collect: '',
                        score: '9.1',
                        title: '追捕',
                        des: '吴宇森展教科书式暴力美学'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '更新至40集',
                        score: '',
                        title: '我的！体育老师',
                        des: '小米心忧马克患老年痴呆老年痴呆'
                    }, 
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '专题',
                        collect: '',
                        score: '',
                        title: 'NBA十佳妖星绝杀勇士啊啊啊啊',
                        des: '看哭！40岁卡特扣出青春'
                    }
                ]
            },
            featureMovieModuleData: {
                type: '特色电影好片',
                headLinkName: '更多',
                headLinkIcon: 'more',
                routerName: 'Classify',
                backEnable: true,
                itemRouteName: 'MovieDetailView',
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }, 
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '9.3',
                        title: '夜宴',
                        des: '章子怡上演宫廷版权力的游戏'
                    }
                ]
            },
            hotSwiperModuleData: {
                id: '001',
                type: '热播榜',
                headLinkName: '查看完整榜单',
                rank: true,
                backEnable: true,
                itemRouteName: 'MovieDetailView',
                piclistData: [
                    {
                        timeline: '',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '傲娇与偏见',
                        des: '1.9亿播放',
                    },
                    {
                        timeline: '',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.0',
                        title: '表情奇幻冒险',
                        des: '1756.0万播放',
                    },
                    {
                        timeline: '',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '绣春刀',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '略略略',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '略略略',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '略略略',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '略略略',
                        des: '1088.9万播放',
                    }
                ]
            },
            timelineSwiperModuleData: {
                id: '002',
                type: '即将上线',
                headLinkName: '',
                rank: false,
                backEnable: true,
                itemRouteName: 'MovieDetailView',
                piclistData: [
                    {
                        timeline: '12月02日',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '预告',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        timeline: '12月03日',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '预告',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        timeline: '12月04日',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '预告',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        timeline: '12月05日',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '预告',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        timeline: '12月06日',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '预告',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        timeline: '12月07日',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '预告',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        timeline: '12月08日',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '预告',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        timeline: '12月09日',
                        id: 123456,
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '预告',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    }
                ]
            },
            newModuleData: {
                type: '每日电影资讯',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                backEnable: true,
                itemRouteName: 'MovieDetailView',
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171208/861893f7ef154895af51f8e3f39d2323.jpg',
                        catname: '',
                        collect: '01:41',
                        score: '',
                        title: '韩庚重寻初心',
                        des: '越野千里被野为什么用琴鸟都阿萨德阿萨德',
                    },
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171208/861893f7ef154895af51f8e3f39d2323.jpg',
                        catname: '图文',
                        collect: '',
                        score: '',
                        title: '乘风破浪MV曝光删减镜头',
                        des: '因为直男癌遭到女性的排斥不阿萨德阿萨德阿萨德',
                    }
                ],
                newsData: [
                    {
                        url: '',
                        msg: '一条狗的使命什么时候中国上映，定档预告温暖上线定大师傅阿斯蒂芬阿萨德'
                    },
                    {
                        url: '',
                        msg: '吴宇森翻拍电影追捕 追捕上映时间主演阵容介绍'
                    },
                    {
                        url: '',
                        msg: '了不起的菲丽西电影主题曲叫什么?由谁演唱?'
                    }
                ]
            },
			onlineModuleData: {
                type: '网络电影',
                headLinkName: '更多',
                headLinkIcon: 'more',
                routerName: 'Classify',
                newsModule: true,
                backEnable: true,
                itemRouteName: 'MovieDetailView',
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }
                ]
            },
			chineseModuleData: {
                type: '华语电影',
                headLinkName: '更多',
                headLinkIcon: 'more',
                routerName: 'Classify',
                newsModule: true,
                backEnable: true,
                itemRouteName: 'MovieDetailView',
                piclistData: [
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }, 
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '9.3',
                        title: '夜宴',
                        des: '章子怡上演宫廷版权力的游戏'
                    }
                ]
            },
			eaModuleData: {
                type: '欧美电影',
                headLinkName: '更多',
                headLinkIcon: 'more',
                routerName: 'Classify',
                newsModule: true,
                backEnable: true,
                itemRouteName: 'MovieDetailView',
                piclistData: [
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }, 
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '9.3',
                        title: '夜宴',
                        des: '章子怡上演宫廷版权力的游戏'
                    }
                ]
            },
			jkModuleData: {
                type: '日韩电影',
                headLinkName: '更多',
                headLinkIcon: 'more',
                routerName: 'Classify',
                newsModule: true,
                backEnable: true,
                itemRouteName: 'MovieDetailView',
                piclistData: [
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }, 
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '9.3',
                        title: '夜宴',
                        des: '章子怡上演宫廷版权力的游戏'
                    }
                ]
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <base-banner :data="bannerModuleData"></base-banner>
        <base-nav-type-module :data="navTypeModuleData"></base-nav-type-module>
		<base-hot-module :data="hotModuleData"></base-hot-module>
		<base-home-module :data="featureMovieModuleData"></base-home-module>
        <base-swiper-module :data="hotSwiperModuleData"></base-swiper-module>
        <base-swiper-module :data="timelineSwiperModuleData"></base-swiper-module>
        <base-hot-module :data="newModuleData"></base-hot-module>
		<base-hot-module :data="onlineModuleData"></base-hot-module>
		<base-hot-module :data="chineseModuleData"></base-hot-module>
		<base-hot-module :data="eaModuleData"></base-hot-module>
		<base-hot-module :data="jkModuleData"></base-hot-module>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
