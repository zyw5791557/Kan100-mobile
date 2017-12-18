<script>
import BaseFooter from '../components/BaseFooter';
export default {
	components: {
		BaseFooter
	},
    data () {
        return {
            loadData: [],
            selectDate: '',
            picData: {},
            minHeight: '',
        }
    },
    filters: {
        weekReferFilter(val) {
            const weekRefer = {
                "1": "一",
                "2": "二",
                "3": "三",
                "4": "四",
                "5": "五",
                "6": "六",
                "7": "七"
            }
            return weekRefer[val];
        }
    },
    methods: {
        requestData() {
            this.getApi('animeTimeline','get')
            .then(res => {
                this.loadData = res.data.result;
                this.$nextTick(() => {
                    this.init();
                });
            });
        },
        init() {
            new Swiper('#timeline-swiper', {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto'
            }).slideTo(3, 1000, false); //切换到第四个slide，速度为1秒,不触发 transition 回调函数
            let len = this.loadData.length;
            for(let i = 0;i < len;i++) {
                if(this.loadData[i].is_today) {
                    this.selectDate = this.loadData[i].date;
                    this.picData = this.loadData[i].seasons;
                    break;
                }
            };
            
        },
        selectAction (item) {
            this.selectDate = item.date;
            this.picData = item.seasons;
        },
        picDataHandle(data) {
            let newData = [];
            for(let i = 0,len = data.length;i < len;i++) {
                let f = 1;
                newData.some(item => {
                    if(data[i].pub_time === item.pub_time) {
                        let subObj = {};
                        subObj["square_cover"] = data[i].square_cover;
                        subObj["title"] = data[i].title;
                        subObj["pub_index"] = data[i].pub_index;
                        item.subArr.push(subObj);
                        f = 0;
                        return;
                    }
                });
                if(f) {
                    let o = {};
                    let subArr = [];
                    let subObj = {};
                    subObj["square_cover"] = data[i].square_cover;
                    subObj["title"] = data[i].title;
                    subObj["pub_index"] = data[i].pub_index;
                    subArr.push(subObj);
                    data[i].subArr = subArr;
                    newData.push(data[i]);
                }
            }
            return newData;
        },
        minHeightComputed() {
            const dom = (document.documentElement.clientHeight) / (lib.flexible.rem);
            const header = 1.22222;
            const footer = 2.092593 + 1.62963;
            this.minHeight = dom - (header + footer) + 'rem';
        }
    },
    mounted () {
        this.requestData();
        this.minHeightComputed();
    }
}
</script>

<template>
    <div class="timeline-container">
        <div class="timeline">
            <header class="return-header">
                <a @click="$router.back()" class="return-icon"></a>
                <span class="return-title">追番表</span>
                <i></i>
            </header>
            <section class="timeline-list" :style="{ minHeight: minHeight }">
                <div class="swiper-container" id="timeline-swiper">
                    <ul class="swiper-wrapper">
                        <li v-for="(item,index) in loadData" :key="index" @click="selectAction(item)" class="swiper-slide timeline-day">
                            <span class="t-date">{{ item.date }}</span>
                            <span :class="{ active: selectDate === item.date }" class="t-week">{{ item.day_of_week | weekReferFilter }}</span>
                        </li>
                    </ul>
                </div>
                <div class="day-wrap">
                    <div v-for="(item,index) in picDataHandle(picData)" :key="index" class="day-body">
                        <div class="date-time">{{ item.pub_time }}</div>
                        <ul class="tl-list">
                            <li v-for="(subItem,subIndex) in item.subArr">
                                <router-link to="">
                                    <img src="void(0)" alt="" width="100%">
                                    <div class="tl-body">
                                        <span class="tl-title">{{ subItem.title }}</span>
                                        <span class="tl-label">{{ subItem.pub_index }}</span>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        <base-footer></base-footer>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';
@import '../styles/mixins.scss';
    .timeline {
        padding: 0 $gap;
        overflow: hidden;
    }
    .return-header {
        height: $headerHeight;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .return-title {
            font-weight: 600;
        }
        .return-icon {
            margin-left: .12963rem;
            width: .222222rem;
            height: .407407rem;
            background-image: url('/static/images/back.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    #timeline-swiper {
        padding: .166667rem 0;
        overflow: inherit;
        &:after {
            content: ' ';
            position: absolute;
            left: -$gap;
            bottom: 0;
            width: 120%;
            height: 1px;
            background-color: #d9d9d9;
        } 
        .swiper-slide {
            width: auto;
            min-width: .851852rem;
            padding: 0 .212963rem;
            span {
                display: block;
                text-align: center;
                color: $baseColor;
                &.t-week {
                    width: .703704rem;
                    margin: 0 auto;
                    height: .703704rem;
                    line-height: .703704rem;
                    border-radius: 50%;
                    &.active {
                        background-color: $orange;
                        color: #fff;
                    }
                }
            }
        }
    }
    .day-wrap {
        padding-top: .435185rem;
        .day-body {
            display: flex;
            padding: 0 .018519rem;
            .date-time {
                color: #999;
            }
            a {
                img {
                    width: 1.518519rem;
                    height: 1.518519rem;
                    border-radius: .092593rem;
                    background-color: #000;
                }
                display: flex;
                color: $baseColor;
            }
            .tl-body {
                padding-left: .296296rem;
                padding-top: .092593rem;
                span {
                    display: block;
                    text-align: left;
                    &.tl-label {
                        margin-top: .268519rem;
                        color: $orange;
                    }
                }
            }
        }
    }
    .tl-list {
        margin-left: .240741rem;
        li {
            margin-bottom: .407407rem;
        }
    }

    .timeline {
        .return-header {
            font-size: 18px;
        }
        .t-date,
        .date-time,
        .tl-label {
            font-size: 12px;
        }
        .t-week,
        .tl-title {
            font-size: 14px;
        }
    }
    [data-dpr="2"] .timeline {
        .return-header {
            font-size: 36px;
        }
        .t-date,
        .date-time,
        .tl-label {
            font-size: 24px;
        }
        .t-week,
        .tl-title {
            font-size: 28px;
        }
    }
    [data-dpr="3"] .timeline {
        .return-header {
            font-size: 54px;
        }
        .t-date,
        .date-time,
        .tl-label {
            font-size: 36px;
        }
        .t-week,
        .tl-title {
            font-size: 42px;
        }
    }
</style>
