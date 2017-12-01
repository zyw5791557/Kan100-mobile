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
                }
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
            width: 2000px;
            height: 100%;
            overflow-x: auto;
            justify-content: flex-start;
            align-items: center;
            li {
                float: left;
                height: 100%;
                text-align: left;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                margin-right: .592593rem;
                box-sizing: border-box;
            }
            a {
                color: #1a1a1a;
                letter-spacing: 4px;
                &.router-link-exact-active {
                    color: #ff6a1f;
                }
            }
        }
    }
</style>
