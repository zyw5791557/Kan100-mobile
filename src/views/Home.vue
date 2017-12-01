<script>
import BaseHeader from '../components/BaseHeader';
import BaseNav from '../components/BaseNav';
export default {
	components: {
		BaseHeader,
		BaseNav
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
	</div>
</template>

<style scoped lang="scss">

</style>
