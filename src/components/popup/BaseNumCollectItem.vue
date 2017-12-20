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
            new Swiper('#clips-swiper-module',{
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto',    
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
    <div class="popup-container">
        <div class="header-module">
            <h2>{{ loadData.type }}</h2>
            <a @click="$emit('close')" href="javascript:void(0);"></a>
        </div>
        <div id="clips-swiper-module" class="m-pic-list swiper-container">
            <ul class="swiper-wrapper">
                <li v-for="(item,index) in loadData.playlistData" :key="index" class="swiper-slide">
                    <a :href="item" class="collect-item">{{ index + 1 }}</a>
                </li>
            </ul>
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
        h2 {
            color: $baseColor;
            font-size: 18px;
            font-weight: 600;
        }
        a {
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
        padding: .287037rem $gap 0;
        max-height: 10.87037rem;
        .swiper-slide {
            display: flex;
            width: 1.203704rem;
            justify-content: flex-start;
            margin-bottom: .277778rem;
            a {
                display: block;
                width: 1.203704rem;
                height: 1.203704rem;
                line-height: 1.203704rem;
                background-color: $collectBallColor;
                border-radius: 50%;
                color: $baseColor;
                text-align: center;
            }
        }
    }
}

@include moduleFontSize('.popup-container');

</style>

