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
            loadData: this.data,
            minHeight: ''
        }
    },
    methods: {
        init() {
            new Swiper('#starDetail-music-swiper-module',{
                direction: 'vertical',
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto',    
            });
        },
        minHeightComputed() {
            const dom = (document.documentElement.clientHeight) / (lib.flexible.rem);
            const header = 1.22222;
            const nav = 1.055556;
            const footer = 2.092593 + 1.62963;
            this.minHeight = dom - (header + nav + footer) + 'rem';
        }
    },
    mounted () {
        this.minHeightComputed();
        this.$nextTick(() => {
            this.init();
        });
    }
}
</script>

<template>
    <section class="starDetail-music-module">   
        <div :style="`max-height:${minHeight}`" id="starDetail-music-swiper-module" class="m-pic-list swiper-container">
            <ul class="swiper-wrapper">
                <li v-for="(item,index) in loadData.data" :key="index" class="swiper-slide">
                    <div class="piclist-img">
                        <a class="piclist-link" :href="item.url" :title="item.title" :style="`background-image: url(${item.img})`">
                            <div class="c-rt">
                                <i class="c-collect" v-if="item.catname">{{ item.catname }}</i>
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
                        <div class="c-info" v-if="item.des">
                            <a class="text-ellipsis" :href="item.url">{{ item.des }}</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../styles/vars.scss';
@import '../../styles/mixins.scss';
#starDetail-music-swiper-module {
    padding: .287037rem $gap 0;
    .swiper-slide {
        display: flex;
        justify-content: flex-start;
        margin-bottom: .277778rem;
    }
}
.m-pic-list {
    .piclist-img {
        flex-shrink: 0;
        width: 32%;
        position: relative;
        overflow: hidden;
        border-radius: $itemRadius;
        @include propor(55.95238095238095%);
        .piclist-link {
            width: 100%;
            height: 100%;
            @include piclink($boxShadow);
            @include c-rt($itemRadius);
            @include c-lb($orange);
        }
    }
    .piclist-title {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        margin-left: .314815rem;
        .c-title {
            line-height: .481481rem;
            overflow: hidden;
            a {
                display: block;
                color: $baseColor;
            }
        }
        .c-info {
            padding-top: .092593rem;
            height: .37037rem;
            line-height: .37037rem;
            overflow: hidden;
            a {
                display: block;
                color: #999;
            }
        }
    }
}

@include moduleFontSize('.starDetail-music-module');
</style>

