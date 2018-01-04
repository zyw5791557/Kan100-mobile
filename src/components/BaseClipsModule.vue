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
    <section class="base-hot-module" :class="{ news: loadData.newsModule }" v-once>
        <div class="mainer">
            <div class="header-module">
                <h2>{{ loadData.type }}</h2>
                <a v-if="loadData.headLinkName || loadData.headLinkIcon" @click="$emit('popup')" href="javascript:void(0);">
                    <span>{{ loadData.headLinkName }}</span>
                    <i :class="loadData.headLinkIcon"></i>
                </a>
            </div>
            <div class="m-pic-list">
                <ul>
                    <li v-for="(item,index) in loadData.piclistData" :key="index" v-if="index < 6">
                        <div class="piclist-img">
                            <a :href="item.url" class="piclist-link" :title="item.title" :style="`background-image: url(${item.img})`">
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
                            <div class="c-title" :class="{ 'text-ellipsis-2': loadData.ellipsisLines }">
                                <a :href="item.url" :class="{ 'text-ellipsis': !(loadData.ellipsisLines) }">{{ item.title }}</a>
                            </div>
                            <div class="c-info" v-if="item.des">
                                <a :href="item.url" class="text-ellipsis">{{ item.des }}</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="m-new-list" v-if="loadData.newsData">
                <ul>
                    <li v-for="(item,index) in loadData.newsData" :key="index">
                        <a :to="item.url" class="text-ellipsis">{{ item.msg }}</a>
                    </li>
                </ul>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';
@import '../styles/mixins.scss';
    .base-hot-module {
        &.news {
            padding-top: $moduleTopPadding;
            .mainer {
                border-bottom: none;
                 padding-bottom: 0;
                .m-pic-list {
                    border-bottom: $moduleBorder;
                    padding-bottom: $moduleBottomPadding;
                }
            }
        }
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
        .m-pic-list {
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
            .c-title {
                line-height: .481481rem!important;
                overflow: hidden;
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
    @include moduleFontSize('.base-hot-module');
    
</style>
