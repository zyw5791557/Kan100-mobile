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
            wikiFold: true,
        }
    },
    computed: {
        foldText() {
            if(this.wikiFold) {
                return '展开';
            }else {
                return '收起';
            }
        }
    }
}
</script>

<template>
    <section class="wiki-module">
        <div class="wiki-card">
            <div class="wiki-mask">
                <div :style="`background-image:url(${loadData.img})`" class="img-mask"></div>
                <div class="color-mask"></div>
            </div>
            <img :src="loadData.img" :alt="loadData.title">
            <div class="card-info">
                <h1 class="c-title text-ellipsis">
                    {{ loadData.title }}
                    <span v-if="loadData.meta" class="c-meta">{{ loadData.meta }}</span>
                </h1>
                <p class="c-score">
                    <i>豆</i>
                    <span>{{ loadData.score }}</span>
                    分
                </p>
                <p class="c-type">{{ loadData.type }}</p>
                <p class="c-release">{{ loadData.release }}</p>
                <p class="c-time">{{ loadData.time }}</p>
                <a class="playBtn" href="javascript:void(0);">立即播放</a>
                <a class="shareBtn" href="javascript:void(0);">分享</a>
                <a @click="$emit('popup')" :class="loadData.default_source" class="sourceBtn" href="javascript:void(0);">
                    {{ loadData.default_source_title }}
                </a>
            </div>
        </div>
        <div class="wiki-des">
            <p :class="{ 'text-ellipsis-n': wikiFold }" class="wiki-text">{{ loadData.des }}</p>
            <a @click="wikiFold=!wikiFold" class="fold" href="javascript:void(0);">{{ foldText }}</a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';
@import '../styles/mixins.scss';
.wiki-module {
    border-bottom: $moduleBorder;
}
.wiki-des,
.wiki-card {
    padding: 0 $gap;
}
.wiki-card {
    position: relative;
    width: 100%;
    height: 4.592593rem;
    box-sizing: border-box;
    display: flex;
    padding-top: .462963rem;
    margin-bottom: 1.916667rem;
    img {
        width: 3.685185rem;
        height: 5.518519rem;
        border-radius: .111111rem;
        box-shadow: .066667rem .066667rem .266667rem rgba(0, 0, 0, 0.3);
    }
}
.wiki-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    .img-mask {
        position: absolute;
        width: 100%;
        height: 100%;
        filter: blur(100px);
        background-repeat: no-repeat;
        background-position: center -2.666667rem;
        background-size: cover;
    }
    .color-mask {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: .2;
    }
}
.card-info {
    flex: 1;
    position: relative;
    letter-spacing: 1px;
    margin-left: .398148rem;
    padding-top: .25rem;
    color: #fff;
    p {
        line-height: .533333rem;
    }
    .c-title {
        line-height: .666667rem;
        height: .666667rem;
        .c-meta {
            line-height: .666667rem;
            padding: .092593rem;
            background-color: $orange;
            border-radius: .092593rem;
            vertical-align: top;
        }
    }
    .c-score {
        line-height: .666667rem;
        i {
            display: inline-block;
            width: .333333rem;
            height: .333333rem;
            line-height: .333333rem;
            text-align: center;
            border-radius: 50%;
            background-color: #2aae33;
            vertical-align: baseline;
        }
        span { vertical-align: bottom; }
    }
    .playBtn {
        position: absolute;
        left: 0;
        bottom: -.5rem;
        width: 3.5rem;
        height: 1rem;
        line-height: 1rem;
        border-radius: .092593rem;
        text-align: center;
        background-color: $orange;
    }
    .shareBtn {
        text-indent: -1333.32rem;
        position: absolute;
        right: 0;
        bottom: .268519rem;
        width: .87037rem;
        height: .87037rem;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .5);
        background-image: url('/static/images/share.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: .472222rem .407407rem, 
    }
    .sourceBtn {
        position: absolute;
        left: 0;
        bottom: -1.25rem;
        color: $baseColor;
        padding: 0 .37037rem 0 .6rem;
        height: .518519rem;
        line-height: .518519rem;
        background-image: url('/static/images/source-icon.png');
        background-repeat: no-repeat;
        background-size: .533333rem 32.533333rem;
        &:after {
            content: ' ';
            position: absolute;
            right: 0;
            top: .10rem;
            width: .196419rem;
            height: .196419rem;
            transform: rotate(-135deg);
            border-left: .027778rem solid #999;
            border-top: .027778rem solid #999;
        }
        @include sourceIcon;
    }
}
.wiki-des {
    padding-bottom: .185185rem;
    .wiki-text {
        line-height: .611111rem;
        &.text-ellipsis-n {
            @include text-ellipsis-n(3);
        }
    }
    .fold {
        display: block;
        text-align: center;
        color: $orange;
        height: .611111rem;
        line-height: .611111rem;
    }
}

.wiki-module {
    .c-title {
        font-size: 18px;
    }
    .c-meta {
        font-size: 11px;
    }
    .c-score {
        font-size: 12px;
        i {
            font-size: 8px;
        }
        span {
            font-size: 21px;
        }
    }
    .c-type,
    .c-release,
    .c-time,
    .sourceBtn {
        font-size: 12px;
    }
    .playBtn {
        font-size: 17px;
    }
    .wiki-text {
        font-size: 14px;
    }
}
[data-dpr="2"] .wiki-module {
    .c-title {
        font-size: 36px;
    }
    .c-meta {
        font-size: 22px;
    }
    .c-score {
        font-size: 24px;
        i {
            font-size: 16px;
        }
        span {
            font-size: 42px;
        }
    }
    .c-type,
    .c-release,
    .c-time,
    .sourceBtn {
        font-size: 24px;
    }
    .playBtn {
        font-size: 34px;
    }
    .wiki-text {
        font-size: 28px;
    }
}
[data-dpr="3"] .wiki-module {
    .c-title {
        font-size: 54px;
    }
    .c-meta {
        font-size: 33px;
    }
    .c-score {
        font-size: 36px;
        i {
            font-size: 24px;
        }
        span {
            font-size: 63px;
        }
    }
    .c-type,
    .c-release,
    .c-time,
    .sourceBtn {
        font-size: 36px;
    }
    .playBtn {
        font-size: 51px;
    }
    .wiki-text {
        font-size: 42px;
    }
}
</style>
