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
            selected: '1',
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
    <section class="navbar-module">
        <mt-navbar v-model="selected" class="nav-title-box">
            <mt-tab-item 
            v-for="(item,index) in loadData.navbarTitleArr" 
            :key="index" 
            :id="(index+1).toString()"
            class="nav-title">
            {{ item }}
        </mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected" class="nav-content-box">
            <mt-tab-container-item id="1">
                <div class="m-pic-list">
                    <ul>
                        <li v-for="(item,index) in loadData.newData" :key="index" class="branch">
                            <div class="piclist-img">
                                <router-link class="piclist-link" :to="routeGuide(item)" :title="item.title" :style="`background-image: url(${item.img})`">
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
                                <div class="c-title" :class="{ 'text-ellipsis-2': loadData.ellipsis2 }">
                                    <router-link :class="{ 'text-ellipsis': !loadData.ellipsis2 }" :to="routeGuide(item)">{{ item.title }}</router-link>
                                </div>
                                <div class="c-info"  v-if="item.des">
                                    <router-link class="text-ellipsis" :to="routeGuide(item)">{{ item.des }}</router-link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="m-pic-list">
                    <ul>
                        <li v-for="(item,index) in loadData.movieData" :key="index" class="branch">
                            <div class="piclist-img">
                                <router-link class="piclist-link" :to="routeGuide(item)" :title="item.title" :style="`background-image: url(${item.img})`">
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
                                <div class="c-title" :class="{ 'text-ellipsis-2': loadData.ellipsis2 }">
                                    <router-link :class="{ 'text-ellipsis': !loadData.ellipsis2 }" :to="routeGuide(item)">{{ item.title }}</router-link>
                                </div>
                                <div class="c-info"  v-if="item.des">
                                    <router-link class="text-ellipsis" :to="routeGuide(item)">{{ item.des }}</router-link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="m-pic-list">
                    <ul>
                        <li v-for="(item,index) in loadData.teleplayData" :key="index" class="branch">
                            <div class="piclist-img">
                                <router-link class="piclist-link" :to="routeGuide(item)" :title="item.title" :style="`background-image: url(${item.img})`">
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
                                <div class="c-title" :class="{ 'text-ellipsis-2': loadData.ellipsis2 }">
                                    <router-link :class="{ 'text-ellipsis': !loadData.ellipsis2 }" :to="routeGuide(item)">{{ item.title }}</router-link>
                                </div>
                                <div class="c-info"  v-if="item.des">
                                    <router-link class="text-ellipsis" :to="routeGuide(item)">{{ item.des }}</router-link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <div class="m-pic-list">
                    <ul>
                        <li v-for="(item,index) in loadData.showData" :key="index" class="branch">
                            <div class="piclist-img">
                                <router-link class="piclist-link" :to="routeGuide(item)" :title="item.title" :style="`background-image: url(${item.img})`">
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
                                <div class="c-title" :class="{ 'text-ellipsis-2': loadData.ellipsis2 }">
                                    <router-link :class="{ 'text-ellipsis': !loadData.ellipsis2 }" :to="routeGuide(item)">{{ item.title }}</router-link>
                                </div>
                                <div class="c-info"  v-if="item.des">
                                    <router-link class="text-ellipsis" :to="routeGuide(item)">{{ item.des }}</router-link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </section>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';
@import '../styles/mixins.scss';
.navbar-module {
    .nav-title-box {
        border-bottom: $moduleBorder;
    }
    .nav-content-box {
        padding: 0 $gap;
    }
    .nav-title {
        color: $baseColor;
        padding: 0 0 .407407rem 0;
        box-sizing: border-box;
        border-color: $orange;
        border-width: .055556rem;
        font-weight: bold;
    }
    
    .m-pic-list {
        margin-top: $piclistMarginTop;
        ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li {
                @include picItem('2n+1');
                &.branch {
                    width: 100%;
                    padding: 0;
                }
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
}

/* 字体大小调整 */
.navbar-module {
    .nav-title {
        font-size: 18px;
    }
}
[data-dpr="2"] .navbar-module {
    .nav-title {
        font-size: 36px;
    }
}
[data-dpr="3"] .navbar-module {
    .nav-title {
        font-size: 54px;
    }
}

@include moduleFontSize('.navbar-module');
</style>
