<script>
import BaseBanner from '../components/BaseBanner';
import BaseNavTypeModule from '../components/BaseNavTypeModule';
import BaseHotModule from '../components/BaseHotModule';
import BasePersonSwiperModule from '../components/BasePersonSwiperModule';
import BaseHomeModule from '../components/BaseHomeModule';
import BaseSwiperModule from '../components/BaseSwiperModule';
/**@data
 * bannerModuleData         轮播数据
 * navTypeModuleData        电视剧细分类型导航   
 * hotModuleData            热剧精选
 * personData               人物
 * inlandModuleData         内地剧场
 * timelineSwiperModuleData 新剧预告
 * KteleplayModuleData      韩剧
 * AteleplayModuleData      美剧
 * HKteleplayModuleData     港剧
 * TWteleplayModuleData     台剧
 * TKteleplayModuleData     泰剧
 */
export default {
    components: {
        BaseBanner,
        BaseNavTypeModule,
        BaseHotModule,
        BasePersonSwiperModule,
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
                    name: '武侠',
                    routerName: ''
                },
                {
                    name: '偶像',
                    routerName: ''
                },
                {
                    name: '宫廷',
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
                type: '热剧精选',
                newsModule: true,
                backEnable: true,
                itemRouteName: 'TeleplayDetailView',
                piclistData: [
                    {   
                        id: 456789,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '1080P',
                        collect: '更新至21集',
                        score: '',
                        title: '猎场',
                        des: '看丘吉尔霸气强怼国王'
                    },
                    {
                        id: 456789,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '更新至22集',
                        score: '',
                        title: '九州海上牧云记',
                        des: '三角恋？组合你站谁你站谁你沾水啊啊啊啊'
                    },
                    {
                        id: 456789,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '11-28期',
                        score: '',
                        title: '演员的诞生被被被被猩猩嫌弃',
                        des: '章子怡：只有她会这样对我'
                    },
                    {
                        id: 456789,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '新片',
                        collect: '',
                        score: '9.1',
                        title: '追捕',
                        des: '吴宇森展教科书式暴力美学'
                    },
                    {
                        id: 456789,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '',
                        title: '我的！体育老师',
                        des: '小米心忧马克患老年痴呆老年痴呆'
                    }, 
                    {
                        id: 456789,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '预告',
                        collect: '更新至40集',
                        score: '',
                        title: '羞羞的铁拳',
                        des: '巨石强森高唱“飞跃彩虹”'
                    }
                ]
            },
            personData: {
                type: '近期TA们在霸屏',
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
            inlandModuleData: {
                type: '内地剧场',
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }, 
                    {
                        id: 123456,
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
                type: '新剧预告',
                headLinkName: '',
                rank: false,
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
			KteleplayModuleData: {
                type: '韩剧',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }
                ]
            },
			AteleplayModuleData: {
                type: '美剧',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }
                ]
            },
			HKteleplayModuleData: {
                type: '港剧',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }
                ]
            },
			TWteleplayModuleData: {
                type: '台剧',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '7.9',
                        title: '悟空传',
                        des: '彭于晏变身大圣勇斗天庭'
                    }
                ]
            },
			TKteleplayModuleData: {
                type: '泰剧',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.2',
                        title: '星际特工：千里之城之',
                        des: '蕾哈娜上演变装热舞秀'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '空天猎',
                        des: '李晨范冰冰激战恐怖分子恐怖扥自啊as的    '
                    },
                    {
                        id: 123456,
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
		<base-hot-module :data="hotModuleData"></base-hot-module>
        <base-person-swiper-module :data="personData"></base-person-swiper-module>
		<base-home-module :data="inlandModuleData"></base-home-module>
        <base-swiper-module :data="timelineSwiperModuleData"></base-swiper-module>
        <base-hot-module :data="KteleplayModuleData"></base-hot-module>
        <base-hot-module :data="AteleplayModuleData"></base-hot-module>
        <base-hot-module :data="HKteleplayModuleData"></base-hot-module>
        <base-hot-module :data="TWteleplayModuleData"></base-hot-module>
        <base-hot-module :data="TKteleplayModuleData"></base-hot-module>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
