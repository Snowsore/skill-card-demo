<template>
	<div class='page'>
		<router-view/>
	</div>
	<Footer/>
</template>

<script>

import Footer from '@/components/Footer.vue'

export default {
	components: {
		Footer
	}
}
</script>

<style>

body {
	margin: 0px;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	
}

.page {
	min-height: 100vh;

	display: grid;
	justify-items: center;
	align-items: center;

	background: #e4edfa;
}

</style>
