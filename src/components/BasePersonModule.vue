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
        routeGuide(item) {
            let o = {
                name: this.loadData.itemRouteName ? this.loadData.itemRouteName : item.routeName,
                params: { id: item.id },
                query: { backEnable: this.loadData.backEnable }
            };
            return o;
        }
    }
}
</script>

<template>
    <section :class="{ pd: loadData.pd }" class="base-person-swiper">
        <div class="mainer">
            <div class="header-module" v-if="loadData.type">
                <h2>{{ loadData.type }}</h2>
                <a href="javascript:;" v-if="loadData.headLinkName">
                    <span>{{ loadData.headLinkName }}</span>
                    <i :class="loadData.headLinkIcon"></i>
                </a>
            </div>
            <div class="person-container">
                <ul class="person-wrapper">
                    <li v-for="(item,index) in loadData.personlistData" class="person-item">
                        <router-link :to="routeGuide(item)">
                            <img :src="item.img" alt="" width="100%">
                            <div class="c-title">{{ item.name }}</div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';
@import '../styles/mixins.scss';
.base-person-swiper {
    padding-top: $moduleTopPadding;
    &.pd {
        padding-top: 0;
    }
    .mainer {
        letter-spacing: 1px;
        margin: 0 $gap;
        padding-bottom: .555556rem;
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
                i.change {
                    @include smallIcon('/static/images/change.png');
                }
                i.more {
                    @include smallIcon('/static/images/more.png');
                }
            }
        }
    }
}
.person-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 .222222rem;
}
.person-item {
    flex-shrink: 0;
    width: 1.648148rem;
    padding-top: .462963rem;
    padding-right: .796296rem;
    &:nth-child(4n) {
        padding-right: 0;
    }
    a {
        display: block;
        color: $baseColor;
        text-align: center;
        img {
            position: relative;
            border-radius: 50%;
        }
        .c-title {
            margin-top: .277778rem;
        }
    }
}

    // 根据 data-dpr 设置字体大小
    @include moduleFontSize('.base-person-swiper');
</style>
