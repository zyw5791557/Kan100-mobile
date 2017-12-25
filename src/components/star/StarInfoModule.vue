<script>
export default {
    props: {
        data: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            loadData: this.data
        }
    }
}
</script>

<template>
    <section class="starDetail-info-module">
        <div class="info-text" v-html="loadData">

        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../styles/vars.scss';
.starDetail-info-module {
    padding: .37037rem $gap 0;
    .info-text {
        line-height: .611111rem;
    }
}

/* 字体大小设置 */
.starDetail-info-module {
    .info-text {
        font-size: 14px;
    }
}
[data-dpr="2"] .starDetail-info-module {
    .info-text {
        font-size: 28px;
    }
}
[data-dpr="3"] .starDetail-info-module {
    .info-text {
        font-size: 42px;
    }
}
</style>
<style lang="scss">
.starDetail-info-module {
    .info-text {
        p {
            margin-bottom: .648148rem;
        }
    }
}
</style>


