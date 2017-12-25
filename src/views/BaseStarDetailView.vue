<script>
import BaseFooter from '@/components/BaseFooter';
import StarNavModule from '@/components/star/StarNavModule';
import StarMovieModule from '@/components/star/StarMovieModule';
import StarTeleplayModule from '@/components/star/StarTeleplayModule';
import StarShowModule from '@/components/star/StarShowModule';
import StarNewsModule from '@/components/star/StarNewsModule';
import StarProgramModule from '@/components/star/StarProgramModule';
import StarMusicModule from '@/components/star/StarMusicModule';
import StarImgModule from '@/components/star/StarImgModule';
import StarInfoModule from '@/components/star/StarInfoModule';
export default {
    components: {
        BaseFooter,
        StarNavModule,
        StarMovieModule,
        StarTeleplayModule,
        StarShowModule,
        StarNewsModule,
        StarProgramModule,
        StarMusicModule,
        StarImgModule,
        StarInfoModule
    },
    data () {
        return {
            starData: {
                name: '范冰冰',
                popular: {
                    rank: 147,
                    index: 18.3
                },
                navLinks: [
                    {
                        name: '电影',
                        isComponent: 'StarMovieModule'
                    },
                    {
                        name: '电视剧',
                        isComponent: 'StarTeleplayModule'
                    },
                    {
                        name: '参加综艺',
                        isComponent: 'StarShowModule'
                    },
                    {
                        name: '资讯',
                        isComponent: 'StarNewsModule'
                    },
                    {
                        name: '主持节目',
                        isComponent: 'StarProgramModule'
                    },
                    {
                        name: '音乐',
                        isComponent: 'StarMusicModule'
                    },
                    {
                        name: '美图',
                        isComponent: 'StarImgModule'
                    },
                    {
                        name: '简介',
                        isComponent: 'StarInfoModule'
                    }
                ],
                movie: {
                    itemRouteName: 'MovieDetailView',
                    data: [
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        }
                    ]
                },
                teleplay: {
                    itemRouteName: 'TeleplayDetailView',
                    data: [
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic1.qiyipic.com/image/20171129/e8/d8/v_114080099_m_601_m1_180_236.jpg',
                            title: '青春逗',
                            score: '9.3'
                        }
                    ]
                },
                show: {
                    itemRouteName: 'ShowDetailView',
                    ellipsisLines: 2,
                    data: [
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
                news: {
                    itemRouteName: 'MovieDetail',
                    ellipsisLines: 2,
                    data: [
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
                        }
                    ]
                },
                program: {
                    itemRouteName: 'ShowDetailView',
                    data: [
                        {
                            id: 123456,
                            img: 'http://pic4.qiyipic.com/image/20171011/a0/a3/a_100099355_m_601_m2_180_236.jpg',
                            title: '超凡魔术师',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic4.qiyipic.com/image/20171011/a0/a3/a_100099355_m_601_m2_180_236.jpg',
                            title: '超凡魔术师',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic4.qiyipic.com/image/20171011/a0/a3/a_100099355_m_601_m2_180_236.jpg',
                            title: '超凡魔术师',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic4.qiyipic.com/image/20171011/a0/a3/a_100099355_m_601_m2_180_236.jpg',
                            title: '超凡魔术师',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic4.qiyipic.com/image/20171011/a0/a3/a_100099355_m_601_m2_180_236.jpg',
                            title: '超凡魔术师',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic4.qiyipic.com/image/20171011/a0/a3/a_100099355_m_601_m2_180_236.jpg',
                            title: '超凡魔术师',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic4.qiyipic.com/image/20171011/a0/a3/a_100099355_m_601_m2_180_236.jpg',
                            title: '超凡魔术师',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic4.qiyipic.com/image/20171011/a0/a3/a_100099355_m_601_m2_180_236.jpg',
                            title: '超凡魔术师',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic4.qiyipic.com/image/20171011/a0/a3/a_100099355_m_601_m2_180_236.jpg',
                            title: '超凡魔术师',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic4.qiyipic.com/image/20171011/a0/a3/a_100099355_m_601_m2_180_236.jpg',
                            title: '超凡魔术师',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic4.qiyipic.com/image/20171011/a0/a3/a_100099355_m_601_m2_180_236.jpg',
                            title: '超凡魔术师',
                            score: '9.3'
                        },
                        {
                            id: 123456,
                            img: 'http://pic4.qiyipic.com/image/20171011/a0/a3/a_100099355_m_601_m2_180_236.jpg',
                            title: '超凡魔术师',
                            score: '9.3'
                        }
                    ]
                },
                music: {
                    itemRouteName: 'MovieDetail',
                    ellipsisLines: 2,
                    data: [
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
                        }
                    ]
                },
                img: [
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg',
                    'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=7f4b43a4e2fe9925df01610255c135ba/a9d3fd1f4134970a752c4b4e97cad1c8a7865d77.jpg'
                ],
                info: `<p>范冰冰（Fan Bingbing），1981年9月16日出生于山东青岛，中国内地影视女演员、流行女歌手，毕业于上海师范大学谢晋影视艺术学院。</p>
                <p>1996年参演首部电视剧《女强人》踏入演艺圈，1998年主演电视剧《还珠格格》获得广泛关注，2002年主演电影《一见钟情》进入影坛[1]  。2004年凭借冯小刚执导的电影《手机》获得第27届大众电影百花奖最佳女主角。</p>
                <p>2005年发行首张音乐专辑《刚刚开始》踏入歌坛。2007年凭借电影《心中有鬼》获得第44届台湾电影金马奖最佳女配角；同年主演的电影《苹果》入围第57届柏林国际电影节主竞赛单元，获得第4届欧亚国际电影节最佳女演员。2010年主演李玉执导的电影《观音山》获得第23届东京国际电影节最佳女演员，该片亦获东京国际电影节最佳艺术贡献奖。2011年担任第24届东京国际电影节评委。</p>
                <p>2013年获好莱坞报道年度最佳国际艺人奖，2013-2017年连续五年蝉联福布斯中国名人榜榜首。2015年上榜《福布斯》全球十大最高收入女星第4名，2016年主演电影《我不是潘金莲》获得第64届圣塞巴斯蒂安国际电影节最佳女演员，成为中国内地唯一获得两次国际A类电影节演员荣誉的华人演员，该片亦获圣塞巴斯蒂安国际电影节最佳影片金贝壳奖。</p>
                <p>2017年登上美国《时代周刊》封面并上榜影响世界的100人，担任第70届戛纳国际电影节评委，成为奥斯卡金像奖评委会成员；同年凭借《我不是潘金莲》获得第31届中国电影金鸡奖最佳女主角、第11届亚洲电影大奖最佳女主角及第8届中国电影导演协会年度女演员。</p>`
            },
            headerFlag: false,
            currentView: 'StarMovieModule',
            loading: false
        }
    },
    computed: {
      initData() {
          switch (this.currentView) {
              case 'StarMovieModule':
                  return this.starData.movie
                  break;
              case 'StarTeleplayModule':
                  return this.starData.teleplay
                  break;
              case 'StarShowModule':
                  return this.starData.show
                  break;
              case 'StarNewsModule':
                  return this.starData.news
                  break;
              case 'StarProgramModule':
                  return this.starData.program
                  break;
              case 'StarMusicModule':
                  return this.starData.music
                  break;
              case 'StarImgModule':
                  return this.starData.img
                  break;
              case 'StarInfoModule':
                  return this.starData.info
                  break;
          }
      }  
    },
    methods: {
        navController(ic) {
            this.currentView = ic;
            const posterArr = ['StarMovieModule','StarImgModule','StarInfoModule','StarProgramModule'];
            if(posterArr.indexOf(ic) !== -1) {
                this.headerFlag = false;
            } else {
                this.headerFlag = true;
            }
        },
        loadMore (f) {
            switch (f) {
                case 'movie':
                    this.loadMoreMovie();
                    break;
                case 'teleplay':
                    this.loadMoreTeleplay();
                    break;
                case 'show':
                    this.loadMoreShow();
                    break;
                case 'news':
                    this.loadMoreNews();
                    break;
                case 'program':
                    this.loadMoreProgram();
                    break;
                case 'music':
                    this.loadMoreMusic();
                    break;
                case 'img':
                    this.loadMoreImg();
                    break;
            }
        },
        loadMoreMovie () {
            this.loading = true;
            setTimeout(() => {
                var mockData = [
                    {
                        id: 123456,
                        img: 'http://pic9.qiyipic.com/image/20170629/64/cf/v_106612240_m_601_m3_195_260.jpg',
                        score: '9.9',
                        title: '我是加载出来的'
                    },
                    {
                        id: 123456,
                        img: 'http://pic9.qiyipic.com/image/20170629/64/cf/v_106612240_m_601_m3_195_260.jpg',
                        score: '9.9',
                        title: '我是加载出来的'
                    },
                    {
                        id: 123456,
                        img: 'http://pic9.qiyipic.com/image/20170629/64/cf/v_106612240_m_601_m3_195_260.jpg',
                        score: '9.9',
                        title: '我是加载出来的'
                    },
                    {
                        id: 123456,
                        img: 'http://pic9.qiyipic.com/image/20170629/64/cf/v_106612240_m_601_m3_195_260.jpg',
                        score: '9.9',
                        title: '我是加载出来的'
                    },
                    {
                        id: 123456,
                        img: 'http://pic9.qiyipic.com/image/20170629/64/cf/v_106612240_m_601_m3_195_260.jpg',
                        score: '9.9',
                        title: '我是加载出来的'
                    },
                    {
                        id: 123456,
                        img: 'http://pic9.qiyipic.com/image/20170629/64/cf/v_106612240_m_601_m3_195_260.jpg',
                        score: '9.9',
                        title: '我是加载出来的'
                    }
                ];
                this.starData.movie.data = this.starData.movie.data.concat(mockData);
                this.loading = false;
            }, 2500);
        },
        loadMoreTeleplay () {
            this.loading = true;
            setTimeout(() => {
                var mockData = [
                    {
                        id: 123456,
                        img: 'http://pic9.qiyipic.com/image/20170629/64/cf/v_106612240_m_601_m3_195_260.jpg',
                        score: '9.9',
                        title: '我是加载出来的'
                    },
                    {
                        id: 123456,
                        img: 'http://pic9.qiyipic.com/image/20170629/64/cf/v_106612240_m_601_m3_195_260.jpg',
                        score: '9.9',
                        title: '我是加载出来的'
                    },
                    {
                        id: 123456,
                        img: 'http://pic9.qiyipic.com/image/20170629/64/cf/v_106612240_m_601_m3_195_260.jpg',
                        score: '9.9',
                        title: '我是加载出来的'
                    },
                    {
                        id: 123456,
                        img: 'http://pic9.qiyipic.com/image/20170629/64/cf/v_106612240_m_601_m3_195_260.jpg',
                        score: '9.9',
                        title: '我是加载出来的'
                    },
                    {
                        id: 123456,
                        img: 'http://pic9.qiyipic.com/image/20170629/64/cf/v_106612240_m_601_m3_195_260.jpg',
                        score: '9.9',
                        title: '我是加载出来的'
                    },
                    {
                        id: 123456,
                        img: 'http://pic9.qiyipic.com/image/20170629/64/cf/v_106612240_m_601_m3_195_260.jpg',
                        score: '9.9',
                        title: '我是加载出来的'
                    }
                ];
                this.starData.teleplay.data = this.starData.teleplay.data.concat(mockData);
                this.loading = false;
            }, 2500);
        },
        loadMoreShow() {
            console.log('没有了更多综艺了');
            return;
        },
        loadMoreNews() {
            console.log('没有了更多资讯了');
            return;
        },
        loadMoreProgram() {
            console.log('没有了更多节目了');
            return;
        },
        loadMoreMusic() {
            console.log('没有了更多音乐了');
            return;
        },
        loadMoreImg() {
            console.log('没有更多美图了');
            return;
        }
    }
}
</script>

<template>
    <div class="starDetail-module">
        <header class="return-header">
            <div v-if="headerFlag" class="header-simple">
                <div @click="$router.back()" class="return-icon-box">
                    <a class="return-icon"></a>
                </div>
                <span class="return-title">{{ starData.name }}</span>
                <i></i>
            </div>
            <div v-else class="header-poster">
                <div class="poster-info">
                    <div @click="$router.back()" class="return-icon-box">
                        <a class="return-icon"></a>
                    </div>
                    <h2 class="poster-name">{{ starData.name }}</h2>
                    <div class="popular">
                        <div class="p-rank">
                            <span>{{ starData.popular.rank }}</span>
                            <span>人气排名</span>
                        </div>
                        <div class="p-index">
                            <span>{{ starData.popular.index }}万</span>
                            <span>人气指数</span>
                        </div>
                    </div>
                </div>
            </div>

        </header>
        <star-nav-module :data="starData.navLinks" :active="currentView" @jump="navController"></star-nav-module>
        <component :is="currentView" :data="initData" @loadMore="loadMore">
            <!-- 组件在 vm.currentview 变化时改变！ -->
            <!-- 具名插槽 -->
            <div v-if="loading" class="loading" slot="loading">
                <img v-show="loading" src="/static/images/loading.gif" width="100%" alt="">
            </div>
        </component>
        <base-footer></base-footer>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';
@import '../styles/mixins.scss';
.starDetail-module {
    .header-simple { 
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 $gap;
        height: $headerHeight;
    }
    .header-poster { 
        display: flex;
        width: 100%;
        height: 4.648148rem;
        background-image: url('/static/images/star_777.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .poster-info {
            width: 50%;
            padding-left: $gap;
        }
        .return-icon-box {
            width: 20%;
            display: flex;
            justify-content: left;
            align-items: center;
            height: $headerHeight;
            box-sizing: border-box;
        }
        .poster-name {
            font-weight: 600;
            color: #fff;
            margin-top: .185185rem;
        }
        .popular {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 65%;
            margin-top: .740741rem;
            color: #fff;
            div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                span {
                    text-align: center;
                    &:last-child {
                        margin-top: .148148rem;
                    }
                }
            }
        }
    }
    .return-header {
        .return-title {
            font-weight: 600;
        }
        .return-icon-box {
            margin-left: .12963rem;
            padding: .266667rem;
            padding-left: 0;
        }
        .return-icon {
            display: block;
            width: .31427rem;
            height: .31427rem;
            border-left: .037037rem solid #999;
            border-bottom: .037037rem solid #999;
            transform: rotate(45deg);
        }
    }
}

.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.296296rem;
    img {
        display: block;
        width: .518519rem;
        height: .518519rem;
        border-radius: 50%;
    }
}

.starDetail-module {
    .return-title { font-size: 18px }
    .poster-name { font-size: 22px }
    .p-rank,
    .p-index {
        &:first-child {
            font-size: 21px;
        }
        &:last-child {
            font-size: 10px;
        }
    }
    
}
[data-dpr="2"] .starDetail-module {
    .return-title { font-size: 36px }
    .poster-name { font-size: 44px }
    .p-rank,
    .p-index {
        span:first-child {
            font-size: 42px;
        }
        span:last-child {
            font-size: 20px;
        }
    }
}
[data-dpr="3"] .starDetail-module {
    .return-title { font-size: 54px }
    .poster-name { font-size: 66px }
    .p-rank,
    .p-index {
        span:first-child {
            font-size: 63px;
        }
        span:last-child {
            font-size: 30px;
        }
    }
}
</style>
