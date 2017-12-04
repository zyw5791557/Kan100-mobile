<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<template>
    <section id="base-hot-module">
        <div class="mainer">
            <div class="header-module">
                <h2>重磅热播</h2>
                <a href="">
                    <span>换一换</span>
                    <i></i>
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #base-hot-module {
        .mainer {
            padding: 0 .277778rem;
            margin-top: .138889rem;
            .header-module {
                display: flex;
                justify-content: space-between;
                a {
                    display: flex;
                    color: #ff6a1f;
                    i {
                        display: block;
                        width: .314815rem;
                        height: .314815rem;
                        border-radius: 50%;
                        margin-left: .111111rem;
                        background: url('/static/images/change.png') no-repeat center;
                    }
                }
            }
        }
    }
    
</style>
