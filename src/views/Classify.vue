<script>
import BaseFooter from '../components/BaseFooter';
export default {
	components: {
		BaseFooter
	},
    data () {
        return {
            classifyData: {
                nav: ['电影','电视剧','综艺','动漫','搞笑'],
                type: ['犯罪','爱情','悬疑','惊悚','科幻','动画'],
                area: ['大陆','香港','美国','印度','泰国','韩国'],
                time: [2017, 2016, 2015, 2014, 2013, 2012],
                sort: ['最近热播','最新播出']
            },
            selectStat: {
                nav: '电影',
                type: '犯罪',
                area: '美国',
                time: '全部',
                sort: '最新播出'
            },
            resData: [
                {
                    id: 123456,
                    img: 'http://pic9.qiyipic.com/image/20170713/38/3a/v_112258492_m_601_m3_195_260.jpg',
                    score: '9.3',
                    title: '青春逗'
                },
                {
                    id: 123456,
                    img: 'http://pic9.qiyipic.com/image/20170713/38/3a/v_112258492_m_601_m3_195_260.jpg',
                    score: '9.3',
                    title: '青春逗'
                },
                {
                    id: 123456,
                    img: 'http://pic9.qiyipic.com/image/20170713/38/3a/v_112258492_m_601_m3_195_260.jpg',
                    score: '9.3',
                    title: '青春逗'
                },
                {
                    id: 123456,
                    img: 'http://pic9.qiyipic.com/image/20170713/38/3a/v_112258492_m_601_m3_195_260.jpg',
                    score: '9.3',
                    title: '青春逗'
                },
                {
                    id: 123456,
                    img: 'http://pic9.qiyipic.com/image/20170713/38/3a/v_112258492_m_601_m3_195_260.jpg',
                    score: '9.3',
                    title: '青春逗'
                },
                {
                    id: 123456,
                    img: 'http://pic9.qiyipic.com/image/20170713/38/3a/v_112258492_m_601_m3_195_260.jpg',
                    score: '9.3',
                    title: '青春逗'
                },
                {
                    id: 123456,
                    img: 'http://pic9.qiyipic.com/image/20170713/38/3a/v_112258492_m_601_m3_195_260.jpg',
                    score: '9.3',
                    title: '青春逗'
                },
                {
                    id: 123456,
                    img: 'http://pic9.qiyipic.com/image/20170713/38/3a/v_112258492_m_601_m3_195_260.jpg',
                    score: '9.3',
                    title: '青春逗'
                },
                {
                    id: 123456,
                    img: 'http://pic9.qiyipic.com/image/20170713/38/3a/v_112258492_m_601_m3_195_260.jpg',
                    score: '9.3',
                    title: '青春逗'
                },
                {
                    id: 123456,
                    img: 'http://pic9.qiyipic.com/image/20170713/38/3a/v_112258492_m_601_m3_195_260.jpg',
                    score: '9.3',
                    title: '青春逗'
                },
                {
                    id: 123456,
                    img: 'http://pic9.qiyipic.com/image/20170713/38/3a/v_112258492_m_601_m3_195_260.jpg',
                    score: '9.3',
                    title: '青春逗'
                },
                {
                    id: 123456,
                    img: 'http://pic9.qiyipic.com/image/20170713/38/3a/v_112258492_m_601_m3_195_260.jpg',
                    score: '9.3',
                    title: '青春逗'
                }
            ],
            loading: false
        }
    },
    filters: {
        scoreBeforeFilter (val) {
            return val.substr(0,2);
        },
        scoreAfterFilter (val) {
            return val.substr(-1);
        }
    },
    watch: {
        '$route' (to,from) {

        }
    },
    methods: {
        init() {
            this.$refs.navSwiper && 
            new Swiper(this.$refs.navSwiper, {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto'
            });
            this.$refs.typeSwiper &&
            new Swiper(this.$refs.typeSwiper, {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto'
            });
            this.$refs.areaSwiper && 
            new Swiper(this.$refs.areaSwiper, {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto'
            });
            this.$refs.timeSwiper &&
            new Swiper(this.$refs.timeSwiper, {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto'
            });
            this.$refs.sortSwiper &&
            new Swiper(this.$refs.sortSwiper, {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto'
            });
        },
        loadMore() {
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
                this.resData = this.resData.concat(mockData);
                this.loading = false;
            }, 2500);
        },
        select (type,val) {
            if(type === 'nav') {
                this.selectStat[type] = val;
            }else {
                this.selectStat[type] = val;
            }
        }
    },
    mounted () {
        this.init();
    }
}
</script>

<template>
    <div class="classify-container">
        <div class="classify">
            <header class="return-header">
                <div @click="$router.back()" class="return-icon-box">
                    <a href="javascript:void(0);" class="return-icon"></a>
                </div>
                <span class="return-title">电影</span>
                <i class="search-icon"></i>
            </header>
            <section class="classify-list">
                <div v-if="classifyData.nav" class="swiper-container" ref="navSwiper" id="stat0-swiper">
                    <ul class="swiper-wrapper">
                        <li v-for="(item,index) in classifyData.nav" class="swiper-slide">
                            <a :class="{ active: selectStat.nav === item }" @click="select('nav',item)" href="javascript:void(0);">{{ item }}</a>
                        </li>
                    </ul>
                </div>
                <div v-if="classifyData.type" class="swiper-container" ref="typeSwiper" id="stat1-swiper">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <a :class="{ active: selectStat.type === '全部' }" @click="select('type','全部')" href="javascript:void(0);">全部</a>
                        </li>
                        <li v-for="(item,index) in classifyData.type" class="swiper-slide">
                            <a :class="{ active: selectStat.type === item }" @click="select('type',item)" href="javascript:void(0);">{{ item }}</a>
                        </li>
                    </ul>
                </div>
                <div v-if="classifyData.area" class="swiper-container" ref="areaSwiper" id="stat2-swiper">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <a :class="{ active: selectStat.area === '全部' }" @click="select('area','全部')" href="javascript:void(0);">全部</a>
                        </li>
                        <li v-for="(item,index) in classifyData.area" class="swiper-slide">
                            <a :class="{ active: selectStat.area === item }" @click="select('area',item)" href="javascript:void(0);">{{ item }}</a>
                        </li>
                    </ul>
                </div>
                <div v-if="classifyData.time" class="swiper-container" ref="timeSwiper" id="stat3-swiper">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <a :class="{ active: selectStat.time === '全部' }" @click="select('time','全部')" href="javascript:void(0);">全部</a>
                        </li>
                        <li v-for="(item,index) in classifyData.time" class="swiper-slide">
                            <a :class="{ active: selectStat.time === item }" @click="select('time',item)" href="javascript:void(0);">{{ item }}</a>
                        </li>
                    </ul>
                </div>
                <div v-if="classifyData.sort" class="swiper-container" ref="sortSwiper" id="stat4-swiper">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <a :class="{ active: selectStat.sort === '全部' }" @click="select('sort','全部')" href="javascript:void(0);">全部</a>
                        </li>
                        <li v-for="(item,index) in classifyData.sort" class="swiper-slide">
                            <a :class="{ active: selectStat.sort === item }" @click="select('sort',item)" href="javascript:void(0);">{{ item }}</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="classify-result">
                <ul 
                    v-infinite-scroll="loadMore"
                    infinite-scroll-distance="10"
                    infinite-scroll-immediate-check="false"
                    class="m-pic-list">
                    <li v-for="(item,index) in resData" :key="index">
                        <div class="piclist-img">
                            <router-link class="piclist-link" :to="item.url" :title="item.title" :style="`background-image: url(${item.img})`">
                                <div class="c-lb">
                                    <span class="c-date c-date-score">
                                        <i class="score-item-before" v-if="item.score">{{ item.score | scoreBeforeFilter }}</i
                                        ><i class="score-item-after" v-if="item.score">{{ item.score | scoreAfterFilter }}</i>
                                    </span>
                                </div>
                            </router-link>
                        </div>
                        <div class="piclist-title">
                            <div class="c-title">
                                <router-link class="text-ellipsis" :to="item.url">{{ item.title }}</router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <div class="loading">
                <img v-show="loading" src="/static/images/loading.gif" width="100%" alt="">
            </div>
        </div>
        <base-footer></base-footer>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';
@import '../styles/mixins.scss';
    .classify {
        padding: 0 $gap;
        overflow: hidden;
        .classify-list {
            padding-bottom: .555556rem;
            border-bottom: $moduleBorder;
        }
    }
    .return-header {
        height: $headerHeight;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        .search-icon {
            width: .37963rem;
            height: .37963rem;
            background-image: url('/static/images/search-icon-black.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    #stat0-swiper {
        position: relative;
        overflow: inherit;
        &:after {
            content: ' ';
            position: absolute;
            left: -$gap;
            bottom: 0;
            width: 120%;
            height: 1px;
            background-color: #d9d9d9;
        } 
        .swiper-wrapper {
            justify-content: space-around;
        }
        .swiper-slide {
            width: auto;
            a {
                display: block;
                height: .851852rem;
                line-height: .851852rem;
                box-sizing: border-box;
                color: $baseColor;
                &.active {
                    color: $orange;
                    border-bottom: .055556rem solid $orange;
                }
            }
        }
    }
    
    #stat1-swiper,
    #stat2-swiper,
    #stat3-swiper,
    #stat4-swiper,
     {
         padding-top: .314815rem;
        .swiper-slide {
            width: auto;
            a {
                display: block;
                padding: .231481rem .5rem;
                height: .851852rem;
                box-sizing: border-box;
                color: $baseColor;
                &.active {
                    color: $orange;
                    background-color: #f5f5f5;
                    border-radius: .342593rem;
                }
            }
        }
    }

    .classify-result {
        margin-top: .555556rem;
        ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li {
                width: 32.35294117647059%;
                box-sizing: border-box;
                margin-right: .138889rem;
                &:nth-of-type(3n) {
                    margin-right: 0;
                }
            }
        }
        .piclist-img {
            position: relative;
            overflow: hidden;
            border-radius: $itemRadius;
            @include propor(150.3030303030303%);
            .piclist-link {
                @include piclink($boxShadow);
                @include c-lb($orange);
            }
        }
        .piclist-title {
            padding: .259259rem 0 .425926rem 0;
            .c-title {
                height: .425926rem;
                line-height: .425926rem;
                overflow: hidden;
                text-align: center;
                width: 100%;
                a {
                    display: block;
                    color: $baseColor;
                }
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

    .classify {
        .return-header {
            font-size: 18px;
        }
        #stat0-swiper,
        #stat1-swiper,
        #stat2-swiper,
        #stat3-swiper,
        #stat4-swiper
         {
            a {
                font-size: 14px;
            }
        }
    }
    [data-dpr="2"] .classify {
        .return-header {
            font-size: 36px;
        }
        #stat0-swiper,
        #stat1-swiper,
        #stat2-swiper,
        #stat3-swiper,
        #stat4-swiper {
            a {
                font-size: 28px;
            }
        }
    }
    [data-dpr="3"] .classify {
        .return-header {
            font-size: 54px;
        }
        #stat0-swiper,
        #stat1-swiper,
        #stat2-swiper,
        #stat3-swiper,
        #stat4-swiper
         {
            a {
                font-size: 42px;
            }
        }
    }
    // 根据 data-dpr 设置字体大小
    @include moduleFontSize('.classify');
</style>
