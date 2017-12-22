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
                ]
            },
            headerFlag: false,
            currentView: 'StarMovieModule'
        }
    },
    methods: {
        navController(ic) {
            this.currentView = ic;
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
        <component :is="currentView" data="">
            <!-- 组件在 vm.currentview 变化时改变！ -->
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
