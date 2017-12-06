<script>
export default {
	name: 'app',
	components: {

	}
}

</script>

<template>
	<div id="app">
		<transition name="fade"
		            mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<style lang="scss">
@import url('./assets/style/common/normalize.css');
@import url('./assets/style/common/common.css');
.fade-enter-active,
.fade-leave-active {
	transition: all .3s ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}

// 自定义样式重置
html,
body,
#app {
	width: 100%;
	height: 100%;
}
h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
}
a {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
}
// H5 placeholder color
input::-webkit-input-placeholder { /* WebKit*/  
	color: #b3b3b3;  
}
input:-moz-placeholder, textarea:-moz-placeholder { /* Mozilla Firefox 4 to 18 */  
	color: #b3b3b3;  
}  
input::-moz-placeholder, textarea::-moz-placeholder { /* Mozilla Firefox 19+ */  
	color: #b3b3b3;  
}  
input:-ms-input-placeholder, textarea:-ms-input-placeholder { /* IE 10+ */  
	color: #b3b3b3;  
}
div {
    font-size: 12px; // 默认写上dpr为1的fontSize
}

[data-dpr="2"] div {
    font-size: 24px;
}

[data-dpr="3"] div {
    font-size: 36px;
}  
</style>