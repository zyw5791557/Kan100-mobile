<script>
import BaseFooter from '../components/BaseFooter';
export default {
	components: {
		BaseFooter
	},
    data () {
        return {
            loadData: []
        }
    },
    methods: {
        requestData() {
            this.getApi('animeTimeline','get')
            .then(res => {
                console.log(res);
            });
        },
        init() {
            let stat0 = new Swiper('#stat0-swiper', {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto'
            });
        }
    },
    mounted () {
        this.requestData();
        // this.init();
    }
}
</script>

<template>
    <div class="timeline-container">
        <div class="timeline">
            <header class="return-header">
                <router-link to="/" class="return-icon"></router-link>
                <span class="return-title">追番表</span>
                <i></i>
            </header>
            <section class="timeline-list">
                <div class="swiper-container" id="stat0-swiper">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <a href="javascript:void(0);"></a>
                        </li>
                    </ul>
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
        .timeline-list {
            padding-bottom: .555556rem;
            border-bottom: $moduleBorder;
        }
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
            width: .222222rem;
            height: .407407rem;
            background-image: url('/static/images/back.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    #stat0-swiper {
        position: relative;
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
        .swiper-wrapper {
            justify-content: space-around;
        }
        .swiper-slide {
            width: auto;
            a {
                display: block;
                height: .851852rem;
                line-height: .851852rem;
                box-sizing: border-box;
                color: $baseColor;
                &.active {
                    color: $orange;
                    border-bottom: .055556rem solid $orange;
                }
            }
        }
    }

    .timeline {
        .return-header {
            font-size: 18px;
        }
    }
    [data-dpr="2"] .timeline {
        .return-header {
            font-size: 36px;
        }
    }
    [data-dpr="3"] .timeline {
        .return-header {
            font-size: 54px;
        }
    }
</style>
