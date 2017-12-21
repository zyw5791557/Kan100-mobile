<script>
import BaseBanner from '../components/BaseBanner';
import BaseNavTypeModule from '../components/BaseNavTypeModule';
import BaseHotModule from '../components/BaseHotModule';
import BasePersonSwiperModule from '../components/BasePersonSwiperModule';
import BaseHomeModule from '../components/BaseHomeModule';
/**@data
 * bannerModuleData         轮播数据
 * navTypeModuleData        综艺细分类型导航   
 * personData               近期大势综艺咖
 * hotModuleData            全网热播
 * latestModuleData         最新更新
 * gossipModuleData         明星八卦
 * inlandModuleData         内地综艺
 * HKTWModuleData           港台综艺
 * JKModuleData             日韩综艺
 * OAModuleData             欧美综艺
 */
export default {
    components: {
        BaseBanner,
        BaseNavTypeModule,
        BaseHotModule,
        BasePersonSwiperModule,
        BaseHomeModule
    },
    data () {
        return {
            bannerModuleData: [
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171211/794b427135a44a1bbb951eb5c6688a39.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171211/794b427135a44a1bbb951eb5c6688a39.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171211/794b427135a44a1bbb951eb5c6688a39.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171211/794b427135a44a1bbb951eb5c6688a39.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171211/794b427135a44a1bbb951eb5c6688a39.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                }
            ],
            navTypeModuleData: [
                {
                    name: '真人秀',
                    routerName: ''
                },
                {
                    name: '竞技',
                    routerName: ''
                },
                {
                    name: '音乐',
                    routerName: ''
                },
                {
                    name: '情感',
                    routerName: ''
                },
                {
                    name: '全部',
                    routerName: ''
                }
            ],
            personData: {
                type: '近期大势综艺咖',
                fire: true,
                personlistData: [
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    }
                ]
            },
            hotModuleData: {
                type: '全网热播',
                backEnable: true,
                itemRouteName: 'ShowDetailView',
                piclistData: [
                    {   
                        id: 121212,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '1080P',
                        collect: '更新至21集',
                        score: '',
                        title: '演员的诞生',
                        des: '看丘吉尔霸气强怼国王'
                    },
                    {
                        id: 121212,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '更新至22集',
                        score: '',
                        title: '九州海上牧云记',
                        des: '三角恋？组合你站谁你站谁你沾水啊啊啊啊'
                    },
                    {
                        id: 121212,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '11-28期',
                        score: '',
                        title: '演员的诞生被被被被猩猩嫌弃',
                        des: '章子怡：只有她会这样对我'
                    },
                    {
                        id: 121212,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '新片',
                        collect: '',
                        score: '9.1',
                        title: '追捕',
                        des: '吴宇森展教科书式暴力美学'
                    },
                    {
                        id: 121212,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '',
                        title: '我的！体育老师',
                        des: '小米心忧马克患老年痴呆老年痴呆'
                    }
                ]
            },
            latestModuleData: {
                type: '最新更新',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                piclistData: [
                    {   
                        url: '/home',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {   
                        url: '/home',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }, 
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.3',
                        title: '夜宴',
                        des: '章子怡上演宫廷版权力的游戏'
                    }
                ]
            },
			gossipModuleData: {
                type: '明星八卦',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                piclistData: [
                    {   
                        url: '/home',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }
                ]
            },
			inlandModuleData: {
                type: '内地综艺',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                piclistData: [
                    {   
                        url: '/home',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }
                ]
            },
			HKTWModuleData: {
                type: '港台综艺',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                piclistData: [
                    {   
                        url: '/home',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }
                ]
            },
			JKModuleData: {
                type: '日韩综艺',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                piclistData: [
                    {   
                        url: '/home',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }
                ]
            },
			OAModuleData: {
                type: '欧美综艺',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                piclistData: [
                    {   
                        url: '/home',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
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
        <base-person-swiper-module :data="personData"></base-person-swiper-module>
		<base-home-module :data="hotModuleData"></base-home-module>
		<base-hot-module :data="latestModuleData"></base-hot-module>
        <base-hot-module :data="gossipModuleData"></base-hot-module>
        <base-hot-module :data="inlandModuleData"></base-hot-module>
        <base-hot-module :data="HKTWModuleData"></base-hot-module>
        <base-hot-module :data="JKModuleData"></base-hot-module>
        <base-hot-module :data="OAModuleData"></base-hot-module>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
