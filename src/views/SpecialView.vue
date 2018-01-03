<script>
import BaseBanner from '@/components/BaseBanner';
import BaseNavbarModule from '@/components/BaseNavbarModule';
/**@data
 * bannerModuleData     轮播数据
 * navbarModuleData     navbar
 */
export default {
    components: {
        BaseBanner,
        BaseNavbarModule
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
            navbarModuleData: {
                backEnable: true,
                itemRouteName: '',
                navbarTitleArr: ['最新专题','电影专题','电视剧专题','综艺专题'],
                newData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '最新',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '专题',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '专题',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    }
                ],
                movieData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '电影',
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
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    }
                ],
                teleplayData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '电视剧',
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
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    }
                ],
                showData: [
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '综艺',
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
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
                    },
                    {   
                        id: 123456,
                        img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                        catname: '',
                        collect: '',
                        score: '9.7',
                        title: '长城·免费首播',
                        des: '中外巨星汇聚长城打怪兽',
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
        <base-navbar-module :data="navbarModuleData"></base-navbar-module>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
