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
    methods: {
        init() {
            new Swiper ('#banner-swiper--home', {
                loop: true,             // 循环
                roundLengths: true,     // 宽高比例取整
                initialSlide: 0,        // 初始化索引    
                speed: 600,             // 滑动的持续时间
                slidesPerView: "auto",  // 设置slider容器能够同时显示的slides数量(carousel模式)。
                loopedSlides: 5,        // 搭配 slidesPerView 设置,一般设置 slides 的数量
                centeredSlides: true,   // centeredSlides true 滑块居中
                autoplay: true,         // 是否自动播放
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });  
        },
        routeGuide(item) {
            let o = {
                name: this.loadData.itemRouteName ? this.loadData.itemRouteName : item.routeName,
                params: { id: item.id },
                query: { backEnable: this.loadData.backEnable }
            };
            return o;
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.init();
        });
    }
}
</script>

<template>
    <section class="base-banner" v-once>
		<div class="swiper-container" id="banner-swiper--home">
			<div class="swiper-wrapper">
				<div v-for="(item,index) in loadData.piclistData" :key="index" class="swiper-slide" title="" >
                    <router-link :to="routeGuide(item)" :style="`background-image: url(${item.img})`">
                        <div class="c-lb">
                            <h3>{{ item.content.title }}</h3>
                            <p class="text-ellipsis">{{ item.content.des }}</p>
                        </div>
                    </router-link>
                </div>
			</div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
		</div>
    </section>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';
@import '../styles/mixins.scss';
    .base-banner {
        padding: $bannerPadding;
    }
    .swiper-container {
        .swiper-slide {
            width: 94.44444444444444%;
            margin: 0 $bannerSlideGap;
            border-radius: $bannerRadius;
            @include propor(56.17647058823529%);
            overflow: hidden;
            a {
                @include piclink($bannerShadow);
                color: #fff;
                @include banner-c-lb;
            }
        }
    }
</style>
<style lang="scss">
@import '../styles/vars.scss';
.base-banner {
    .swiper-pagination {
        text-align: right;
        width: 94.44444444444444%;
        bottom: $bannerPaginationBottom;
    }
}

.swiper-pagination-bullet {
    width: .092593rem;
    height: .092593rem;
    border-radius: 50%;
    background-color: #ffffff;
    opacity: 0.4;
    transition: all 1s;
    -webkit-transition: all 1s;
    &.swiper-pagination-bullet-active {
        width: .203704rem;
        height: .092593rem;
        background-color: $orange;
        border-radius: .037037rem;
        opacity: 1;
    }
}
.swiper-slide .c-lb {
    h3 {    
        font-size: 16px;
    }
    p {
        font-size: 12px;
    }
}
[data-dpr="2"] .swiper-slide .c-lb {
    h3 {    
        font-size: 32px;
    }
    p {
        font-size: 24px;
    }
}
[data-dpr="3"] .swiper-slide .c-lb {
    h3 {    
        font-size: 48px;
    }
    p {
        font-size: 36px;
    }
}
</style>

