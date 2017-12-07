<script>
export default {
    data () {
        return {
            navLinks: [
                {
                    name: '首页',
                    routerName: 'HomeView'
                },
                {
                    name: '电影',
                    routerName: 'MovieView'
                },
                {
                    name: '电视剧',
                    routerName: 'TeleplayView'
                },
                {
                    name: '综艺',
                    routerName: 'ShowView'
                },
                {
                    name: '动漫',
                    routerName: 'AnimeView'
                },
                {
                    name: '明星',
                    routerName: 'StarView'
                },
                {
                    name: '搞笑',
                    routerName: 'FunnyView'
                },
                {
                    name: '资讯',
                    routerName: 'NewView'
                },
                {
                    name: '专题',
                    routerName: 'SpecialView'
                }
            ]
        }
    },
    methods: {
        init() {
            new Swiper('#nav-swiper', {
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
    <nav class="nav" v-once>
        <div class="content">
            <div class="swiper-container" id="nav-swiper">
                <div class="swiper-wrapper">
                    <router-link v-for="(item, index) in navLinks" :key="index" class="swiper-slide" :to="{ name: item.routerName }">{{ item.name }}</router-link>
                </div>
            </div>
        </div>
        <a class="moreLinks" href="">
            <i class="menu-more-icon"></i>
        </a>
    </nav>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';
    .swiper-slide {
        color: $baseColor;
        line-height: .851852rem;
        width: auto;
        margin-right: .518519rem;
        &:last-child {
            &:after {
                content: '';
                display: inline-block;
                width: .407407rem;
            }
        }
        &.router-link-exact-active {
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
        height: .851852rem;
        display: flex;
        justify-content: space-between;
        .content {
            width: 100%;
        }
        .moreLinks {
            position: absolute;
            z-index: 999;
            right: .277778rem;
            width: .925926rem;
            height: .851852rem;
            background: -webkit-linear-gradient(left, rgba(255,255,255,.7),rgba(255,255,255,1));
            .menu-more-icon {
                display: block;
                width: .925926rem;
                height: .851852rem;
                background: url('/static/images/moreLinks.png') no-repeat right center;
                background-size: .333333rem .305556rem;
            }
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
