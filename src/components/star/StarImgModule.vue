<script>
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            loadData: this.data
        }
    },
    methods: {
        loadMore () {
            this.$emit('loadMore','img');
            return;
        }
    }
}
</script>

<template>
    <section class="starDetail-img-module">
        <ul 
            v-infinite-scroll="loadMore"
            infinite-scroll-distance="10"
            infinite-scroll-immediate-check="false"
            class="m-pic-list">
            <li v-for="(item,index) in loadData" :key="index">
                <a :style="`background-image:url(${item})`" class="img-item" href="javascript:void(0);"></a>
            </li>
        </ul>
        <slot name="loading"></slot>
    </section>
</template>

<style lang="scss" scoped>
@import '../../styles/vars.scss';
@import '../../styles/mixins.scss';
.starDetail-img-module {
    padding: .287037rem $gap 0;
    .m-pic-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
            position: relative;
            width: 32.254901960784316%;
            @include propor(100%);
            margin-bottom: .148148rem;
            border-radius: $itemRadius;
        }
    }
    .img-item {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: $itemRadius;
    }
}
</style>

