<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            weekData: [['Monday','一'],['Tuesday','二'],['Wednesday','三'],['Thursday','四'],['Friday','五'],['Saturday','六'],['Sunday','七']]
        }
    },
    computed: {
      loadData() {
          return this.data;
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
    methods: {
        init() {
            new Swiper('#img-play-swiper', {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto'
            });
        },
        selectTabs(param,e) {
            var activeEle = document.querySelector('.m-tabs-item.active');
            if(activeEle) activeEle.classList.remove('active');
            var e = window.event || e;
            e.target.classList.add('active');
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.init();
        });
    }
}
</script>

<template>
    <section class="base-img-play-swiper">
        <div class="mainer">
            <div class="header-module">
                <h2>{{ loadData.type }}</h2>
                <a v-if="loadData.headLinkName || loadData.headLinkIcon" @click="$emit('popup')" href="javascript:void(0);">
                    <span>{{ loadData.headLinkName }}</span>
                    <i :class="loadData.headLinkIcon"></i>
                </a>
            </div>
            <div v-if="loadData.selectBtn" class="m-tabs-week">
                <a v-for="(itm,idx) in weekData" :key="idx" @click.stop="selectTabs(itm[0],$event)" class="m-tabs-item" href="javascript:void(0);">{{ itm[1] }}</a>
            </div>
            <div class="swiper-container" id="img-play-swiper">
                <ul class="swiper-wrapper m-pic-list">
                    <li v-for="(item,index) in loadData.piclistData" :key="index" v-if="index < 20" class="swiper-slide">
                        <div class="piclist-time" v-if="item.timeline">
                            <span class="c-timeline">{{ item.timeline }}</span>
                        </div>
                        <div class="piclist-img">
                            <a class="piclist-link" :href="item.url" :style="`background-image: url(${item.img})`">
                                <div class="c-rt">
                                    <i class="c-collect" v-if="item.catname">{{ item.catname }}</i>
                                </div>
                                <div class="c-lt">
                                    <i class="c-rank" v-if="index < 3 && loadData.rank">{{ index + 1 }}</i>
                                </div>
                                <div class="c-lb">
                                    <span class="c-date" v-if="item.collect">{{ item.collect }}</span>
                                    <span class="c-date c-date-score">
                                        <i class="score-item-before" v-if="item.score">{{ item.score | scoreBeforeFilter }}</i
                                        ><i class="score-item-after" v-if="item.score">{{ item.score | scoreAfterFilter }}</i>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div class="piclist-title">
                            <div class="c-title text-ellipsis-2">
                                <a :href="item.url">{{ item.title }}</a>
                            </div>
                            <div class="c-info">
                                <a class="text-ellipsis" :href="item.url">{{ item.des }}</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';
@import '../styles/mixins.scss';
.base-img-play-swiper {
    padding-top: $moduleTopPadding;
    .mainer {
        letter-spacing: 1px;
        margin: 0 $gap;
        padding-bottom: $moduleBottomPadding;
        border-bottom: $moduleBorder;
        .header-module {
            display: flex;
            justify-content: space-between;
            align-items: center;
            @include moduleHeader;
            h2 {
                color: $baseColor;
                font-size: 18px;
                font-weight: 600;
            }
            a {
                padding: .266667rem 0 .266667rem .266667rem;
                display: flex;
                align-items: center;
                color: $orange;
                font-size: 14px;
                i.change {
                    @include smallIcon('../../static/images/change.png');
                }
                i.more {
                    @include smallIcon('../../static/images/more.png');
                }
                i.arrow {
                    width: .138889rem;
                    height: .138889rem;
                    border-right: .027778rem solid #999;
                    border-bottom: .027778rem solid #999;
                    transform: rotate(-45deg);
                }
            }
        }
    }
}
.m-tabs-week {
    display: flex;
    justify-content: space-around;
    padding-top: .351852rem;
    .m-tabs-item {
        color: $baseColor;
        width: .648148rem;
        height: .648148rem;
        border-radius: 50%;
        line-height: .648148rem;
        text-align: center;
        &.active {
            background-color: $orange;
            color: #fff;
        }
    }
}
.swiper-container {
    margin-top: $piclistMarginTop;
    overflow: inherit;
}
.mainer {
    .swiper-slide {
        width: 26.857142857142857%!important;
        margin-right: .12963rem;
        .piclist-time {
            position: relative;
            text-align: center;
            margin-bottom: .314815rem;
            .c-timeline {
                display: inline-block;
                padding: .203704rem;
            }
            &:before {
                content: ' ';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                padding-right: .12963rem;
                height: .074074rem;
                background-color: #e6e6e6;
            }
            &:after {
                content: ' ';
                position: absolute;
                left: 50%;
                bottom: -.037037rem;
                width: .148148rem;
                height: .148148rem;
                border-radius: 50%;
                background-color: $orange;
            }
        }
        .piclist-img {
            position: relative;
            overflow: hidden;
            border-radius: $itemRadius;
            @include propor(56.02836879432624%);
            .piclist-link {
                @include piclink($boxShadow);
                @include c-rt($itemRadius);
                @include c-lt;
                @include c-lb($orange);
            }
        }
        @include picTitle($baseColor);
        &:nth-child(1) {
            .c-rank {
                background-color: #ff2531!important;
            }
        }
        &:nth-child(2) {
            .c-rank {
                background-color: #ff8912!important;
            }
        }
        &:nth-child(3) {
            .c-rank {
                background-color: #ffc300!important;
            }
        }
        &:last-child {
            .piclist-time:before {
                padding-right: 0;
            }
        }
    }
}
@include moduleFontSize('.base-img-play-swiper');
</style>
