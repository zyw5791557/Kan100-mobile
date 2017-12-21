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
            sortFlag: true,
        }
    },
    methods: {
        init() {
            new Swiper('#clips-swiper-module',{
                direction: 'vertical',
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto',
                roundLengths : true, 
            });
        },
        sortCollect() {
            this.loadData.playlistData.reverse();
            this.sortFlag = !this.sortFlag;
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
    <div class="popup-container">
        <div class="header-module">
            <div class="flex-left">
                <h2>{{ loadData.type }}</h2>
                <div @click="sortCollect" class="sort-box">
                    <a href="javascript:void(0);">排序</a>
                    <span>
                        <i :class="{ active: sortFlag }" class="fa fa-sort-asc" aria-hidden="true"></i>
                        <i :class="{ active: !sortFlag }" class="fa fa-sort-desc" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <a @click="$emit('close')" class="close" href="javascript:void(0);"></a>
        </div>
        <div id="clips-swiper-module" class="m-pic-list swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a v-for="(item,index) in loadData.playlistData" :key="index" :href="item" class="collect-item">{{ sortFlag ? index + 1 : loadData.playlistData.length - index }}</a>
                </div>
            </div>
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
        .flex-left {
            display: flex;
            h2 {
                color: $baseColor;
                font-size: 18px;
                font-weight: 600;
            }
            .sort-box {
                display: flex;
                margin-left: .675926rem;
                a { color: $orange };
                span {
                    margin-left: .12037rem;
                    width: .12037rem;
                    position: relative;
                    i {
                        color: #b3b3b3;
                        &.active {
                            color: $orange;
                        }
                    }
                    .fa-sort-asc {
                        position: absolute;
                        left: 0;
                        top: .462963rem;
                    }
                    .fa-sort-desc {
                        position: absolute;
                        left: 0;
                        top: .537037rem;
                    }
                }
            }
        }
        .close {
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
        padding: .287037rem .555556rem 0;
        max-height: 10.87037rem;
        .swiper-slide {
            display: flex;
            flex-wrap: wrap;
        }
        a {
            margin-right: .712963rem;
            margin-bottom: .555556rem;
            width: 1.203704rem;
            height: 1.203704rem;
            line-height: 1.203704rem;
            background-color: $collectBallColor;
            border-radius: 50%;
            color: $baseColor;
            text-align: center;
            &:nth-child(5n) {
                margin-right: 0;
            }
        }
    }
}

@include moduleFontSize('.popup-container');

</style>

