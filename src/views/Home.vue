<script>
import BaseHeader from '../components/BaseHeader';
import BaseNav from '../components/BaseNav';
import BaseFooter from '../components/BaseFooter';
/**
 * @data
 * base-header-searchPlaceholderVal 查询推荐初始值
 */
export default {
	components: {
		BaseHeader,
		BaseNav,
		BaseFooter
	},
	data () {
		return {
			base_header_searchPlaceholderVal: '将军在上',
		}
	},
	methods: {
		// base header search
		baseSearch(val) {
			console.log(val);
		}
	},
	mounted() {
		      
	}
}
</script>

<template>
	<div class="home">
		<base-header :searchPlaceholderVal="base_header_searchPlaceholderVal" @search="baseSearch"></base-header>
		<base-nav></base-nav>
		<transition name="fade"
		            mode="out-in">
			<router-view></router-view>
		</transition>
		<base-footer></base-footer>
	</div>
</template>

<style scoped lang="scss">

</style>
