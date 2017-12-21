<script>
import BaseWikiModule from '@/components/BaseWikiModule';
import BaseSelectItem from '@/components/popup/BaseSelectItem';
import BaseImgPlaySwiperModule from '@/components/BaseImgPlaySwiperModule';
import BaseSwiperModule from '@/components/BaseSwiperModule';
import BasePersonSwiperModule from '@/components/BasePersonSwiperModule';
import BaseClipsModule from '@/components/BaseClipsModule';
import BaseHotModule from '@/components/BaseHotModule';
import BaseClipsItem from '@/components/popup/BaseClipsItem';
/**
 * @data
 * wikiData         百科
 * playData         选集
 * playerData       参演明星
 * clipsData        片花资讯
 * relatedData      相关专题
 * similarData      同类型电影
 * hotData          热播榜
 */
export default {
    components: {
        BaseWikiModule,
        BaseSelectItem,
        BaseImgPlaySwiperModule,
        BaseSwiperModule,
        BasePersonSwiperModule,
        BaseClipsModule,
        BaseHotModule,
        BaseClipsItem
    },
    data () {
        return {
            wikiData: {
                img: '/static/images/wiki-show_123458.jpg',
                title: '演员的诞生 第一季',
                meta: '',
                score: '9.2',
                type: '明星真人秀/素人真人秀',
                release: '2017年10月28日首播·内地',
                time: '更新至2017-12-09期',
                des: '以演技为唯一视角，邀请当今中国三位一线影帝影后坐镇演技之神，为有演技实力的平凡人搭建了一个与顶级影帝影后面对面切磋演技的真实平台。这里有一个个经典影视IP的完整还原，更.以演技为唯一视角，邀请当今中国三位一线影帝影后坐镇演技之神，为有演技实力的平凡人搭建了一个与顶级影帝影后面对面切磋演技的真实平台。这里有一个个经典影视IP的完整还原，更.',
                default_source: 'youku',
                default_source_title: '优酷',
                sourceArr: [
                    {
                        name: '腾讯',
                        url: 'https://v.qq.com'
                    },
                    {
                        name: '优酷',
                        url: 'https://youku.com/'
                    },
                    {
                        name: 'Acfun',
                        url: 'http://www.acfun.cn'
                    }
                ]
            },
            playData: {
                type: '选集',
                headLinkIcon: 'arrow',
                piclistData: [
                    {
                        url: 'https://www.emlice.top',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '20171125期',
                        score: '',
                        title: '章子怡吐槽柳是士大夫',
                        des: '6187.6万次播放',
                    },
                    {
                        url: 'https://www.emlice.top',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '20171125期',
                        score: '',
                        title: '章子怡吐槽柳是士大夫',
                        des: '6187.6万次播放'
                    },
                    {
                        url: 'https://www.emlice.top',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '20171125期',
                        score: '',
                        title: '章子怡吐槽柳是士大夫',
                        des: '6187.6万次播放'
                    },
                    {
                        url: 'https://www.emlice.top',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '20171125期',
                        score: '',
                        title: '章子怡吐槽柳是士大夫',
                        des: '6187.6万次播放'
                    },
                    {
                        url: 'https://www.emlice.top',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '20171125期',
                        score: '',
                        title: '章子怡吐槽柳是士大夫',
                        des: '6187.6万次播放'
                    },
                    {
                        url: 'https://www.emlice.top',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '20171125期',
                        score: '',
                        title: '章子怡吐槽柳是士大夫',
                        des: '6187.6万次播放'
                    },
                    {
                        url: 'https://www.emlice.top',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '20171125期',
                        score: '',
                        title: '章子怡吐槽柳是士大夫',
                        des: '6187.6万次播放'
                    },
                    {
                        url: 'https://www.emlice.top',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '20171125期',
                        score: '',
                        title: '章子怡吐槽柳是士大夫',
                        des: '6187.6万次播放'
                    }
                ]
            },
            playerData: {
                type: '参演明星',
                pd: false,
                personlistData: [
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '银狐',
                        sup: '导演'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '火影忍者',
                        sup: '饰 陆文昭'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '海贼王',
                        sup: '饰 陆文昭'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '柯南',
                        sup: '饰 陆文昭'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌',
                        sup: '饰 陆文昭'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌',
                        sup: '饰 陆文昭'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌',
                        sup: '饰 陆文昭'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌',
                        sup: '饰 陆文昭'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌',
                        sup: '饰 陆文昭'
                    },
                    {
                        url: '/',
                        img: 'http://m.qiyipic.com/common/lego/20171125/a9f86ee193fd4cd2bfd6323c796f37b0.jpg',
                        name: '胡歌',
                        sup: '饰 陆文昭'
                    }
                ]
            },
            clipsData: {
                type: '片花资讯',
                headLinkIcon: 'arrow',
                newsModule: true,
                backEnable: true,
                itemRouteName: 'MovieDetailView',
                ellipsisLines: 2,
                piclistData: [
                    {   
                        url: 'http://www.baidu.com',
                        img: 'http://pic9.qiyipic.com/image/20170724/23/17/v_112907291_m_601_m1_160_90.jpg',
                        catname: '图文',
                        collect: '03:20',
                        score: '',
                        title: '猎场',
                        des: '1583.4万次播放'
                    },
                    {   
                        url: 'http://www.baidu.com',
                        img: 'http://pic9.qiyipic.com/image/20170724/23/17/v_112907291_m_601_m1_160_90.jpg',
                        catname: '图文',
                        collect: '03:20',
                        score: '',
                        title: '猎场',
                        des: '1583.4万次播放'
                    },
                    {
                        url: 'http://www.baidu.com',
                        img: 'http://pic9.qiyipic.com/image/20170724/23/17/v_112907291_m_601_m1_160_90.jpg',
                        catname: '',
                        collect: '',
                        score: '',
                        title: '九州海上牧云记九州海上牧云记九州海上牧云记九州海上牧云记九州海上牧云记',
                        des: '1583.4万次播放'
                    },
                    {
                        url: 'http://www.baidu.com',
                        img: 'http://pic9.qiyipic.com/image/20170724/23/17/v_112907291_m_601_m1_160_90.jpg',
                        catname: '',
                        collect: '',
                        score: '',
                        title: '演员的诞生被被被被猩猩嫌弃演员的诞生被被被被猩猩嫌弃',
                        des: '1583.4万次播放'
                    },
                    {
                        url: 'http://www.baidu.com',
                        img: 'http://pic9.qiyipic.com/image/20170724/23/17/v_112907291_m_601_m1_160_90.jpg',
                        catname: '',
                        collect: '',
                        score: '',
                        title: '九州海上牧云记九州海上牧云记九州海上牧云记九州海上牧云记九州海上牧云记',
                        des: '1583.4万次播放'
                    },
                    {
                        url: 'http://www.baidu.com',
                        img: 'http://pic9.qiyipic.com/image/20170724/23/17/v_112907291_m_601_m1_160_90.jpg',
                        catname: '',
                        collect: '',
                        score: '',
                        title: '我的！体育老师我的！体育老师我的！体育老师我的！体育老师我的！体育老师',
                        des: '1583.4万次播放'
                    }, 
                    {
                        url: 'http://www.baidu.com',
                        img: 'http://pic9.qiyipic.com/image/20170724/23/17/v_112907291_m_601_m1_160_90.jpg',
                        catname: '',
                        collect: '',
                        score: '',
                        title: 'NBA十佳妖星绝杀勇士啊啊啊啊',
                        des: '1583.4万次播放'
                    }, 
                    {
                        url: 'http://www.baidu.com',
                        img: 'http://pic9.qiyipic.com/image/20170724/23/17/v_112907291_m_601_m1_160_90.jpg',
                        catname: '',
                        collect: '',
                        score: '',
                        title: 'NBA十佳妖星绝杀勇士啊啊啊啊',
                        des: '1583.4万次播放'
                    }, 
                    {
                        url: 'http://www.baidu.com',
                        img: 'http://pic9.qiyipic.com/image/20170724/23/17/v_112907291_m_601_m1_160_90.jpg',
                        catname: '',
                        collect: '',
                        score: '',
                        title: 'NBA十佳妖星绝杀勇士啊啊啊啊',
                        des: '1583.4万次播放'
                    }, 
                    {
                        url: 'http://www.baidu.com',
                        img: 'http://pic9.qiyipic.com/image/20170724/23/17/v_112907291_m_601_m1_160_90.jpg',
                        catname: '',
                        collect: '',
                        score: '',
                        title: 'NBA十佳妖星绝杀勇士啊啊啊啊',
                        des: '1583.4万次播放'
                    }, 
                    {
                        url: 'http://www.baidu.com',
                        img: 'http://pic9.qiyipic.com/image/20170724/23/17/v_112907291_m_601_m1_160_90.jpg',
                        catname: '',
                        collect: '',
                        score: '',
                        title: 'NBA十佳妖星绝杀勇士啊啊啊啊',
                        des: '1583.4万次播放'
                    }, 
                    {
                        url: 'http://www.baidu.com',
                        img: 'http://pic9.qiyipic.com/image/20170724/23/17/v_112907291_m_601_m1_160_90.jpg',
                        catname: '',
                        collect: '',
                        score: '',
                        title: 'NBA十佳妖星绝杀勇士啊啊啊啊',
                        des: '1583.4万次播放'
                    }, 
                    {
                        url: 'http://www.baidu.com',
                        img: 'http://pic9.qiyipic.com/image/20170724/23/17/v_112907291_m_601_m1_160_90.jpg',
                        catname: '',
                        collect: '',
                        score: '',
                        title: 'NBA十佳妖星绝杀勇士啊啊啊啊',
                        des: '1583.4万次播放'
                    }
                ]
            },
            relatedData: {
                type: '相关专题',
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
                    }
                ]
            },
            similarData: {
                id: '002',
                type: '同类型电影',
                piclistData: [
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '傲娇与偏见',
                        des: '1.9亿播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.0',
                        title: '表情奇幻冒险',
                        des: '1756.0万播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '绣春刀',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '略略略',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '略略略',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '略略略',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '略略略',
                        des: '1088.9万播放',
                    }
                ]
            },
            hotData: {
                id: '003',
                type: '热播榜',
                rank: true,
                piclistData: [
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '青春逗',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '8.9',
                        title: '傲娇与偏见',
                        des: '1.9亿播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.0',
                        title: '表情奇幻冒险',
                        des: '1756.0万播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '绣春刀',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '略略略',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '略略略',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '略略略',
                        des: '1088.9万播放',
                    },
                    {
                        timeline: '',
                        url: '/home/homeView',
                        img: 'http://pic3.qiyipic.com/common/lego/20171208/5672d497f03048d8a9fd346bb91c062b.jpg',
                        catname: '',
                        collect: '',
                        score: '9.2',
                        title: '略略略',
                        des: '1088.9万播放',
                    }
                ]
            },
            selectSourcePopupFlag: false,
            selectSourcePopupCloak: false,
            collectPopupFlag: false,
            collectPopupCloak: false,
            clipsPopupFlag: false,
            clipsPopupCloak: false
        }
    },
    computed: {
        playSource() {
            const o = {
                title: '请选择播放源',
                items: this.wikiData.sourceArr
            };
            return o;
        }
    },
    methods: {
        
    },
    mounted () {

    }
}
</script>

<template>
    <div class="container">
        <base-wiki-module :data="wikiData" @popup="selectSourcePopupFlag=true,selectSourcePopupCloak=true;"></base-wiki-module>
        <base-img-play-swiper-module :data="playData" @popup="collectPopupFlag=true,collectPopupCloak=true;"></base-img-play-swiper-module>  
        <base-person-swiper-module :data="playerData"></base-person-swiper-module>
        <base-clips-module :data="clipsData" @popup="clipsPopupFlag=true,clipsPopupCloak=true;"></base-clips-module>
        <base-hot-module :data="relatedData"></base-hot-module>
        <base-swiper-module :data="similarData"></base-swiper-module>
        <base-swiper-module :data="hotData"></base-swiper-module>
        <!-- popup -->
        <mt-popup
            v-if="selectSourcePopupFlag"
            v-model="selectSourcePopupCloak"
            position="bottom"
            class="selectSourcePopup">
            <base-select-item :data="playSource" @close="selectSourcePopupFlag=false"></base-select-item>
        </mt-popup>
        <mt-popup
            v-if="collectPopupCloak"
            v-model="collectPopupFlag"
            position="bottom"
            class="collectPopup">
            <base-clips-item :data="playData" @close="collectPopupFlag=false"></base-clips-item>
        </mt-popup>
        <mt-popup
            v-if="clipsPopupCloak"
            v-model="clipsPopupFlag"
            position="bottom"
            class="clipsPopup">
            <base-clips-item :data="clipsData" @close="clipsPopupFlag=false"></base-clips-item>
        </mt-popup>
    </div>
</template>

<style lang="scss" scoped>
.selectSourcePopup,
.clipsPopup,
.collectPopup {
    width: 100%;
}

</style>
