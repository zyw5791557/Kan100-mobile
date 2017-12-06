<script>
export default {
    data () {
        return {
            navLinks: [
                {
                    name: '首页',
                    routerName: 'HomeView'
                },
                {
                    name: '电影',
                    routerName: 'MovieView'
                },
                {
                    name: '电视剧',
                    routerName: 'TeleplayView'
                },
                {
                    name: '综艺',
                    routerName: 'ShowView'
                },
                {
                    name: '动漫',
                    routerName: 'AnimeView'
                },
                {
                    name: '明星',
                    routerName: 'StarView'
                },
                {
                    name: '搞笑',
                    routerName: 'FunnyView'
                },
                {
                    name: '资讯',
                    routerName: 'NewView'
                },
                {
                    name: '专题',
                    routerName: 'SpecialView'
                }
            ]
        }
    }
}
</script>

<template>
    <nav class="nav" v-once>
        <div class="content">
            <ul>
                <li v-for="(item, index) in navLinks" :key="index">
                    <router-link :to="{ name: item.routerName }">{{ item.name }}</router-link>
                </li>
            </ul>
        </div>
        <a class="moreLinks" href="">
            <i class="menu-more-icon"></i>
        </a>
    </nav>
</template>

<style lang="scss" scoped>
    .nav {
        padding: 0 .277778rem;
        height: .851852rem;
        display: flex;
        justify-content: space-between;
        .content {
            width: 100%;
        }
        ul {
            width: 100%;
            white-space: nowrap;
            overflow-x:scroll;
            overflow-y:hidden;
            &::-webkit-scrollbar {display:none}
            &:after {
                content: '';
                display: inline-block;
                width: .407407rem;
            }
            li {
                display:inline-block;
            }
            a {
                position: relative;
                display: block;
                color: #1a1a1a;
                line-height: .851852rem;
                margin-right: .592593rem;
                margin-right: .518519rem;
                box-sizing: border-box;
                font-size: 16px;
                &.router-link-exact-active {
                    color: #ff6a1f;
                    &:after {
                        content: '';
                        width: 100%;
                        height: .055556rem;
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        border-radius: 20px;
                        background-color: #ff6a1f;
                    }
                }
            }
        }
        .moreLinks {
            position: absolute;
            right: .277778rem;
            width: .925926rem;
            height: .851852rem;
            background: -webkit-linear-gradient(left, rgba(255,255,255,.7),rgba(255,255,255,1));
            .menu-more-icon {
                display: block;
                width: .925926rem;
                height: .851852rem;
                background: url('/static/images/moreLinks.png') no-repeat right center;
                background-size: .333333rem .305556rem;
            }
        }
    }

    [data-dpr="2"] .nav ul li a {
        font-size: 32px;
    }

    [data-dpr="3"] .nav ul li a {
        font-size: 48px;
    }
</style>
