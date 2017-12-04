<script>
import BaseHeader from '../components/BaseHeader';
import BaseNav from '../components/BaseNav';
import BaseBanner from '../components/BaseBanner';
import BaseHotModule from '../components/BaseHotModule';
export default {
	components: {
		BaseHeader,
		BaseNav,
		BaseBanner,
		BaseHotModule
	},
	data () {
		return {
			base_header_searchPlaceholderVal: '将军在上'
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
		<base-banner></base-banner>
		<base-hot-module></base-hot-module>
	</div>
</template>

<style scoped lang="scss">

</style>
