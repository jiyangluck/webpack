<template>
	<div>
		<h1>hello webpack</h1>
		<img v-bind:src="url">
		<!-- <Focus></Focus> -->
	</div>
</template>

<script>
	import Focus from '../assets/images/focus.jpg';
	// import Focus from '../components/list.vue';
	export default {
		data(){
			return {
				url:Focus
			}
		}
	}
</script>

<style>
	img{
		width:500px;
	}
</style>

