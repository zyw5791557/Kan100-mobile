<script>
import BaseBanner from '../components/BaseBanner';
import BaseNavTypeModule from '../components/BaseNavTypeModule';
import BaseHotModule from '../components/BaseHotModule';
import BaseHomeModule from '../components/BaseHomeModule';
/**@data
 * bannerModuleData         轮播数据
 * navTypeModule            资讯细分类型导航
 * hotModuleData            资讯爆头条
 * newModuleData            最新资讯
 * featureModuleData        精选专题
 * starModuleData           明星八卦
 * movieModuleData          电影资讯
 * teleplayModuleData       电视剧资讯
 * showModuleData           综艺资讯
 * filmreviewModuleData     影评
 * 
 */
export default {
    components: {
		BaseBanner,
        BaseNavTypeModule,
		BaseHotModule,
        BaseHomeModule,
    },
    data () {
        return {
            bannerModuleData: [
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171207/cc8272ed60db47c3831bdb1cb807f6df.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171207/cc8272ed60db47c3831bdb1cb807f6df.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171207/cc8272ed60db47c3831bdb1cb807f6df.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171207/cc8272ed60db47c3831bdb1cb807f6df.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171207/cc8272ed60db47c3831bdb1cb807f6df.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                }
            ],
            navTypeModuleData: [
                {
                    name: '黑幕',
                    routerName: ''
                },
                {
                    name: '绯闻',
                    routerName: ''
                },
                {
                    name: '整容',
                    routerName: ''
                },
                {
                    name: '马蓉',
                    routerName: ''
                },
                {
                    name: '恋情',
                    routerName: ''
                }
            ],
            hotModuleData: {
                type: '资讯爆头条',
                headLinkName: '',
                newsModule: true,
                backEnable: true,
                ellipsis2: true,
                // itemRouteName: 'NewDetailView',
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '电视剧',
                        collect: '更新至40集',
                        score: '',
                        title: '猎场猎场猎场猎场猎场猎场猎场猎场猎场',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '更新至22集',
                        score: '',
                        title: '九州海上牧云记九州海上牧云记九州海上牧云记九州海上牧云记',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '11-28期',
                        score: '',
                        title: '演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '新片',
                        collect: '',
                        score: '9.1',
                        title: '追捕追捕追捕追捕追捕追捕追捕追捕追捕追捕',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '更新至40集',
                        score: '',
                        title: '我的！体育老师我的！体育老师我的！体育老师我的！体育老师我的！体育老师我的！体育老师',
                        des: ''
                    }, 
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '专题',
                        collect: '',
                        score: '',
                        title: 'NBA十佳妖星绝杀勇士啊啊啊啊NBA十佳妖星绝杀勇士啊啊啊啊NBA十佳妖星绝杀勇士啊啊啊啊NBA十佳妖星绝杀勇士啊啊啊啊',
                        des: ''
                    }
                ]
            },
            newModuleData: {
                type: '最新资讯',
                headLinkName: '换一换',
                headLinkIcon: 'change',
                newsModule: true,
                backEnable: true,
                ellipsis2: true,
                // itemRouteName: 'NewDetailView',
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '电视剧',
                        collect: '更新至40集',
                        score: '',
                        title: '猎场猎场猎场猎场猎场猎场猎场猎场猎场',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '更新至22集',
                        score: '',
                        title: '九州海上牧云记九州海上牧云记九州海上牧云记九州海上牧云记',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '11-28期',
                        score: '',
                        title: '演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '新片',
                        collect: '',
                        score: '9.1',
                        title: '追捕追捕追捕追捕追捕追捕追捕追捕追捕追捕',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '更新至40集',
                        score: '',
                        title: '我的！体育老师我的！体育老师我的！体育老师我的！体育老师我的！体育老师我的！体育老师',
                        des: ''
                    }, 
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '专题',
                        collect: '',
                        score: '',
                        title: 'NBA十佳妖星绝杀勇士啊啊啊啊NBA十佳妖星绝杀勇士啊啊啊啊NBA十佳妖星绝杀勇士啊啊啊啊NBA十佳妖星绝杀勇士啊啊啊啊',
                        des: ''
                    }
                ]
            },
            featureModuleData: {
                type: '精选专题',
                headLinkName: '更多',
                headLinkIcon: 'more',
                routerName: 'Classify',
                piclistData: [
                    {   
                        url: '/home',
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }, 
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '9.3',
                        title: '夜宴',
                        des: '章子怡上演宫廷版权力的游戏'
                    }
                ]
            },
            starModuleData: {
                type: '明星八卦',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                backEnable: true,
                ellipsis2: true,
                // itemRouteName: 'NewDetailView',
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '电视剧',
                        collect: '更新至40集',
                        score: '',
                        title: '猎场猎场猎场猎场猎场猎场猎场猎场猎场',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '更新至22集',
                        score: '',
                        title: '九州海上牧云记九州海上牧云记九州海上牧云记九州海上牧云记',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '11-28期',
                        score: '',
                        title: '演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '新片',
                        collect: '',
                        score: '9.1',
                        title: '追捕追捕追捕追捕追捕追捕追捕追捕追捕追捕',
                        des: ''
                    }
                ]
            },
            movieModuleData: {
                type: '电影资讯',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                backEnable: true,
                ellipsis2: true,
                // itemRouteName: 'NewDetailView',
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '电视剧',
                        collect: '更新至40集',
                        score: '',
                        title: '猎场猎场猎场猎场猎场猎场猎场猎场猎场',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '更新至22集',
                        score: '',
                        title: '九州海上牧云记九州海上牧云记九州海上牧云记九州海上牧云记',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '11-28期',
                        score: '',
                        title: '演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '新片',
                        collect: '',
                        score: '9.1',
                        title: '追捕追捕追捕追捕追捕追捕追捕追捕追捕追捕',
                        des: ''
                    }
                ]
            },
            teleplayModuleData: {
                type: '电视剧资讯',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                backEnable: true,
                ellipsis2: true,
                // itemRouteName: 'NewDetailView',
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '电视剧',
                        collect: '更新至40集',
                        score: '',
                        title: '猎场猎场猎场猎场猎场猎场猎场猎场猎场',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '更新至22集',
                        score: '',
                        title: '九州海上牧云记九州海上牧云记九州海上牧云记九州海上牧云记',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '11-28期',
                        score: '',
                        title: '演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '新片',
                        collect: '',
                        score: '9.1',
                        title: '追捕追捕追捕追捕追捕追捕追捕追捕追捕追捕',
                        des: ''
                    }
                ]
            },
            showModuleData: {
                type: '综艺资讯',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                backEnable: true,
                ellipsis2: true,
                // itemRouteName: 'NewDetailView',
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '电视剧',
                        collect: '更新至40集',
                        score: '',
                        title: '猎场猎场猎场猎场猎场猎场猎场猎场猎场',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '更新至22集',
                        score: '',
                        title: '九州海上牧云记九州海上牧云记九州海上牧云记九州海上牧云记',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '11-28期',
                        score: '',
                        title: '演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '新片',
                        collect: '',
                        score: '9.1',
                        title: '追捕追捕追捕追捕追捕追捕追捕追捕追捕追捕',
                        des: ''
                    }
                ]
            },
            filmreviewModuleData: {
                type: '影评',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                backEnable: true,
                ellipsis2: true,
                // itemRouteName: 'NewDetailView',
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '电视剧',
                        collect: '更新至40集',
                        score: '',
                        title: '猎场猎场猎场猎场猎场猎场猎场猎场猎场',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '更新至22集',
                        score: '',
                        title: '九州海上牧云记九州海上牧云记九州海上牧云记九州海上牧云记',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '11-28期',
                        score: '',
                        title: '演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃',
                        des: ''
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '新片',
                        collect: '',
                        score: '9.1',
                        title: '追捕追捕追捕追捕追捕追捕追捕追捕追捕追捕',
                        des: ''
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
		<base-hot-module :data="newModuleData"></base-hot-module>
        <base-home-module :data="featureModuleData"></base-home-module>
		<base-hot-module :data="starModuleData"></base-hot-module>
		<base-hot-module :data="movieModuleData"></base-hot-module>
		<base-hot-module :data="teleplayModuleData"></base-hot-module>
		<base-hot-module :data="showModuleData"></base-hot-module>
		<base-hot-module :data="filmreviewModuleData"></base-hot-module>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
