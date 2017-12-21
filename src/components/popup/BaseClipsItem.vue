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
        }
    },
    methods: {
        init() {
            new Swiper('#clips-swiper-module',{
                direction: 'vertical',
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto',    
            });
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.init();
        });
    },
    updated() {
        console.log('组件更新')
    }
}
</script>

<template>
    <div class="popup-container">
        <div class="header-module">
            <h2>{{ loadData.type }}</h2>
            <a @click="$emit('close')" href="javascript:void(0);"></a>
        </div>
        <div id="clips-swiper-module" class="m-pic-list swiper-container">
            <ul class="swiper-wrapper">
                <li v-for="(item,index) in loadData.piclistData" :key="index" class="swiper-slide">
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
    </div>
</template>

<style lang="scss" scoped>
@import '../../styles/vars.scss';
@import '../../styles/mixins.scss';
.popup-container {
    .header-module {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 1.185185rem;
        border-bottom: $moduleBorder;
        padding: 0 $gap;
        h2 {
            color: $baseColor;
            font-size: 18px;
            font-weight: 600;
        }
        a {
            width: .351852rem;
            height: .351852rem;
            padding: .266667rem 0 .266667rem .266667rem;
            background-image: url('/static/images/close.png');
            background-position: right center;
            background-size: .351852rem .351852rem;
            background-repeat: no-repeat;
        }
    }
    #clips-swiper-module {
        padding: .287037rem $gap 0;
        max-height: 10.87037rem;
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
}

@include moduleFontSize('.popup-container');

</style>

