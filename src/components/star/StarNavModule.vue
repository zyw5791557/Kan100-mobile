<script>
export default {
    props: {
        data: {
            type: Array,
            required: true
        },
        active: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            loadData: this.data
        }
    },
    watch: {
        '$route' (to,from) {
            // 对路由变化做出响应
            
        }
    },
    methods: {
        init() {
            new Swiper('#nav-swiper--head', {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto'
            });
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
    <nav class="nav">
        <div class="content">
            <div class="swiper-container" id="nav-swiper--head">
                <div class="swiper-wrapper">
                    <a v-for="(item, index) in loadData" :key="index" :class="{ active: active === item.isComponent }" @click="$emit('jump',item.isComponent)" class="swiper-slide" href="javascript:void(0);">{{ item.name }}</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import '../../styles/vars.scss';
    .swiper-slide {
        color: $baseColor;
        line-height: 1.055556rem;
        width: auto;
        margin-right: .518519rem;
        &:last-child {
            margin-right: 0;
        }
        
        &.active {
            color: $orange;
            &:after {
                content: '';
                width: 100%;
                height: .055556rem;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: 20px;
                background-color: $orange;
            }
        }
    }
    .nav {
        padding: 0 $gap;
        height: 1.055556rem;
        display: flex;
        justify-content: space-between;
        .content {
            width: 100%;
        }
    }
    .swiper-slide {
        font-size: 16px;
    }

    [data-dpr="2"] .nav .swiper-slide {
        font-size: 32px;
    }

    [data-dpr="3"] .nav .swiper-slide {
        font-size: 48px;
    }
</style>
