<script>
import BaseBanner from '../components/BaseBanner';
import BaseHotModule from '../components/BaseHotModule';
import BasePersonSwiperModule from '../components/BasePersonSwiperModule';
import BaseHomeModule from '../components/BaseHomeModule';
import BaseSwiperModule from '../components/BaseSwiperModule';
/**@data
 * bannerModuleData         轮播数据 
 * personData               动漫人物导航
 * hotModuleData            强档推荐
 * latestModuleData         最新更新
 * timelineSwiperModuleData 今日放送(To.追番表)
 * animeMovieModuleData     动画电影
 * JanimeModuleData         日漫番剧
 * CanimeModuleData         国产动漫
 * childAnimeModuleData     少儿动漫
 * OAAnimeModuleData             欧美动漫
 */
export default {
    components: {
        BaseBanner,
        BaseHotModule,
        BasePersonSwiperModule,
        BaseHomeModule,
        BaseSwiperModule
    },
    data () {
        return {
            bannerModuleData: [
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171211/f02b705073704b5e9220f05b7727064d.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171211/f02b705073704b5e9220f05b7727064d.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171211/f02b705073704b5e9220f05b7727064d.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171211/f02b705073704b5e9220f05b7727064d.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171211/f02b705073704b5e9220f05b7727064d.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                }
            ],
            personData: {
                type: '',
                pd: true,
                personlistData: [
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '银狐'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '火影忍者'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '海贼王'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '柯南'
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
                type: '强档推荐',
                piclistData: [
                    {   
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '1080P',
                        collect: '更新至21集',
                        score: '',
                        title: '猎场',
                        des: '看丘吉尔霸气强怼国王'
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '更新至22集',
                        score: '',
                        title: '九州海上牧云记',
                        des: '三角恋？组合你站谁你站谁你沾水啊啊啊啊'
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '11-28期',
                        score: '',
                        title: '演员的诞生被被被被猩猩嫌弃',
                        des: '章子怡：只有她会这样对我'
                    },
                    {
                        url: '',
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '新片',
                        collect: '',
                        score: '9.1',
                        title: '追捕',
                        des: '吴宇森展教科书式暴力美学'
                    },
                    {
                        url: '',
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
            
            timelineSwiperModuleData: {
                id: '001',
                type: '每日放送',
                headLinkName: '查看追番表',
                headLinkIcon: 'more',
                rank: false,
                selectBtn: true,
                piclistData: [
                    {
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    },
                    {
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '期待指数：100%',
                    }
                ]
            },
			animeMovieModuleData: {
                type: '动画电影',
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
                    }
                ]
            },
			JanimeModuleData: {
                type: '日漫番剧',
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
			CanimeModuleData: {
                type: '国产动漫',
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
			childAnimeModuleData: {
                type: '少儿动漫',
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
			OAAnimeModuleData: {
                type: '欧美动漫',
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
        <base-person-swiper-module :data="personData"></base-person-swiper-module>
		<base-home-module :data="hotModuleData"></base-home-module>
		<base-hot-module :data="latestModuleData"></base-hot-module>
        <base-swiper-module :data="timelineSwiperModuleData"></base-swiper-module>
        <base-home-module :data="animeMovieModuleData"></base-home-module>
        <base-hot-module :data="JanimeModuleData"></base-hot-module>
        <base-hot-module :data="CanimeModuleData"></base-hot-module>
        <base-hot-module :data="childAnimeModuleData"></base-hot-module>
        <base-hot-module :data="OAAnimeModuleData"></base-hot-module>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
