<script>
export default {
    data () {
        return {
            hotModuleData: [
                {   
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                    catname: '电视剧',
                    collect: '更新至40集',
                    score: '',
                    title: '猎场',
                    des: '郑秋冬拆骗局攻陈修风'
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                    catname: '',
                    collect: '更新至22集',
                    score: '',
                    title: '九州海上牧云记',
                    des: '三角恋？组合你站谁你站谁你沾水啊啊啊啊'
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                    catname: '',
                    collect: '11-28期',
                    score: '',
                    title: '演员的诞生被被被被猩猩嫌弃',
                    des: '章子怡：只有她会这样对我'
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                    catname: '新片',
                    collect: '',
                    score: '9.1',
                    title: '追捕',
                    des: '吴宇森展教科书式暴力美学'
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                    catname: '',
                    collect: '更新至40集',
                    score: '',
                    title: '我的！体育老师',
                    des: '小米心忧马克患老年痴呆老年痴呆'
                }, 
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171204/5f2ffe54b5f841e08c91e32b8c3a7dfc.jpg',
                    catname: '专题',
                    collect: '',
                    score: '',
                    title: 'NBA十佳妖星绝杀勇士啊啊啊啊',
                    des: '看哭！40岁卡特扣出青春'
                }
            ]
        }
    }
}
</script>

<template>
    <section id="base-hot-module">
        <div class="mainer">
            <div class="header-module">
                <h2>重磅热播</h2>
                <a href="javascript:;">
                    <span>换一换</span>
                    <i></i>
                </a>
            </div>
            <div class="m-pic-list">
                <ul>
                    <li v-for="(item,index) in hotModuleData" :key="index">
                        <div class="piclist-img">
                            <router-link class="piclist-link" :to="item.url" :title="item.title" :style="`background-image: url(${item.img})`">
                                <div class="c-rt">
                                    <i class="c-collect" v-if="item.catname">{{ item.catname }}</i>
                                </div>
                                <div class="c-lb">
                                    <span class="c-date" v-if="item.collect">{{ item.collect }}</span>
                                    <span class="c-date c-date-score">
                                        <i class="score-item" v-if="item.score">{{ item.score }}</i>
                                    </span>
                                </div>
                            </router-link>
                        </div>
                        <div class="piclist-title">
                            <div class="c-title text-ellipsis">
                                <router-link :to="item.url">{{ item.title }}</router-link>
                            </div>
                            <div class="c-info text-ellipsis">
                                <router-link :to="item.url">{{ item.des }}</router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #base-hot-module {
        .mainer {
            letter-spacing: 1px;
            margin: 0 .277778rem;
            padding-bottom: .092593rem;
            border-bottom: 1px solid #d9d9d9;
            .header-module {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: .675926rem;
                line-height: .675926rem;
                h2 {
                    color: #1a1a1a;
                    font-size: 18px;
                    font-weight: 600;
                }
                a {
                    display: flex;
                    align-items: center;
                    color: #ff6a1f;
                    font-size: 14px;
                    i {
                        display: block;
                        width: .314815rem;
                        height: .314815rem;
                        border-radius: 50%;
                        margin-left: .111111rem;
                        background: url('/static/images/change.png') no-repeat center;
                    }
                }
            }
        }
        .m-pic-list {
            margin-top: .324074rem;
            ul {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li {
                    width: 4.657407rem;

                }
            }
            .piclist-img {
                position: relative;
                overflow: hidden;
                border-radius: .092593rem;
                &:before {
                    content: '';
                    display: block;
                    padding-top: 56.46123260437376%;
                }
                .piclist-link {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    box-shadow: 0 -70px 70px 0px rgba(0, 0, 0, 0.7) inset;
                    .c-rt {
                        position: absolute;
                        right: 0;
                        top: 0;
                        z-index: 5;
                        overflow: hidden;
                        .c-collect {
                            display: block;
                            height: .425926rem;
                            line-height: .425926rem;
                            width: 1.018519rem;
                            text-align: center;
                            background-color: #ff6a1f;
                            border-radius: 0 .092593rem 0 .092593rem;
                            color: #fff;
                        }
                    }
                    .c-lb {
                        position: absolute;
                        left: .212963rem;
                        bottom: .166667rem; // 18px
                        z-index: 5;
                        overflow: hidden;
                        .c-date {
                            color: #fff;
                        }
                        .c-date-score {
                            color: #ff6a1f;
                        }
                    }
                }
            }
            .piclist-title {
                padding: .222222rem 0 .462963rem 0;
                .c-title {
                    height: .407407rem;
                    line-height: .407407rem;
                    overflow: hidden;
                    text-align: left;
                    width: 100%;
                    a {
                        color: #1a1a1a;
                    }
                }
                .c-info {
                    margin-top: .12037rem;
                    height: .342593rem;
                    line-height: .342593rem;
                    overflow: hidden;
                    text-align: left;
                    a {
                        color: #999;
                    }
                }
            }
        }
    }

    // 根据 data-dpr 设置字体大小
    #base-hot-module {
        .mainer {
            .header-module {
                h2 {
                    font-size: 18px;
                }
                a {
                    font-size: 14px;
                }
            }
            .m-pic-list .piclist-img {
                .c-collect,
                .c-date {
                    font-size: 11px;
                }
                .c-date-score {
                    font-size: 16px;
                }
            }
            .piclist-title {
                .c-title {
                    font-size: 14px;
                }
                .c-info {
                    font-size: 12px;
                }
            }
        }
    }

    [data-dpr="2"] #base-hot-module {
        .mainer {
            .header-module {
                h2 {
                    font-size: 36px;
                }
                a {
                    font-size: 28px;
                }
            }
            .m-pic-list .piclist-img {
                .c-collect,
                .c-date {
                    font-size: 22px;
                }
                .c-date-score {
                    font-size: 36px;
                }
            }
            .piclist-title {
                .c-title {
                    font-size: 28px;
                }
                .c-info {
                    font-size: 24px;
                }
            }
            
        }
    }

    [data-dpr="3"] #base-hot-module {
        .mainer {
            .header-module {
                h2 {
                    font-size: 54px;
                }
                a {
                    font-size: 42px;
                }
            }
            .m-pic-list .piclist-img {
                .c-collect,
                .c-date {
                    font-size: 33px;
                }
                .c-date-score {
                    font-size: 48px;
                }
            }
            .piclist-title {
                .c-title {
                    font-size: 42px;
                }
                .c-info {
                    font-size: 36px;
                }
            }
        }
    }
    
</style>
