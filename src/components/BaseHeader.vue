<script>
export default {
    props: {
        searchPlaceholderVal: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            searchVal: ''
        }
    },
    methods: {
        search() {
            if(!this.searchVal) return;
            this.$emit('search', this.searchVal)
        }
    }
}
</script>

<template>
    <header id="header">
        <router-link :to="{ name: 'HomeView' }" class="logo">

        </router-link>
        <div class="base-search">
            <input type="search" :placeholder="searchPlaceholderVal" class="base-search-input" v-model="searchVal">
            <i class="base-search-icon" @click="search"></i>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';
    #header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 $gap;
        height: 1.222222rem;
        .logo {
            display: block;
            width: 3.046296rem;
            height: .592593rem;
            background-image: url('/static/images/logo.png');
            background-size: 100%;
        }
        .base-search {
            width: 4.203704rem;
            height: .722222rem;
            background-color: #f5f5f5;
            border-radius: .092593rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .base-search-input {
                width: 100%;
                height: 100%;
                border: 0;
                padding-left: .277778rem;
                background-color: transparent;
            }
            .base-search-icon {
                flex-shrink: 0;
                width: .314815rem;
                height: .314815rem;
                margin-right: .342593rem;
                background-image: url('/static/images/search-icon.png');
                background-size: 100% 100%;
            }
        }
    } 
</style>
