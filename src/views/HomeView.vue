<script>
import BaseBanner from '../components/BaseBanner';
import BaseHotModule from '../components/BaseHotModule';
import BaseHomeModule from '../components/BaseHomeModule';
/**@data
 * bannerModuleData     轮播数据
 * hotModuleData        热播数据
 * movieModuleData      电影模块数据
 * teleplayModuleData   电视剧数据
 * showModuleData       综艺数据
 * animeModuleData      动漫数据
 */
export default {
    components: {
		BaseBanner,
		BaseHotModule,
		BaseHomeModule,  
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
            hotModuleData: {
                type: '重磅热播',
                headLinkName: '换一换',
                headLinkIcon: 'change',
                backEnable: true,
                piclistData: [
                    {   
                        id: 123456,
                        routeName: '',
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '电视剧',
                        collect: '更新至40集',
                        score: '',
                        title: '猎场',
                        des: '郑秋冬拆骗局攻陈修风'
                    },
                    {
                        id: 123456,
                        routeName: '',
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '更新至22集',
                        score: '',
                        title: '九州海上牧云记',
                        des: '三角恋？组合你站谁你站谁你沾水啊啊啊啊'
                    },
                    {
                        id: 123456,
                        routeName: '',
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '11-28期',
                        score: '',
                        title: '演员的诞生被被被被猩猩嫌弃',
                        des: '章子怡：只有她会这样对我'
                    },
                    {
                        id: 123456,
                        routeName: '',
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '新片',
                        collect: '',
                        score: '9.1',
                        title: '追捕',
                        des: '吴宇森展教科书式暴力美学'
                    },
                    {
                        id: 123456,
                        routeName: '',
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '更新至40集',
                        score: '',
                        title: '我的！体育老师',
                        des: '小米心忧马克患老年痴呆老年痴呆'
                    }, 
                    {
                        id: 123456,
                        routeName: '',
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '专题',
                        collect: '',
                        score: '',
                        title: 'NBA十佳妖星绝杀勇士啊啊啊啊',
                        des: '看哭！40岁卡特扣出青春'
                    }
                ]
            },
            movieModuleData: {
                type: '电影',
                headLinkName: '更多',
                headLinkIcon: 'more',
                routeName: 'MovieView',
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
			teleplayModuleData: {
                type: '电视剧',
                headLinkName: '更多',
                headLinkIcon: 'more',
                routeName: 'TeleplayView',
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
			showModuleData: {
                type: '综艺',
                headLinkName: '更多',
                headLinkIcon: 'more',
                routeName: 'ShowView',
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
			animeModuleData: {
                type: '动漫',
                headLinkName: '更多',
                headLinkIcon: 'more',
                routeName: 'AnimeView',
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
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <base-banner :data="bannerModuleData"></base-banner>
		<base-hot-module :data="hotModuleData"></base-hot-module>
		<base-home-module :data="movieModuleData"></base-home-module>
		<base-home-module :data="teleplayModuleData"></base-home-module>
		<base-home-module :data="showModuleData"></base-home-module>
		<base-home-module :data="animeModuleData"></base-home-module>
    </div>
</template>

<style lang="scss" scoped>

</style>
