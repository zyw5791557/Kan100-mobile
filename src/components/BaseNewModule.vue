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
    }
}
</script>

<template>
    <section class="base-new-module" v-once>
        <div class="mainer">
            <div class="header-module">
                <h2>{{ loadData.type }}</h2>
                <a href="javascript:;">
                    <span>更多</span>
                    <i></i>
                </a>
            </div>
            <div class="m-pic-list">
                <ul>
                    <li v-for="(item,index) in loadData.piclistData" :key="index">
                        <div class="piclist-img">
                            <router-link class="piclist-link" :to="item.url" :title="item.title" :style="`background-image: url(${item.img})`">
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
            <div class="m-new-list">
                <ul>
                    <li v-for="(item,index) in loadData.newsData" :key="index">
                        <router-link :to="item.url" class="text-ellipsis">{{ item.msg }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';
@import '../styles/mixins.scss';
    .base-new-module {
        padding-top: $moduleTopPadding;
        .mainer {
            letter-spacing: 1px;
            margin: 0 $gap;
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
        .m-pic-list {
            padding-bottom: $moduleBottomPadding;
            border-bottom: $moduleBorder;
            margin-top: $piclistMarginTop;
            ul {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li {
                    @include picItem(2n);
                }
            }
            .piclist-img {
                position: relative;
                overflow: hidden;
                border-radius: $itemRadius;
                @include propor(56.46123260437376%);
                .piclist-link {
                    @include piclink($boxShadow);
                    @include c-rt($itemRadius);
                    @include c-lb($orange);
                }
            }
            @include picTitle($baseColor);
        }
        .m-new-list {
            border-bottom: $moduleBorder;
            li {
                position: relative;
                text-indent: .259259rem;
                height: 1rem;
                line-height: 1rem;
                a {
                    display: block;
                    color: $baseColor;
                }
                &:before {
                    content: ' ';
                    position: absolute;
                    left: 0;
                    top: 50%;
                    background-color: $baseColor;
                    width: .055556rem;
                    height: .055556rem;
                    border-radius: 50%;
                }
            }
        }
    }

    // 根据 data-dpr 设置字体大小
    @include moduleFontSize('.base-new-module');
    
</style>
