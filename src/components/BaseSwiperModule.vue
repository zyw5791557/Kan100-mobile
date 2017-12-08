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
            loadData: this.data
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
            new Swiper('#base-swiper--module' + this.loadData.id, {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto'
            });
        }
    },
    mounted () {
        this.init();
    }
}
</script>

<template>
    <section class="base-swiper-timeline">
        <div class="mainer">
            <div class="header-module">
                <h2>{{ loadData.type }}</h2>
                <a href="javascript:;" v-if="loadData.headLinkName">
                    <span>{{ loadData.headLinkName }}</span>
                    <i></i>
                </a>
            </div>
            <div class="swiper-container" :id="`base-swiper--module${loadData.id}`">
                <ul class="swiper-wrapper m-pic-list">
                    <li v-for="(item,index) in loadData.piclistData" :key="index" class="swiper-slide">
                        <div class="piclist-time" v-if="item.timeline">
                            <span class="c-timeline">{{ item.timeline }}</span>
                        </div>
                        <div class="piclist-img">
                            <router-link class="piclist-link" :to="item.url" :style="`background-image: url(${item.img})`">
                                <div class="c-rt">
                                    <i class="c-collect" v-if="item.catname">{{ item.catname }}</i>
                                </div>
                                <div class="c-lt">
                                    <i class="c-rank" v-if="index < 3 && loadData.rank">{{ index + 1 }}</i>
                                </div>
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
                            <div class="c-info">
                                <router-link class="text-ellipsis" :to="item.url">{{ item.des }}</router-link>
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
.base-swiper-timeline {
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
                display: flex;
                align-items: center;
                color: $orange;
                font-size: 14px;
                i {
                    @include smallIcon('/static/images/more.png');
                }
            }
        }
    }
}
.swiper-container {
    margin-top: $piclistMarginTop;
    overflow: inherit;
}
.mainer {
    .swiper-slide {
        width: 30.666666666666664%!important;
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
            @include propor(149.68944099378882% );
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
@include moduleFontSize('.base-swiper-timeline');
</style>
