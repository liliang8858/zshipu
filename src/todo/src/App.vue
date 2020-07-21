<template>
  <div id="app" >
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
body{
	margin: 0;
	padding: 0;
}
#app{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: #F2F0F6;
		max-height: 930px;
		display: flex;
    display: -webkit-flex;
    align-items:center;
    justify-content:center;
}
</style>
