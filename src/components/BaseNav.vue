<script>
export default {
    data () {
        return {
            navLinks: [
                {
                    name: '首页',
                    routerName: 'Home'
                },
                {
                    name: '电影',
                    routerName: 's'
                },
                {
                    name: '电视剧',
                    routerName: 's'
                },
                {
                    name: '综艺',
                    routerName: 's'
                },
                {
                    name: '动漫',
                    routerName: 's'
                },
                {
                    name: '明星',
                    routerName: 's'
                },
                {
                    name: '搞笑',
                    routerName: 's'
                },
                {
                    name: '搞笑',
                    routerName: 's'
                },
                {
                    name: '搞笑',
                    routerName: 's'
                },
                {
                    name: '搞笑',
                    routerName: 's'
                },
                {
                    name: '搞笑',
                    routerName: 's'
                },
                {
                    name: '搞笑',
                    routerName: 's'
                },
            ]
        }
    }
}
</script>

<template>
    <nav class="nav">
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
        .content {
            width: 100%;
        }
        ul {
            width:100%;
            display: inline;
            white-space: nowrap;
            overflow-x:scroll;
            float:left;
            overflow-y:hidden;
            &::-webkit-scrollbar {display:none}
            li {
                display:inline-block;
            }
            a {
                position: relative;
                display: block;
                color: #1a1a1a;
                line-height: .851852rem;
                letter-spacing: 4px;
                margin-right: .592593rem;
                box-sizing: border-box;
                font-size: 12px;
                &:hover {
                    text-decoration: none;
                }
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
            width: 1.277778rem;
            height: .851852rem;
            background: -webkit-linear-gradient(left, rgba(255,255,255,0),rgba(255,255,255,1));
            .menu-more-icon {
                display: block;
                width: 1.277778rem;
                height: .851852rem;
                background: url('/static/images/moreLinks.png') no-repeat right center;
                background-size: .333333rem .277778rem;
            }
        }
    }

    [data-dpr="2"] .nav ul li a {
        font-size: 30px;
    }

    [data-dpr="3"] .nav ul li a {
        font-size: 52px;
    }
</style>
