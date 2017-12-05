<script>
export default {
    data () {
        return {
            footerConfig: {
                crDes: 'CopyRight © 看100影视大全 KAN100.COM, All Rights Reserved.',
                crMain: '看100影视 版权所有 豫ICP备16000389号-1',
            }
        }
    },
    methods: {

    }
}
</script>

<template>
    <footer id="footer">
        <div class="logo">
            <img src="/static/images/footer-logo.png" alt="">
        </div>
        <div class="cr">
            <p class="cr-des">{{ footerConfig.crDes }}</p>
            <p class="cr-main">{{ footerConfig.crMain }}</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    #footer {
        width: 100%;
        background-color: #f5f5f5;
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 1.722222rem;
        }
        .cr {
            text-align: center;
            color: #ccc;
            height: 1.62963rem;
            .cr-des {
                margin-top: .37037rem;
                margin-bottom: .055556rem;
            }
        }
    }
    #footer {
        .cr {
            font-size: 12px;
        }
    }
    [data-dpr="2"] #footer {
        .cr {
            font-size: 24px;
        }
    }
    [data-dpr="3"] #footer {
        .cr {
            font-size: 36px;
        }
    }
</style>
