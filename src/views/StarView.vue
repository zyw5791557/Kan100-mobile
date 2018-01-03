<script>
import BaseBanner from '../components/BaseBanner';
import BaseNavTypeModule from '../components/BaseNavTypeModule';
import BaseHotModule from '../components/BaseHotModule';
import BasePersonModule from '../components/BasePersonModule';
/**@data
 * bannerModuleData         轮播数据
 * navTypeModuleData        明星细分类型导航   
 * personData               热门明星
 * dailyModuleData          每日明星咨询
 * inlandModuleData         内地
 * HKTWModuleData           港台
 * JKModuleData             日韩
 * OAModuleData             欧美
 */
export default {
    components: {
        BaseBanner,
        BaseNavTypeModule,
        BaseHotModule,
        BasePersonModule
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
                    name: '大陆',
                    routerName: ''
                },
                {
                    name: '台湾',
                    routerName: ''
                },
                {
                    name: '欧美',
                    routerName: ''
                },
                {
                    name: '韩国',
                    routerName: ''
                },
                {
                    name: '全部',
                    routerName: ''
                }
            ],
            personData: {
                type: '热门明星',
                itemRouteName: 'StarDetailView',
                personlistData: [
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '范冰冰'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    }
                ]
            },
            dailyModuleData: {
                type: '每日明星资讯',
                headLinkName: '更多',
                headLinkIcon: 'more',
                newsModule: true,
                piclistData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '1080P',
                        collect: '更新至21集',
                        score: '',
                        title: '猎场',
                        des: '看丘吉尔霸气强怼国王'
                    },
                    {
                        id: 123456,
                        img: 'http://m.qiyipic.com/image/20171208/16/14/v_114204071_m_601_284_160.jpg',
                        catname: '',
                        collect: '更新至22集',
                        score: '',
                        title: '九州海上牧云记',
                        des: '三角恋？组合你站谁你站谁你沾水啊啊啊啊'
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
            inlandModuleData: {
                type: '内地',
                headLinkName: '更多',
                headLinkIcon: 'more',
                personlistData: [
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    }
                ]
            },
            HKTWModuleData: {
                type: '港台',
                headLinkName: '更多',
                headLinkIcon: 'more',
                personlistData: [
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    }
                ]
            },
            JKModuleData: {
                type: '日韩',
                headLinkName: '更多',
                headLinkIcon: 'more',
                personlistData: [
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    }
                ]
            },
            OAModuleData: {
                type: '欧美',
                headLinkName: '更多',
                headLinkIcon: 'more',
                personlistData: [
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
                    },
                    {
                        id: 777,
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌'
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
        <base-person-module :data="personData"></base-person-module>
		<base-hot-module :data="dailyModuleData"></base-hot-module>
        <base-person-module :data="inlandModuleData"></base-person-module>
        <base-person-module :data="HKTWModuleData"></base-person-module>
        <base-person-module :data="JKModuleData"></base-person-module>
        <base-person-module :data="OAModuleData"></base-person-module>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
